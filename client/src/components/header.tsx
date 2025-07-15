import { Menu, Home, Sparkles, Book, Info, HelpCircle, Shield } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { 
      label: "Home", 
      href: "/", 
      icon: Home,
      onClick: null,
      description: "Free Elvish Name Generator"
    },
    { 
      label: "Generate Names", 
      href: location === "/" ? null : "/", 
      icon: Sparkles,
      onClick: location === "/" ? () => scrollToSection('generator') : null,
      description: "Generate authentic Elvish names"
    },
    { 
      label: "Sindarin Names", 
      href: "/sindarin-names", 
      icon: Book,
      onClick: null,
      description: "Grey-elvish names from Middle-earth"
    },
    { 
      label: "Quenya Names", 
      href: "/quenya-names", 
      icon: Book,
      onClick: null,
      description: "High Elvish names from Valinor"
    },
    { 
      label: "About", 
      href: "/about", 
      icon: Info,
      onClick: null,
      description: "Our mission & Tolkien's legacy"
    },
    { 
      label: "Guide", 
      href: location === "/" ? null : "/", 
      icon: Book,
      onClick: location === "/" ? () => scrollToSection('guide') : null,
      description: "Pronunciation & usage guide"
    },
    { 
      label: "FAQ", 
      href: location === "/" ? null : "/", 
      icon: HelpCircle,
      onClick: location === "/" ? () => scrollToSection('faq') : null,
      description: "Common questions answered"
    },
    { 
      label: "Privacy", 
      href: "/privacy", 
      icon: Shield,
      onClick: null,
      description: "Privacy policy & data protection"
    }
  ];

  return (
    <header className="relative z-50 bg-elvish-surface/80 backdrop-blur-md border-b border-elvish-accent/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <a 
              href="/" 
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              aria-label="Elvish Name Generator - Return to homepage"
            >
              <svg className="w-6 h-6 text-elvish-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="font-cinzel text-xl font-semibold text-elvish-light">Elvish Names</span>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-6">
            {navigationItems.slice(0, 7).map((item) => {
              const isActive = location === item.href;
              const Icon = item.icon;
              
              if (item.href) {
                return (
                  <a 
                    key={item.label}
                    href={item.href}
                    className={`flex items-center space-x-1 transition-colors ${
                      isActive 
                        ? 'text-elvish-accent font-medium' 
                        : 'text-elvish-gray hover:text-elvish-accent'
                    }`}
                    aria-label={item.description}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                );
              } else {
                return (
                  <button 
                    key={item.label}
                    onClick={item.onClick}
                    className="flex items-center space-x-1 text-elvish-gray hover:text-elvish-accent transition-colors"
                    aria-label={item.description}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    <span>{item.label}</span>
                  </button>
                );
              }
            })}
          </div>
          
          <button 
            className="md:hidden text-elvish-gray hover:text-elvish-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-elvish-surface/90 backdrop-blur-md border-t border-elvish-accent/20 mt-2 rounded-lg">
            <div className="px-4 py-3 space-y-3">
              {navigationItems.map((item) => {
                const isActive = location === item.href;
                const Icon = item.icon;
                
                if (item.href) {
                  return (
                    <a 
                      key={item.label}
                      href={item.href}
                      className={`flex items-center space-x-2 py-2 px-3 rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-elvish-accent/20 text-elvish-accent font-medium' 
                          : 'text-elvish-gray hover:text-elvish-accent hover:bg-elvish-accent/10'
                      }`}
                      aria-label={item.description}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                      <span>{item.label}</span>
                    </a>
                  );
                } else {
                  return (
                    <button 
                      key={item.label}
                      onClick={item.onClick}
                      className="flex items-center space-x-2 py-2 px-3 rounded-lg text-elvish-gray hover:text-elvish-accent hover:bg-elvish-accent/10 transition-colors w-full text-left"
                      aria-label={item.description}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                      <span>{item.label}</span>
                    </button>
                  );
                }
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}