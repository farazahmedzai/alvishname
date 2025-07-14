import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import type { ElvishName } from "@shared/schema";

interface NameDisplayProps {
  names: ElvishName[];
}

export default function NameDisplay({ names }: NameDisplayProps) {
  const { toast } = useToast();
  const [copiedNames, setCopiedNames] = useState<Set<string>>(new Set());

  const copyToClipboard = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopiedNames(prev => new Set(prev).add(name));
      toast({
        title: "Copied!",
        description: `"${name}" copied to clipboard.`,
      });
      
      // Reset copy state after 2 seconds
      setTimeout(() => {
        setCopiedNames(prev => {
          const newSet = new Set(prev);
          newSet.delete(name);
          return newSet;
        });
      }, 2000);
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {names.map((name, index) => (
        <div 
          key={`${name.name}-${index}`}
          className="bg-elvish-dark/30 rounded-lg p-4 border border-elvish-accent/20 hover:border-elvish-accent/40 transition-all"
        >
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-crimson text-lg font-semibold text-elvish-accent">
              {name.name}
            </h4>
            <button 
              onClick={() => copyToClipboard(name.name)}
              className="text-elvish-gray hover:text-elvish-accent transition-colors"
              title="Copy name"
            >
              {copiedNames.has(name.name) ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
          <p className="text-sm text-elvish-gray mb-1">
            <span className="font-medium">Meaning:</span> {name.meaning}
          </p>
          <div className="flex justify-between items-center text-xs text-elvish-gray/70">
            <span><span className="font-medium">Language:</span> {name.language}</span>
            {name.pronunciation && (
              <span><span className="font-medium">Pronunciation:</span> {name.pronunciation}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
