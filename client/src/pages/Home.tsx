/**
 * KOLIVO™ Home Page - Manifesto Approach
 * Level: Apple / Fortune 500 / Bank-Grade
 * 
 * Design Philosophy:
 * - Navy Foundation (#172638)
 * - HALO ID as primary CTA (Red #EF4444)
 * - Product colors for ecosystem
 * - Adaptive dark/light mode
 * - Premium micro-interactions
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { CDN, PRODUCT_COLORS } from "@/lib/cdn";
import { 
  ArrowRight, 
  Shield, 
  Fingerprint,
  Lock,
  Users,
  Building2,
  Leaf,
  ChevronRight,
  ExternalLink,
  CheckCircle2
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const { language } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      hero: {
        tagline: "SHARED LIVING, SIMPLIFIED",
        title1: "Meet your next",
        title2: "(and last)",
        title3: "colocation platform.",
        description: "KOLIVO™ builds the infrastructure for shared living. Technology that brings people together, responsibly.",
        cta: "Sign in with HALO ID",
        ctaSecondary: "Discover the ecosystem"
      },
      halo: {
        tagline: "SECURE IDENTITY",
        title: "One Identity.",
        titleHighlight: "Every Platform.",
        subtitle: "HALO by KOLIVO™",
        description: "Your secure digital identity that travels with you across the entire KOLIVO™ ecosystem. One login. Complete control over your data. Privacy by design.",
        features: [
          { icon: Fingerprint, title: "Single Sign-On", desc: "One secure login for all KOLIVO™ platforms" },
          { icon: Lock, title: "Privacy First", desc: "Your data stays yours. Always." },
          { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption and protection" }
        ],
        cta: "Access HALO ID Portal"
      },
      ecosystem: {
        tagline: "THE ECOSYSTEM",
        title: "Built for How You Live",
        description: "An interconnected suite of platforms designed for shared living and collaborative communities.",
        platforms: [
          {
            name: "HUB",
            fullName: "HUB by KOLIVO™",
            desc: "The app that simplifies colocation",
            longDesc: "Expense management, tasks, communication — all in one place.",
            color: PRODUCT_COLORS.hub,
            href: "/products/hub",
            status: "In development"
          },
          {
            name: "Nest",
            fullName: "Nest by KOLIVO™",
            desc: "Next-gen property management",
            longDesc: "For owners and managers of shared residences.",
            color: PRODUCT_COLORS.nest,
            href: "/products/nest",
            status: "2027"
          },
          {
            name: "Seed",
            fullName: "Seed by KOLIVO™",
            desc: "Community project incubator",
            longDesc: "Supporting social impact initiatives.",
            color: PRODUCT_COLORS.seed,
            href: "/products/seed",
            status: "Planned"
          }
        ]
      },
      trust: {
        tagline: "TRUST & SECURITY",
        title: "Security Without Compromise",
        description: "Every platform in the KOLIVO™ ecosystem is built on a foundation of trust. Your data is protected, your privacy is respected, and your security is our priority.",
        stats: [
          { value: "256-bit", label: "Encryption" },
          { value: "100%", label: "Data Control" },
          { value: "0", label: "Data Sold" }
        ],
        cta: "Our Security Approach"
      },
      cta: {
        title: "Ready to Simplify Your Shared Living?",
        description: "Join the community that's building a better way to live together.",
        button: "Get Started with HALO ID"
      }
    },
    fr: {
      hero: {
        tagline: "LA COLOCATION, SIMPLIFIÉE",
        title1: "Découvrez votre prochaine",
        title2: "(et dernière)",
        title3: "plateforme de colocation.",
        description: "KOLIVO™ construit l'infrastructure de la vie partagée. La technologie qui rassemble les gens, de manière responsable.",
        cta: "Se connecter avec HALO ID",
        ctaSecondary: "Découvrir l'écosystème"
      },
      halo: {
        tagline: "IDENTITÉ SÉCURISÉE",
        title: "Une Identité.",
        titleHighlight: "Toutes les Plateformes.",
        subtitle: "HALO by KOLIVO™",
        description: "Votre identité numérique sécurisée qui vous accompagne dans tout l'écosystème KOLIVO™. Une connexion. Contrôle total sur vos données. Confidentialité par conception.",
        features: [
          { icon: Fingerprint, title: "Connexion Unique", desc: "Une seule connexion sécurisée pour toutes les plateformes KOLIVO™" },
          { icon: Lock, title: "Confidentialité d'Abord", desc: "Vos données restent les vôtres. Toujours." },
          { icon: Shield, title: "Sécurité Entreprise", desc: "Chiffrement et protection de niveau bancaire" }
        ],
        cta: "Accéder au Portail HALO ID"
      },
      ecosystem: {
        tagline: "L'ÉCOSYSTÈME",
        title: "Conçu pour Votre Façon de Vivre",
        description: "Une suite interconnectée de plateformes conçues pour la vie partagée et les communautés collaboratives.",
        platforms: [
          {
            name: "HUB",
            fullName: "HUB by KOLIVO™",
            desc: "L'app qui simplifie la colocation",
            longDesc: "Gestion des dépenses, tâches, communication — tout au même endroit.",
            color: PRODUCT_COLORS.hub,
            href: "/products/hub",
            status: "En développement"
          },
          {
            name: "Nest",
            fullName: "Nest by KOLIVO™",
            desc: "Gestion immobilière nouvelle génération",
            longDesc: "Pour les propriétaires et gestionnaires de résidences partagées.",
            color: PRODUCT_COLORS.nest,
            href: "/products/nest",
            status: "2027"
          },
          {
            name: "Seed",
            fullName: "Seed by KOLIVO™",
            desc: "Incubateur de projets communautaires",
            longDesc: "Accompagnement des initiatives d'impact social.",
            color: PRODUCT_COLORS.seed,
            href: "/products/seed",
            status: "Planifié"
          }
        ]
      },
      trust: {
        tagline: "CONFIANCE ET SÉCURITÉ",
        title: "Sécurité Sans Compromis",
        description: "Chaque plateforme de l'écosystème KOLIVO™ est construite sur une base de confiance. Vos données sont protégées, votre vie privée est respectée, et votre sécurité est notre priorité.",
        stats: [
          { value: "256-bit", label: "Chiffrement" },
          { value: "100%", label: "Contrôle des données" },
          { value: "0", label: "Données vendues" }
        ],
        cta: "Notre Approche Sécurité"
      },
      cta: {
        title: "Prêt à Simplifier Votre Colocation?",
        description: "Rejoignez la communauté qui construit une meilleure façon de vivre ensemble.",
        button: "Commencer avec HALO ID"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      {/* ============================================
          HERO SECTION - Navy Background, Manifesto Style
          ============================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#172638]">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-[#172638] via-[#1e3a5f] to-[#172638] opacity-80"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          />
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            {/* Tagline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#EF4444] font-semibold tracking-[0.2em] text-sm mb-8"
            >
              {t.hero.tagline}
            </motion.p>
            
            {/* Main Title - Manifesto Style */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-white leading-[1.1] mb-8"
            >
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                {t.hero.title1}
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light italic text-white/50 my-2">
                {t.hero.title2}
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                {t.hero.title3}
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/60 leading-relaxed mb-12 max-w-2xl"
            >
              {t.hero.description}
            </motion.p>
            
            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Primary CTA - HALO ID (Red) */}
              <Button 
                asChild 
                size="lg" 
                className="bg-[#EF4444] hover:bg-[#DC2626] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl hover:shadow-[#EF4444]/20 transition-all duration-300 group"
              >
                <a href="https://id.halo.kolivo.ca" target="_blank" rel="noopener noreferrer">
                  {t.hero.cta}
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
              
              {/* Secondary CTA */}
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full transition-all duration-300"
              >
                <Link href="/ecosystem">
                  {t.hero.ctaSecondary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white/50 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ============================================
          HALO IDENTITY SECTION
          ============================================ */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#EF4444] uppercase mb-6">
                {t.halo.tagline}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 leading-tight">
                {t.halo.title}
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#EF4444] mb-4 leading-tight">
                {t.halo.titleHighlight}
              </h2>
              <p className="text-xl text-[#EF4444]/80 font-medium mb-6">
                {t.halo.subtitle}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                {t.halo.description}
              </p>
              
              {/* Features */}
              <div className="space-y-6 mb-10">
                {t.halo.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-[#EF4444]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#EF4444]/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-[#EF4444]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                asChild 
                size="lg" 
                className="bg-[#EF4444] hover:bg-[#DC2626] text-white rounded-full px-8 shadow-lg hover:shadow-xl hover:shadow-[#EF4444]/20 transition-all"
              >
                <a href="https://id.halo.kolivo.ca" target="_blank" rel="noopener noreferrer">
                  {t.halo.cta}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            {/* Right - HALO Visual Card */}
            <div className="relative flex items-center justify-center">
              {/* Glow effect */}
              <div className="absolute w-80 h-80 bg-[#EF4444]/20 rounded-full blur-[100px]" />
              
              {/* Card */}
              <div className="relative bg-card rounded-3xl p-8 shadow-2xl border border-border/50 w-full max-w-md">
                {/* HALO Logo */}
                <div className="flex items-center gap-4 mb-8">
                  <img 
                    src={CDN.products.halo.accent}
                    alt="HALO by KOLIVO™"
                    className="h-8 w-auto"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                
                {/* ID Card Preview */}
                <div className="bg-gradient-to-br from-[#EF4444]/5 to-[#EF4444]/10 rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#EF4444] to-[#DC2626] flex items-center justify-center">
                      <Fingerprint className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg">Your HALO ID</p>
                      <p className="text-sm text-muted-foreground">Secured by KOLIVO™</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">Active & Protected</span>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  {t.trust.stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          ECOSYSTEM SECTION
          ============================================ */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#172638] dark:text-white/60 uppercase mb-6">
              {t.ecosystem.tagline}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t.ecosystem.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.ecosystem.description}
            </p>
          </div>
          
          {/* Products Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {t.ecosystem.platforms.map((platform, index) => (
              <Link 
                key={index}
                href={platform.href}
                className="group block"
              >
                <div 
                  className="bg-card rounded-2xl p-8 border border-border/50 h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                  style={{
                    '--accent-color': platform.color,
                  } as React.CSSProperties}
                >
                  {/* Product Logo */}
                  <div className="flex items-center justify-between mb-6">
                    <img 
                      src={CDN.products[platform.name.toLowerCase() as keyof typeof CDN.products]?.accent}
                      alt={platform.fullName}
                      className="h-6 w-auto"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span 
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ 
                        backgroundColor: `${platform.color}20`,
                        color: platform.color
                      }}
                    >
                      {platform.status}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[var(--accent-color)] transition-colors">
                    {platform.desc}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {platform.longDesc}
                  </p>
                  
                  {/* Arrow */}
                  <div 
                    className="flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: platform.color }}
                  >
                    {language === 'en' ? 'Learn more' : 'En savoir plus'}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* View All Link */}
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/ecosystem">
                {language === 'en' ? 'View all products' : 'Voir tous les produits'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================
          TRUST SECTION
          ============================================ */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#172638] dark:text-white/60 uppercase mb-6">
              {t.trust.tagline}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t.trust.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              {t.trust.description}
            </p>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/security-trust">
                {t.trust.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA SECTION
          ============================================ */}
      <section className="py-24 lg:py-32 bg-[#172638] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t.cta.title}
            </h2>
            <p className="text-xl text-white/60 mb-10">
              {t.cta.description}
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-[#EF4444] hover:bg-[#DC2626] text-white text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl hover:shadow-[#EF4444]/20 transition-all"
            >
              <a href="https://id.halo.kolivo.ca" target="_blank" rel="noopener noreferrer">
                {t.cta.button}
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
