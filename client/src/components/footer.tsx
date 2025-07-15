import { Card } from "@/components/ui/card";
import { Link } from "wouter";

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
              <Link href="/" className="font-cinzel text-xl font-semibold text-elvish-light hover:text-elvish-accent transition-colors">
                Elvish Name Generator
              </Link>
            </div>
            <p className="text-elvish-gray leading-relaxed mb-4">
              Generate authentic <Link href="/sindarin-names" className="text-elvish-accent hover:text-elvish-secondary underline">Sindarin</Link> and <Link href="/quenya-names" className="text-elvish-accent hover:text-elvish-secondary underline">Quenya names</Link> inspired by Tolkien's linguistic masterwork. Perfect for D&D characters, fantasy writing, and exploring Middle-earth's rich cultural heritage.
            </p>
            <div className="text-sm text-elvish-gray/80 mb-4">
              <p>Create names for: Fantasy Games • D&D Characters • Creative Writing • LOTR Fans</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-cinzel text-lg font-medium text-elvish-light mb-4">Name Generators</h4>
            <ul className="space-y-2 text-elvish-gray">
              <li><Link href="/sindarin-names" className="hover:text-elvish-accent transition-colors">Sindarin Names Generator</Link></li>
              <li><Link href="/quenya-names" className="hover:text-elvish-accent transition-colors">Quenya Names Generator</Link></li>
              <li><Link href="/" className="hover:text-elvish-accent transition-colors">Free Elvish Name Generator</Link></li>
              <li><Link href="/sindarin-names" className="hover:text-elvish-accent transition-colors">LOTR Elf Names</Link></li>
              <li><Link href="/quenya-names" className="hover:text-elvish-accent transition-colors">D&D Elf Names</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-cinzel text-lg font-medium text-elvish-light mb-4">Resources & Info</h4>
            <ul className="space-y-2 text-elvish-gray">
              <li><Link href="/about" className="hover:text-elvish-accent transition-colors">About Elvish Languages</Link></li>
              <li><Link href="/privacy" className="hover:text-elvish-accent transition-colors">Privacy Policy</Link></li>
              <li><button onClick={() => { window.location.href = '/#guide'; setTimeout(() => document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-elvish-accent transition-colors text-left">Pronunciation Guide</button></li>
              <li><button onClick={() => { window.location.href = '/#faq'; setTimeout(() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-elvish-accent transition-colors text-left">Frequently Asked Questions</button></li>
              <li><button onClick={() => { window.location.href = '/#guide'; setTimeout(() => document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-elvish-accent transition-colors text-left">Elvish Name Meanings</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-elvish-accent/20 mt-8 pt-8 text-center text-elvish-gray">
          <p>&copy; 2025 Elvish Name Generator. Created with respect for Tolkien's linguistic legacy.</p>
          <div className="mt-2 space-x-4 text-sm">
            <Link href="/privacy" className="hover:text-elvish-accent transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-elvish-accent transition-colors">About Our Mission</Link>
            <span>•</span>
            <Link href="/sindarin-names" className="hover:text-elvish-accent transition-colors">Sindarin Names</Link>
            <span>•</span>
            <Link href="/quenya-names" className="hover:text-elvish-accent transition-colors">Quenya Names</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
