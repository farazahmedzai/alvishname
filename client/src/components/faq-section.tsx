import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's the difference between Sindarin and Quenya?",
      answer: "Sindarin is the more commonly spoken Elvish language in Middle-earth, characterized by softer sounds and Welsh-inspired phonology. Quenya is the \"High Elvish,\" more formal and archaic, with Finnish-inspired structure. Sindarin was used for everyday communication, while Quenya was reserved for ceremony, lore, and formal occasions."
    },
    {
      question: "Are these names authentic to Tolkien's work?",
      answer: "Our generator creates names following Tolkien's linguistic patterns and rules, using authentic Elvish elements and morphological structures. While not every generated name appears in Tolkien's published works, they are constructed using the same systematic approach that Tolkien used to create his Elvish languages."
    },
    {
      question: "Can I use these names for my D&D character?",
      answer: "Absolutely! These names are perfect for D&D elven characters, fantasy writing, gaming, and any creative project. The names are generated to sound authentic and carry meaningful connections to Elvish culture, making them ideal for role-playing games and storytelling."
    },
    {
      question: "How do you pronounce Elvish names?",
      answer: "Elvish pronunciation follows consistent rules: stress usually falls on the first syllable in Sindarin, vowels are pronounced as in Latin or Italian, and consonant combinations follow specific patterns. 'C' is always hard, 'G' is always hard, and double consonants are lengthened. Many names include pronunciation guides to help with correct pronunciation."
    },
    {
      question: "Are there different types of Elvish names for different purposes?",
      answer: "Yes! Our generator offers different categories including Traditional (classic Elvish patterns), Nature-themed (connected to natural elements), Warrior (strong, heroic names), Noble (formal, regal names), and Mystical (magical, ethereal names). Each category reflects different aspects of Elvish culture and character archetypes."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-cinzel text-3xl font-semibold text-center mb-12 text-elvish-light">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
              <button 
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-elvish-dark/20 transition-colors rounded-xl"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-elvish-light">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-elvish-accent transform transition-transform ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFAQ === index && (
                <CardContent className="px-6 pb-6 text-elvish-gray leading-relaxed">
                  {faq.answer}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
