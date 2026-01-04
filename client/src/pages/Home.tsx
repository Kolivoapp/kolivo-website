/**
 * KOLIVO™ Home Page - Manifesto Approach
 * Design: Swiss Corporate Modernism
 * Bilingual support (FR/EN)
 * 
 * Focus: HUB as the main product, HALO identity system, sub-entities secondary
 */

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  ArrowRight, 
  Shield, 
  Fingerprint,
  Lock,
  Users,
  Building2,
  Handshake,
  ChevronRight
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { language } = useLanguage();

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
          },
          {
            icon: Handshake,
            name: "PARTENARIO by KOLIVO™",
            desc: "Partner operations portal",
            href: "/products/partenario",
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
          },
          {
            icon: Handshake,
            name: "PARTENARIO by KOLIVO™",
            desc: "Portail d'opérations partenaires",
            href: "/products/partenario",
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
    <div className="min-h-screen">
      {/* Hero - Manifesto Style */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-navy">
        {/* Background */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/hero-abstract.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332] via-[#1a2332]/95 to-[#1a2332]/80" />
        
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <p className="text-primary font-medium tracking-widest text-sm mb-8 animate-fade-in">
              {t.hero.tagline}
            </p>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8">
              <span className="block">{t.hero.title1}</span>
              <span className="block text-white/60 italic">{t.hero.title2}</span>
              <span className="block">{t.hero.title3}</span>
              <span className="block mt-4 text-primary">{t.hero.titleHighlight}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12 max-w-2xl">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                <Link href="/products/hub">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                <Link href="/company">
                  {t.hero.ctaSecondary}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* HALO Identity Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <p className="section-number mb-4">{t.halo.tagline}</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t.halo.title}
              </h2>
              <p className="text-2xl text-primary font-medium mb-6">
                {t.halo.subtitle}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t.halo.description}
              </p>
              
              <div className="space-y-6 mb-8">
                {t.halo.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4ade80] to-[#22d3ee] flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button asChild size="lg" className="bg-gradient-to-r from-[#4ade80] to-[#22d3ee] text-white hover:opacity-90">
                <Link href="/security-trust">
                  {t.halo.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            {/* Right - HALO Visual */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-96 h-96 bg-gradient-to-br from-[#4ade80]/20 to-[#22d3ee]/20 rounded-full blur-3xl" />
              <div className="relative bg-card rounded-3xl p-10 shadow-2xl border border-border/50">
                {/* HALO ID Card - Clean Design */}
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-xl ring-4 ring-gradient-to-br from-[#4ade80] to-[#22d3ee]" style={{background: 'linear-gradient(135deg, #4ade80, #22d3ee)', padding: '3px'}}>
                    <img 
                      src="/images/halo-avatar.png" 
                      alt="HALO Avatar" 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-display text-2xl font-bold text-foreground">Your HALO ID</p>
                    <p className="text-base text-muted-foreground mt-1">Secured by KOLIVO™</p>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm text-green-600 font-medium">Active & Protected</span>
                    </div>
                  </div>
                </div>
                
                {/* Security indicators */}
                <div className="mt-8 pt-6 border-t border-border/50 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-foreground">256</div>
                    <div className="text-xs text-muted-foreground">bit encryption</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">100%</div>
                    <div className="text-xs text-muted-foreground">data control</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">0</div>
                    <div className="text-xs text-muted-foreground">data sold</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section - Secondary */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-number mb-4">{t.ecosystem.tagline}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.ecosystem.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.ecosystem.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.ecosystem.platforms.map((platform, index) => (
              <Link 
                key={index}
                href={platform.href}
                className={`group block p-6 rounded-2xl transition-all duration-300 ${
                  platform.primary 
                    ? 'bg-navy text-white hover:bg-navy/90 shadow-xl' 
                    : 'bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  platform.primary 
                    ? 'bg-primary/20' 
                    : 'bg-muted'
                }`}>
                  <platform.icon className={`w-6 h-6 ${platform.primary ? 'text-primary' : 'text-foreground'}`} />
                </div>
                <h3 className={`font-display text-lg font-semibold mb-2 ${
                  platform.primary ? 'text-white' : 'text-foreground'
                }`}>
                  {platform.name}
                </h3>
                <p className={`text-sm mb-4 ${
                  platform.primary ? 'text-white/70' : 'text-muted-foreground'
                }`}>
                  {platform.desc}
                </p>
                <div className={`flex items-center text-sm font-medium ${
                  platform.primary ? 'text-primary' : 'text-primary'
                }`}>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/images/security-trust.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-number mb-4">{t.trust.tagline}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.trust.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.trust.description}
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/security-trust">
                {t.trust.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t.cta.title}
            </h2>
            <p className="text-xl text-white/70 mb-8">
              {t.cta.description}
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
              <Link href="/products/hub">
                {t.cta.button}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
