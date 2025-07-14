import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="relative z-50 bg-elvish-surface/80 backdrop-blur-md border-b border-elvish-accent/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-elvish-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="font-cinzel text-xl font-semibold text-elvish-light">Elvish Names</span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('generator')}
              className="text-elvish-gray hover:text-elvish-accent transition-colors"
            >
              Generator
            </button>
            <button 
              onClick={() => scrollToSection('guide')}
              className="text-elvish-gray hover:text-elvish-accent transition-colors"
            >
              Guide
            </button>
            <button 
              onClick={() => scrollToSection('names')}
              className="text-elvish-gray hover:text-elvish-accent transition-colors"
            >
              Popular Names
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-elvish-gray hover:text-elvish-accent transition-colors"
            >
              FAQ
            </button>
          </div>
          
          <button 
            className="md:hidden text-elvish-gray hover:text-elvish-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-elvish-surface/90 backdrop-blur-md border-t border-elvish-accent/20 mt-2 rounded-lg">
            <div className="px-4 py-2 space-y-2">
              <button 
                onClick={() => scrollToSection('generator')}
                className="block w-full text-left text-elvish-gray hover:text-elvish-accent transition-colors py-2"
              >
                Generator
              </button>
              <button 
                onClick={() => scrollToSection('guide')}
                className="block w-full text-left text-elvish-gray hover:text-elvish-accent transition-colors py-2"
              >
                Guide
              </button>
              <button 
                onClick={() => scrollToSection('names')}
                className="block w-full text-left text-elvish-gray hover:text-elvish-accent transition-colors py-2"
              >
                Popular Names
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left text-elvish-gray hover:text-elvish-accent transition-colors py-2"
              >
                FAQ
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
