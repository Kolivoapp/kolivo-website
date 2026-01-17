/**
 * KOLIVO™ Studio Product Page
 * Strategic Consulting
 * Color: Violet #9B8AFB
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Target, Users, Presentation, Rocket, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PRODUCT_COLORS, CDN } from "@/lib/cdn";
import WaitlistForm from "@/components/WaitlistForm";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProductStudio() {
  const { language } = useLanguage();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const content = {
    en: {
      tagline: "Strategic Consulting",
      title: "KOLIVO™ Studio",
      subtitle: "Strategy meets execution.",
      description: "High-end strategic consulting for organizations navigating digital transformation. Studio provides expert guidance, implementation support, and ongoing advisory services.",
      status: "By Invitation",
      cta: "Request Consultation",
      features: {
        title: "Consulting services",
        items: [
          {
            icon: Lightbulb,
            title: "Strategic Advisory",
            description: "Executive-level guidance on digital transformation and technology strategy."
          },
          {
            icon: Target,
            title: "Implementation Planning",
            description: "Detailed roadmaps and project plans for successful technology adoption."
          },
          {
            icon: Users,
            title: "Change Management",
            description: "People-focused approaches to ensure successful organizational change."
          },
          {
            icon: Presentation,
            title: "Workshops & Training",
            description: "Customized sessions to build internal capabilities and knowledge."
          },
          {
            icon: Rocket,
            title: "Launch Support",
            description: "Hands-on assistance during critical implementation phases."
          },
          {
            icon: Award,
            title: "Ongoing Advisory",
            description: "Continuous strategic guidance as your organization evolves."
          }
        ]
      },
      ctaSection: {
        title: "Ready to transform?",
        description: "Connect with our consulting team to discuss your strategic needs.",
        button: "Request Consultation"
      }
    },
    fr: {
      tagline: "Conseil stratégique",
      title: "KOLIVO™ Studio",
      subtitle: "La stratégie rencontre l'exécution.",
      description: "Conseil stratégique haut de gamme pour les organisations naviguant la transformation numérique. Studio fournit des conseils experts, un support d'implémentation et des services consultatifs continus.",
      status: "Sur invitation",
      cta: "Demander une consultation",
      features: {
        title: "Services de conseil",
        items: [
          {
            icon: Lightbulb,
            title: "Conseil stratégique",
            description: "Orientation de niveau exécutif sur la transformation numérique et la stratégie technologique."
          },
          {
            icon: Target,
            title: "Planification d'implémentation",
            description: "Feuilles de route détaillées et plans de projet pour une adoption technologique réussie."
          },
          {
            icon: Users,
            title: "Gestion du changement",
            description: "Approches centrées sur les personnes pour assurer un changement organisationnel réussi."
          },
          {
            icon: Presentation,
            title: "Ateliers et formation",
            description: "Sessions personnalisées pour développer les capacités et connaissances internes."
          },
          {
            icon: Rocket,
            title: "Support au lancement",
            description: "Assistance pratique pendant les phases critiques d'implémentation."
          },
          {
            icon: Award,
            title: "Conseil continu",
            description: "Orientation stratégique continue à mesure que votre organisation évolue."
          }
        ]
      },
      ctaSection: {
        title: "Prêt à transformer?",
        description: "Connectez-vous avec notre équipe de conseil pour discuter de vos besoins stratégiques.",
        button: "Demander une consultation"
      }
    }
  };

  const t = content[language];
  const accentColor = PRODUCT_COLORS.studio;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            {/* Product Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src={CDN.products.studio.accent}
                alt="KOLIVO™ Studio"
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
                <WaitlistForm onClose={() => setIsWaitlistOpen(false)} variant="modal" product="studio" />
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
                <WaitlistForm onClose={() => setIsWaitlistOpen(false)} variant="modal" product="studio" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  );
}
