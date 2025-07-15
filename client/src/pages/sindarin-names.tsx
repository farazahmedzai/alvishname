import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import NameDisplay from "@/components/name-display";
import Header from "@/components/header";
import Breadcrumbs from "@/components/breadcrumbs";
import SchemaManager from "@/components/schema-manager";
import Footer from "@/components/footer";
import { Link } from "wouter";
import type { ElvishName, GenerateNamesRequest } from "@shared/schema";

export default function SindarinNames() {
  const { toast } = useToast();
  
  // Update document metadata and schema for Sindarin page
  useEffect(() => {
    // Update title and meta description
    document.title = "Sindarin Name Generator - Free Grey-Elvish Names from LOTR";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Generate authentic Sindarin (Grey-elvish) names from Middle-earth. Free LOTR name generator with meanings and pronunciations. Perfect for D&D characters and fantasy writing.');
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://elvishnamegenerator.com/sindarin-names');
    }
    
    // Update breadcrumb schema instead of creating duplicate
    const breadcrumbSchema = document.querySelector('#breadcrumb-schema');
    if (breadcrumbSchema) {
      breadcrumbSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://elvishnamegenerator.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Sindarin Names",
            "item": "https://elvishnamegenerator.com/sindarin-names"
          }
        ]
      });
    }
    
    // Add page-specific WebPage schema (not WebApplication to avoid duplication)
    const existingSchema = document.querySelector('#sindarin-page-schema');
    if (!existingSchema) {
      const schemaScript = document.createElement('script');
      schemaScript.id = 'sindarin-page-schema';
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Sindarin Name Generator",
        "description": "Generate authentic Sindarin (Grey-elvish) names from Middle-earth with meanings and pronunciations",
        "url": "https://elvishnamegenerator.com/sindarin-names",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Elvish Name Generator",
          "url": "https://elvishnamegenerator.com"
        }
      });
      document.head.appendChild(schemaScript);
    }
    
    // Cleanup function to remove schema when component unmounts
    return () => {
      const schema = document.querySelector('#sindarin-page-schema');
      if (schema) {
        schema.remove();
      }
    };
  }, []);
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
        title: "Sindarin Names Generated!",
        description: `Generated ${data.names.length} authentic Sindarin names.`,
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
    <div className="min-h-screen bg-elvish-dark text-elvish-light font-inter antialiased">
      <div className="fixed inset-0 bg-gradient-to-br from-elvish-dark via-elvish-primary/20 to-elvish-secondary/20 -z-10"></div>
      
      <SchemaManager 
        pageType="sindarin" 
        title="Sindarin Name Generator - Free Grey-Elvish Names from LOTR"
        description="Generate authentic Sindarin (Grey-elvish) names from Middle-earth. Free LOTR name generator with meanings and pronunciations. Perfect for D&D characters and fantasy writing."
      />
      
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-elvish-accent hover:text-elvish-secondary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Main Generator
          </Link>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-elvish-light mb-6 animate-fadeIn">
            Sindarin Name Generator
          </h1>
          <p className="text-xl md:text-2xl text-elvish-gray mb-8 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            Generate Authentic Grey-Elvish Names from Middle-earth
          </p>
          <p className="text-lg text-elvish-gray max-w-2xl mx-auto mb-12 animate-fadeIn" style={{animationDelay: '0.4s'}}>
            Sindarin, the language of the Grey-elves, was the most commonly spoken Elvish tongue in Middle-earth. Create names that capture the flowing, musical quality of this beautiful language.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-elvish-surface/60 backdrop-blur-md rounded-2xl border border-elvish-accent/20 shadow-2xl animate-glow">
            <CardContent className="p-8">
              <h2 className="font-cinzel text-3xl font-semibold text-center mb-8 text-elvish-light">
                Generate Sindarin Names
              </h2>
              
              {/* Generator Controls */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
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
                  {generateNamesMutation.isPending ? "Generating..." : "Generate Sindarin Names"}
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

      {/* About Sindarin Section */}
      <section className="py-16 bg-elvish-surface/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-3xl font-semibold text-center mb-12 text-elvish-light">
            About Sindarin Names
          </h2>
          
          <div className="space-y-8">
            <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
              <CardContent className="p-8">
                <h3 className="font-cinzel text-2xl font-medium text-elvish-accent mb-4">The Grey-Elvish Tongue</h3>
                <p className="text-elvish-gray leading-relaxed mb-4">
                  Sindarin evolved from Common Eldarin and became the daily language of the Sindar, the Grey-elves who remained in Middle-earth. Unlike Quenya, which was considered formal and ceremonial, Sindarin was the living language of everyday Elvish life during the Third Age.
                </p>
                <p className="text-elvish-gray leading-relaxed">
                  The language features complex consonant mutations, soft flowing sounds, and a distinctive Welsh-inspired phonology. Sindarin names often reflect the Elves' deep connection to nature and their reverence for light, stars, and growing things.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
              <CardContent className="p-8">
                <h3 className="font-cinzel text-2xl font-medium text-elvish-accent mb-4">Sindarin Naming Patterns</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-elvish-light mb-3">Common Prefixes:</h4>
                    <ul className="text-elvish-gray space-y-2">
                      <li><span className="text-elvish-accent font-medium">Gal-</span> = Tree, wood</li>
                      <li><span className="text-elvish-accent font-medium">Gil-</span> = Star, bright light</li>
                      <li><span className="text-elvish-accent font-medium">Mith-</span> = Grey, mist</li>
                      <li><span className="text-elvish-accent font-medium">Cel-</span> = Stream, water</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-elvish-light mb-3">Common Suffixes:</h4>
                    <ul className="text-elvish-gray space-y-2">
                      <li><span className="text-elvish-accent font-medium">-wen</span> = Maiden, lady</li>
                      <li><span className="text-elvish-accent font-medium">-ion</span> = Son of</li>
                      <li><span className="text-elvish-accent font-medium">-las</span> = Leaf, foliage</li>
                      <li><span className="text-elvish-accent font-medium">-dir</span> = Man, lord</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}