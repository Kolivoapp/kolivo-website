/**
 * KOLIVO™ Gate Product Page
 * Access Management
 * Color: Yellow #EAB308
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, KeyRound, Shield, Users, Lock, Fingerprint, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PRODUCT_COLORS, CDN } from "@/lib/cdn";
import WaitlistForm from "@/components/WaitlistForm";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProductGate() {
  const { language } = useLanguage();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const content = {
    en: {
      tagline: "Access Management",
      title: "KOLIVO™ Gate",
      subtitle: "Control who enters.",
      description: "Centralized access management for the KOLIVO™ ecosystem. Gate provides secure authentication, authorization, and access control across all platforms and services.",
      status: "In Development",
      cta: "Get Notified",
      features: {
        title: "Access control infrastructure",
        items: [
          {
            icon: KeyRound,
            title: "API Key Management",
            description: "Generate, rotate, and revoke API keys with granular permission controls."
          },
          {
            icon: Shield,
            title: "Role-Based Access",
            description: "Define roles and permissions that control what users can access and do."
          },
          {
            icon: Users,
            title: "Team Management",
            description: "Organize users into teams with shared access policies and permissions."
          },
          {
            icon: Lock,
            title: "OAuth 2.0 Provider",
            description: "Industry-standard authentication for secure third-party integrations."
          },
          {
            icon: Fingerprint,
            title: "Multi-Factor Auth",
            description: "Additional security layers including TOTP, SMS, and hardware keys."
          },
          {
            icon: Settings,
            title: "Audit Logging",
            description: "Complete audit trail of all access events for compliance and security."
          }
        ]
      },
      ctaSection: {
        title: "Need enterprise access control?",
        description: "Stay informed about KOLIVO™ Gate and our access management solutions.",
        button: "Get Notified"
      }
    },
    fr: {
      tagline: "Gestion des accès",
      title: "KOLIVO™ Gate",
      subtitle: "Contrôlez qui entre.",
      description: "Gestion centralisée des accès pour l'écosystème KOLIVO™. Gate fournit une authentification sécurisée, une autorisation et un contrôle d'accès à travers toutes les plateformes et services.",
      status: "En développement",
      cta: "Être notifié",
      features: {
        title: "Infrastructure de contrôle d'accès",
        items: [
          {
            icon: KeyRound,
            title: "Gestion des clés API",
            description: "Générez, faites tourner et révoquez les clés API avec des contrôles de permission granulaires."
          },
          {
            icon: Shield,
            title: "Accès basé sur les rôles",
            description: "Définissez des rôles et des permissions qui contrôlent ce que les utilisateurs peuvent accéder et faire."
          },
          {
            icon: Users,
            title: "Gestion d'équipe",
            description: "Organisez les utilisateurs en équipes avec des politiques d'accès et des permissions partagées."
          },
          {
            icon: Lock,
            title: "Fournisseur OAuth 2.0",
            description: "Authentification aux normes de l'industrie pour des intégrations tierces sécurisées."
          },
          {
            icon: Fingerprint,
            title: "Auth multi-facteurs",
            description: "Couches de sécurité supplémentaires incluant TOTP, SMS et clés matérielles."
          },
          {
            icon: Settings,
            title: "Journalisation d'audit",
            description: "Piste d'audit complète de tous les événements d'accès pour la conformité et la sécurité."
          }
        ]
      },
      ctaSection: {
        title: "Besoin d'un contrôle d'accès entreprise?",
        description: "Restez informé sur KOLIVO™ Gate et nos solutions de gestion des accès.",
        button: "Être notifié"
      }
    }
  };

  const t = content[language];
  const accentColor = PRODUCT_COLORS.gate;

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
                <WaitlistForm onClose={() => setIsWaitlistOpen(false)} variant="modal" product="gate" />
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
                <WaitlistForm onClose={() => setIsWaitlistOpen(false)} variant="modal" product="gate" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  );
}
