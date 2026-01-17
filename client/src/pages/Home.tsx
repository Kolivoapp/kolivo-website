/**
 * KOLIVO™ Home Page
 * Style: Institutional Light Mode with substantial content
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
        cta: "Start Free",
        ctaSecondary: "See How It Works",
        trusted: "Trusted by 2,000+ households across Canada"
      },
      features: {
        label: "Core Features",
        title: "Everything you need to manage shared living",
        description: "Hub by KOLIVO™ brings together all the tools roommates need to live harmoniously. No more spreadsheets, group chats, or awkward money conversations.",
        items: [
          {
            icon: Wallet,
            title: "Smart Expense Splitting",
            description: "Track shared expenses, split bills automatically, and settle up with a tap. Supports equal splits, percentage-based, or custom allocations. Integrates with Canadian banks."
          },
          {
            icon: Calendar,
            title: "Shared Calendar & Tasks",
            description: "Coordinate schedules, assign chores, and set recurring tasks. Everyone knows who's responsible for what, and when. Automatic reminders keep things on track."
          },
          {
            icon: MessageSquare,
            title: "Household Communication",
            description: "A dedicated space for household discussions, announcements, and decisions. Keep important conversations separate from personal chats. Voting on household matters included."
          },
          {
            icon: Lock,
            title: "Secure Document Storage",
            description: "Store lease agreements, receipts, and important documents in one secure place. All roommates can access what they need, when they need it."
          },
          {
            icon: Globe,
            title: "Multi-Language Support",
            description: "Full support for English and French. Each roommate can use the app in their preferred language while sharing the same household."
          },
          {
            icon: Zap,
            title: "Instant Notifications",
            description: "Stay informed with real-time updates on expenses, tasks, and messages. Customizable notification preferences so you're never overwhelmed."
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
            description: "The core application for roommates. Manage expenses, tasks, schedules, and communication in one place. Available on iOS, Android, and web.",
            color: PRODUCT_COLORS.hub,
            icon: Users,
            href: "/products/hub",
            status: "Available"
          },
          {
            name: "Nest",
            fullName: "Nest by KOLIVO™",
            description: "Property management for shared residences. Designed for landlords and property managers who rent to multiple tenants in shared units.",
            color: PRODUCT_COLORS.nest,
            icon: Building2,
            href: "/products/nest",
            status: "Coming 2027"
          },
          {
            name: "Seed",
            fullName: "Seed by KOLIVO™",
            description: "Community project incubator supporting social housing initiatives, cooperative living projects, and community-driven development.",
            color: PRODUCT_COLORS.seed,
            icon: Leaf,
            href: "/products/seed",
            status: "In Development"
          },
          {
            name: "Halo",
            fullName: "Halo by KOLIVO™",
            description: "Secure digital identity for the KOLIVO™ ecosystem. One account across all platforms with privacy-first design and Canadian data residency.",
            color: PRODUCT_COLORS.halo,
            icon: Shield,
            href: "/products/halo",
            status: "Available"
          }
        ]
      },
      trust: {
        label: "Security & Privacy",
        title: "Your data stays in Canada",
        description: "KOLIVO™ is built with privacy at its core. We're a Canadian company, subject to Canadian privacy laws, with all data stored on Canadian servers.",
        features: [
          "PIPEDA compliant — meeting federal privacy requirements",
          "Quebec Law 25 ready — prepared for provincial regulations",
          "Canadian data residency — your data never leaves the country",
          "End-to-end encryption — for sensitive financial data",
          "No data selling — we never sell your personal information",
          "Transparent practices — clear privacy policy, no hidden terms"
        ],
        cta: "Learn About Our Security"
      },
      stats: {
        households: "2,000+",
        householdsLabel: "Active Households",
        transactions: "$1.2M+",
        transactionsLabel: "Expenses Tracked",
        satisfaction: "4.8/5",
        satisfactionLabel: "User Rating"
      },
      cta: {
        title: "Ready to simplify your shared living?",
        description: "Join thousands of Canadian households who have discovered a better way to manage coliving. Free to start, no credit card required.",
        button: "Create Your Household",
        buttonSecondary: "Contact Sales"
      }
    },
    fr: {
      hero: {
        label: "Plateforme de gestion de colocation",
        title: "La plateforme complète pour la vie partagée",
        description: "KOLIVO™ offre tout ce dont les colocataires et gestionnaires immobiliers ont besoin pour organiser les espaces de vie partagés. Du partage des dépenses à la gestion des tâches, de la communication au suivi des baux — le tout sur une plateforme sécurisée construite au Canada.",
        cta: "Commencer gratuitement",
        ctaSecondary: "Voir comment ça marche",
        trusted: "Plus de 2 000 ménages nous font confiance au Canada"
      },
      features: {
        label: "Fonctionnalités principales",
        title: "Tout ce qu'il faut pour gérer la vie partagée",
        description: "Hub by KOLIVO™ réunit tous les outils dont les colocataires ont besoin pour vivre en harmonie. Fini les tableurs, les conversations de groupe et les discussions gênantes sur l'argent.",
        items: [
          {
            icon: Wallet,
            title: "Partage intelligent des dépenses",
            description: "Suivez les dépenses partagées, divisez les factures automatiquement et réglez vos comptes en un clic. Supporte les divisions égales, en pourcentage ou personnalisées. Intégration avec les banques canadiennes."
          },
          {
            icon: Calendar,
            title: "Calendrier et tâches partagés",
            description: "Coordonnez les horaires, assignez les corvées et définissez des tâches récurrentes. Tout le monde sait qui est responsable de quoi, et quand. Les rappels automatiques gardent tout sur la bonne voie."
          },
          {
            icon: MessageSquare,
            title: "Communication du ménage",
            description: "Un espace dédié aux discussions, annonces et décisions du ménage. Gardez les conversations importantes séparées des discussions personnelles. Vote sur les questions du ménage inclus."
          },
          {
            icon: Lock,
            title: "Stockage sécurisé de documents",
            description: "Conservez les contrats de bail, reçus et documents importants en un seul endroit sécurisé. Tous les colocataires peuvent accéder à ce dont ils ont besoin, quand ils en ont besoin."
          },
          {
            icon: Globe,
            title: "Support multilingue",
            description: "Support complet en anglais et en français. Chaque colocataire peut utiliser l'application dans sa langue préférée tout en partageant le même ménage."
          },
          {
            icon: Zap,
            title: "Notifications instantanées",
            description: "Restez informé avec des mises à jour en temps réel sur les dépenses, tâches et messages. Préférences de notification personnalisables pour ne jamais être submergé."
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
            description: "L'application principale pour les colocataires. Gérez dépenses, tâches, horaires et communication en un seul endroit. Disponible sur iOS, Android et web.",
            color: PRODUCT_COLORS.hub,
            icon: Users,
            href: "/products/hub",
            status: "Disponible"
          },
          {
            name: "Nest",
            fullName: "Nest by KOLIVO™",
            description: "Gestion immobilière pour résidences partagées. Conçu pour les propriétaires et gestionnaires qui louent à plusieurs locataires dans des unités partagées.",
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
            description: "Identité numérique sécurisée pour l'écosystème KOLIVO™. Un compte pour toutes les plateformes avec une conception axée sur la confidentialité et une résidence des données au Canada.",
            color: PRODUCT_COLORS.halo,
            icon: Shield,
            href: "/products/halo",
            status: "Disponible"
          }
        ]
      },
      trust: {
        label: "Sécurité et confidentialité",
        title: "Vos données restent au Canada",
        description: "KOLIVO™ est construit avec la confidentialité au cœur. Nous sommes une entreprise canadienne, soumise aux lois canadiennes sur la vie privée, avec toutes les données stockées sur des serveurs canadiens.",
        features: [
          "Conforme à la LPRPDE — respect des exigences fédérales de confidentialité",
          "Prêt pour la Loi 25 du Québec — préparé pour les réglementations provinciales",
          "Résidence des données au Canada — vos données ne quittent jamais le pays",
          "Chiffrement de bout en bout — pour les données financières sensibles",
          "Aucune vente de données — nous ne vendons jamais vos informations personnelles",
          "Pratiques transparentes — politique de confidentialité claire, pas de termes cachés"
        ],
        cta: "En savoir plus sur notre sécurité"
      },
      stats: {
        households: "2 000+",
        householdsLabel: "Ménages actifs",
        transactions: "1,2 M$+",
        transactionsLabel: "Dépenses suivies",
        satisfaction: "4,8/5",
        satisfactionLabel: "Note des utilisateurs"
      },
      cta: {
        title: "Prêt à simplifier votre colocation?",
        description: "Rejoignez des milliers de ménages canadiens qui ont découvert une meilleure façon de gérer la colocation. Gratuit pour commencer, aucune carte de crédit requise.",
        button: "Créer votre ménage",
        buttonSecondary: "Contacter les ventes"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero hero-accent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label">{t.hero.label}</p>
            <h1 className="mb-6">{t.hero.title}</h1>
            <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Button asChild size="lg" className="btn btn-primary btn-lg">
                <Link href="/contact">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn btn-secondary btn-lg">
                <Link href="/products/hub">
                  {t.hero.ctaSecondary}
                </Link>
              </Button>
            </div>

            <p className="text-sm text-foreground-muted">{t.hero.trusted}</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="stat-grid">
            <div>
              <div className="stat-value">{t.stats.households}</div>
              <div className="stat-label">{t.stats.householdsLabel}</div>
            </div>
            <div>
              <div className="stat-value">{t.stats.transactions}</div>
              <div className="stat-label">{t.stats.transactionsLabel}</div>
            </div>
            <div>
              <div className="stat-value">{t.stats.satisfaction}</div>
              <div className="stat-label">{t.stats.satisfactionLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">{t.features.label}</p>
            <h2 className="section-title">{t.features.title}</h2>
            <p className="section-description">{t.features.description}</p>
          </div>

          <div className="grid-3">
            {t.features.items.map((feature, index) => (
              <div key={index} className="card">
                <div 
                  className="product-icon"
                  style={{ backgroundColor: `${PRODUCT_COLORS.hub}15` }}
                >
                  <feature.icon 
                    className="w-5 h-5" 
                    style={{ color: PRODUCT_COLORS.hub }}
                  />
                </div>
                <h3 className="product-name">{feature.title}</h3>
                <p className="product-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <p className="section-label">{t.ecosystem.label}</p>
            <h2 className="section-title">{t.ecosystem.title}</h2>
            <p className="section-description">{t.ecosystem.description}</p>
          </div>

          <div className="grid-4">
            {t.ecosystem.products.map((product) => (
              <Link key={product.name} href={product.href}>
                <div className="product-card card-interactive">
                  <div className="flex items-center justify-between mb-3">
                    <div 
                      className="product-icon"
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
                  <h3 className="product-name">{product.fullName}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label">{t.trust.label}</p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t.trust.title}</h2>
              <p className="text-foreground-secondary text-lg mb-8 leading-relaxed">
                {t.trust.description}
              </p>
              
              <Button asChild className="btn btn-primary">
                <Link href="/security-trust">
                  {t.trust.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="feature-list">
              {t.trust.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <Check className="feature-icon" />
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t.cta.title}</h2>
            <p className="text-foreground-secondary text-lg mb-8">
              {t.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="btn btn-accent btn-lg">
                <Link href="/contact">
                  {t.cta.button}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn btn-secondary btn-lg">
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
