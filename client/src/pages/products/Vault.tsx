/**
 * KOLIVO™ Vault Product Page
 * Secure Storage
 * Color: Slate #475569
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Shield, FileKey, Database, History, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PRODUCT_COLORS, CDN } from "@/lib/cdn";
import WaitlistForm from "@/components/WaitlistForm";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProductVault() {
  const { language } = useLanguage();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const content = {
    en: {
      tagline: "Secure Storage",
      title: "KOLIVO™ Vault",
      subtitle: "Your data, protected.",
      description: "Enterprise-grade secure storage for sensitive documents and data. Vault provides encrypted storage, access controls, and compliance-ready data management for the KOLIVO™ ecosystem.",
      status: "In Development",
      cta: "Get Notified",
      features: {
        title: "Security infrastructure",
        items: [
          {
            icon: Lock,
            title: "End-to-End Encryption",
            description: "256-bit AES encryption for data at rest and in transit."
          },
          {
            icon: Shield,
            title: "Zero-Knowledge Architecture",
            description: "Your encryption keys stay with you. We can't access your data."
          },
          {
            icon: FileKey,
            title: "Document Management",
            description: "Secure storage for contracts, agreements, and sensitive documents."
          },
          {
            icon: Database,
            title: "Structured Data Storage",
            description: "Encrypted database storage for sensitive personal and financial data."
          },
          {
            icon: History,
            title: "Version History",
            description: "Complete audit trail and version history for all stored documents."
          },
          {
            icon: Globe,
            title: "Canadian Data Residency",
            description: "All data stored in Canada, subject to Canadian privacy laws."
          }
        ]
      },
      ctaSection: {
        title: "Need secure data storage?",
        description: "Stay informed about KOLIVO™ Vault and our secure storage solutions.",
        button: "Get Notified"
      }
    },
    fr: {
      tagline: "Stockage sécurisé",
      title: "KOLIVO™ Vault",
      subtitle: "Vos données, protégées.",
      description: "Stockage sécurisé de niveau entreprise pour les documents et données sensibles. Vault fournit un stockage chiffré, des contrôles d'accès et une gestion des données conforme pour l'écosystème KOLIVO™.",
      status: "En développement",
      cta: "Être notifié",
      features: {
        title: "Infrastructure de sécurité",
        items: [
          {
            icon: Lock,
            title: "Chiffrement de bout en bout",
            description: "Chiffrement AES 256 bits pour les données au repos et en transit."
          },
          {
            icon: Shield,
            title: "Architecture à connaissance nulle",
            description: "Vos clés de chiffrement restent avec vous. Nous ne pouvons pas accéder à vos données."
          },
          {
            icon: FileKey,
            title: "Gestion de documents",
            description: "Stockage sécurisé pour les contrats, ententes et documents sensibles."
          },
          {
            icon: Database,
            title: "Stockage de données structurées",
            description: "Stockage de base de données chiffré pour les données personnelles et financières sensibles."
          },
          {
            icon: History,
            title: "Historique des versions",
            description: "Piste d'audit complète et historique des versions pour tous les documents stockés."
          },
          {
            icon: Globe,
            title: "Résidence des données au Canada",
            description: "Toutes les données stockées au Canada, soumises aux lois canadiennes sur la vie privée."
          }
        ]
      },
      ctaSection: {
        title: "Besoin d'un stockage de données sécurisé?",
        description: "Restez informé sur KOLIVO™ Vault et nos solutions de stockage sécurisé.",
        button: "Être notifié"
      }
    }
  };

  const t = content[language];
  const accentColor = PRODUCT_COLORS.vault;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
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
                <WaitlistForm onClose={() => setIsWaitlistOpen(false)} variant="modal" product="vault" />
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
                <WaitlistForm onClose={() => setIsWaitlistOpen(false)} variant="modal" product="vault" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  );
}
