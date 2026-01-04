/**
 * Company (About) Page
 * Design: Swiss Corporate Modernism
 * Bilingual support (FR/EN)
 */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Company() {
  const { t, language } = useLanguage();

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
              {t("company.tagline")}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("company.title")}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {t("company.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
                {t("company.mission.title")}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {language === "fr" ? "L'ordre dans la complexité" : "Order from Complexity"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {language === "fr" 
                  ? "Les organisations modernes évoluent dans un paysage numérique de plus en plus complexe. Systèmes multiples, données fragmentées et processus incohérents créent friction, risque et inefficacité."
                  : "Modern organizations operate in an increasingly complex digital landscape. Multiple systems, fragmented data, and inconsistent processes create friction, risk, and inefficiency."
                }
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("company.mission.text")}
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="font-display text-xl font-semibold mb-6">
                {language === "fr" ? "Nos principes" : "Our Principles"}
              </h3>
              <ul className="space-y-6">
                <li>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === "fr" ? "Discipline plutôt que disruption" : "Discipline Over Disruption"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "fr" 
                      ? "Nous croyons en la construction de systèmes durables, pas en la poursuite des tendances."
                      : "We believe in building systems that last, not chasing trends."
                    }
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === "fr" ? "La gouvernance comme levier" : "Governance as Enablement"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "fr" 
                      ? "Une bonne gouvernance ne vous ralentit pas — elle vous donne la confiance d'avancer plus vite."
                      : "Proper governance doesn't slow you down—it gives you confidence to move faster."
                    }
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === "fr" ? "La confiance par la transparence" : "Trust Through Transparency"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "fr" 
                      ? "Nous gagnons la confiance en étant clairs sur ce que nous faisons et comment nous le faisons."
                      : "We earn trust by being clear about what we do and how we do it."
                    }
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === "fr" ? "Autorité sereine" : "Calm Authority"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "fr" 
                      ? "Confiance sans arrogance. Force sans agressivité."
                      : "Confidence without arrogance. Strength without aggression."
                    }
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
              {language === "fr" ? "Notre vision" : "Our Vision"}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {language === "fr" 
                ? "La référence en gouvernance numérique" 
                : "The Standard for Digital Governance"
              }
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {language === "fr" 
                ? "Nous envisageons un avenir où chaque entreprise et institution a accès à l'épine dorsale opérationnelle dont elle a besoin pour gouverner sa présence numérique avec la même rigueur et clarté qui définit les organisations les mieux gérées au monde."
                : "We envision a future where every enterprise and institution has access to the operational backbone they need to govern their digital presence with the same rigor and clarity that defines the best-run organizations in the world."
              }
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "fr" 
                ? "KOLIVO™ construit vers cet avenir — une implémentation disciplinée à la fois."
                : "KOLIVO™ is building toward that future—one disciplined implementation at a time."
              }
            </p>
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
                {t("careers.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {language === "fr" 
                  ? "Nous construisons une équipe de professionnels disciplinés qui partagent notre engagement envers l'excellence, la gouvernance et la réflexion à long terme."
                  : "We are building a team of disciplined professionals who share our commitment to excellence, governance, and long-term thinking."
                }
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/company/careers">
                  {language === "fr" ? "Voir les postes ouverts" : "View Open Positions"}
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
                  <span>{language === "fr" ? "Expertise approfondie dans votre domaine" : "Deep expertise in your domain"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>{language === "fr" ? "Engagement envers la qualité plutôt que la vitesse" : "Commitment to quality over speed"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>{language === "fr" ? "Communication claire et documentation" : "Clear communication and documentation"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>{language === "fr" ? "Vision à long terme et sens de la responsabilité" : "Long-term thinking and ownership"}</span>
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
              {t("contact.title")}
            </h2>
            <p className="text-lg text-white/70 mb-8">
              {t("contact.description")}
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
