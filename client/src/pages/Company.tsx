/**
 * Company (About) Page
 * Design: Swiss Corporate Modernism
 * Bilingual support (FR/EN)
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Company() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/enterprise-scale.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#1a2332]/80 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
              {language === "fr" ? "À propos de KOLIVO™" : "About KOLIVO™"}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === "fr" 
                ? "Construire l'infrastructure de la vie partagée" 
                : "Building the Infrastructure for Shared Living"
              }
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {language === "fr" 
                ? "KOLIVO™ Technologies Inc. développe des solutions numériques qui transforment la façon dont les gens vivent, collaborent et se font confiance."
                : "KOLIVO™ Technologies Inc. develops digital solutions that transform how people live, collaborate, and trust each other."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo with cyan overlay */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/images/lou-hebert-founder.jpg" 
                  alt="Lou Hébert - Founder & CEO"
                  className="w-full aspect-[3/4] object-cover"
                />
                {/* Cyan gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2DD4A8]/30 via-transparent to-[#22D3EE]/20 mix-blend-overlay" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#2DD4A8] to-[#22D3EE] rounded-lg -z-10 opacity-20" />
            </div>

            {/* Bio */}
            <div>
              <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
                {language === "fr" ? "Notre fondateur" : "Our Founder"}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Lou Hébert
              </h2>
              <p className="text-lg text-primary font-medium mb-6">
                {language === "fr" ? "Fondateur et PDG" : "Founder & CEO"}
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {language === "fr" 
                    ? "Entrepreneur passionné par l'innovation technologique et l'impact social, Lou Hébert a fondé KOLIVO™ avec une vision claire : créer des outils numériques qui renforcent les liens humains plutôt que de les remplacer."
                    : "A passionate entrepreneur driven by technological innovation and social impact, Lou Hébert founded KOLIVO™ with a clear vision: to create digital tools that strengthen human connections rather than replace them."
                  }
                </p>
                <p>
                  {language === "fr" 
                    ? "Avec une expertise en développement de produits numériques et une compréhension profonde des défis de la vie partagée moderne, Lou dirige KOLIVO™ vers sa mission de devenir la référence en matière de gestion collaborative."
                    : "With expertise in digital product development and a deep understanding of modern shared living challenges, Lou leads KOLIVO™ toward its mission of becoming the standard for collaborative management."
                  }
                </p>
                <p>
                  {language === "fr" 
                    ? "Basé à Montréal, Lou combine rigueur opérationnelle et vision créative pour bâtir un écosystème technologique qui répond aux besoins réels des utilisateurs tout en maintenant les plus hauts standards de gouvernance et de sécurité."
                    : "Based in Montréal, Lou combines operational rigor with creative vision to build a technology ecosystem that addresses real user needs while maintaining the highest standards of governance and security."
                  }
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <a 
                  href="https://linkedin.com/in/louhebert" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
                {language === "fr" ? "Notre mission" : "Our Mission"}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {language === "fr" ? "L'ordre dans la complexité" : "Order from Complexity"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {language === "fr" 
                  ? "La vie partagée — que ce soit en colocation, en famille ou en communauté — comporte des défis uniques. Finances partagées, responsabilités communes, communication constante. Ces défis méritent des solutions à la hauteur."
                  : "Shared living—whether in a roommate situation, family, or community—comes with unique challenges. Shared finances, common responsibilities, constant communication. These challenges deserve solutions that match their complexity."
                }
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "fr" 
                  ? "KOLIVO™ apporte structure, clarté et confiance à ces interactions quotidiennes, permettant aux gens de se concentrer sur ce qui compte vraiment : vivre ensemble harmonieusement."
                  : "KOLIVO™ brings structure, clarity, and trust to these daily interactions, allowing people to focus on what truly matters: living together harmoniously."
                }
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
              <h3 className="font-display text-xl font-semibold mb-6">
                {language === "fr" ? "Nos principes" : "Our Principles"}
              </h3>
              <ul className="space-y-6">
                <li>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === "fr" ? "Bienveillance" : "Kindness"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "fr" 
                      ? "La technologie au service des relations humaines, pas l'inverse."
                      : "Technology in service of human relationships, not the other way around."
                    }
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === "fr" ? "Confiance" : "Trust"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "fr" 
                      ? "Vos données vous appartiennent. Transparence totale sur ce que nous faisons."
                      : "Your data belongs to you. Complete transparency about what we do."
                    }
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === "fr" ? "Équité" : "Fairness"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "fr" 
                      ? "Des systèmes conçus pour l'équilibre et la justice dans chaque interaction."
                      : "Systems designed for balance and fairness in every interaction."
                    }
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === "fr" ? "Excellence" : "Excellence"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "fr" 
                      ? "Pas de compromis sur la qualité. Chaque détail compte."
                      : "No compromise on quality. Every detail matters."
                    }
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
              {language === "fr" ? "Notre vision" : "Our Vision"}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {language === "fr" 
                ? "La référence en gestion collaborative" 
                : "The Standard for Collaborative Management"
              }
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {language === "fr" 
                ? "Nous envisageons un avenir où chaque ménage partagé, chaque communauté, chaque groupe a accès aux outils dont il a besoin pour fonctionner avec la même efficacité et harmonie que les meilleures organisations."
                : "We envision a future where every shared household, every community, every group has access to the tools they need to function with the same efficiency and harmony as the best-run organizations."
              }
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "fr" 
                ? "KOLIVO™ construit vers cet avenir — une fonctionnalité réfléchie à la fois."
                : "KOLIVO™ is building toward that future—one thoughtful feature at a time."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                {language === "fr" ? "Siège social" : "Headquarters"}
              </h3>
              <p className="text-muted-foreground">
                Montréal, Québec<br />
                Canada
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                {language === "fr" ? "Fondée" : "Founded"}
              </h3>
              <p className="text-muted-foreground">
                2024
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                {language === "fr" ? "Entité juridique" : "Legal Entity"}
              </h3>
              <p className="text-muted-foreground">
                KOLIVO™ Technologies Inc.<br />
                {language === "fr" ? "Corporation fédérale canadienne" : "Canadian Federal Corporation"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
                {language === "fr" ? "Rejoignez-nous" : "Join Us"}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {language === "fr" ? "Construisez avec nous" : "Build With Us"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {language === "fr" 
                  ? "Nous construisons une équipe de professionnels passionnés qui partagent notre engagement envers l'excellence, l'impact social et la réflexion à long terme."
                  : "We are building a team of passionate professionals who share our commitment to excellence, social impact, and long-term thinking."
                }
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/company/careers">
                  {language === "fr" ? "Voir les opportunités" : "View Opportunities"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-navy rounded-lg p-8 text-white">
              <h3 className="font-display text-xl font-semibold mb-6">
                {language === "fr" ? "Ce que nous recherchons" : "What We Look For"}
              </h3>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>{language === "fr" ? "Passion pour l'impact social positif" : "Passion for positive social impact"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>{language === "fr" ? "Engagement envers la qualité et l'excellence" : "Commitment to quality and excellence"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>{language === "fr" ? "Esprit d'équipe et communication claire" : "Team spirit and clear communication"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>{language === "fr" ? "Vision à long terme et sens des responsabilités" : "Long-term vision and sense of responsibility"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              {language === "fr" ? "Parlons de votre projet" : "Let's Talk About Your Project"}
            </h2>
            <p className="text-lg text-white/70 mb-8">
              {language === "fr" 
                ? "Vous avez des questions sur KOLIVO™ ou souhaitez en savoir plus sur nos solutions? Notre équipe est là pour vous."
                : "Have questions about KOLIVO™ or want to learn more about our solutions? Our team is here for you."
              }
            </p>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link href="/contact">
                {language === "fr" ? "Nous contacter" : "Get in Touch"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
