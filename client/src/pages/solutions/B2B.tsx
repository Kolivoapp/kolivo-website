/**
 * B2B Solutions Page
 * Style: Institutional Light Mode
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, LineChart, Users, Workflow, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SolutionB2B() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        tagline: "Solutions",
        title: "B2B Solutions",
        description: "Master the complexity of B2B engagement with a unified platform that orchestrates every touchpoint of your customer relationships."
      },
      challenge: {
        tagline: "The Challenge",
        title: "B2B complexity demands unified control",
        description: "B2B relationships are inherently complex. Multiple stakeholders, extended sales cycles, sophisticated commercial terms, and ongoing service delivery create a web of interactions that most systems cannot adequately manage. KOLIVO™ provides the unified platform to orchestrate this complexity with precision."
      },
      features: [
        {
          icon: Briefcase,
          title: "Account Management",
          description: "A complete view of every account relationship, from initial engagement through ongoing partnership."
        },
        {
          icon: Workflow,
          title: "Complex Deal Management",
          description: "Structured workflows for managing sophisticated commercial arrangements and multi-party agreements."
        },
        {
          icon: Users,
          title: "Stakeholder Orchestration",
          description: "Manage relationships across multiple contacts, roles, and decision-making hierarchies within each account."
        },
        {
          icon: LineChart,
          title: "Revenue Intelligence",
          description: "Clear visibility into pipeline health, forecast accuracy, and revenue performance across your B2B portfolio."
        }
      ],
      cta: {
        title: "Ready to transform your B2B operations?",
        description: "Connect with our team to explore how KOLIVO™ can unify your B2B customer engagement.",
        button: "Contact Us"
      }
    },
    fr: {
      hero: {
        tagline: "Solutions",
        title: "Solutions B2B",
        description: "Maîtrisez la complexité de l'engagement B2B avec une plateforme unifiée qui orchestre chaque point de contact de vos relations clients."
      },
      challenge: {
        tagline: "Le défi",
        title: "La complexité B2B exige un contrôle unifié",
        description: "Les relations B2B sont intrinsèquement complexes. Multiples parties prenantes, cycles de vente prolongés, conditions commerciales sophistiquées et prestation de services continue créent un réseau d'interactions que la plupart des systèmes ne peuvent pas gérer adéquatement. KOLIVO™ fournit la plateforme unifiée pour orchestrer cette complexité avec précision."
      },
      features: [
        {
          icon: Briefcase,
          title: "Gestion des comptes",
          description: "Une vue complète de chaque relation de compte, de l'engagement initial au partenariat continu."
        },
        {
          icon: Workflow,
          title: "Gestion des transactions complexes",
          description: "Flux de travail structurés pour gérer des arrangements commerciaux sophistiqués et des accords multipartites."
        },
        {
          icon: Users,
          title: "Orchestration des parties prenantes",
          description: "Gérez les relations à travers plusieurs contacts, rôles et hiérarchies décisionnelles au sein de chaque compte."
        },
        {
          icon: LineChart,
          title: "Intelligence des revenus",
          description: "Visibilité claire sur la santé du pipeline, la précision des prévisions et la performance des revenus à travers votre portefeuille B2B."
        }
      ],
      cta: {
        title: "Prêt à transformer vos opérations B2B?",
        description: "Connectez-vous avec notre équipe pour explorer comment KOLIVO™ peut unifier votre engagement client B2B.",
        button: "Nous contacter"
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

      {/* Challenge */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
              {t.challenge.tagline}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              {t.challenge.title}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t.challenge.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.features.map((feature, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
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
