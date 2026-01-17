/**
 * KOLIVO™ Link Product Page
 * Integration Platform
 * Color: Cyan #06B6D4
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link2, Plug, RefreshCw, Database, Webhook, Cloud } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PRODUCT_COLORS, CDN } from "@/lib/cdn";
import WaitlistForm from "@/components/WaitlistForm";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProductLink() {
  const { language } = useLanguage();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const content = {
    en: {
      tagline: "Integration Platform",
      title: "KOLIVO™ Link",
      subtitle: "Connect everything.",
      description: "The integration backbone of the KOLIVO™ ecosystem. Link enables seamless data flow between platforms, third-party services, and external systems.",
      status: "In Development",
      cta: "Get Notified",
      features: {
        title: "Integration infrastructure",
        items: [
          {
            icon: Link2,
            title: "API Gateway",
            description: "Unified API layer for all KOLIVO™ services with rate limiting and monitoring."
          },
          {
            icon: Plug,
            title: "Pre-built Connectors",
            description: "Ready-to-use integrations with popular services and platforms."
          },
          {
            icon: RefreshCw,
            title: "Real-time Sync",
            description: "Keep data synchronized across systems with event-driven architecture."
          },
          {
            icon: Database,
            title: "Data Transformation",
            description: "Transform and map data between different formats and schemas."
          },
          {
            icon: Webhook,
            title: "Webhooks",
            description: "Push notifications for real-time updates to external systems."
          },
          {
            icon: Cloud,
            title: "iPaaS Capabilities",
            description: "Integration platform as a service for complex workflow automation."
          }
        ]
      },
      ctaSection: {
        title: "Need to integrate with KOLIVO™?",
        description: "Stay informed about KOLIVO™ Link and our integration capabilities.",
        button: "Get Notified"
      }
    },
    fr: {
      tagline: "Plateforme d'intégration",
      title: "KOLIVO™ Link",
      subtitle: "Connectez tout.",
      description: "L'épine dorsale d'intégration de l'écosystème KOLIVO™. Link permet un flux de données fluide entre les plateformes, les services tiers et les systèmes externes.",
      status: "En développement",
      cta: "Être notifié",
      features: {
        title: "Infrastructure d'intégration",
        items: [
          {
            icon: Link2,
            title: "Passerelle API",
            description: "Couche API unifiée pour tous les services KOLIVO™ avec limitation de débit et surveillance."
          },
          {
            icon: Plug,
            title: "Connecteurs pré-construits",
            description: "Intégrations prêtes à l'emploi avec les services et plateformes populaires."
          },
          {
            icon: RefreshCw,
            title: "Synchronisation en temps réel",
            description: "Gardez les données synchronisées entre les systèmes avec une architecture événementielle."
          },
          {
            icon: Database,
            title: "Transformation de données",
            description: "Transformez et mappez les données entre différents formats et schémas."
          },
          {
            icon: Webhook,
            title: "Webhooks",
            description: "Notifications push pour des mises à jour en temps réel vers les systèmes externes."
          },
          {
            icon: Cloud,
            title: "Capacités iPaaS",
            description: "Plateforme d'intégration en tant que service pour l'automatisation de flux de travail complexes."
          }
        ]
      },
      ctaSection: {
        title: "Besoin de vous intégrer à KOLIVO™?",
        description: "Restez informé sur KOLIVO™ Link et nos capacités d'intégration.",
        button: "Être notifié"
      }
    }
  };

  const t = content[language];
  const accentColor = PRODUCT_COLORS.link;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            {/* Product Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src={CDN.products.link.accent}
                alt="KOLIVO™ Link"
                className="h-10 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
            >
              {t.status}
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: accentColor }}>
              {t.tagline}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {t.title}
            </h1>
            <p className="text-xl font-medium mb-6" style={{ color: accentColor }}>
              {t.subtitle}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              {t.description}
            </p>
            <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="text-white px-6 py-3 rounded-lg"
                  style={{ backgroundColor: accentColor }}
                >
                  {t.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <WaitlistForm onClose={() => setIsWaitlistOpen(false)} variant="modal" product="link" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">
            {t.features.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.items.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${accentColor}15` }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: accentColor }} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-slate-900">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.ctaSection.title}
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              {t.ctaSection.description}
            </p>
            <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="text-white px-6 py-3 rounded-lg"
                  style={{ backgroundColor: accentColor }}
                >
                  {t.ctaSection.button}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <WaitlistForm onClose={() => setIsWaitlistOpen(false)} variant="modal" product="link" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  );
}
