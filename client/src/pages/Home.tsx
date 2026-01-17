/**
 * KOLIVO™ Home Page
 * Style: Institutional / Corporate (Scotiabank-inspired)
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { PRODUCT_COLORS } from "@/lib/cdn";
import { ArrowRight, Check, Shield, Users, Building2, Leaf } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        title: "Shared living,",
        titleAccent: "simplified.",
        description: "KOLIVO™ builds the infrastructure for collaborative living. Technology that brings people together — with clarity, trust, and respect.",
        cta: "Get Started",
        ctaSecondary: "Learn More"
      },
      products: {
        title: "Our Ecosystem",
        description: "A complete suite of platforms designed for shared living and collaborative communities.",
        items: [
          {
            name: "Hub",
            fullName: "Hub by KOLIVO™",
            desc: "The app for shared living. Manage expenses, tasks, and communication in one place.",
            color: PRODUCT_COLORS.hub,
            icon: Users,
            href: "/products/hub"
          },
          {
            name: "Nest",
            fullName: "Nest by KOLIVO™",
            desc: "Property management for shared residences. Built for owners and managers.",
            color: PRODUCT_COLORS.nest,
            icon: Building2,
            href: "/products/nest"
          },
          {
            name: "Seed",
            fullName: "Seed by KOLIVO™",
            desc: "Community project incubator. Supporting social impact initiatives.",
            color: PRODUCT_COLORS.seed,
            icon: Leaf,
            href: "/products/seed"
          },
          {
            name: "Halo",
            fullName: "Halo by KOLIVO™",
            desc: "Secure digital identity. One login across the entire KOLIVO™ ecosystem.",
            color: PRODUCT_COLORS.halo,
            icon: Shield,
            href: "/products/halo"
          }
        ]
      },
      trust: {
        title: "Built on Trust",
        description: "Privacy by design. Compliance by default. Your data stays yours.",
        features: [
          "End-to-end encryption",
          "PIPEDA compliant",
          "Quebec Law 25 ready",
          "Canadian data residency"
        ],
        cta: "Security & Trust"
      },
      cta: {
        title: "Ready to simplify shared living?",
        description: "Join thousands who have discovered a better way to live together.",
        button: "Connect with KOLIVO™"
      }
    },
    fr: {
      hero: {
        title: "La colocation,",
        titleAccent: "simplifiée.",
        description: "KOLIVO™ construit l'infrastructure de la vie collaborative. La technologie qui rapproche les gens — avec clarté, confiance et respect.",
        cta: "Commencer",
        ctaSecondary: "En savoir plus"
      },
      products: {
        title: "Notre Écosystème",
        description: "Une suite complète de plateformes conçues pour la vie partagée et les communautés collaboratives.",
        items: [
          {
            name: "Hub",
            fullName: "Hub by KOLIVO™",
            desc: "L'application de la colocation. Gérez dépenses, tâches et communication en un seul endroit.",
            color: PRODUCT_COLORS.hub,
            icon: Users,
            href: "/products/hub"
          },
          {
            name: "Nest",
            fullName: "Nest by KOLIVO™",
            desc: "Gestion immobilière pour résidences partagées. Conçu pour propriétaires et gestionnaires.",
            color: PRODUCT_COLORS.nest,
            icon: Building2,
            href: "/products/nest"
          },
          {
            name: "Seed",
            fullName: "Seed by KOLIVO™",
            desc: "Incubateur de projets communautaires. Soutenir les initiatives d'impact social.",
            color: PRODUCT_COLORS.seed,
            icon: Leaf,
            href: "/products/seed"
          },
          {
            name: "Halo",
            fullName: "Halo by KOLIVO™",
            desc: "Identité numérique sécurisée. Une connexion pour tout l'écosystème KOLIVO™.",
            color: PRODUCT_COLORS.halo,
            icon: Shield,
            href: "/products/halo"
          }
        ]
      },
      trust: {
        title: "Bâti sur la Confiance",
        description: "Confidentialité par conception. Conformité par défaut. Vos données restent les vôtres.",
        features: [
          "Chiffrement de bout en bout",
          "Conforme LPRPDE",
          "Prêt pour la Loi 25",
          "Résidence des données au Canada"
        ],
        cta: "Sécurité et Confiance"
      },
      cta: {
        title: "Prêt à simplifier la colocation?",
        description: "Rejoignez des milliers de personnes qui ont découvert une meilleure façon de vivre ensemble.",
        button: "Connectez-vous avec KOLIVO™"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            {/* Left - Content */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t.hero.title}
                <br />
                <span className="text-hub">{t.hero.titleAccent}</span>
              </h1>
              
              <p className="text-lg text-foreground-secondary mb-8 leading-relaxed">
                {t.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-primary">
                  <Link href="/contact">
                    {t.hero.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-secondary">
                  <Link href="/products">
                    {t.hero.ctaSecondary}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Abstract representation of ecosystem */}
                <div className="grid grid-cols-2 gap-4">
                  {t.products.items.slice(0, 4).map((product, index) => (
                    <div 
                      key={product.name}
                      className="card p-6 animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div 
                        className="product-icon mb-4"
                        style={{ backgroundColor: `${product.color}20` }}
                      >
                        <product.icon 
                          className="w-6 h-6" 
                          style={{ color: product.color }}
                        />
                      </div>
                      <h3 className="font-semibold text-sm">{product.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t.products.title}</h2>
            <p className="section-description">{t.products.description}</p>
          </div>

          <div className="product-grid">
            {t.products.items.map((product) => (
              <Link key={product.name} href={product.href}>
                <div className="product-card h-full">
                  <div 
                    className="product-icon"
                    style={{ backgroundColor: `${product.color}15` }}
                  >
                    <product.icon 
                      className="w-6 h-6" 
                      style={{ color: product.color }}
                    />
                  </div>
                  <h3 className="product-name">{product.fullName}</h3>
                  <p className="product-description">{product.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="btn-secondary">
              <Link href="/products">
                {language === 'en' ? 'View all products' : 'Voir tous les produits'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section" style={{ background: 'var(--background-secondary)' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.trust.title}
              </h2>
              <p className="text-lg text-foreground-secondary mb-8">
                {t.trust.description}
              </p>
              
              <div className="feature-list mb-8">
                {t.trust.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <Check className="feature-icon" />
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="btn-primary">
                <Link href="/security-trust">
                  {t.trust.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Right - Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="card-elevated p-8 max-w-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-hub/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-hub" />
                  </div>
                  <div>
                    <p className="font-semibold">KOLIVO™ Security</p>
                    <p className="text-sm text-foreground-muted">Enterprise-grade protection</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-hub" />
                    <span className="text-foreground-secondary">256-bit encryption</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-hub" />
                    <span className="text-foreground-secondary">SOC 2 Type II</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-hub" />
                    <span className="text-foreground-secondary">GDPR compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.cta.title}
            </h2>
            <p className="text-lg text-foreground-secondary mb-8">
              {t.cta.description}
            </p>
            <Button asChild size="lg" className="btn-primary">
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
