import { Card } from "@/components/ui/card";

export default function Footer() {
  return (
    <footer className="bg-elvish-surface/80 backdrop-blur-md border-t border-elvish-accent/20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-6 h-6 text-elvish-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="font-cinzel text-xl font-semibold text-elvish-light">Elvish Names</span>
            </div>
            <p className="text-elvish-gray leading-relaxed mb-4">
              Create authentic Elvish names inspired by Tolkien's linguistic masterwork. Perfect for fantasy gaming, creative writing, and exploring the rich cultural heritage of Middle-earth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-elvish-gray hover:text-elvish-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className="text-elvish-gray hover:text-elvish-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className="text-elvish-gray hover:text-elvish-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-cinzel text-lg font-medium text-elvish-light mb-4">Generators</h4>
            <ul className="space-y-2 text-elvish-gray">
              <li><a href="#" className="hover:text-elvish-accent transition-colors">Sindarin Names</a></li>
              <li><a href="#" className="hover:text-elvish-accent transition-colors">Quenya Names</a></li>
              <li><a href="#" className="hover:text-elvish-accent transition-colors">D&D Elf Names</a></li>
              <li><a href="#" className="hover:text-elvish-accent transition-colors">Fantasy Names</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-cinzel text-lg font-medium text-elvish-light mb-4">Resources</h4>
            <ul className="space-y-2 text-elvish-gray">
              <li><a href="#" className="hover:text-elvish-accent transition-colors">Name Meanings</a></li>
              <li><a href="#" className="hover:text-elvish-accent transition-colors">Pronunciation Guide</a></li>
              <li><a href="#" className="hover:text-elvish-accent transition-colors">Naming Conventions</a></li>
              <li><a href="#" className="hover:text-elvish-accent transition-colors">Cultural Guide</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-elvish-accent/20 mt-8 pt-8 text-center text-elvish-gray">
          <p>&copy; 2024 Elvish Name Generator. Created with respect for Tolkien's linguistic legacy.</p>
        </div>
      </div>
    </footer>
  );
}
