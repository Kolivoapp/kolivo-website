/**
 * KOLIVO™ Home Page - Apple-style Immersive Experience
 * Design: Premium, épuré mais plein, animations scroll immersives
 * Bilingual support (FR/EN)
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  ScrollReveal, 
  Parallax, 
  ScaleOnScroll, 
  StaggerContainer, 
  StaggerItem,
  HeroParallax,
  TextReveal
} from "@/components/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  ArrowRight, 
  Shield, 
  Fingerprint,
  Lock,
  Users,
  Building2,
  ChevronRight
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
        title1: "Meet your next",
        title2: "(and last)",
        title3: "colocation management platform.",
        titleHighlight: "Meet KOLIVO™",
        description: "The complete ecosystem for managing shared living with kindness. Finances, tasks, calendar, and more — all in one place.",
        cta: "Get Started",
        ctaSecondary: "Learn More"
      },
      halo: {
        tagline: "SECURE IDENTITY",
        title: "One Identity. Every Platform.",
        subtitle: "HALO by KOLIVO™",
        description: "Your secure digital identity that travels with you across the entire KOLIVO™ ecosystem. One login. Complete control over your data. Privacy by design.",
        features: [
          { icon: Fingerprint, title: "Single Sign-On", desc: "One secure login for all KOLIVO™ platforms" },
          { icon: Lock, title: "Privacy First", desc: "Your data stays yours. Always." },
          { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption and protection" }
        ],
        cta: "Discover HALO"
      },
      ecosystem: {
        tagline: "THE ECOSYSTEM",
        title: "Built for How You Live and Work",
        description: "Beyond HUB, KOLIVO™ provides specialized platforms for every aspect of collaborative living and business.",
        platforms: [
          {
            icon: Users,
            name: "HUB by KOLIVO™",
            desc: "The human infrastructure for shared living",
            href: "/products/hub",
            primary: true
          },
          {
            icon: Building2,
            name: "Studio+ by KOLIVO™",
            desc: "Strategic consulting and delivery",
            href: "/products/studio-plus",
            primary: false
          },
          {
            icon: Shield,
            name: "GUARDO by KOLIVO™",
            desc: "Trust, compliance, and incident management",
            href: "/products/guardo",
            primary: false
          }
        ]
      },
      trust: {
        tagline: "TRUST & SECURITY",
        title: "Security Without Compromise",
        description: "Every platform in the KOLIVO™ ecosystem is built on a foundation of trust. Your data is protected, your privacy is respected, and your security is our priority.",
        cta: "Our Security Approach"
      },
      cta: {
        title: "Ready to Simplify Your Shared Living?",
        description: "Join thousands who have discovered a better way to live together.",
        button: "Get Started with KOLIVO™"
      }
    },
    fr: {
      hero: {
        tagline: "LA COLOCATION, SIMPLIFIÉE",
        title1: "Découvrez votre prochaine",
        title2: "(et dernière)",
        title3: "plateforme de gestion de colocation.",
        titleHighlight: "Découvrez KOLIVO™",
        description: "L'écosystème complet pour gérer la vie partagée avec bienveillance. Finances, tâches, calendrier et plus — tout au même endroit.",
        cta: "Commencer",
        ctaSecondary: "En savoir plus"
      },
      halo: {
        tagline: "IDENTITÉ SÉCURISÉE",
        title: "Une Identité. Toutes les Plateformes.",
        subtitle: "HALO by KOLIVO™",
        description: "Votre identité numérique sécurisée qui vous accompagne dans tout l'écosystème KOLIVO™. Une connexion. Contrôle total sur vos données. Confidentialité par conception.",
        features: [
          { icon: Fingerprint, title: "Connexion Unique", desc: "Une seule connexion sécurisée pour toutes les plateformes KOLIVO™" },
          { icon: Lock, title: "Confidentialité d'Abord", desc: "Vos données restent les vôtres. Toujours." },
          { icon: Shield, title: "Sécurité Entreprise", desc: "Chiffrement et protection de niveau bancaire" }
        ],
        cta: "Découvrir HALO"
      },
      ecosystem: {
        tagline: "L'ÉCOSYSTÈME",
        title: "Conçu pour Votre Façon de Vivre et Travailler",
        description: "Au-delà de HUB, KOLIVO™ offre des plateformes spécialisées pour chaque aspect de la vie collaborative et des affaires.",
        platforms: [
          {
            icon: Users,
            name: "HUB by KOLIVO™",
            desc: "L'infrastructure humaine de la vie partagée",
            href: "/products/hub",
            primary: true
          },
          {
            icon: Building2,
            name: "Studio+ by KOLIVO™",
            desc: "Conseil stratégique et livraison",
            href: "/products/studio-plus",
            primary: false
          },
          {
            icon: Shield,
            name: "GUARDO by KOLIVO™",
            desc: "Confiance, conformité et gestion des incidents",
            href: "/products/guardo",
            primary: false
          }
        ]
      },
      trust: {
        tagline: "CONFIANCE ET SÉCURITÉ",
        title: "Sécurité Sans Compromis",
        description: "Chaque plateforme de l'écosystème KOLIVO™ est construite sur une base de confiance. Vos données sont protégées, votre vie privée est respectée, et votre sécurité est notre priorité.",
        cta: "Notre Approche Sécurité"
      },
      cta: {
        title: "Prêt à Simplifier Votre Colocation?",
        description: "Rejoignez des milliers de personnes qui ont découvert une meilleure façon de vivre ensemble.",
        button: "Commencer avec KOLIVO™"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero - Apple-style Parallax */}
      <section ref={heroRef} className="min-h-screen flex items-center relative overflow-hidden bg-navy">
        {/* Animated Background Gradient */}
        <motion.div 
          className="absolute inset-0"
          style={{ opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#1a2332] to-[#0d1520]" />
          <motion.div 
            className="absolute inset-0 opacity-30"
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 50%, rgba(74, 222, 128, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(34, 211, 238, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(74, 222, 128, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(74, 222, 128, 0.15) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        <motion.div 
          className="container relative z-10 py-20"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.p 
              className="text-primary font-medium tracking-[0.3em] text-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.hero.tagline}
            </motion.p>
            
            <motion.h1 
              className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="block">{t.hero.title1}</span>
              <span className="block text-white/40 italic font-light">{t.hero.title2}</span>
              <span className="block">{t.hero.title3}</span>
              <motion.span 
                className="block mt-6 bg-gradient-to-r from-[#4ade80] to-[#22d3ee] bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {t.hero.titleHighlight}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/60 leading-relaxed mb-12 max-w-2xl mx-auto"
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
              <Button asChild size="lg" className="bg-white text-navy hover:bg-white/90 text-lg px-10 py-7 rounded-full font-medium">
                <Link href="/products/hub">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10 text-lg px-10 py-7 rounded-full">
                <Link href="/company">
                  {t.hero.ctaSecondary}
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll indicator - Apple style */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
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

      {/* HALO Identity Section - Scale on Scroll */}
      <section className="py-32 lg:py-48 bg-background relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Content */}
            <ScrollReveal direction="left" duration={1}>
              <p className="text-primary font-medium tracking-[0.2em] text-sm mb-6">{t.halo.tagline}</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {t.halo.title}
              </h2>
              <p className="text-2xl text-primary font-medium mb-8">
                {t.halo.subtitle}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                {t.halo.description}
              </p>
              
              <StaggerContainer className="space-y-8 mb-12" staggerDelay={0.15}>
                {t.halo.features.map((feature, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4ade80] to-[#22d3ee] flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg mb-1">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              
              <Button asChild size="lg" className="bg-gradient-to-r from-[#4ade80] to-[#22d3ee] text-white hover:opacity-90 rounded-full px-8 py-6">
                <Link href="/security-trust">
                  {t.halo.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </ScrollReveal>
            
            {/* Right - HALO Visual with Scale Effect */}
            <ScaleOnScroll className="relative flex items-center justify-center">
              <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-[#4ade80]/10 to-[#22d3ee]/10 rounded-full blur-3xl" />
              <motion.div 
                className="relative bg-card rounded-[2rem] p-12 shadow-2xl border border-border/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* HALO ID Card */}
                <div className="flex items-center gap-8">
                  <div className="w-28 h-28 rounded-3xl overflow-hidden shadow-2xl" style={{background: 'linear-gradient(135deg, #4ade80, #22d3ee)', padding: '4px'}}>
                    <div className="w-full h-full bg-muted rounded-[1.25rem] flex items-center justify-center">
                      <Fingerprint className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="font-display text-2xl font-bold text-foreground">Your HALO ID</p>
                    <p className="text-muted-foreground mt-1">Secured by KOLIVO™</p>
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
                <div className="mt-10 pt-8 border-t border-border/30 grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-foreground">256</div>
                    <div className="text-xs text-muted-foreground mt-1">bit encryption</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">100%</div>
                    <div className="text-xs text-muted-foreground mt-1">data control</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">0</div>
                    <div className="text-xs text-muted-foreground mt-1">data sold</div>
                  </div>
                </div>
              </motion.div>
            </ScaleOnScroll>
          </div>
        </div>
      </section>

      {/* Ecosystem Section - Staggered Cards */}
      <section className="py-32 lg:py-48 bg-muted/20">
        <div className="container">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-primary font-medium tracking-[0.2em] text-sm mb-6">{t.ecosystem.tagline}</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              {t.ecosystem.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.ecosystem.description}
            </p>
          </ScrollReveal>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
            {t.ecosystem.platforms.map((platform, index) => (
              <StaggerItem key={index}>
                <Link href={platform.href}>
                  <motion.div 
                    className={`group block p-8 rounded-3xl h-full transition-all duration-500 ${
                      platform.primary 
                        ? 'bg-navy text-white shadow-2xl shadow-navy/20' 
                        : 'bg-card border border-border/30 hover:border-primary/30 hover:shadow-xl'
                    }`}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      platform.primary 
                        ? 'bg-gradient-to-br from-[#4ade80] to-[#22d3ee]' 
                        : 'bg-muted'
                    }`}>
                      <platform.icon className={`w-8 h-8 ${platform.primary ? 'text-white' : 'text-foreground'}`} />
                    </div>
                    <h3 className={`font-display text-xl font-semibold mb-3 ${
                      platform.primary ? 'text-white' : 'text-foreground'
                    }`}>
                      {platform.name}
                    </h3>
                    <p className={`text-base mb-6 ${
                      platform.primary ? 'text-white/70' : 'text-muted-foreground'
                    }`}>
                      {platform.desc}
                    </p>
                    <div className={`flex items-center text-sm font-medium ${
                      platform.primary ? 'text-primary' : 'text-primary'
                    }`}>
                      <span className="mr-2">Learn more</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Section - Parallax Background */}
      <section className="py-32 lg:py-48 bg-background relative overflow-hidden">
        <Parallax className="absolute inset-0 opacity-5" speed={0.3}>
          <div className="w-full h-[150%] bg-gradient-to-br from-primary/20 to-transparent" />
        </Parallax>
        <div className="container relative z-10">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium tracking-[0.2em] text-sm mb-6">{t.trust.tagline}</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
              {t.trust.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t.trust.description}
            </p>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6">
              <Link href="/security-trust">
                {t.trust.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA - Immersive Dark Section */}
      <section className="py-32 lg:py-48 bg-navy text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "radial-gradient(circle at 30% 70%, rgba(74, 222, 128, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 30%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 70%, rgba(74, 222, 128, 0.1) 0%, transparent 50%)"
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
            <Button asChild size="lg" className="bg-white text-navy hover:bg-white/90 text-lg px-12 py-7 rounded-full font-medium">
              <Link href="/products/hub">
                {t.cta.button}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
