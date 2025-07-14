import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Database, UserCheck } from "lucide-react";

export default function Privacy() {
  useEffect(() => {
    // Update page metadata
    document.title = "Privacy Policy - Elvish Name Generator | Data Protection & Privacy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Our privacy policy explains how we protect your data when using the Elvish Name Generator. Learn about our commitment to user privacy and data security.');
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://elvishnamegenerator.com/privacy');
    }
    
    // Update breadcrumb schema
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
            "name": "Privacy Policy",
            "item": "https://elvishnamegenerator.com/privacy"
          }
        ]
      });
    }
    
    // Add page-specific WebPage schema
    const existingSchema = document.querySelector('#privacy-page-schema');
    if (!existingSchema) {
      const schemaScript = document.createElement('script');
      schemaScript.id = 'privacy-page-schema';
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy - Elvish Name Generator",
        "description": "Our privacy policy explains how we protect your data when using the Elvish Name Generator",
        "url": "https://elvishnamegenerator.com/privacy",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Elvish Name Generator",
          "url": "https://elvishnamegenerator.com"
        }
      });
      document.head.appendChild(schemaScript);
    }
    
    // Cleanup function
    return () => {
      const privacySchema = document.querySelector('#privacy-page-schema');
      if (privacySchema) privacySchema.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-elvish-dark via-elvish-surface to-elvish-dark">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 text-elvish-light">
              Privacy Policy
            </h1>
            <p className="text-xl text-elvish-gray max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we protect and handle your information.
            </p>
            <p className="text-sm text-elvish-gray mt-4">
              Last updated: July 14, 2025
            </p>
          </div>

          {/* Overview */}
          <Card className="mb-12 bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-elvish-accent mr-4" />
                <h2 className="font-cinzel text-2xl font-semibold text-elvish-light">Privacy Overview</h2>
              </div>
              <p className="text-elvish-gray leading-relaxed mb-4">
                At Elvish Name Generator, we are committed to protecting your privacy and ensuring transparent 
                data practices. This privacy policy explains how we collect, use, and safeguard any information 
                when you use our website and services.
              </p>
              <p className="text-elvish-gray leading-relaxed">
                We believe in minimal data collection and maximum transparency. Our service is designed to 
                provide you with authentic Elvish names while respecting your privacy and maintaining the 
                security of any data we may collect.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="mb-12 bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Database className="w-8 h-8 text-elvish-accent mr-4" />
                <h2 className="font-cinzel text-2xl font-semibold text-elvish-light">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-elvish-light mb-3">Automatically Collected Information</h3>
                  <ul className="text-elvish-gray space-y-2 list-disc list-inside">
                    <li>Basic usage analytics (page views, time spent on site)</li>
                    <li>Device and browser information for compatibility</li>
                    <li>IP address for security and regional analytics</li>
                    <li>Referring website information</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-elvish-light mb-3">Name Generation Data</h3>
                  <ul className="text-elvish-gray space-y-2 list-disc list-inside">
                    <li>Selected preferences (language, gender, category)</li>
                    <li>Generated names for service improvement</li>
                    <li>Usage patterns to enhance the generator algorithm</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-elvish-light mb-3">Cookies and Local Storage</h3>
                  <ul className="text-elvish-gray space-y-2 list-disc list-inside">
                    <li>Essential cookies for website functionality</li>
                    <li>Preference cookies to remember your settings</li>
                    <li>Analytics cookies for usage insights (if consented)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="mb-12 bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-elvish-accent mr-4" />
                <h2 className="font-cinzel text-2xl font-semibold text-elvish-light">How We Use Information</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-elvish-light mb-2">Service Provision</h3>
                  <p className="text-elvish-gray text-sm">
                    To generate authentic Elvish names based on your preferences and provide you with 
                    the core functionality of our name generator.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-elvish-light mb-2">Service Improvement</h3>
                  <p className="text-elvish-gray text-sm">
                    To analyze usage patterns, identify popular name categories, and improve our 
                    algorithms to provide better name suggestions and user experience.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-elvish-light mb-2">Technical Maintenance</h3>
                  <p className="text-elvish-gray text-sm">
                    To ensure website security, prevent abuse, diagnose technical issues, and 
                    maintain optimal performance across different devices and browsers.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-elvish-light mb-2">Legal Compliance</h3>
                  <p className="text-elvish-gray text-sm">
                    To comply with applicable laws, regulations, and legal processes, and to 
                    protect our rights and the rights of our users.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="mb-12 bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <UserCheck className="w-8 h-8 text-elvish-accent mr-4" />
                <h2 className="font-cinzel text-2xl font-semibold text-elvish-light">Data Protection & Security</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-elvish-light mb-2">Security Measures</h3>
                  <p className="text-elvish-gray text-sm mb-2">
                    We implement industry-standard security measures to protect your information:
                  </p>
                  <ul className="text-elvish-gray text-sm space-y-1 list-disc list-inside ml-4">
                    <li>HTTPS encryption for all data transmission</li>
                    <li>Secure server infrastructure and regular security updates</li>
                    <li>Access controls and monitoring systems</li>
                    <li>Regular security audits and vulnerability assessments</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-elvish-light mb-2">Data Retention</h3>
                  <p className="text-elvish-gray text-sm">
                    We retain information only as long as necessary to provide our services and comply 
                    with legal obligations. Analytics data is aggregated and anonymized after 24 months.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-elvish-light mb-2">Data Sharing</h3>
                  <p className="text-elvish-gray text-sm">
                    We do not sell, trade, or share your personal information with third parties for 
                    marketing purposes. We may share aggregated, anonymized data for research or 
                    analytics purposes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="mb-12 bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
            <CardContent className="p-8">
              <h2 className="font-cinzel text-2xl font-semibold text-elvish-light mb-6">Your Rights</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-elvish-light mb-2">Access & Control</h3>
                  <p className="text-elvish-gray text-sm">
                    You have the right to know what information we collect and how it's used. 
                    You can request access to your data at any time.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-elvish-light mb-2">Data Portability</h3>
                  <p className="text-elvish-gray text-sm">
                    You can request a copy of your data in a machine-readable format if we 
                    have collected personal information about you.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-elvish-light mb-2">Deletion</h3>
                  <p className="text-elvish-gray text-sm">
                    You can request deletion of your personal information, subject to legal 
                    and operational requirements.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-elvish-light mb-2">Opt-Out</h3>
                  <p className="text-elvish-gray text-sm">
                    You can opt out of non-essential data collection and analytics tracking 
                    through your browser settings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact & Updates */}
          <Card className="bg-elvish-surface/40 backdrop-blur-sm border border-elvish-accent/20">
            <CardContent className="p-8">
              <h2 className="font-cinzel text-2xl font-semibold text-elvish-light mb-6">Contact & Policy Updates</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-elvish-light mb-2">Privacy Questions</h3>
                  <p className="text-elvish-gray text-sm">
                    If you have questions about this privacy policy or our data practices, please 
                    contact us through our website's contact channels. We're committed to addressing 
                    your privacy concerns promptly and transparently.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-elvish-light mb-2">Policy Changes</h3>
                  <p className="text-elvish-gray text-sm">
                    We may update this privacy policy to reflect changes in our practices or legal 
                    requirements. We will notify users of significant changes and post the updated 
                    policy on our website with a revised date.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-elvish-light mb-2">Third-Party Links</h3>
                  <p className="text-elvish-gray text-sm">
                    Our website may contain links to third-party sites. This privacy policy applies 
                    only to our website. We encourage you to review the privacy policies of any 
                    third-party sites you visit.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}