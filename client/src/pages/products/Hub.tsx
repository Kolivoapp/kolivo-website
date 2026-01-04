/**
 * HUB by KOLIVO™ Product Page
 * Design: Swiss Corporate Modernism
 * Bilingual support (FR/EN)
 * 
 * HUB is a shared living management platform (roommate/colocation app)
 */

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
  Users
} from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProductHub() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "Product",
      title: "HUB by KOLIVO™",
      subtitle: "The human infrastructure for shared living",
      description: "HUB simplifies managing your shared living with kindness. Finances, tasks, calendar and more, all in one app designed for roommates and co-living communities.",
      cta: "Request a Demo",
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
        title: "Ready to Simplify Your Shared Living?",
        description: "Join thousands of housemates who have discovered a better way to live together.",
        button: "Get Started with HUB"
      }
    },
    fr: {
      tagline: "Produit",
      title: "HUB by KOLIVO™",
      subtitle: "L'infrastructure humaine de la vie partagée",
      description: "HUB simplifie la gestion de votre colocation avec bienveillance. Finances, tâches, calendrier et plus encore, dans une seule application conçue pour les colocataires et les communautés de vie partagée.",
      cta: "Demander une Démo",
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
        title: "Prêt à simplifier votre colocation?",
        description: "Rejoignez des milliers de colocataires qui ont découvert une meilleure façon de vivre ensemble.",
        button: "Commencer avec HUB"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/images/platform-hub.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#1a2332]/80 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="section-number mb-4">{t.tagline}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t.title}
            </h1>
            <p className="text-2xl text-primary font-medium mb-6">
              {t.subtitle}
            </p>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              {t.description}
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                {t.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="section-number mb-4">{t.overview.tagline}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.overview.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t.overview.description1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.overview.description2}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            {t.features.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            {t.values.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {t.values.items.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              {t.ctaSection.title}
            </h2>
            <p className="text-lg text-white/70 mb-8">
              {t.ctaSection.description}
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                {t.ctaSection.button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
