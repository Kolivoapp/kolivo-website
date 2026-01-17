/**
 * HUB by KOLIVO™ Product Page
 * Style: Institutional Light Mode
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Wallet, 
  ClipboardList, 
  Calendar, 
  ShoppingCart, 
  Package, 
  FileText,
  MessageCircle,
  Vote,
  Wrench,
  Heart,
  Shield,
  Users,
  Bell
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import WaitlistForm from "@/components/WaitlistForm";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CDN } from "@/lib/cdn";

export default function ProductHub() {
  const { language } = useLanguage();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const content = {
    en: {
      tagline: "Product",
      title: "KOLIVO™ Hub",
      subtitle: "The human infrastructure for shared living",
      description: "HUB simplifies managing your shared living with kindness. Finances, tasks, calendar and more, all in one app designed for roommates and co-living communities.",
      cta: "Become a Beta Tester",
      betaTesting: "Beta Testing",
      overview: {
        tagline: "Overview",
        title: "Everything You Need for Harmonious Shared Living",
        description1: "HUB by KOLIVO™ is the comprehensive platform that transforms how people live together. From managing shared expenses to coordinating household tasks, HUB provides the tools that foster harmony and mutual respect.",
        description2: "Built on principles of kindness, trust, and fairness, HUB eliminates the friction of shared living while strengthening the bonds between housemates."
      },
      features: {
        title: "Core Features",
        items: [
          {
            icon: Wallet,
            title: "Shared Finances",
            desc: "Manage shared expenses stress-free. Fair splitting, balance tracking, and gentle payment reminders."
          },
          {
            icon: ClipboardList,
            title: "Tasks & Chores",
            desc: "Smart rotation that respects everyone's rhythm. No more arguments about who does what."
          },
          {
            icon: Calendar,
            title: "Shared Calendar",
            desc: "Events, vacations and absences visible to all. Stay coordinated effortlessly."
          },
          {
            icon: ShoppingCart,
            title: "Smart Grocery",
            desc: "Collaborative shopping list with allergen detection. Never forget an item again."
          },
          {
            icon: Package,
            title: "Inventory",
            desc: "Track common and personal items with photos. Know what belongs to whom."
          },
          {
            icon: FileText,
            title: "Agreements",
            desc: "Create and sign your roommate agreements digitally. Clear rules, no confusion."
          },
          {
            icon: MessageCircle,
            title: "Chat & Announcements",
            desc: "Real-time communication between housemates. Important messages that don't get lost."
          },
          {
            icon: Vote,
            title: "Polls & Decisions",
            desc: "Democratic voting on household decisions. Everyone's voice matters."
          },
          {
            icon: Wrench,
            title: "Maintenance",
            desc: "Report and track repairs. Keep your shared space in top condition."
          }
        ]
      },
      values: {
        title: "Our Values",
        items: [
          {
            icon: Heart,
            title: "Kindness",
            desc: "Zero guilt-tripping, non-violent communication. HUB promotes understanding, not blame."
          },
          {
            icon: Shield,
            title: "Trust",
            desc: "Your data stays private and secure. We never share your personal information."
          },
          {
            icon: Users,
            title: "Fairness",
            desc: "Fair distribution that respects everyone's situation. Equity over equality."
          }
        ]
      },
      ctaSection: {
        title: "Be part of the journey",
        description: "Join our beta program and help shape the future of shared living. Your feedback matters.",
        button: "Become a Beta Tester"
      }
    },
    fr: {
      tagline: "Produit",
      title: "KOLIVO™ Hub",
      subtitle: "L'infrastructure humaine de la vie partagée",
      description: "HUB simplifie la gestion de votre colocation avec bienveillance. Finances, tâches, calendrier et plus encore, dans une seule application conçue pour les colocataires et les communautés de vie partagée.",
      cta: "Devenez testeur",
      betaTesting: "Test bêta",
      overview: {
        tagline: "Aperçu",
        title: "Tout ce dont vous avez besoin pour une colocation harmonieuse",
        description1: "HUB by KOLIVO™ est la plateforme complète qui transforme la façon dont les gens vivent ensemble. De la gestion des dépenses partagées à la coordination des tâches ménagères, HUB fournit les outils qui favorisent l'harmonie et le respect mutuel.",
        description2: "Construit sur des principes de bienveillance, de confiance et d'équité, HUB élimine les frictions de la vie partagée tout en renforçant les liens entre colocataires."
      },
      features: {
        title: "Fonctionnalités Principales",
        items: [
          {
            icon: Wallet,
            title: "Finances Partagées",
            desc: "Gérez les dépenses communes sans stress. Répartition équitable, suivi des balances et rappels de paiement bienveillants."
          },
          {
            icon: ClipboardList,
            title: "Tâches & Corvées",
            desc: "Rotation intelligente qui respecte le rythme de chacun. Plus de disputes sur qui fait quoi."
          },
          {
            icon: Calendar,
            title: "Calendrier Partagé",
            desc: "Événements, vacances et absences visibles par tous. Restez coordonnés sans effort."
          },
          {
            icon: ShoppingCart,
            title: "Épicerie Intelligente",
            desc: "Liste de courses collaborative avec détection d'allergènes. N'oubliez plus jamais un article."
          },
          {
            icon: Package,
            title: "Inventaire",
            desc: "Suivez les biens communs et personnels avec photos. Sachez ce qui appartient à qui."
          },
          {
            icon: FileText,
            title: "Ententes",
            desc: "Créez et signez vos ententes de colocation numériquement. Des règles claires, pas de confusion."
          },
          {
            icon: MessageCircle,
            title: "Chat & Annonces",
            desc: "Communication en temps réel entre colocataires. Des messages importants qui ne se perdent pas."
          },
          {
            icon: Vote,
            title: "Sondages & Décisions",
            desc: "Vote démocratique sur les décisions du foyer. La voix de chacun compte."
          },
          {
            icon: Wrench,
            title: "Maintenance",
            desc: "Signalez et suivez les réparations. Gardez votre espace partagé en parfait état."
          }
        ]
      },
      values: {
        title: "Nos Valeurs",
        items: [
          {
            icon: Heart,
            title: "Bienveillance",
            desc: "Zéro culpabilisation, communication non violente. HUB favorise la compréhension, pas le blâme."
          },
          {
            icon: Shield,
            title: "Confiance",
            desc: "Vos données restent privées et sécurisées. Nous ne partageons jamais vos informations personnelles."
          },
          {
            icon: Users,
            title: "Équité",
            desc: "Répartition juste qui respecte la situation de chacun. L'équité plutôt que l'égalité."
          }
        ]
      },
      ctaSection: {
        title: "Faites partie de l'aventure",
        description: "Rejoignez notre programme bêta et aidez à façonner l'avenir de la vie partagée. Votre avis compte.",
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
            {/* Product Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src={CDN.products.hub.accent}
                alt="KOLIVO™ Hub"
                className="h-10 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
              <Bell className="w-4 h-4" />
              {t.betaTesting}
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
              {t.tagline}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-emerald-600 font-medium mb-6">
              {t.subtitle}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              {t.description}
            </p>
            <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg">
                  {t.cta}
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

      {/* Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
              {t.overview.tagline}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              {t.overview.title}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              {t.overview.description1}
            </p>
            <p className="text-slate-600 leading-relaxed">
              {t.overview.description2}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
            {t.features.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.items.map((feature, index) => (
              <div 
                key={index}
                className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
            {t.values.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {t.values.items.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.desc}
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
            <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg">
                  {t.ctaSection.button}
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
