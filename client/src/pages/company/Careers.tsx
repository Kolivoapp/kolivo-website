/**
 * Careers Page
 * Style: Institutional Light Mode
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Users, Heart, Zap, Globe } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Careers() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        tagline: "Careers",
        title: "Build the future of shared living",
        description: "Join a team that's creating technology to help people live better together. We're building something meaningful, and we'd love for you to be part of it."
      },
      culture: {
        title: "What it's like here",
        values: [
          {
            icon: Heart,
            title: "Purpose-driven",
            description: "We're solving real problems for real people. Every line of code, every design decision matters."
          },
          {
            icon: Users,
            title: "Collaborative",
            description: "Small team, big impact. Everyone's voice is heard, and everyone contributes to our direction."
          },
          {
            icon: Zap,
            title: "Moving fast",
            description: "We're a startup. Things move quickly, priorities shift, and that's part of the excitement."
          },
          {
            icon: Globe,
            title: "Remote-first",
            description: "Work from anywhere in Canada. We believe great work happens when you're comfortable."
          }
        ]
      },
      openings: {
        title: "Open positions",
        description: "We're always looking for talented people who share our vision. Even if you don't see a perfect fit, reach out—we'd love to hear from you.",
        noOpenings: "No open positions at the moment",
        noOpeningsDesc: "We're not actively hiring right now, but we're always interested in meeting talented people. Send us your resume and tell us why you'd be a great fit.",
        positions: []
      },
      cta: {
        title: "Don't see the right role?",
        description: "We're always interested in meeting talented people. Send us your resume and tell us about yourself.",
        button: "Get in Touch"
      }
    },
    fr: {
      hero: {
        tagline: "Carrières",
        title: "Construisez l'avenir de la vie partagée",
        description: "Rejoignez une équipe qui crée des technologies pour aider les gens à mieux vivre ensemble. Nous construisons quelque chose de significatif, et nous aimerions que vous en fassiez partie."
      },
      culture: {
        title: "Notre culture",
        values: [
          {
            icon: Heart,
            title: "Orienté vers un but",
            description: "Nous résolvons de vrais problèmes pour de vraies personnes. Chaque ligne de code, chaque décision de design compte."
          },
          {
            icon: Users,
            title: "Collaboratif",
            description: "Petite équipe, grand impact. La voix de chacun est entendue, et tout le monde contribue à notre direction."
          },
          {
            icon: Zap,
            title: "En mouvement",
            description: "Nous sommes une startup. Les choses bougent vite, les priorités changent, et c'est ce qui rend l'aventure excitante."
          },
          {
            icon: Globe,
            title: "Télétravail d'abord",
            description: "Travaillez de n'importe où au Canada. Nous croyons que le meilleur travail se fait quand on est à l'aise."
          }
        ]
      },
      openings: {
        title: "Postes ouverts",
        description: "Nous recherchons toujours des personnes talentueuses qui partagent notre vision. Même si vous ne voyez pas un poste parfait, contactez-nous—nous serions ravis de vous connaître.",
        noOpenings: "Aucun poste ouvert pour le moment",
        noOpeningsDesc: "Nous ne recrutons pas activement en ce moment, mais nous sommes toujours intéressés à rencontrer des personnes talentueuses. Envoyez-nous votre CV et dites-nous pourquoi vous seriez un excellent ajout.",
        positions: []
      },
      cta: {
        title: "Vous ne trouvez pas le bon poste?",
        description: "Nous sommes toujours intéressés à rencontrer des personnes talentueuses. Envoyez-nous votre CV et parlez-nous de vous.",
        button: "Nous contacter"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
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

      {/* Culture */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">
            {t.culture.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.culture.values.map((value, index) => (
              <div key={index} className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {t.openings.title}
            </h2>
            <p className="text-slate-600">
              {t.openings.description}
            </p>
          </div>

          {t.openings.positions.length === 0 ? (
            <div className="max-w-xl mx-auto text-center p-8 bg-white rounded-lg border border-slate-200">
              <p className="text-lg font-medium text-slate-900 mb-2">
                {t.openings.noOpenings}
              </p>
              <p className="text-slate-600 text-sm">
                {t.openings.noOpeningsDesc}
              </p>
            </div>
          ) : (
            <div className="space-y-4 max-w-3xl mx-auto">
              {/* Position cards would go here */}
            </div>
          )}
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
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg">
              <Link href="/contact">
                {t.cta.button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
