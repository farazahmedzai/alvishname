import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import NameDisplay from "@/components/name-display";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Link } from "wouter";
import type { ElvishName, GenerateNamesRequest } from "@shared/schema";

export default function QuenyaNames() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<GenerateNamesRequest>({
    gender: "any",
    language: "quenya",
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
        title: "Quenya Names Generated!",
        description: `Generated ${data.names.length} authentic Quenya names.`,
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
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-elvish-accent hover:text-elvish-secondary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Main Generator
          </Link>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-elvish-light mb-6 animate-fadeIn">
            Quenya Name Generator
          </h1>
          <p className="text-xl md:text-2xl text-elvish-gray mb-8 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            Generate High Elvish Names from Valinor
          </p>
          <p className="text-lg text-elvish-gray max-w-2xl mx-auto mb-12 animate-fadeIn" style={{animationDelay: '0.4s'}}>
            Quenya, the ancient "High Elvish" language, was spoken by the Noldor and revered as the language of lore, ceremony, and the Undying Lands. Create names that echo the grandeur of the Elder Days.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-elvish-surface/60 backdrop-blur-md rounded-2xl border border-elvish-accent/20 shadow-2xl animate-glow">
            <CardContent className="p-8">
              <h2 className="font-cinzel text-3xl font-semibold text-center mb-8 text-elvish-light">
                Generate Quenya Names
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
                  {generateNamesMutation.isPending ? "Generating..." : "Generate Quenya Names"}
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

      {/* About Quenya Section */}
      <section className="py-16 bg-elvish-surface/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-3xl font-semibold text-center mb-12 text-elvish-light">
            About Quenya Names
          </h2>
          
          <div className="space-y-8">
            <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
              <CardContent className="p-8">
                <h3 className="font-cinzel text-2xl font-medium text-elvish-accent mb-4">The High Elvish Language</h3>
                <p className="text-elvish-gray leading-relaxed mb-4">
                  Quenya was the ancient language of the Eldar, preserved in its highest form by the Noldor who dwelt in Valinor. Known as the "High Elvish," it was primarily used for formal occasions, ceremonies, and the composition of lore and song.
                </p>
                <p className="text-elvish-gray leading-relaxed">
                  With its Finnish-inspired structure and complex agglutinative grammar, Quenya names often carry deep meaning and formal grandeur. The language represents the pinnacle of Elvish linguistic evolution and cultural sophistication.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
              <CardContent className="p-8">
                <h3 className="font-cinzel text-2xl font-medium text-elvish-accent mb-4">Quenya Naming Elements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-elvish-light mb-3">Noble Elements:</h4>
                    <ul className="text-elvish-gray space-y-2">
                      <li><span className="text-elvish-accent font-medium">Fin-</span> = Hair, person</li>
                      <li><span className="text-elvish-accent font-medium">Ar-</span> = Noble, royal</li>
                      <li><span className="text-elvish-accent font-medium">Tar-</span> = High, lofty</li>
                      <li><span className="text-elvish-accent font-medium">El-</span> = Star, elf</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-elvish-light mb-3">Mystical Elements:</h4>
                    <ul className="text-elvish-gray space-y-2">
                      <li><span className="text-elvish-accent font-medium">-iel</span> = Daughter of</li>
                      <li><span className="text-elvish-accent font-medium">-ion</span> = Son of</li>
                      <li><span className="text-elvish-accent font-medium">-wen</span> = Maiden</li>
                      <li><span className="text-elvish-accent font-medium">-dur</span> = Dark, mysterious</li>
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