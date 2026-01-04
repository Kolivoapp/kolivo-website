/**
 * Coliving Management Solution Page
 * Design: Swiss Corporate Modernism
 * Bilingual support (FR/EN)
 */

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home, Users, Calendar, Wallet, CheckSquare, Shield, ArrowRight } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";

export default function ColivingSolution() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "COLIVING MANAGEMENT",
      title: "The Complete Platform for Shared Living",
      description: "HUB by KOLIVO™ transforms how roommates manage their shared space. From finances to chores, from calendars to agreements — everything in one place, designed with care.",
      features: {
        title: "Everything You Need",
        subtitle: "Built for the reality of shared living",
        items: [
          {
            icon: Wallet,
            title: "Shared Finances",
            description: "Track expenses, split bills fairly, and maintain transparent balances between all roommates."
          },
          {
            icon: CheckSquare,
            title: "Smart Chores",
            description: "Intelligent task rotation that ensures fair distribution and accountability."
          },
          {
            icon: Calendar,
            title: "Shared Calendar",
            description: "Coordinate schedules, plan events, and track absences together."
          },
          {
            icon: Home,
            title: "Household Inventory",
            description: "Keep track of shared and personal belongings with clear ownership."
          },
          {
            icon: Users,
            title: "Agreements & Rules",
            description: "Digital agreements with electronic signatures for house rules and expectations."
          },
          {
            icon: Shield,
            title: "Secure & Private",
            description: "Your data stays yours. Enterprise-grade security with privacy by design."
          }
        ]
      },
      values: {
        title: "Our Values",
        items: [
          { title: "Kindness", description: "Technology that promotes harmony" },
          { title: "Trust", description: "Transparency in every interaction" },
          { title: "Fairness", description: "Equitable systems for everyone" }
        ]
      },
      cta: {
        title: "Ready to Transform Your Coliving Experience?",
        description: "Join the waitlist and be the first to know when HUB by KOLIVO™ launches.",
        button: "Join the Waitlist"
      }
    },
    fr: {
      tagline: "GESTION COLOCATIVE",
      title: "La Plateforme Complète pour la Vie Partagée",
      description: "HUB by KOLIVO™ transforme la façon dont les colocataires gèrent leur espace partagé. Des finances aux corvées, du calendrier aux ententes — tout au même endroit, conçu avec soin.",
      features: {
        title: "Tout Ce Dont Vous Avez Besoin",
        subtitle: "Conçu pour la réalité de la vie partagée",
        items: [
          {
            icon: Wallet,
            title: "Finances Partagées",
            description: "Suivez les dépenses, partagez les factures équitablement et maintenez des soldes transparents."
          },
          {
            icon: CheckSquare,
            title: "Corvées Intelligentes",
            description: "Rotation intelligente des tâches qui assure une distribution équitable et la responsabilisation."
          },
          {
            icon: Calendar,
            title: "Calendrier Partagé",
            description: "Coordonnez les horaires, planifiez des événements et suivez les absences ensemble."
          },
          {
            icon: Home,
            title: "Inventaire du Foyer",
            description: "Gardez une trace des biens partagés et personnels avec une propriété claire."
          },
          {
            icon: Users,
            title: "Ententes et Règles",
            description: "Ententes numériques avec signatures électroniques pour les règles de la maison."
          },
          {
            icon: Shield,
            title: "Sécurisé et Privé",
            description: "Vos données restent les vôtres. Sécurité de niveau entreprise avec confidentialité par conception."
          }
        ]
      },
      values: {
        title: "Nos Valeurs",
        items: [
          { title: "Bienveillance", description: "Une technologie qui favorise l'harmonie" },
          { title: "Confiance", description: "Transparence dans chaque interaction" },
          { title: "Équité", description: "Des systèmes équitables pour tous" }
        ]
      },
      cta: {
        title: "Prêt à Transformer Votre Expérience de Colocation?",
        description: "Rejoignez la liste d'attente et soyez le premier informé du lancement de HUB by KOLIVO™.",
        button: "Rejoindre la Liste d'Attente"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium tracking-wider rounded-full mb-6">
              {t.tagline}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.features.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            {t.values.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {t.values.items.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="font-display text-2xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Waitlist Form */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.cta.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.cta.description}
              </p>
            </div>
            <WaitlistForm />
          </div>
        </div>
      </section>
    </div>
  );
}
