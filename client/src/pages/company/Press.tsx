/**
 * Press Page
 * Style: Institutional Light Mode
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CDN } from "@/lib/cdn";

export default function Press() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        tagline: "Press",
        title: "Media resources",
        description: "Everything you need to write about KOLIVO™. Brand assets, company information, and media contact details."
      },
      about: {
        title: "About KOLIVO™",
        description: "KOLIVO™ Technologies Inc. is a Canadian technology company building platforms for collaborative living. Founded in Montréal, we're creating tools that help roommates, property managers, and communities organize shared spaces with clarity and trust.",
        facts: [
          { label: "Founded", value: "2024" },
          { label: "Headquarters", value: "Montréal, Québec" },
          { label: "Focus", value: "Collaborative Living Technology" },
          { label: "Status", value: "Private" }
        ]
      },
      assets: {
        title: "Brand assets",
        description: "Download our logo and brand assets for use in articles and publications. Please follow our brand guidelines when using these materials.",
        download: "Download Brand Kit",
        guidelines: "View Brand Guidelines"
      },
      contact: {
        title: "Media inquiries",
        description: "For press inquiries, interview requests, or additional information, please contact our communications team.",
        email: "press@kolivo.ca",
        button: "Contact Press Team"
      }
    },
    fr: {
      hero: {
        tagline: "Presse",
        title: "Ressources médias",
        description: "Tout ce dont vous avez besoin pour écrire sur KOLIVO™. Ressources de marque, informations sur l'entreprise et coordonnées médias."
      },
      about: {
        title: "À propos de KOLIVO™",
        description: "KOLIVO™ Technologies Inc. est une entreprise technologique canadienne qui développe des plateformes pour la vie collaborative. Fondée à Montréal, nous créons des outils qui aident les colocataires, gestionnaires immobiliers et communautés à organiser les espaces partagés avec clarté et confiance.",
        facts: [
          { label: "Fondée", value: "2024" },
          { label: "Siège social", value: "Montréal, Québec" },
          { label: "Domaine", value: "Technologie de vie collaborative" },
          { label: "Statut", value: "Privée" }
        ]
      },
      assets: {
        title: "Ressources de marque",
        description: "Téléchargez notre logo et nos ressources de marque pour utilisation dans vos articles et publications. Veuillez suivre nos directives de marque lors de l'utilisation de ces matériaux.",
        download: "Télécharger le kit de marque",
        guidelines: "Voir les directives de marque"
      },
      contact: {
        title: "Demandes médias",
        description: "Pour les demandes de presse, les demandes d'entrevue ou des informations supplémentaires, veuillez contacter notre équipe de communications.",
        email: "press@kolivo.ca",
        button: "Contacter l'équipe presse"
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

      {/* About */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              {t.about.title}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {t.about.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.about.facts.map((fact, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">{fact.label}</p>
                  <p className="font-semibold text-slate-900">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              {t.assets.title}
            </h2>
            <p className="text-slate-600 mb-8">
              {t.assets.description}
            </p>
            
            {/* Logo Preview */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-8 bg-white rounded-lg border border-slate-200 flex items-center justify-center">
                <img 
                  src={CDN.logos.wordmark.dark}
                  alt="KOLIVO™ Logo Dark"
                  className="h-8 w-auto"
                />
              </div>
              <div className="p-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <img 
                  src={CDN.logos.wordmark.white}
                  alt="KOLIVO™ Logo White"
                  className="h-8 w-auto"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg">
                <Download className="w-4 h-4 mr-2" />
                {t.assets.download}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 lg:py-20 bg-slate-900">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.contact.title}
            </h2>
            <p className="text-slate-300 text-lg mb-6">
              {t.contact.description}
            </p>
            <p className="text-white font-medium mb-8">
              {t.contact.email}
            </p>
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg">
              <a href={`mailto:${t.contact.email}`}>
                <Mail className="w-4 h-4 mr-2" />
                {t.contact.button}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
