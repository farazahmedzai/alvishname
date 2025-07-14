import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import NameDisplay from "./name-display";
import type { ElvishName, GenerateNamesRequest } from "@shared/schema";

export default function Generator() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<GenerateNamesRequest>({
    gender: "any",
    language: "sindarin",
    category: "traditional",
    count: 6,
  });
  const [generatedNames, setGeneratedNames] = useState<ElvishName[]>([]);

  const generateNamesMutation = useMutation({
    mutationFn: async (data: GenerateNamesRequest) => {
      const response = await apiRequest("POST", "/api/generate-names", data);
      return await response.json();
    },
    onSuccess: (data) => {
      setGeneratedNames(data.names);
      toast({
        title: "Names Generated!",
        description: `Generated ${data.names.length} authentic Elvish names.`,
      });
    },
    onError: (error) => {
      console.error("Error generating names:", error);
      toast({
        title: "Error",
        description: "Failed to generate names. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleGenerate = () => {
    generateNamesMutation.mutate(formData);
  };

  const updateFormData = (field: keyof GenerateNamesRequest, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="generator" className="py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-elvish-surface/60 backdrop-blur-md rounded-2xl border border-elvish-accent/20 shadow-2xl animate-glow">
          <CardContent className="p-8">
            <h2 className="font-cinzel text-3xl font-semibold text-center mb-8 text-elvish-light">
              Generate Your Perfect Elvish Name
            </h2>
            
            {/* Generator Controls */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Gender Selection */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-elvish-gray">Gender</label>
                <Select 
                  value={formData.gender} 
                  onValueChange={(value) => updateFormData("gender", value)}
                >
                  <SelectTrigger className="w-full bg-elvish-dark/50 border-elvish-accent/30 text-elvish-light focus:ring-elvish-accent/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-elvish-surface border-elvish-accent/30">
                    <SelectItem value="any" className="text-elvish-light hover:bg-elvish-accent/20">Any</SelectItem>
                    <SelectItem value="male" className="text-elvish-light hover:bg-elvish-accent/20">Male</SelectItem>
                    <SelectItem value="female" className="text-elvish-light hover:bg-elvish-accent/20">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Language Selection */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-elvish-gray">Language</label>
                <Select 
                  value={formData.language} 
                  onValueChange={(value) => updateFormData("language", value)}
                >
                  <SelectTrigger className="w-full bg-elvish-dark/50 border-elvish-accent/30 text-elvish-light focus:ring-elvish-accent/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-elvish-surface border-elvish-accent/30">
                    <SelectItem value="sindarin" className="text-elvish-light hover:bg-elvish-accent/20">Sindarin</SelectItem>
                    <SelectItem value="quenya" className="text-elvish-light hover:bg-elvish-accent/20">Quenya</SelectItem>
                    <SelectItem value="general" className="text-elvish-light hover:bg-elvish-accent/20">General Fantasy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Name Category */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-elvish-gray">Category</label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => updateFormData("category", value)}
                >
                  <SelectTrigger className="w-full bg-elvish-dark/50 border-elvish-accent/30 text-elvish-light focus:ring-elvish-accent/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-elvish-surface border-elvish-accent/30">
                    <SelectItem value="traditional" className="text-elvish-light hover:bg-elvish-accent/20">Traditional</SelectItem>
                    <SelectItem value="nature" className="text-elvish-light hover:bg-elvish-accent/20">Nature-themed</SelectItem>
                    <SelectItem value="warrior" className="text-elvish-light hover:bg-elvish-accent/20">Warrior</SelectItem>
                    <SelectItem value="noble" className="text-elvish-light hover:bg-elvish-accent/20">Noble</SelectItem>
                    <SelectItem value="mystical" className="text-elvish-light hover:bg-elvish-accent/20">Mystical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Generate Button */}
            <div className="text-center mb-8">
              <Button 
                onClick={handleGenerate}
                disabled={generateNamesMutation.isPending}
                className="px-8 py-4 bg-gradient-to-r from-elvish-accent to-elvish-secondary text-elvish-dark font-semibold rounded-lg hover:from-elvish-accent/90 hover:to-elvish-secondary/90 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                {generateNamesMutation.isPending ? "Generating..." : "Generate Elvish Names"}
              </Button>
            </div>
            
            {/* Generated Names Display */}
            {generatedNames.length > 0 && (
              <NameDisplay names={generatedNames} />
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
