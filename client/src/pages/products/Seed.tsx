/**
 * KOLIVO™ Seed Product Page
 * Incubation platform
 * Color: Teal #14B8A6
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Sprout, Lightbulb, Users, Target, Rocket, HandHeart } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { PRODUCT_COLORS } from "@/lib/cdn";

export default function ProductSeed() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "Incubation",
      title: "KOLIVO™ Seed",
      subtitle: "Growing ideas into impact.",
      description: "Supporting community-driven initiatives and social housing projects. KOLIVO™ Seed provides resources, mentorship, and tools to help your ideas take root and flourish.",
      status: "In Development",
      cta: "Learn More",
      features: {
        title: "From idea to impact",
        items: [
          {
            icon: Sprout,
            title: "Project Incubation",
            description: "Structured programs to help community initiatives grow from concept to reality."
          },
          {
            icon: Lightbulb,
            title: "Mentorship Network",
            description: "Connect with experienced mentors who can guide your project development."
          },
          {
            icon: Users,
            title: "Community Support",
            description: "Access a network of like-minded individuals working on similar challenges."
          },
          {
            icon: Target,
            title: "Resource Matching",
            description: "Find the resources, partners, and funding opportunities your project needs."
          },
          {
            icon: Rocket,
            title: "Launch Support",
            description: "Get help bringing your project to market with marketing and operational support."
          },
          {
            icon: HandHeart,
            title: "Social Impact Focus",
            description: "Prioritizing projects that create positive social impact in housing and community."
          }
        ]
      },
      ctaSection: {
        title: "Have an idea for community impact?",
        description: "Tell us about your project and how KOLIVO™ Seed can help.",
        button: "Submit Your Idea"
      }
    },
    fr: {
      tagline: "Incubation",
      title: "KOLIVO™ Seed",
      subtitle: "Faire grandir les idées en impact.",
      description: "Soutenir les initiatives communautaires et les projets de logement social. KOLIVO™ Seed fournit des ressources, du mentorat et des outils pour aider vos idées à prendre racine et à s'épanouir.",
      status: "En développement",
      cta: "En savoir plus",
      features: {
        title: "De l'idée à l'impact",
        items: [
          {
            icon: Sprout,
            title: "Incubation de projets",
            description: "Programmes structurés pour aider les initiatives communautaires à passer du concept à la réalité."
          },
          {
            icon: Lightbulb,
            title: "Réseau de mentorat",
            description: "Connectez-vous avec des mentors expérimentés qui peuvent guider le développement de votre projet."
          },
          {
            icon: Users,
            title: "Soutien communautaire",
            description: "Accédez à un réseau de personnes partageant les mêmes idées et travaillant sur des défis similaires."
          },
          {
            icon: Target,
            title: "Mise en relation de ressources",
            description: "Trouvez les ressources, partenaires et opportunités de financement dont votre projet a besoin."
          },
          {
            icon: Rocket,
            title: "Soutien au lancement",
            description: "Obtenez de l'aide pour mettre votre projet sur le marché avec un soutien marketing et opérationnel."
          },
          {
            icon: HandHeart,
            title: "Focus impact social",
            description: "Prioriser les projets qui créent un impact social positif dans le logement et la communauté."
          }
        ]
      },
      ctaSection: {
        title: "Vous avez une idée pour un impact communautaire?",
        description: "Parlez-nous de votre projet et comment KOLIVO™ Seed peut vous aider.",
        button: "Soumettre votre idée"
      }
    }
  };

  const t = content[language];
  const accentColor = PRODUCT_COLORS.seed;

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
