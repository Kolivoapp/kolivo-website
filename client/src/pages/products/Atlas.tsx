/**
 * KOLIVO™ Atlas Product Page
 * Investor Portal
 * Color: Blue #3B82F6
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, PieChart, FileText, Users, BarChart3, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PRODUCT_COLORS, CDN } from "@/lib/cdn";
import WaitlistForm from "@/components/WaitlistForm";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProductAtlas() {
  const { language } = useLanguage();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const content = {
    en: {
      tagline: "Investor Portal",
      title: "KOLIVO™ Atlas",
      subtitle: "Navigate your investments.",
      description: "The dedicated portal for KOLIVO™ investors. Atlas provides transparent access to company performance, financial reports, and investment documentation.",
      status: "Coming Soon",
      cta: "Get Notified",
      features: {
        title: "Investor relations tools",
        items: [
          {
            icon: TrendingUp,
            title: "Performance Dashboard",
            description: "Real-time visibility into key performance indicators and growth metrics."
          },
          {
            icon: PieChart,
            title: "Portfolio Overview",
            description: "Clear view of your investment position and ownership details."
          },
          {
            icon: FileText,
            title: "Document Library",
            description: "Secure access to financial reports, legal documents, and company updates."
          },
          {
            icon: Users,
            title: "Shareholder Communications",
            description: "Direct channel for investor updates, announcements, and meeting notices."
          },
          {
            icon: BarChart3,
            title: "Financial Analytics",
            description: "Detailed financial analysis and projections for informed decision-making."
          },
          {
            icon: Shield,
            title: "Secure Access",
            description: "Bank-grade security for sensitive financial and investment information."
          }
        ]
      },
      ctaSection: {
        title: "Interested in investing?",
        description: "Stay informed about KOLIVO™ Atlas and investment opportunities.",
        button: "Get Notified"
      }
    },
    fr: {
      tagline: "Portail investisseur",
      title: "KOLIVO™ Atlas",
      subtitle: "Naviguez vos investissements.",
      description: "Le portail dédié aux investisseurs KOLIVO™. Atlas offre un accès transparent à la performance de l'entreprise, aux rapports financiers et à la documentation d'investissement.",
      status: "Bientôt disponible",
      cta: "Être notifié",
      features: {
        title: "Outils de relations investisseurs",
        items: [
          {
            icon: TrendingUp,
            title: "Tableau de bord de performance",
            description: "Visibilité en temps réel sur les indicateurs clés de performance et les métriques de croissance."
          },
          {
            icon: PieChart,
            title: "Aperçu du portefeuille",
            description: "Vue claire de votre position d'investissement et des détails de propriété."
          },
          {
            icon: FileText,
            title: "Bibliothèque de documents",
            description: "Accès sécurisé aux rapports financiers, documents légaux et mises à jour de l'entreprise."
          },
          {
            icon: Users,
            title: "Communications actionnaires",
            description: "Canal direct pour les mises à jour investisseurs, annonces et avis de réunions."
          },
          {
            icon: BarChart3,
            title: "Analytique financière",
            description: "Analyse financière détaillée et projections pour une prise de décision éclairée."
          },
          {
            icon: Shield,
            title: "Accès sécurisé",
            description: "Sécurité de niveau bancaire pour les informations financières et d'investissement sensibles."
          }
        ]
      },
      ctaSection: {
        title: "Intéressé à investir?",
        description: "Restez informé sur KOLIVO™ Atlas et les opportunités d'investissement.",
        button: "Être notifié"
      }
    }
  };

  const t = content[language];
  const accentColor = PRODUCT_COLORS.atlas;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            {/* Product Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src={CDN.products.atlas.accent}
                alt="KOLIVO™ Atlas"
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
                <WaitlistForm onClose={() => setIsWaitlistOpen(false)} variant="modal" product="atlas" />
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
                <WaitlistForm onClose={() => setIsWaitlistOpen(false)} variant="modal" product="atlas" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  );
}
