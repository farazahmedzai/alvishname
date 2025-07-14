import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateNamesSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Generate Elvish names endpoint
  app.post("/api/generate-names", async (req, res) => {
    try {
      const validated = generateNamesSchema.parse(req.body);
      const { gender, language, category, count } = validated;

      // Get names matching the criteria
      const matchingNames = await storage.getElvishNamesByFilters(gender, language, category);
      
      if (matchingNames.length === 0) {
        // Fallback to traditional names if no matches found
        const fallbackNames = await storage.getElvishNamesByFilters("any", language, "traditional");
        if (fallbackNames.length === 0) {
          // Final fallback to any Sindarin traditional names
          const finalFallback = await storage.getElvishNamesByFilters("any", "sindarin", "traditional");
          const shuffled = finalFallback.sort(() => 0.5 - Math.random());
          const selected = shuffled.slice(0, count);
          
          await storage.createNameGenerationRequest({
            gender,
            language,
            category,
            generatedNames: selected,
          });
          
          return res.json({ names: selected });
        }
        
        const shuffled = fallbackNames.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, count);
        
        await storage.createNameGenerationRequest({
          gender,
          language,
          category,
          generatedNames: selected,
        });
        
        return res.json({ names: selected });
      }

      // Shuffle and select random names
      const shuffled = matchingNames.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, Math.min(count, matchingNames.length));

      // Store the generation request
      await storage.createNameGenerationRequest({
        gender,
        language,
        category,
        generatedNames: selected,
      });

      res.json({ names: selected });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Invalid request parameters",
          details: error.errors 
        });
      }
      
      console.error("Error generating names:", error);
      res.status(500).json({ error: "Failed to generate names" });
    }
  });

  // Get all available names endpoint
  app.get("/api/names", async (req, res) => {
    try {
      const names = await storage.getElvishNames();
      res.json({ names });
    } catch (error) {
      console.error("Error fetching names:", error);
      res.status(500).json({ error: "Failed to fetch names" });
    }
  });

  // Get names by filters endpoint
  app.get("/api/names/filter", async (req, res) => {
    try {
      const { gender = "any", language = "sindarin", category = "traditional" } = req.query;
      
      if (typeof gender !== "string" || typeof language !== "string" || typeof category !== "string") {
        return res.status(400).json({ error: "Invalid query parameters" });
      }

      const names = await storage.getElvishNamesByFilters(gender, language, category);
      res.json({ names });
    } catch (error) {
      console.error("Error filtering names:", error);
      res.status(500).json({ error: "Failed to filter names" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
