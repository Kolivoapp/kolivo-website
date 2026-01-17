/**
 * Impact & Community Solutions Page
 * Style: Institutional Light Mode
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Sprout, HandHeart, Building, Globe } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SolutionImpact() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        tagline: "Impact & Community",
        title: "Technology for social good",
        description: "KOLIVO™ supports organizations working to improve housing accessibility, build stronger communities, and create positive social impact. Special programs for non-profits, cooperatives, and social housing initiatives."
      },
      mission: {
        title: "Our commitment to community",
        description: "We believe technology should serve everyone, not just those who can afford premium solutions. That's why we offer special programs for organizations focused on social impact and community development."
      },
      programs: [
        {
          icon: Heart,
          title: "Non-Profit Program",
          description: "Reduced pricing and dedicated support for registered non-profit organizations working in housing and community services."
        },
        {
          icon: Users,
          title: "Cooperative Housing",
          description: "Tools designed for the unique governance and operational needs of housing cooperatives and co-living communities."
        },
        {
          icon: Building,
          title: "Social Housing",
          description: "Support for social housing providers managing affordable housing units and tenant services."
        },
        {
          icon: Sprout,
          title: "Community Incubation",
          description: "Through KOLIVO™ Seed, we support emerging community initiatives with resources, mentorship, and technology."
        },
        {
          icon: HandHeart,
          title: "Mutual Aid Networks",
          description: "Features that enable communities to share resources, skills, and support among members."
        },
        {
          icon: Globe,
          title: "Local Impact",
          description: "We prioritize partnerships with Canadian organizations working to improve housing in their communities."
        }
      ],
      cta: {
        title: "Working on community impact?",
        description: "Tell us about your organization and how we can support your mission.",
        button: "Get in Touch"
      }
    },
    fr: {
      hero: {
        tagline: "Impact et communauté",
        title: "La technologie pour le bien social",
        description: "KOLIVO™ soutient les organisations qui travaillent à améliorer l'accessibilité au logement, à construire des communautés plus fortes et à créer un impact social positif. Programmes spéciaux pour les OBNL, coopératives et initiatives de logement social."
      },
      mission: {
        title: "Notre engagement envers la communauté",
        description: "Nous croyons que la technologie devrait servir tout le monde, pas seulement ceux qui peuvent se permettre des solutions premium. C'est pourquoi nous offrons des programmes spéciaux pour les organisations axées sur l'impact social et le développement communautaire."
      },
      programs: [
        {
          icon: Heart,
          title: "Programme OBNL",
          description: "Tarification réduite et support dédié pour les organismes à but non lucratif enregistrés œuvrant dans le logement et les services communautaires."
        },
        {
          icon: Users,
          title: "Coopératives d'habitation",
          description: "Outils conçus pour les besoins uniques de gouvernance et d'exploitation des coopératives d'habitation et communautés de vie partagée."
        },
        {
          icon: Building,
          title: "Logement social",
          description: "Support pour les fournisseurs de logement social gérant des unités de logement abordable et services aux locataires."
        },
        {
          icon: Sprout,
          title: "Incubation communautaire",
          description: "À travers KOLIVO™ Seed, nous soutenons les initiatives communautaires émergentes avec des ressources, du mentorat et de la technologie."
        },
        {
          icon: HandHeart,
          title: "Réseaux d'entraide",
          description: "Fonctionnalités qui permettent aux communautés de partager ressources, compétences et soutien entre membres."
        },
        {
          icon: Globe,
          title: "Impact local",
          description: "Nous priorisons les partenariats avec des organisations canadiennes travaillant à améliorer le logement dans leurs communautés."
        }
      ],
      cta: {
        title: "Vous travaillez sur l'impact communautaire?",
        description: "Parlez-nous de votre organisation et comment nous pouvons soutenir votre mission.",
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
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-600 mb-4">
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

      {/* Mission */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {t.mission.title}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {t.mission.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.programs.map((program, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-slate-50 border border-slate-200"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {program.description}
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
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg">
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
