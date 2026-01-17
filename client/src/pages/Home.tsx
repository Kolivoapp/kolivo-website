/**
 * KOLIVO™ Home Page - Liquid Glass Design
 * Inspired by: Apple iOS 26, Stripe, BNC
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { CDN, PRODUCT_COLORS } from "@/lib/cdn";
import { ArrowRight, Shield, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        tagline: "The infrastructure for shared living",
        title: "Simplify.",
        titleAccent: "Together.",
        description: "KOLIVO™ builds technology that brings people together. A complete ecosystem for managing shared living spaces with clarity, trust, and respect.",
        cta: "Get Started",
        ctaSecondary: "Explore Products"
      },
      products: {
        tagline: "Ecosystem",
        title: "One platform. Every need.",
        items: [
          {
            name: "Hub",
            desc: "The app for shared living",
            color: PRODUCT_COLORS.hub,
            href: "/products/hub"
          },
          {
            name: "Nest",
            desc: "Property management",
            color: PRODUCT_COLORS.nest,
            href: "/products/nest"
          },
          {
            name: "Halo",
            desc: "Secure identity",
            color: PRODUCT_COLORS.halo,
            href: "/products/halo"
          },
          {
            name: "Vault",
            desc: "Data protection",
            color: PRODUCT_COLORS.vault,
            href: "/products/vault"
          }
        ]
      },
      trust: {
        tagline: "Trust & Security",
        title: "Built on trust.",
        description: "Privacy by design. Compliance by default. Your data stays yours.",
        features: [
          "End-to-end encryption",
          "PIPEDA compliant",
          "Quebec Law 25 ready",
          "Canadian data residency"
        ],
        cta: "Learn more"
      },
      cta: {
        title: "Ready to simplify?",
        description: "Join thousands who have discovered a better way to live together.",
        button: "Connect with KOLIVO"
      }
    },
    fr: {
      hero: {
        tagline: "L'infrastructure de la vie partagée",
        title: "Simplifier.",
        titleAccent: "Ensemble.",
        description: "KOLIVO™ construit la technologie qui rapproche les gens. Un écosystème complet pour gérer les espaces de vie partagés avec clarté, confiance et respect.",
        cta: "Commencer",
        ctaSecondary: "Explorer les produits"
      },
      products: {
        tagline: "Écosystème",
        title: "Une plateforme. Tous les besoins.",
        items: [
          {
            name: "Hub",
            desc: "L'app de la colocation",
            color: PRODUCT_COLORS.hub,
            href: "/products/hub"
          },
          {
            name: "Nest",
            desc: "Gestion immobilière",
            color: PRODUCT_COLORS.nest,
            href: "/products/nest"
          },
          {
            name: "Halo",
            desc: "Identité sécurisée",
            color: PRODUCT_COLORS.halo,
            href: "/products/halo"
          },
          {
            name: "Vault",
            desc: "Protection des données",
            color: PRODUCT_COLORS.vault,
            href: "/products/vault"
          }
        ]
      },
      trust: {
        tagline: "Confiance et Sécurité",
        title: "Bâti sur la confiance.",
        description: "Confidentialité par conception. Conformité par défaut. Vos données restent les vôtres.",
        features: [
          "Chiffrement de bout en bout",
          "Conforme LPRPDE",
          "Prêt pour la Loi 25",
          "Résidence des données au Canada"
        ],
        cta: "En savoir plus"
      },
      cta: {
        title: "Prêt à simplifier?",
        description: "Rejoignez des milliers de personnes qui ont découvert une meilleure façon de vivre ensemble.",
        button: "Connectez-vous avec KOLIVO"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="orb orb-primary w-[600px] h-[600px] -top-[200px] -right-[200px] animate-pulse-glow"
        />
        <div 
          className="orb orb-secondary w-[500px] h-[500px] top-[40%] -left-[200px] animate-pulse-glow animate-delay-200"
        />
        <div 
          className="orb orb-accent w-[400px] h-[400px] bottom-[10%] right-[10%] animate-pulse-glow animate-delay-400"
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative">
        <div className="container relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Tagline */}
            <motion.p 
              className="text-sm md:text-base tracking-[0.2em] uppercase text-foreground/50 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t.hero.tagline}
            </motion.p>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="text-foreground">{t.hero.title}</span>
              <br />
              <span className="text-gradient-accent">{t.hero.titleAccent}</span>
            </h1>

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t.hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="glass-button-primary text-base px-8 py-6 rounded-full"
              >
                <Link href="/contact">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="ghost" 
                size="lg" 
                className="glass-button text-base px-8 py-6 rounded-full"
              >
                <Link href="/products">
                  {t.hero.ctaSecondary}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
              <motion.div 
                className="w-1 h-2 bg-foreground/40 rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section relative">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.2em] uppercase text-foreground/50 mb-4">
              {t.products.tagline}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold">
              {t.products.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.products.items.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={product.href}>
                  <div className="glass-highlight p-8 h-full group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                    {/* Product Icon/Color */}
                    <div 
                      className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(135deg, ${product.color}40, ${product.color}20)`,
                        boxShadow: `0 0 30px ${product.color}30`
                      }}
                    >
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: product.color }}
                      />
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      {product.name}
                      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>

                    {/* Product Description */}
                    <p className="text-foreground/50 text-sm">
                      {product.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Products */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button asChild variant="ghost" className="glass-button rounded-full">
              <Link href="/products">
                {language === 'en' ? 'View all products' : 'Voir tous les produits'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section relative">
        <div className="container">
          <div className="glass-glow p-12 md:p-16 lg:p-20 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-sm tracking-[0.2em] uppercase text-foreground/50 mb-4">
                  {t.trust.tagline}
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  {t.trust.title}
                </h2>
                <p className="text-lg text-foreground/60 mb-8">
                  {t.trust.description}
                </p>
                <Button asChild className="glass-button-primary rounded-full">
                  <Link href="/security-trust">
                    {t.trust.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              {/* Right - Features */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {t.trust.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="glass p-4 rounded-xl flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-hub/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-hub" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section relative">
        <div className="container">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t.cta.title}
            </h2>
            <p className="text-lg text-foreground/60 mb-8">
              {t.cta.description}
            </p>
            <Button 
              asChild 
              size="lg" 
              className="glass-button-primary text-base px-10 py-6 rounded-full"
            >
              <Link href="/contact">
                {t.cta.button}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-24" />
    </div>
  );
}
