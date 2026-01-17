/**
 * KOLIVO™ Home Page - Brand Aligned 2026
 * Design: Navy #172638 Foundation, HALO ID CTA, Product Colors
 * Focus: B2C/B2MAR, Shared Living, Community
 * Bilingual support (FR/EN)
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  ScrollReveal, 
  Parallax, 
  ScaleOnScroll, 
  StaggerContainer, 
  StaggerItem
} from "@/components/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  ArrowRight, 
  Shield, 
  Fingerprint,
  Lock,
  Users,
  Home as HomeIcon,
  Leaf,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const content = {
    en: {
      hero: {
        tagline: "SHARED LIVING, SIMPLIFIED",
        title1: "The infrastructure",
        title2: "for shared living.",
        description: "KOLIVO™ builds technology that brings people together. From colocation management to secure identity, we create the digital foundation for collaborative life.",
        cta: "Connect with HALO ID",
        ctaSecondary: "Explore Products"
      },
      halo: {
        tagline: "SECURE IDENTITY",
        title: "One Identity. Every Platform.",
        subtitle: "HALO • ID",
        description: "Your secure digital identity across the entire KOLIVO™ ecosystem. One login. Complete control over your data. Privacy by design.",
        features: [
          { icon: Fingerprint, title: "Single Sign-On", desc: "One secure login for all KOLIVO™ platforms" },
          { icon: Lock, title: "Privacy First", desc: "Your data stays yours. Always." },
          { icon: Shield, title: "Bank-Grade Security", desc: "Enterprise encryption and protection" }
        ],
        cta: "Access HALO ID Portal"
      },
      products: {
        tagline: "THE ECOSYSTEM",
        title: "Products Built for Life Together",
        description: "KOLIVO™ provides specialized platforms for every aspect of shared living.",
        items: [
          {
            name: "HUB",
            fullName: "HUB by KOLIVO™",
            desc: "The complete platform for managing shared living. Finances, tasks, calendar — all in one place.",
            color: "#10b981",
            href: "/products/hub",
            status: "Active"
          },
          {
            name: "Nest",
            fullName: "Nest by KOLIVO™",
            desc: "Property management for shared residences. For owners and managers of coliving spaces.",
            color: "#f59e0b",
            href: "/products/nest",
            status: "2027"
          },
          {
            name: "Seed",
            fullName: "Seed by KOLIVO™",
            desc: "Community project incubator. Supporting initiatives that strengthen shared living.",
            color: "#14b8a6",
            href: "/products/seed",
            status: "Planned"
          }
        ]
      },
      trust: {
        tagline: "TRUST & SECURITY",
        title: "Security Without Compromise",
        description: "Every platform in the KOLIVO™ ecosystem is built on a foundation of trust. Your data is protected, your privacy is respected.",
        cta: "Our Security Approach"
      },
      cta: {
        title: "Ready to Simplify Shared Living?",
        description: "Join the community discovering a better way to live together.",
        button: "Get Started with HALO ID"
      }
    },
    fr: {
      hero: {
        tagline: "LA COLOCATION, SIMPLIFIÉE",
        title1: "L'infrastructure",
        title2: "de la vie partagée.",
        description: "KOLIVO™ construit la technologie qui rassemble les gens. De la gestion de colocation à l'identité sécurisée, nous créons les fondations numériques de la vie collaborative.",
        cta: "Se connecter avec HALO ID",
        ctaSecondary: "Explorer les produits"
      },
      halo: {
        tagline: "IDENTITÉ SÉCURISÉE",
        title: "Une Identité. Toutes les Plateformes.",
        subtitle: "HALO • ID",
        description: "Votre identité numérique sécurisée dans tout l'écosystème KOLIVO™. Une connexion. Contrôle total sur vos données. Confidentialité par conception.",
        features: [
          { icon: Fingerprint, title: "Connexion Unique", desc: "Une seule connexion pour toutes les plateformes KOLIVO™" },
          { icon: Lock, title: "Confidentialité d'Abord", desc: "Vos données restent les vôtres. Toujours." },
          { icon: Shield, title: "Sécurité Bancaire", desc: "Chiffrement et protection entreprise" }
        ],
        cta: "Accéder au portail HALO ID"
      },
      products: {
        tagline: "L'ÉCOSYSTÈME",
        title: "Des produits conçus pour vivre ensemble",
        description: "KOLIVO™ offre des plateformes spécialisées pour chaque aspect de la vie partagée.",
        items: [
          {
            name: "HUB",
            fullName: "HUB by KOLIVO™",
            desc: "La plateforme complète pour gérer la vie partagée. Finances, tâches, calendrier — tout au même endroit.",
            color: "#10b981",
            href: "/products/hub",
            status: "Actif"
          },
          {
            name: "Nest",
            fullName: "Nest by KOLIVO™",
            desc: "Gestion immobilière pour résidences partagées. Pour propriétaires et gestionnaires d'espaces de coliving.",
            color: "#f59e0b",
            href: "/products/nest",
            status: "2027"
          },
          {
            name: "Seed",
            fullName: "Seed by KOLIVO™",
            desc: "Incubateur de projets communautaires. Soutenir les initiatives qui renforcent la vie partagée.",
            color: "#14b8a6",
            href: "/products/seed",
            status: "Planifié"
          }
        ]
      },
      trust: {
        tagline: "CONFIANCE ET SÉCURITÉ",
        title: "Sécurité Sans Compromis",
        description: "Chaque plateforme de l'écosystème KOLIVO™ est construite sur une base de confiance. Vos données sont protégées, votre vie privée est respectée.",
        cta: "Notre Approche Sécurité"
      },
      cta: {
        title: "Prêt à Simplifier la Vie Partagée?",
        description: "Rejoignez la communauté qui découvre une meilleure façon de vivre ensemble.",
        button: "Commencer avec HALO ID"
      }
    }
  };

  const t = content[language];

  // Product icons mapping
  const productIcons: Record<string, typeof Users> = {
    "HUB": Users,
    "Nest": HomeIcon,
    "Seed": Leaf
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero - Navy Foundation */}
      <section ref={heroRef} className="min-h-screen flex items-center relative overflow-hidden bg-[#172638]">
        {/* Subtle animated gradient */}
        <motion.div 
          className="absolute inset-0"
          style={{ opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1a24] via-[#172638] to-[#1e3248]" />
          <motion.div 
            className="absolute inset-0 opacity-20"
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        <motion.div 
          className="container relative z-10 py-20"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.p 
              className="text-white/60 font-medium tracking-[0.3em] text-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.hero.tagline}
            </motion.p>
            
            <motion.h1 
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="block">{t.hero.title1}</span>
              <span className="block">{t.hero.title2}</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/60 leading-relaxed mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t.hero.description}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {/* HALO ID CTA - Red accent */}
              <Button 
                asChild 
                size="lg" 
                className="bg-[#EF4444] hover:bg-[#DC2626] text-white text-lg px-10 py-7 rounded-full font-medium shadow-lg shadow-[#EF4444]/30"
              >
                <a href="https://id.halo.kolivo.ca" target="_blank" rel="noopener noreferrer">
                  {t.hero.cta}
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="ghost" 
                size="lg" 
                className="text-white hover:bg-white/10 text-lg px-10 py-7 rounded-full border border-white/20"
              >
                <Link href="/products">
                  {t.hero.ctaSecondary}
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div 
            className="w-8 h-14 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-1.5 h-3 bg-white/40 rounded-full"
              animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* HALO ID Section */}
      <section className="py-32 lg:py-48 bg-white relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Content */}
            <ScrollReveal direction="left" duration={1}>
              <p className="text-[#EF4444] font-medium tracking-[0.2em] text-sm mb-6">{t.halo.tagline}</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#172638] mb-6 leading-tight">
                {t.halo.title}
              </h2>
              <p className="text-2xl text-[#EF4444] font-medium mb-8">
                {t.halo.subtitle}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                {t.halo.description}
              </p>
              
              <StaggerContainer className="space-y-8 mb-12" staggerDelay={0.15}>
                {t.halo.features.map((feature, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-[#EF4444] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#EF4444]/20">
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#172638] text-lg mb-1">{feature.title}</h3>
                        <p className="text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              
              <Button 
                asChild 
                size="lg" 
                className="bg-[#EF4444] hover:bg-[#DC2626] text-white rounded-full px-8 py-6 shadow-lg shadow-[#EF4444]/20"
              >
                <a href="https://id.halo.kolivo.ca" target="_blank" rel="noopener noreferrer">
                  {t.halo.cta}
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </ScrollReveal>
            
            {/* Right - HALO Visual */}
            <ScaleOnScroll className="relative flex items-center justify-center">
              <div className="absolute w-[500px] h-[500px] bg-[#EF4444]/5 rounded-full blur-3xl" />
              <motion.div 
                className="relative bg-white rounded-[2rem] p-12 shadow-2xl border border-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* HALO ID Card */}
                <div className="flex items-center gap-8">
                  <div className="w-28 h-28 rounded-3xl overflow-hidden shadow-2xl bg-[#EF4444] flex items-center justify-center">
                    <Fingerprint className="w-14 h-14 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-display text-2xl font-bold text-[#172638]">HALO • ID</p>
                    <p className="text-gray-500 mt-1">Secured by KOLIVO™</p>
                    <div className="flex items-center gap-2 mt-4">
                      <motion.div 
                        className="w-2.5 h-2.5 rounded-full bg-green-500"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-sm text-green-600 font-medium">Active & Protected</span>
                    </div>
                  </div>
                </div>
                
                {/* Security indicators */}
                <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#172638]">256</div>
                    <div className="text-xs text-gray-500 mt-1">bit encryption</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#172638]">100%</div>
                    <div className="text-xs text-gray-500 mt-1">data control</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#172638]">0</div>
                    <div className="text-xs text-gray-500 mt-1">data sold</div>
                  </div>
                </div>
              </motion.div>
            </ScaleOnScroll>
          </div>
        </div>
      </section>

      {/* Products Section - With Individual Colors */}
      <section className="py-32 lg:py-48 bg-gray-50">
        <div className="container">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-[#172638] font-medium tracking-[0.2em] text-sm mb-6">{t.products.tagline}</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#172638] mb-8">
              {t.products.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.products.description}
            </p>
          </ScrollReveal>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
            {t.products.items.map((product, index) => {
              const IconComponent = productIcons[product.name] || Users;
              return (
                <StaggerItem key={index}>
                  <Link href={product.href}>
                    <motion.div 
                      className="group block p-8 rounded-3xl h-full bg-white border border-gray-100 hover:shadow-xl transition-all duration-500"
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      style={{ 
                        borderTopColor: product.color,
                        borderTopWidth: '4px'
                      }}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center"
                          style={{ backgroundColor: `${product.color}15` }}
                        >
                          <IconComponent className="w-8 h-8" style={{ color: product.color }} />
                        </div>
                        <span 
                          className="text-xs font-medium px-3 py-1 rounded-full"
                          style={{ 
                            backgroundColor: `${product.color}15`,
                            color: product.color
                          }}
                        >
                          {product.status}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-[#172638] mb-3">
                        {product.fullName}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {product.desc}
                      </p>
                      <div 
                        className="flex items-center text-sm font-medium"
                        style={{ color: product.color }}
                      >
                        <span className="mr-2">{language === 'fr' ? 'En savoir plus' : 'Learn more'}</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 lg:py-48 bg-white relative overflow-hidden">
        <Parallax className="absolute inset-0 opacity-5" speed={0.3}>
          <div className="w-full h-[150%] bg-gradient-to-br from-[#172638]/20 to-transparent" />
        </Parallax>
        <div className="container relative z-10">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <p className="text-[#172638] font-medium tracking-[0.2em] text-sm mb-6">{t.trust.tagline}</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#172638] mb-8">
              {t.trust.title}
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              {t.trust.description}
            </p>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 py-6 border-[#172638] text-[#172638] hover:bg-[#172638] hover:text-white"
            >
              <Link href="/security-trust">
                {t.trust.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA - Navy Section */}
      <section className="py-32 lg:py-48 bg-[#172638] text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "radial-gradient(circle at 30% 70%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 70%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <div className="container relative z-10">
          <ScrollReveal direction="scale" className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              {t.cta.title}
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              {t.cta.description}
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-[#EF4444] hover:bg-[#DC2626] text-white text-lg px-12 py-7 rounded-full font-medium shadow-lg shadow-[#EF4444]/30"
            >
              <a href="https://id.halo.kolivo.ca" target="_blank" rel="noopener noreferrer">
                {t.cta.button}
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
