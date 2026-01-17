/**
 * KOLIVO™ HALO Product Page
 * Identity management portal
 * Color: Red #EF4444
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Fingerprint, Shield, Lock, Key, UserCheck, Globe } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { PRODUCT_COLORS } from "@/lib/cdn";

export default function ProductHalo() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "Identity",
      title: "KOLIVO™ HALO",
      subtitle: "One identity. Every platform.",
      description: "Your secure digital identity that travels with you across the entire KOLIVO™ ecosystem. One login. Complete control over your data. Privacy by design.",
      status: "Available",
      cta: "Access HALO ID",
      features: {
        title: "Unified identity management",
        items: [
          {
            icon: Fingerprint,
            title: "Single Sign-On",
            description: "One secure login for all KOLIVO™ platforms. No more password fatigue."
          },
          {
            icon: Lock,
            title: "Privacy First",
            description: "Your data stays yours. We never sell or share your personal information."
          },
          {
            icon: Shield,
            title: "Bank-Grade Security",
            description: "256-bit encryption and multi-factor authentication protect your identity."
          },
          {
            icon: Key,
            title: "Access Control",
            description: "Granular permissions let you control exactly what each application can access."
          },
          {
            icon: UserCheck,
            title: "Verified Identity",
            description: "Optional identity verification for enhanced trust in the ecosystem."
          },
          {
            icon: Globe,
            title: "Canadian Data Residency",
            description: "Your data never leaves Canada. Subject to Canadian privacy laws."
          }
        ]
      },
      ctaSection: {
        title: "Ready to take control of your digital identity?",
        description: "Create your HALO ID and access the entire KOLIVO™ ecosystem with one secure login.",
        button: "Create HALO ID"
      }
    },
    fr: {
      tagline: "Identité",
      title: "KOLIVO™ HALO",
      subtitle: "Une identité. Toutes les plateformes.",
      description: "Votre identité numérique sécurisée qui vous accompagne dans tout l'écosystème KOLIVO™. Une connexion. Contrôle total sur vos données. Confidentialité par conception.",
      status: "Disponible",
      cta: "Accéder à HALO ID",
      features: {
        title: "Gestion d'identité unifiée",
        items: [
          {
            icon: Fingerprint,
            title: "Connexion unique",
            description: "Une seule connexion sécurisée pour toutes les plateformes KOLIVO™. Fini la fatigue des mots de passe."
          },
          {
            icon: Lock,
            title: "Confidentialité d'abord",
            description: "Vos données restent les vôtres. Nous ne vendons ni ne partageons jamais vos informations personnelles."
          },
          {
            icon: Shield,
            title: "Sécurité bancaire",
            description: "Chiffrement 256 bits et authentification multifacteur protègent votre identité."
          },
          {
            icon: Key,
            title: "Contrôle d'accès",
            description: "Des permissions granulaires vous permettent de contrôler exactement ce que chaque application peut accéder."
          },
          {
            icon: UserCheck,
            title: "Identité vérifiée",
            description: "Vérification d'identité optionnelle pour une confiance accrue dans l'écosystème."
          },
          {
            icon: Globe,
            title: "Résidence des données au Canada",
            description: "Vos données ne quittent jamais le Canada. Soumises aux lois canadiennes sur la vie privée."
          }
        ]
      },
      ctaSection: {
        title: "Prêt à prendre le contrôle de votre identité numérique?",
        description: "Créez votre HALO ID et accédez à tout l'écosystème KOLIVO™ avec une seule connexion sécurisée.",
        button: "Créer HALO ID"
      }
    }
  };

  const t = content[language];
  const accentColor = PRODUCT_COLORS.halo;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Light Mode */}
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
            <Button 
              asChild 
              size="lg" 
              className="text-white px-6 py-3 rounded-lg"
              style={{ backgroundColor: accentColor }}
            >
              <a href="https://id.halo.kolivo.ca" target="_blank" rel="noopener noreferrer">
                {t.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
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
            <Button 
              asChild 
              size="lg" 
              className="text-white px-6 py-3 rounded-lg"
              style={{ backgroundColor: accentColor }}
            >
              <a href="https://id.halo.kolivo.ca" target="_blank" rel="noopener noreferrer">
                {t.ctaSection.button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
