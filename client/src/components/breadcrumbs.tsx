import { useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

export default function Breadcrumbs() {
  const [location] = useLocation();
  
  const getBreadcrumbs = (path: string): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { name: "Home", href: "/" }
    ];
    
    switch (path) {
      case "/":
        breadcrumbs[0].current = true;
        break;
      case "/sindarin-names":
        breadcrumbs.push({ name: "Sindarin Names", href: "/sindarin-names", current: true });
        break;
      case "/quenya-names":
        breadcrumbs.push({ name: "Quenya Names", href: "/quenya-names", current: true });
        break;
      case "/about":
        breadcrumbs.push({ name: "About", href: "/about", current: true });
        break;
      case "/privacy":
        breadcrumbs.push({ name: "Privacy Policy", href: "/privacy", current: true });
        break;
      default:
        breadcrumbs.push({ name: "Page Not Found", href: location, current: true });
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs(location);

  // Generate and update breadcrumb schema
  useEffect(() => {
    const existingSchema = document.querySelector('#breadcrumb-schema');
    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://elvishnamegenerator.com${item.href}`
      }))
    };

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'breadcrumb-schema';
    schemaScript.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaScript);
  }, [location]);

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="bg-elvish-surface/30 backdrop-blur-sm border-b border-elvish-accent/10" aria-label="Breadcrumb">
      <ol className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center space-x-2 text-sm">
        {breadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-elvish-gray/60 mx-2" aria-hidden="true" />
            )}
            {item.current ? (
              <span className="text-elvish-accent font-medium" aria-current="page">
                {index === 0 && <Home className="w-4 h-4 inline mr-1" aria-hidden="true" />}
                {item.name}
              </span>
            ) : (
              <a 
                href={item.href} 
                className="text-elvish-gray hover:text-elvish-accent transition-colors flex items-center"
                aria-label={`Go to ${item.name}`}
              >
                {index === 0 && <Home className="w-4 h-4 inline mr-1" aria-hidden="true" />}
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}