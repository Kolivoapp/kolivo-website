/**
 * KOLIVO™ Nest Product Page
 * Community platform
 * Color: Amber #F59E0B
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MessageCircle, Calendar, Heart, Home, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { PRODUCT_COLORS, CDN } from "@/lib/cdn";

export default function ProductNest() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "Community",
      title: "KOLIVO™ Nest",
      subtitle: "Where communities thrive.",
      description: "Build and nurture vibrant communities around shared living. KOLIVO™ Nest provides the tools to connect, communicate, and collaborate with your neighbors.",
      status: "Coming 2027",
      cta: "Get Notified",
      features: {
        title: "Community building tools",
        items: [
          {
            icon: Users,
            title: "Community Spaces",
            description: "Create dedicated spaces for different groups, interests, or buildings within your community."
          },
          {
            icon: MessageCircle,
            title: "Discussion Forums",
            description: "Engage in meaningful conversations with your community members in organized discussion threads."
          },
          {
            icon: Calendar,
            title: "Event Planning",
            description: "Organize community events, from casual meetups to building-wide gatherings."
          },
          {
            icon: Heart,
            title: "Mutual Aid",
            description: "Share resources, skills, and support with your neighbors through our mutual aid features."
          },
          {
            icon: Home,
            title: "Local Directory",
            description: "Discover local businesses, services, and resources recommended by your community."
          },
          {
            icon: Sparkles,
            title: "Community Recognition",
            description: "Celebrate community members who contribute positively to shared living."
          }
        ]
      },
      ctaSection: {
        title: "Ready to build community?",
        description: "Be the first to know when KOLIVO™ Nest launches.",
        button: "Join the Waitlist"
      }
    },
    fr: {
      tagline: "Communauté",
      title: "KOLIVO™ Nest",
      subtitle: "Où les communautés s'épanouissent.",
      description: "Construisez et nourrissez des communautés vibrantes autour de la vie partagée. KOLIVO™ Nest fournit les outils pour connecter, communiquer et collaborer avec vos voisins.",
      status: "Prévu 2027",
      cta: "Être notifié",
      features: {
        title: "Outils de construction communautaire",
        items: [
          {
            icon: Users,
            title: "Espaces communautaires",
            description: "Créez des espaces dédiés pour différents groupes, intérêts ou bâtiments au sein de votre communauté."
          },
          {
            icon: MessageCircle,
            title: "Forums de discussion",
            description: "Engagez des conversations significatives avec les membres de votre communauté dans des fils de discussion organisés."
          },
          {
            icon: Calendar,
            title: "Planification d'événements",
            description: "Organisez des événements communautaires, des rencontres décontractées aux rassemblements de tout l'immeuble."
          },
          {
            icon: Heart,
            title: "Entraide",
            description: "Partagez des ressources, des compétences et du soutien avec vos voisins grâce à nos fonctionnalités d'entraide."
          },
          {
            icon: Home,
            title: "Répertoire local",
            description: "Découvrez les entreprises, services et ressources locaux recommandés par votre communauté."
          },
          {
            icon: Sparkles,
            title: "Reconnaissance communautaire",
            description: "Célébrez les membres de la communauté qui contribuent positivement à la vie partagée."
          }
        ]
      },
      ctaSection: {
        title: "Prêt à construire une communauté?",
        description: "Soyez le premier informé du lancement de KOLIVO™ Nest.",
        button: "Rejoindre la liste d'attente"
      }
    }
  };

  const t = content[language];
  const accentColor = PRODUCT_COLORS.nest;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Light Mode */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            {/* Product Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src={CDN.products.nest.accent}
                alt="KOLIVO™ Nest"
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
