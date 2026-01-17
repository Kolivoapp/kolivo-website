/**
 * KOLIVO™ Lens Product Page
 * Analytics platform
 * Color: Purple #7A3AD7
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, PieChart, Activity, Eye, Layers } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { PRODUCT_COLORS } from "@/lib/cdn";

export default function ProductLens() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "Analytics",
      title: "KOLIVO™ Lens",
      subtitle: "See clearly. Decide confidently.",
      description: "Transform your data into actionable insights. KOLIVO™ Lens provides powerful analytics and visualization tools to help you understand your ecosystem.",
      status: "Coming Soon",
      cta: "Get Notified",
      features: {
        title: "Data-driven decisions",
        items: [
          {
            icon: BarChart3,
            title: "Real-Time Dashboards",
            description: "Live dashboards that update in real-time, giving you instant visibility into your operations."
          },
          {
            icon: TrendingUp,
            title: "Predictive Analytics",
            description: "Machine learning models that help you anticipate trends and make proactive decisions."
          },
          {
            icon: PieChart,
            title: "Custom Reports",
            description: "Build custom reports tailored to your specific needs and share them with your team."
          },
          {
            icon: Activity,
            title: "Performance Metrics",
            description: "Track key performance indicators across all your KOLIVO™ platforms in one place."
          },
          {
            icon: Eye,
            title: "Data Visualization",
            description: "Beautiful, interactive visualizations that make complex data easy to understand."
          },
          {
            icon: Layers,
            title: "Cross-Platform Insights",
            description: "Unified analytics across all KOLIVO™ products for a complete picture of your ecosystem."
          }
        ]
      },
      ctaSection: {
        title: "Ready to see your data clearly?",
        description: "Be the first to know when KOLIVO™ Lens launches.",
        button: "Join the Waitlist"
      }
    },
    fr: {
      tagline: "Analytique",
      title: "KOLIVO™ Lens",
      subtitle: "Voir clairement. Décider en confiance.",
      description: "Transformez vos données en insights actionnables. KOLIVO™ Lens fournit des outils d'analytique et de visualisation puissants pour vous aider à comprendre votre écosystème.",
      status: "Bientôt disponible",
      cta: "Être notifié",
      features: {
        title: "Décisions basées sur les données",
        items: [
          {
            icon: BarChart3,
            title: "Tableaux de bord en temps réel",
            description: "Tableaux de bord en direct qui se mettent à jour en temps réel, vous donnant une visibilité instantanée sur vos opérations."
          },
          {
            icon: TrendingUp,
            title: "Analytique prédictive",
            description: "Modèles d'apprentissage automatique qui vous aident à anticiper les tendances et à prendre des décisions proactives."
          },
          {
            icon: PieChart,
            title: "Rapports personnalisés",
            description: "Créez des rapports personnalisés adaptés à vos besoins spécifiques et partagez-les avec votre équipe."
          },
          {
            icon: Activity,
            title: "Métriques de performance",
            description: "Suivez les indicateurs clés de performance sur toutes vos plateformes KOLIVO™ en un seul endroit."
          },
          {
            icon: Eye,
            title: "Visualisation des données",
            description: "Visualisations belles et interactives qui rendent les données complexes faciles à comprendre."
          },
          {
            icon: Layers,
            title: "Insights multi-plateformes",
            description: "Analytique unifiée sur tous les produits KOLIVO™ pour une image complète de votre écosystème."
          }
        ]
      },
      ctaSection: {
        title: "Prêt à voir vos données clairement?",
        description: "Soyez le premier informé du lancement de KOLIVO™ Lens.",
        button: "Rejoindre la liste d'attente"
      }
    }
  };

  const t = content[language];
  const accentColor = PRODUCT_COLORS.lens;

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
              <Link href="/contact">
                {t.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
              <Link href="/contact">
                {t.ctaSection.button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
