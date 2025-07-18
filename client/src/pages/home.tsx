import { useEffect } from "react";
import Header from "@/components/header";
import Breadcrumbs from "@/components/breadcrumbs";
import SchemaManager from "@/components/schema-manager";
import Generator from "@/components/generator";
import EducationalContent from "@/components/educational-content";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  // Reset document metadata and schema for home page
  useEffect(() => {
    // Reset title and meta description to default
    document.title = "Elvish Name Generator - Free LOTR & Fantasy Elf Names with Meanings";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Generate authentic Elvish names inspired by Tolkien\'s LOTR. Free Sindarin & Quenya elf name generator with meanings. Perfect for D&D, fantasy writing & gaming.');
    }
    
    // Reset canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://elvishnamegenerator.com');
    }
    
    // Remove any page-specific schema markup and reset breadcrumbs
    const sindarinSchema = document.querySelector('#sindarin-page-schema');
    const quenyaSchema = document.querySelector('#quenya-page-schema');
    const aboutSchema = document.querySelector('#about-page-schema');
    const privacySchema = document.querySelector('#privacy-page-schema');
    if (sindarinSchema) sindarinSchema.remove();
    if (quenyaSchema) quenyaSchema.remove();
    if (aboutSchema) aboutSchema.remove();
    if (privacySchema) privacySchema.remove();
    
    // Reset breadcrumb schema to home page
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
            "name": "Elvish Name Generator",
            "item": "https://elvishnamegenerator.com#generator"
          }
        ]
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-elvish-dark text-elvish-light font-inter antialiased">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-elvish-dark via-elvish-primary/20 to-elvish-secondary/20 -z-10"></div>
      
      <SchemaManager 
        pageType="home" 
        title="Elvish Name Generator - Free LOTR & Fantasy Elf Names with Meanings"
        description="Generate authentic Elvish names inspired by Tolkien's LOTR. Free Sindarin & Quenya elf name generator with meanings. Perfect for D&D, fantasy writing & gaming."
      />
      
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-elvish-accent/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-elvish-secondary/20 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-elvish-light mb-6 animate-fadeIn">
            Elvish Name Generator
          </h1>
          <p className="text-xl md:text-2xl text-elvish-gray mb-8 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            Free LOTR & Fantasy Elf Names with Meanings
          </p>
          <p className="text-lg text-elvish-gray max-w-2xl mx-auto mb-12 animate-fadeIn" style={{animationDelay: '0.4s'}}>
            Create authentic Elvish names inspired by Tolkien's languages. Perfect for D&D characters, fantasy writing, and gaming adventures.
          </p>
        </div>
      </section>

      <Generator />
      <EducationalContent />
      <FAQSection />
      <Footer />
    </div>
  );
}
