/**
 * Public Sector Solutions Page
 * Style: Institutional Light Mode
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Shield, FileCheck, Users, Scale, Globe } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SolutionPublicSector() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        tagline: "Public Sector",
        title: "Ready for government requirements",
        description: "KOLIVO™ is designed with the compliance, security, and transparency requirements of Canadian public sector organizations in mind. From municipalities to provincial agencies."
      },
      readiness: {
        title: "Built for public sector needs",
        description: "Government and public sector organizations have unique requirements around data sovereignty, accessibility, and procurement. KOLIVO™ addresses these needs from the ground up."
      },
      features: [
        {
          icon: Shield,
          title: "Canadian Data Residency",
          description: "All data is stored on Canadian servers. Your constituents' information never leaves the country."
        },
        {
          icon: FileCheck,
          title: "Compliance Ready",
          description: "Designed to meet Canadian privacy regulations including PIPEDA and Quebec's Law 25 requirements."
        },
        {
          icon: Scale,
          title: "Accessibility Standards",
          description: "Built to meet WCAG 2.1 AA standards, ensuring all citizens can access and use our platforms."
        },
        {
          icon: Globe,
          title: "Bilingual by Default",
          description: "Full English and French support across all interfaces, meeting official language requirements."
        },
        {
          icon: Users,
          title: "Multi-Tenant Architecture",
          description: "Support for multiple departments, agencies, or municipalities from a single deployment."
        },
        {
          icon: Building2,
          title: "Procurement Friendly",
          description: "We understand public procurement processes and can work within your existing frameworks."
        }
      ],
      cta: {
        title: "Interested in public sector solutions?",
        description: "Contact us to discuss how KOLIVO™ can support your organization's housing and community initiatives.",
        button: "Contact Us"
      }
    },
    fr: {
      hero: {
        tagline: "Secteur public",
        title: "Prêt pour les exigences gouvernementales",
        description: "KOLIVO™ est conçu en tenant compte des exigences de conformité, de sécurité et de transparence des organisations du secteur public canadien. Des municipalités aux agences provinciales."
      },
      readiness: {
        title: "Construit pour les besoins du secteur public",
        description: "Les organisations gouvernementales et du secteur public ont des exigences uniques en matière de souveraineté des données, d'accessibilité et d'approvisionnement. KOLIVO™ répond à ces besoins dès la conception."
      },
      features: [
        {
          icon: Shield,
          title: "Résidence des données au Canada",
          description: "Toutes les données sont stockées sur des serveurs canadiens. Les informations de vos citoyens ne quittent jamais le pays."
        },
        {
          icon: FileCheck,
          title: "Prêt pour la conformité",
          description: "Conçu pour répondre aux réglementations canadiennes sur la vie privée, incluant PIPEDA et les exigences de la Loi 25 du Québec."
        },
        {
          icon: Scale,
          title: "Normes d'accessibilité",
          description: "Construit pour respecter les normes WCAG 2.1 AA, assurant que tous les citoyens peuvent accéder et utiliser nos plateformes."
        },
        {
          icon: Globe,
          title: "Bilingue par défaut",
          description: "Support complet en anglais et français sur toutes les interfaces, répondant aux exigences des langues officielles."
        },
        {
          icon: Users,
          title: "Architecture multi-locataire",
          description: "Support pour plusieurs départements, agences ou municipalités à partir d'un seul déploiement."
        },
        {
          icon: Building2,
          title: "Compatible avec l'approvisionnement",
          description: "Nous comprenons les processus d'approvisionnement public et pouvons travailler dans vos cadres existants."
        }
      ],
      cta: {
        title: "Intéressé par les solutions secteur public?",
        description: "Contactez-nous pour discuter de comment KOLIVO™ peut soutenir les initiatives de logement et communautaires de votre organisation.",
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
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-4">
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

      {/* Readiness */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {t.readiness.title}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {t.readiness.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-slate-50 border border-slate-200"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
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
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
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
