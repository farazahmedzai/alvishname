import Header from "@/components/header";
import Generator from "@/components/generator";
import EducationalContent from "@/components/educational-content";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-elvish-dark text-elvish-light font-inter antialiased">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-elvish-dark via-elvish-primary/20 to-elvish-secondary/20 -z-10"></div>
      
      <Header />
      
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
