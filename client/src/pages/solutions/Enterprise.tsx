/**
 * Enterprise Solutions Page
 * Style: Institutional Light Mode
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Shield, Layers, Globe, Users, Lock } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SolutionEnterprise() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        tagline: "Enterprise Solutions",
        title: "Scale with confidence",
        description: "KOLIVO™ provides enterprise-grade infrastructure for organizations managing multiple properties, teams, or communities. Unified control, consistent governance, and operational excellence."
      },
      challenge: {
        title: "Enterprise complexity, simplified",
        description: "Large organizations face unique challenges: multiple locations, diverse teams, varying regulations, and complex reporting requirements. KOLIVO™ brings order to this complexity while preserving operational flexibility."
      },
      features: [
        {
          icon: Building2,
          title: "Multi-Property Management",
          description: "Unified dashboard for managing multiple properties, buildings, or communities from a single interface."
        },
        {
          icon: Users,
          title: "Team Hierarchy",
          description: "Flexible organizational structures with role-based access control and delegation capabilities."
        },
        {
          icon: Shield,
          title: "Compliance & Governance",
          description: "Built-in compliance tools for Canadian privacy regulations including Quebec's Law 25."
        },
        {
          icon: Layers,
          title: "Integration Ready",
          description: "Connect with your existing systems through our API. Compatible with major property management platforms."
        },
        {
          icon: Globe,
          title: "Bilingual Operations",
          description: "Full support for English and French across all interfaces, reports, and communications."
        },
        {
          icon: Lock,
          title: "Enterprise Security",
          description: "Advanced security features including SSO integration, audit logs, and data encryption."
        }
      ],
      cta: {
        title: "Ready to discuss enterprise solutions?",
        description: "Our team can help you understand how KOLIVO™ fits your organization's needs.",
        button: "Contact Us"
      }
    },
    fr: {
      hero: {
        tagline: "Solutions entreprise",
        title: "Croître en confiance",
        description: "KOLIVO™ fournit une infrastructure de niveau entreprise pour les organisations gérant plusieurs propriétés, équipes ou communautés. Contrôle unifié, gouvernance cohérente et excellence opérationnelle."
      },
      challenge: {
        title: "Complexité entreprise, simplifiée",
        description: "Les grandes organisations font face à des défis uniques : emplacements multiples, équipes diverses, réglementations variées et exigences de rapports complexes. KOLIVO™ apporte de l'ordre à cette complexité tout en préservant la flexibilité opérationnelle."
      },
      features: [
        {
          icon: Building2,
          title: "Gestion multi-propriétés",
          description: "Tableau de bord unifié pour gérer plusieurs propriétés, bâtiments ou communautés depuis une seule interface."
        },
        {
          icon: Users,
          title: "Hiérarchie d'équipe",
          description: "Structures organisationnelles flexibles avec contrôle d'accès basé sur les rôles et capacités de délégation."
        },
        {
          icon: Shield,
          title: "Conformité et gouvernance",
          description: "Outils de conformité intégrés pour les réglementations canadiennes sur la vie privée, incluant la Loi 25 du Québec."
        },
        {
          icon: Layers,
          title: "Prêt pour l'intégration",
          description: "Connectez-vous à vos systèmes existants via notre API. Compatible avec les principales plateformes de gestion immobilière."
        },
        {
          icon: Globe,
          title: "Opérations bilingues",
          description: "Support complet en anglais et français sur toutes les interfaces, rapports et communications."
        },
        {
          icon: Lock,
          title: "Sécurité entreprise",
          description: "Fonctionnalités de sécurité avancées incluant l'intégration SSO, journaux d'audit et chiffrement des données."
        }
      ],
      cta: {
        title: "Prêt à discuter des solutions entreprise?",
        description: "Notre équipe peut vous aider à comprendre comment KOLIVO™ répond aux besoins de votre organisation.",
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
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-4">
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
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {t.challenge.title}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {t.challenge.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-slate-50 border border-slate-200"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-slate-700" />
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
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-lg">
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
