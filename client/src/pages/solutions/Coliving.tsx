/**
 * Coliving Management Solution Page
 * Style: Institutional Light Mode
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home, Users, Calendar, Wallet, CheckSquare, Shield, ArrowRight } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ColivingSolution() {
  const { language } = useLanguage();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const content = {
    en: {
      hero: {
        tagline: "Coliving Management",
        title: "The complete platform for shared living",
        description: "HUB by KOLIVO™ transforms how roommates manage their shared space. From finances to chores, from calendars to agreements — everything in one place, designed with care."
      },
      features: {
        title: "Everything you need",
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
            description: "Your data stays yours. Privacy by design with Canadian data residency."
          }
        ]
      },
      values: {
        title: "Our values",
        items: [
          { title: "Kindness", description: "Technology that promotes harmony" },
          { title: "Trust", description: "Transparency in every interaction" },
          { title: "Fairness", description: "Equitable systems for everyone" }
        ]
      },
      cta: {
        title: "Ready to transform your coliving experience?",
        description: "Join our beta program and help shape the future of shared living.",
        button: "Become a Beta Tester"
      }
    },
    fr: {
      hero: {
        tagline: "Gestion colocative",
        title: "La plateforme complète pour la vie partagée",
        description: "HUB by KOLIVO™ transforme la façon dont les colocataires gèrent leur espace partagé. Des finances aux corvées, du calendrier aux ententes — tout au même endroit, conçu avec soin."
      },
      features: {
        title: "Tout ce dont vous avez besoin",
        subtitle: "Conçu pour la réalité de la vie partagée",
        items: [
          {
            icon: Wallet,
            title: "Finances partagées",
            description: "Suivez les dépenses, partagez les factures équitablement et maintenez des soldes transparents."
          },
          {
            icon: CheckSquare,
            title: "Corvées intelligentes",
            description: "Rotation intelligente des tâches qui assure une distribution équitable et la responsabilisation."
          },
          {
            icon: Calendar,
            title: "Calendrier partagé",
            description: "Coordonnez les horaires, planifiez des événements et suivez les absences ensemble."
          },
          {
            icon: Home,
            title: "Inventaire du foyer",
            description: "Gardez une trace des biens partagés et personnels avec une propriété claire."
          },
          {
            icon: Users,
            title: "Ententes et règles",
            description: "Ententes numériques avec signatures électroniques pour les règles de la maison."
          },
          {
            icon: Shield,
            title: "Sécurisé et privé",
            description: "Vos données restent les vôtres. Confidentialité par conception avec résidence des données au Canada."
          }
        ]
      },
      values: {
        title: "Nos valeurs",
        items: [
          { title: "Bienveillance", description: "Une technologie qui favorise l'harmonie" },
          { title: "Confiance", description: "Transparence dans chaque interaction" },
          { title: "Équité", description: "Des systèmes équitables pour tous" }
        ]
      },
      cta: {
        title: "Prêt à transformer votre expérience de colocation?",
        description: "Rejoignez notre programme bêta et aidez à façonner l'avenir de la vie partagée.",
        button: "Devenez testeur"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Light Mode */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-4">
              {t.hero.tagline}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              {t.features.title}
            </h2>
            <p className="text-slate-600">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.items.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-slate-50 border border-slate-200 hover:border-emerald-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
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

      {/* Values */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
            {t.values.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {t.values.items.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold text-emerald-600 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {value.description}
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
              {t.cta.title}
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              {t.cta.description}
            </p>
            <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg">
                  {t.cta.button}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <WaitlistForm onClose={() => setIsWaitlistOpen(false)} variant="modal" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  );
}
