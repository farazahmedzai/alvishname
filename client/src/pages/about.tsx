import { useEffect } from "react";
import Header from "@/components/header";
import Breadcrumbs from "@/components/breadcrumbs";
import SchemaManager from "@/components/schema-manager";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, BookOpen, Users, Shield } from "lucide-react";

export default function About() {
  useEffect(() => {
    // Update page metadata
    document.title = "About Us - Elvish Name Generator | Our Mission & Story";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about our mission to preserve Tolkien\'s linguistic legacy through authentic Elvish name generation. Discover our commitment to accuracy and cultural respect.');
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://elvishnamegenerator.com/about');
    }
    
    // Update breadcrumb schema
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
            "name": "About Us",
            "item": "https://elvishnamegenerator.com/about"
          }
        ]
      });
    }
    
    // Add page-specific WebPage schema
    const existingSchema = document.querySelector('#about-page-schema');
    if (!existingSchema) {
      const schemaScript = document.createElement('script');
      schemaScript.id = 'about-page-schema';
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "About Us - Elvish Name Generator",
        "description": "Learn about our mission to preserve Tolkien's linguistic legacy through authentic Elvish name generation",
        "url": "https://elvishnamegenerator.com/about",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Elvish Name Generator",
          "url": "https://elvishnamegenerator.com"
        }
      });
      document.head.appendChild(schemaScript);
    }
    
    // Cleanup function
    return () => {
      const aboutSchema = document.querySelector('#about-page-schema');
      if (aboutSchema) aboutSchema.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-elvish-dark via-elvish-surface to-elvish-dark">
      <SchemaManager 
        pageType="about" 
        title="About Us - Elvish Name Generator | Our Mission & Story"
        description="Learn about our mission to preserve Tolkien's linguistic legacy through authentic Elvish name generation. Discover our commitment to accuracy and cultural respect."
      />
      
      <Header />
      <Breadcrumbs />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 text-elvish-light">
              About Elvish Name Generator
            </h1>
            <p className="text-xl text-elvish-gray max-w-3xl mx-auto leading-relaxed">
              Preserving the linguistic beauty of Tolkien's Middle-earth through authentic name generation
            </p>
          </div>

          {/* Mission Section */}
          <Card className="mb-12 bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Sparkles className="w-8 h-8 text-elvish-accent mr-4" />
                <h2 className="font-cinzel text-2xl font-semibold text-elvish-light">Our Mission</h2>
              </div>
              <p className="text-elvish-gray leading-relaxed mb-4">
                Our mission is to honor J.R.R. Tolkien's extraordinary linguistic work by providing authentic Elvish names 
                that follow the intricate rules and patterns he established for Sindarin and Quenya languages. We believe 
                that names carry profound meaning and cultural significance, especially in the rich world of Middle-earth.
              </p>
              <p className="text-elvish-gray leading-relaxed">
                Every name in our database has been carefully researched and constructed using authentic Elvish linguistic 
                elements, ensuring that fantasy enthusiasts, gamers, and writers have access to names that truly reflect 
                the beauty and depth of Tolkien's created languages.
              </p>
            </CardContent>
          </Card>

          {/* Our Story Section */}
          <Card className="mb-12 bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-elvish-accent mr-4" />
                <h2 className="font-cinzel text-2xl font-semibold text-elvish-light">Our Story</h2>
              </div>
              <p className="text-elvish-gray leading-relaxed mb-4">
                Founded by passionate Tolkien enthusiasts and linguistics scholars, Elvish Name Generator emerged from 
                a simple need: the desire for authentic Elvish names that respected the depth and complexity of Tolkien's 
                linguistic creation. We noticed that many existing name generators relied on simple randomization without 
                considering the sophisticated grammatical and morphological rules that make Elvish languages so special.
              </p>
              <p className="text-elvish-gray leading-relaxed">
                Our team spent countless hours studying Tolkien's published works, linguistic notes, and scholarly research 
                to ensure our name generation follows authentic patterns. We collaborated with Elvish language experts and 
                Middle-earth scholars to create a database that honors both the letter and spirit of Tolkien's vision.
              </p>
            </CardContent>
          </Card>

          {/* Values Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-elvish-accent mr-3" />
                  <h3 className="font-cinzel text-xl font-semibold text-elvish-light">Authenticity</h3>
                </div>
                <p className="text-elvish-gray leading-relaxed">
                  We are committed to linguistic accuracy and cultural respect. Every name follows established Elvish 
                  morphological patterns and carries meaningful translations rooted in Tolkien's linguistic framework.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-elvish-accent mr-3" />
                  <h3 className="font-cinzel text-xl font-semibold text-elvish-light">Community</h3>
                </div>
                <p className="text-elvish-gray leading-relaxed">
                  We serve a diverse community of fantasy enthusiasts, D&D players, writers, and Tolkien fans. 
                  Our goal is to provide tools that enhance creativity while honoring the source material.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What Makes Us Different */}
          <Card className="mb-12 bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
            <CardContent className="p-8">
              <h2 className="font-cinzel text-2xl font-semibold text-elvish-light mb-6">What Makes Us Different</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-elvish-light mb-3">Linguistic Accuracy</h3>
                  <p className="text-elvish-gray text-sm leading-relaxed">
                    Our names follow authentic Elvish morphological rules, including proper vowel harmony, 
                    consonant mutations, and semantic patterns established by Tolkien.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-elvish-light mb-3">Cultural Context</h3>
                  <p className="text-elvish-gray text-sm leading-relaxed">
                    Each name comes with cultural context, pronunciation guides, and meaningful translations 
                    that respect the depth of Middle-earth's societies.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-elvish-light mb-3">Scholarly Research</h3>
                  <p className="text-elvish-gray text-sm leading-relaxed">
                    Our database is built on extensive research of Tolkien's published works, linguistic 
                    notes, and scholarly interpretations by recognized Elvish language experts.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-elvish-light mb-3">Educational Value</h3>
                  <p className="text-elvish-gray text-sm leading-relaxed">
                    Beyond name generation, we provide educational content about Elvish languages, 
                    pronunciation, and the rich linguistic heritage of Middle-earth.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
            <CardContent className="p-8 text-center">
              <h2 className="font-cinzel text-2xl font-semibold text-elvish-light mb-4">Get in Touch</h2>
              <p className="text-elvish-gray leading-relaxed mb-6">
                We welcome feedback, suggestions, and questions from our community. Whether you're a scholar, 
                gamer, writer, or simply someone who appreciates the beauty of Elvish languages, we'd love to hear from you.
              </p>
              <p className="text-elvish-gray">
                For inquiries, feedback, or collaboration opportunities, please reach out through our contact channels. 
                We're always eager to connect with fellow enthusiasts of Tolkien's linguistic legacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}