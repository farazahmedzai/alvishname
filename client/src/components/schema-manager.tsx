import { useLocation } from "wouter";
import { useEffect } from "react";

interface SchemaManagerProps {
  pageType: 'home' | 'sindarin' | 'quenya' | 'about' | 'privacy';
  title?: string;
  description?: string;
}

export default function SchemaManager({ pageType, title, description }: SchemaManagerProps) {
  const [location] = useLocation();

  useEffect(() => {
    // Remove existing page-specific schemas
    const existingSchemas = document.querySelectorAll('[id$="-page-schema"]');
    existingSchemas.forEach(schema => schema.remove());

    // Generate page-specific schema
    const generatePageSchema = () => {
      const baseUrl = 'https://elvishnamegenerator.com';
      const currentUrl = `${baseUrl}${location}`;
      
      const baseSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title || document.title,
        "description": description || document.querySelector('meta[name="description"]')?.getAttribute('content'),
        "url": currentUrl,
        "isPartOf": {
          "@type": "WebSite",
          "name": "Elvish Name Generator",
          "url": baseUrl
        },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${baseUrl}?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      };

      // Add page-specific schema enhancements
      switch (pageType) {
        case 'home':
          return {
            ...baseSchema,
            "@type": ["WebPage", "CollectionPage"],
            "about": {
              "@type": "Thing",
              "name": "Elvish Name Generation",
              "description": "Tools and resources for generating authentic Elvish names"
            },
            "mainEntity": {
              "@type": "WebApplication",
              "name": "Elvish Name Generator",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }
          };
          
        case 'sindarin':
          return {
            ...baseSchema,
            "@type": ["WebPage", "CollectionPage"],
            "about": {
              "@type": "Thing",
              "name": "Sindarin Names",
              "description": "Authentic Sindarin Elvish names with meanings and pronunciations"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": baseUrl
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Sindarin Names",
                  "item": `${baseUrl}/sindarin-names`
                }
              ]
            }
          };
          
        case 'quenya':
          return {
            ...baseSchema,
            "@type": ["WebPage", "CollectionPage"],
            "about": {
              "@type": "Thing",
              "name": "Quenya Names",
              "description": "Authentic Quenya Elvish names with meanings and pronunciations"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": baseUrl
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Quenya Names",
                  "item": `${baseUrl}/quenya-names`
                }
              ]
            }
          };
          
        case 'about':
          return {
            ...baseSchema,
            "@type": ["WebPage", "AboutPage"],
            "mainEntity": {
              "@type": "Organization",
              "name": "Elvish Name Generator",
              "description": "Platform for generating authentic Tolkien-inspired Elvish names",
              "url": baseUrl,
              "sameAs": [],
              "foundingDate": "2025",
              "knowsAbout": [
                "Sindarin Language",
                "Quenya Language", 
                "Tolkien Linguistics",
                "Fantasy Name Generation",
                "Middle-earth Languages"
              ]
            }
          };
          
        case 'privacy':
          return {
            ...baseSchema,
            "@type": ["WebPage", "WebPageElement"],
            "about": {
              "@type": "Thing",
              "name": "Privacy Policy",
              "description": "Privacy policy and data protection information"
            }
          };
          
        default:
          return baseSchema;
      }
    };

    const schema = generatePageSchema();
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = `${pageType}-page-schema`;
    schemaScript.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaScript);

    // Also add Article schema for content-heavy pages
    if (pageType === 'home' || pageType === 'sindarin' || pageType === 'quenya') {
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title || document.title,
        "description": description || document.querySelector('meta[name="description"]')?.getAttribute('content'),
        "url": `https://elvishnamegenerator.com${location}`,
        "datePublished": "2025-07-15",
        "dateModified": "2025-07-15",
        "author": {
          "@type": "Organization",
          "name": "Elvish Name Generator"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Elvish Name Generator",
          "url": "https://elvishnamegenerator.com"
        },
        "articleSection": pageType === 'home' ? "Name Generation" : `${pageType.charAt(0).toUpperCase() + pageType.slice(1)} Names`,
        "keywords": [
          "elvish names",
          "tolkien names", 
          pageType === 'sindarin' ? "sindarin names" : pageType === 'quenya' ? "quenya names" : "fantasy names",
          "lotr names",
          "dnd elf names"
        ],
        "about": {
          "@type": "Thing",
          "name": pageType === 'home' ? "Elvish Name Generation" : `${pageType.charAt(0).toUpperCase() + pageType.slice(1)} Names`,
          "description": description || document.querySelector('meta[name="description"]')?.getAttribute('content')
        }
      };

      const articleScript = document.createElement('script');
      articleScript.type = 'application/ld+json';
      articleScript.id = `${pageType}-article-schema`;
      articleScript.textContent = JSON.stringify(articleSchema);
      document.head.appendChild(articleScript);
    }

  }, [pageType, location, title, description]);

  return null;
}