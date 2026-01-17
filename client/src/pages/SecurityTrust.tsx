/**
 * Security & Trust Page
 * Style: Institutional Light Mode
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Eye, Check, Globe, Server, FileText } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SecurityTrust() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        tagline: "Security & Trust",
        title: "The foundation of our platform is trust",
        description: "Security and governance are not afterthoughts. They are the core, non-negotiable principles upon which our ecosystem is built."
      },
      privacy: {
        tagline: "01 — Privacy Approach",
        title: "Privacy by design, not by accident",
        description1: "We believe that privacy is a fundamental right, not a feature to be added later. Our platform is architected from the ground up to minimize data collection, maximize user control, and ensure that personal information is handled with the utmost care.",
        description2: "We collect only what is necessary, retain only what is required, and provide clear mechanisms for data subjects to exercise their rights under applicable privacy laws.",
        principlesTitle: "Our Privacy Principles",
        principles: [
          "Data minimization — we collect only what we need",
          "Purpose limitation — data is used only for stated purposes",
          "Transparency — clear communication about data practices",
          "User control — mechanisms to access, correct, and delete data"
        ]
      },
      canadian: {
        tagline: "02 — Canadian Values",
        title: "Built in Canada, for Canadians",
        description: "KOLIVO™ is a Canadian company, subject to Canadian privacy laws. We store data on Canadian servers and operate under Canadian jurisdiction, providing you with the protections of Canadian privacy legislation.",
        features: [
          { icon: Globe, title: "Canadian Company", desc: "Incorporated in Canada with Canadian leadership" },
          { icon: Server, title: "Canadian Servers", desc: "Your data stays in Canada on Canadian infrastructure" },
          { icon: FileText, title: "Canadian Laws", desc: "Subject to PIPEDA and provincial privacy regulations" },
          { icon: Shield, title: "Canadian Values", desc: "Privacy and respect are at our core" }
        ]
      },
      incident: {
        tagline: "03 — Incident Handling",
        title: "Transparency in adversity",
        description1: "No system is immune to incidents. What matters is how we respond. Our incident handling philosophy is built on three pillars: transparency, speed, and accountability.",
        description2: "When incidents occur, we communicate promptly and honestly with affected parties, take immediate action to contain and remediate, and conduct thorough post-incident reviews to prevent recurrence.",
        commitmentTitle: "Our Response Commitment",
        commitments: [
          "Immediate acknowledgment of confirmed incidents",
          "Regular status updates during active incidents",
          "Post-incident reports with root cause analysis",
          "Documented remediation and prevention measures"
        ]
      },
      commitments: {
        tagline: "Our Commitments",
        title: "What we promise",
        items: [
          "We never sell your personal information",
          "We use encryption for sensitive data",
          "We give you control over your data",
          "We are transparent about our practices",
          "We respond quickly to security concerns",
          "We continuously improve our security posture"
        ]
      },
      cta: {
        title: "Questions about our approach?",
        description: "We welcome the opportunity to discuss our security and privacy practices in detail.",
        button: "Contact Us"
      }
    },
    fr: {
      hero: {
        tagline: "Sécurité et confiance",
        title: "La confiance est le fondement de notre plateforme",
        description: "La sécurité et la gouvernance ne sont pas des réflexions après coup. Ce sont les principes fondamentaux et non négociables sur lesquels notre écosystème est construit."
      },
      privacy: {
        tagline: "01 — Approche de la confidentialité",
        title: "La confidentialité dès la conception",
        description1: "Nous croyons que la confidentialité est un droit fondamental, pas une fonctionnalité à ajouter plus tard. Notre plateforme est architecturée dès le départ pour minimiser la collecte de données, maximiser le contrôle utilisateur et garantir que les informations personnelles sont traitées avec le plus grand soin.",
        description2: "Nous collectons uniquement ce qui est nécessaire, conservons uniquement ce qui est requis et fournissons des mécanismes clairs pour que les personnes concernées exercent leurs droits en vertu des lois applicables.",
        principlesTitle: "Nos principes de confidentialité",
        principles: [
          "Minimisation des données — nous collectons uniquement ce dont nous avons besoin",
          "Limitation des finalités — les données sont utilisées uniquement aux fins déclarées",
          "Transparence — communication claire sur les pratiques de données",
          "Contrôle utilisateur — mécanismes pour accéder, corriger et supprimer les données"
        ]
      },
      canadian: {
        tagline: "02 — Valeurs canadiennes",
        title: "Construit au Canada, pour les Canadiens",
        description: "KOLIVO™ est une entreprise canadienne, assujettie aux lois canadiennes sur la protection de la vie privée. Nous stockons les données sur des serveurs canadiens et opérons sous la juridiction canadienne, vous offrant les protections de la législation canadienne.",
        features: [
          { icon: Globe, title: "Entreprise canadienne", desc: "Incorporée au Canada avec une direction canadienne" },
          { icon: Server, title: "Serveurs canadiens", desc: "Vos données restent au Canada sur une infrastructure canadienne" },
          { icon: FileText, title: "Lois canadiennes", desc: "Assujettie à la LPRPDE et aux règlements provinciaux" },
          { icon: Shield, title: "Valeurs canadiennes", desc: "La confidentialité et le respect sont au cœur de nos valeurs" }
        ]
      },
      incident: {
        tagline: "03 — Gestion des incidents",
        title: "Transparence dans l'adversité",
        description1: "Aucun système n'est à l'abri des incidents. Ce qui compte, c'est notre façon de répondre. Notre philosophie de gestion des incidents repose sur trois piliers : transparence, rapidité et responsabilité.",
        description2: "Lorsque des incidents surviennent, nous communiquons rapidement et honnêtement avec les parties concernées, prenons des mesures immédiates pour contenir et remédier, et menons des examens post-incident approfondis pour prévenir la récurrence.",
        commitmentTitle: "Notre engagement de réponse",
        commitments: [
          "Accusé de réception immédiat des incidents confirmés",
          "Mises à jour régulières pendant les incidents actifs",
          "Rapports post-incident avec analyse des causes profondes",
          "Mesures de remédiation et de prévention documentées"
        ]
      },
      commitments: {
        tagline: "Nos engagements",
        title: "Ce que nous promettons",
        items: [
          "Nous ne vendons jamais vos informations personnelles",
          "Nous utilisons le chiffrement pour les données sensibles",
          "Nous vous donnons le contrôle sur vos données",
          "Nous sommes transparents sur nos pratiques",
          "Nous répondons rapidement aux préoccupations de sécurité",
          "Nous améliorons continuellement notre posture de sécurité"
        ]
      },
      cta: {
        title: "Des questions sur notre approche?",
        description: "Nous accueillons l'opportunité de discuter en détail de nos pratiques de sécurité et de confidentialité.",
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

      {/* Privacy Approach */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
                {t.privacy.tagline}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                {t.privacy.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t.privacy.description1}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t.privacy.description2}
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {t.privacy.principlesTitle}
                </h3>
              </div>
              <div className="space-y-4">
                {t.privacy.principles.map((principle, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-emerald-600 font-semibold text-sm">0{index + 1}</span>
                    <span className="text-slate-600 text-sm">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canadian Values */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
              {t.canadian.tagline}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {t.canadian.title}
            </h2>
            <p className="text-slate-600">
              {t.canadian.description}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.canadian.features.map((feature, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Handling */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
                {t.incident.tagline}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                {t.incident.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t.incident.description1}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t.incident.description2}
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {t.incident.commitmentTitle}
                </h3>
              </div>
              <div className="space-y-4">
                {t.incident.commitments.map((commitment, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-emerald-600 font-semibold text-sm">0{index + 1}</span>
                    <span className="text-slate-600 text-sm">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
                {t.commitments.tagline}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                {t.commitments.title}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {t.commitments.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
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
