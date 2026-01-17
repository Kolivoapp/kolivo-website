/**
 * KOLIVO™ Home Page
 * Style: Institutional Light Mode
 * CORRECTED: No fake stats, no false certifications
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { PRODUCT_COLORS } from "@/lib/cdn";
import { 
  ArrowRight, 
  Check, 
  Shield, 
  Users, 
  Building2, 
  Leaf,
  Wallet,
  Calendar,
  MessageSquare,
  Lock,
  Globe,
  Zap
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        label: "Coliving Management Platform",
        title: "The complete platform for shared living",
        description: "KOLIVO™ provides everything roommates and property managers need to organize shared living spaces. From expense splitting to task management, communication to lease tracking — all in one secure platform built in Canada.",
        cta: "Join the Beta",
        ctaSecondary: "See How It Works"
      },
      features: {
        label: "Core Features",
        title: "Everything you need to manage shared living",
        description: "Hub by KOLIVO™ brings together all the tools roommates need to live harmoniously. No more spreadsheets, group chats, or awkward money conversations.",
        items: [
          {
            icon: Wallet,
            title: "Smart Expense Splitting",
            description: "Track shared expenses, split bills automatically, and settle up with a tap. Supports equal splits, percentage-based, or custom allocations."
          },
          {
            icon: Calendar,
            title: "Shared Calendar & Tasks",
            description: "Coordinate schedules, assign chores, and set recurring tasks. Everyone knows who's responsible for what, and when."
          },
          {
            icon: MessageSquare,
            title: "Household Communication",
            description: "A dedicated space for household discussions, announcements, and decisions. Keep important conversations separate from personal chats."
          },
          {
            icon: Lock,
            title: "Secure Document Storage",
            description: "Store lease agreements, receipts, and important documents in one secure place. All roommates can access what they need."
          },
          {
            icon: Globe,
            title: "Bilingual Support",
            description: "Full support for English and French. Each roommate can use the app in their preferred language while sharing the same household."
          },
          {
            icon: Zap,
            title: "Real-time Notifications",
            description: "Stay informed with updates on expenses, tasks, and messages. Customizable notification preferences so you're never overwhelmed."
          }
        ]
      },
      ecosystem: {
        label: "The KOLIVO™ Ecosystem",
        title: "A platform for every need",
        description: "Beyond Hub, KOLIVO™ is building a complete ecosystem for collaborative living. Each platform is designed to work seamlessly together.",
        products: [
          {
            name: "Hub",
            fullName: "Hub by KOLIVO™",
            description: "The core application for roommates. Manage expenses, tasks, schedules, and communication in one place. Currently in beta testing.",
            color: PRODUCT_COLORS.hub,
            icon: Users,
            href: "/products/hub",
            status: "Beta Testing"
          },
          {
            name: "Nest",
            fullName: "Nest by KOLIVO™",
            description: "Property management for shared residences. Designed for landlords and property managers who rent to multiple tenants.",
            color: PRODUCT_COLORS.nest,
            icon: Building2,
            href: "/products/nest",
            status: "Coming 2027"
          },
          {
            name: "Seed",
            fullName: "Seed by KOLIVO™",
            description: "Community project incubator supporting social housing initiatives, cooperative living projects, and community development.",
            color: PRODUCT_COLORS.seed,
            icon: Leaf,
            href: "/products/seed",
            status: "In Development"
          },
          {
            name: "Halo",
            fullName: "Halo by KOLIVO™",
            description: "Secure digital identity for the KOLIVO™ ecosystem. One account across all platforms with privacy-first design.",
            color: PRODUCT_COLORS.halo,
            icon: Shield,
            href: "/products/halo",
            status: "In Development"
          }
        ]
      },
      trust: {
        label: "Our Commitment",
        title: "Privacy and security by design",
        description: "KOLIVO™ is a Canadian company committed to protecting your data. We build our platforms with privacy as a core principle, not an afterthought.",
        features: [
          "Canadian company, Canadian values",
          "Your data is stored on Canadian servers",
          "We never sell your personal information",
          "Clear privacy policy, no hidden terms",
          "You control your data — export or delete anytime",
          "Encryption for sensitive information"
        ],
        cta: "Learn About Our Approach"
      },
      cta: {
        title: "Ready to simplify your shared living?",
        description: "Join our beta program and be among the first to experience a better way to manage coliving. Free to join, no credit card required.",
        button: "Join the Beta",
        buttonSecondary: "Contact Us"
      }
    },
    fr: {
      hero: {
        label: "Plateforme de gestion de colocation",
        title: "La plateforme complète pour la vie partagée",
        description: "KOLIVO™ offre tout ce dont les colocataires et gestionnaires immobiliers ont besoin pour organiser les espaces de vie partagés. Du partage des dépenses à la gestion des tâches, de la communication au suivi des baux — le tout sur une plateforme sécurisée construite au Canada.",
        cta: "Rejoindre la bêta",
        ctaSecondary: "Voir comment ça marche"
      },
      features: {
        label: "Fonctionnalités principales",
        title: "Tout ce qu'il faut pour gérer la vie partagée",
        description: "Hub by KOLIVO™ réunit tous les outils dont les colocataires ont besoin pour vivre en harmonie. Fini les tableurs, les conversations de groupe et les discussions gênantes sur l'argent.",
        items: [
          {
            icon: Wallet,
            title: "Partage intelligent des dépenses",
            description: "Suivez les dépenses partagées, divisez les factures automatiquement et réglez vos comptes en un clic. Supporte les divisions égales, en pourcentage ou personnalisées."
          },
          {
            icon: Calendar,
            title: "Calendrier et tâches partagés",
            description: "Coordonnez les horaires, assignez les corvées et définissez des tâches récurrentes. Tout le monde sait qui est responsable de quoi, et quand."
          },
          {
            icon: MessageSquare,
            title: "Communication du ménage",
            description: "Un espace dédié aux discussions, annonces et décisions du ménage. Gardez les conversations importantes séparées des discussions personnelles."
          },
          {
            icon: Lock,
            title: "Stockage sécurisé de documents",
            description: "Conservez les contrats de bail, reçus et documents importants en un seul endroit sécurisé. Tous les colocataires peuvent accéder à ce dont ils ont besoin."
          },
          {
            icon: Globe,
            title: "Support bilingue",
            description: "Support complet en anglais et en français. Chaque colocataire peut utiliser l'application dans sa langue préférée tout en partageant le même ménage."
          },
          {
            icon: Zap,
            title: "Notifications en temps réel",
            description: "Restez informé avec des mises à jour sur les dépenses, tâches et messages. Préférences de notification personnalisables pour ne jamais être submergé."
          }
        ]
      },
      ecosystem: {
        label: "L'écosystème KOLIVO™",
        title: "Une plateforme pour chaque besoin",
        description: "Au-delà de Hub, KOLIVO™ construit un écosystème complet pour la vie collaborative. Chaque plateforme est conçue pour fonctionner harmonieusement avec les autres.",
        products: [
          {
            name: "Hub",
            fullName: "Hub by KOLIVO™",
            description: "L'application principale pour les colocataires. Gérez dépenses, tâches, horaires et communication en un seul endroit. Actuellement en test bêta.",
            color: PRODUCT_COLORS.hub,
            icon: Users,
            href: "/products/hub",
            status: "Test bêta"
          },
          {
            name: "Nest",
            fullName: "Nest by KOLIVO™",
            description: "Gestion immobilière pour résidences partagées. Conçu pour les propriétaires et gestionnaires qui louent à plusieurs locataires.",
            color: PRODUCT_COLORS.nest,
            icon: Building2,
            href: "/products/nest",
            status: "Bientôt 2027"
          },
          {
            name: "Seed",
            fullName: "Seed by KOLIVO™",
            description: "Incubateur de projets communautaires soutenant les initiatives de logement social, les projets de vie coopérative et le développement communautaire.",
            color: PRODUCT_COLORS.seed,
            icon: Leaf,
            href: "/products/seed",
            status: "En développement"
          },
          {
            name: "Halo",
            fullName: "Halo by KOLIVO™",
            description: "Identité numérique sécurisée pour l'écosystème KOLIVO™. Un compte pour toutes les plateformes avec une conception axée sur la confidentialité.",
            color: PRODUCT_COLORS.halo,
            icon: Shield,
            href: "/products/halo",
            status: "En développement"
          }
        ]
      },
      trust: {
        label: "Notre engagement",
        title: "Confidentialité et sécurité par conception",
        description: "KOLIVO™ est une entreprise canadienne engagée à protéger vos données. Nous construisons nos plateformes avec la confidentialité comme principe fondamental, pas comme une réflexion après coup.",
        features: [
          "Entreprise canadienne, valeurs canadiennes",
          "Vos données sont stockées sur des serveurs canadiens",
          "Nous ne vendons jamais vos informations personnelles",
          "Politique de confidentialité claire, pas de termes cachés",
          "Vous contrôlez vos données — exportez ou supprimez à tout moment",
          "Chiffrement pour les informations sensibles"
        ],
        cta: "En savoir plus sur notre approche"
      },
      cta: {
        title: "Prêt à simplifier votre colocation?",
        description: "Rejoignez notre programme bêta et soyez parmi les premiers à découvrir une meilleure façon de gérer la colocation. Gratuit, aucune carte de crédit requise.",
        button: "Rejoindre la bêta",
        buttonSecondary: "Nous contacter"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-4">
              {t.hero.label}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg">
                <Link href="/contact">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6 py-3 rounded-lg">
                <Link href="/products/hub">
                  {t.hero.ctaSecondary}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
              {t.features.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {t.features.title}
            </h2>
            <p className="text-slate-600">
              {t.features.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.items.map((feature, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#10B98115' }}
                >
                  <feature.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
              {t.ecosystem.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {t.ecosystem.title}
            </h2>
            <p className="text-slate-600">
              {t.ecosystem.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.ecosystem.products.map((product) => (
              <Link key={product.name} href={product.href}>
                <div className="bg-white border border-slate-200 rounded-lg p-6 h-full hover:border-slate-300 hover:shadow-sm transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${product.color}15` }}
                    >
                      <product.icon 
                        className="w-5 h-5" 
                        style={{ color: product.color }}
                      />
                    </div>
                    <span 
                      className="text-xs font-medium px-2 py-1 rounded"
                      style={{ 
                        backgroundColor: `${product.color}15`,
                        color: product.color
                      }}
                    >
                      {product.status}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{product.fullName}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section - NO FALSE CERTIFICATIONS */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
                {t.trust.label}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {t.trust.title}
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {t.trust.description}
              </p>
              
              <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg">
                <Link href="/security-trust">
                  {t.trust.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-3">
              {t.trust.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {t.cta.title}
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              {t.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg">
                <Link href="/contact">
                  {t.cta.button}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6 py-3 rounded-lg">
                <Link href="/contact">
                  {t.cta.buttonSecondary}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
