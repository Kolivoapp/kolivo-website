/**
 * KOLIVO™ Forge Product Page
 * Development Platform
 * Color: Orange #F97316
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Shield, Layers, Terminal, GitBranch } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PRODUCT_COLORS, CDN } from "@/lib/cdn";
import WaitlistForm from "@/components/WaitlistForm";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProductForge() {
  const { language } = useLanguage();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const content = {
    en: {
      tagline: "Development Platform",
      title: "KOLIVO™ Forge",
      subtitle: "Build with confidence.",
      description: "The internal development platform powering the KOLIVO™ ecosystem. Forge provides the infrastructure, tools, and frameworks that enable rapid, secure application development.",
      status: "Internal Platform",
      cta: "Get Notified",
      features: {
        title: "Development infrastructure",
        items: [
          {
            icon: Code,
            title: "Unified Codebase",
            description: "Shared components, libraries, and design systems across all KOLIVO™ products."
          },
          {
            icon: Zap,
            title: "Rapid Deployment",
            description: "CI/CD pipelines optimized for fast, reliable deployments to production."
          },
          {
            icon: Shield,
            title: "Security First",
            description: "Built-in security scanning, vulnerability detection, and compliance checks."
          },
          {
            icon: Layers,
            title: "Microservices Architecture",
            description: "Scalable, maintainable services that can evolve independently."
          },
          {
            icon: Terminal,
            title: "Developer Experience",
            description: "Tooling designed to maximize developer productivity and code quality."
          },
          {
            icon: GitBranch,
            title: "Version Control",
            description: "Integrated source control with branch protection and code review workflows."
          }
        ]
      },
      ctaSection: {
        title: "Interested in our technology?",
        description: "Stay informed about KOLIVO™ Forge and our development practices.",
        button: "Get Notified"
      }
    },
    fr: {
      tagline: "Plateforme de développement",
      title: "KOLIVO™ Forge",
      subtitle: "Construisez en confiance.",
      description: "La plateforme de développement interne alimentant l'écosystème KOLIVO™. Forge fournit l'infrastructure, les outils et les frameworks qui permettent un développement d'applications rapide et sécurisé.",
      status: "Plateforme interne",
      cta: "Être notifié",
      features: {
        title: "Infrastructure de développement",
        items: [
          {
            icon: Code,
            title: "Base de code unifiée",
            description: "Composants partagés, bibliothèques et systèmes de design à travers tous les produits KOLIVO™."
          },
          {
            icon: Zap,
            title: "Déploiement rapide",
            description: "Pipelines CI/CD optimisés pour des déploiements rapides et fiables en production."
          },
          {
            icon: Shield,
            title: "Sécurité d'abord",
            description: "Analyse de sécurité intégrée, détection de vulnérabilités et vérifications de conformité."
          },
          {
            icon: Layers,
            title: "Architecture microservices",
            description: "Services évolutifs et maintenables qui peuvent évoluer indépendamment."
          },
          {
            icon: Terminal,
            title: "Expérience développeur",
            description: "Outillage conçu pour maximiser la productivité des développeurs et la qualité du code."
          },
          {
            icon: GitBranch,
            title: "Contrôle de version",
            description: "Contrôle de source intégré avec protection des branches et workflows de revue de code."
          }
        ]
      },
      ctaSection: {
        title: "Intéressé par notre technologie?",
        description: "Restez informé sur KOLIVO™ Forge et nos pratiques de développement.",
        button: "Être notifié"
      }
    }
  };

  const t = content[language];
  const accentColor = PRODUCT_COLORS.forge;

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
                <WaitlistForm onClose={() => setIsWaitlistOpen(false)} variant="modal" product="forge" />
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
                <WaitlistForm onClose={() => setIsWaitlistOpen(false)} variant="modal" product="forge" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  );
}
