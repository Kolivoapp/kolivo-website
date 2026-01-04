/**
 * Security & Trust Page
 * Design: Swiss Corporate Modernism
 * Bilingual support (FR/EN)
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Eye, FileCheck } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SecurityTrust() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/images/security-trust.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#1a2332]/80 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
              {t("security.tagline")}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === "fr" 
                ? "La confiance est le fondement de notre plateforme" 
                : "The Foundation of Our Platform is Trust"
              }
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              {language === "fr" 
                ? "La sécurité et la gouvernance ne sont pas des réflexions après coup. Ce sont les principes fondamentaux et non négociables sur lesquels notre écosystème est construit."
                : "Security and governance are not afterthoughts. They are the core, non-negotiable principles upon which our ecosystem is built."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Approach */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
                {language === "fr" ? "01 — Approche de la confidentialité" : "01 — Privacy Approach"}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {language === "fr" 
                  ? "La confidentialité dès la conception, pas par accident" 
                  : "Privacy by Design, Not by Accident"
                }
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {language === "fr" 
                  ? "Nous croyons que la confidentialité est un droit fondamental, pas une fonctionnalité à ajouter plus tard. Notre plateforme est architecturée dès le départ pour minimiser la collecte de données, maximiser le contrôle utilisateur et garantir que les informations personnelles sont traitées avec le plus grand soin."
                  : "We believe that privacy is a fundamental right, not a feature to be added later. Our platform is architected from the ground up to minimize data collection, maximize user control, and ensure that personal information is handled with the utmost care."
                }
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "fr" 
                  ? "Nous collectons uniquement ce qui est nécessaire, conservons uniquement ce qui est requis et fournissons des mécanismes clairs pour que les personnes concernées exercent leurs droits en vertu des lois applicables sur la protection de la vie privée."
                  : "We collect only what is necessary, retain only what is required, and provide clear mechanisms for data subjects to exercise their rights under applicable privacy laws."
                }
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">
                  {language === "fr" ? "Nos principes de confidentialité" : "Our Privacy Principles"}
                </h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">01</span>
                  <span>{language === "fr" ? "Minimisation des données — nous collectons uniquement ce dont nous avons besoin" : "Data minimization — we collect only what we need"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">02</span>
                  <span>{language === "fr" ? "Limitation des finalités — les données sont utilisées uniquement aux fins déclarées" : "Purpose limitation — data is used only for stated purposes"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">03</span>
                  <span>{language === "fr" ? "Transparence — communication claire sur les pratiques de données" : "Transparency — clear communication about data practices"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">04</span>
                  <span>{language === "fr" ? "Contrôle utilisateur — mécanismes pour accéder, corriger et supprimer les données" : "User control — mechanisms to access, correct, and delete data"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Baseline */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 bg-card rounded-lg p-8 border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">
                  {language === "fr" ? "Cadre de conformité" : "Compliance Framework"}
                </h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>{language === "fr" ? "Contrôles alignés SOC 2 Type II" : "SOC 2 Type II aligned controls"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>{language === "fr" ? "Prêt pour la conformité RGPD et PIPEDA" : "GDPR and PIPEDA compliance ready"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>{language === "fr" ? "Évaluations de sécurité tierces régulières" : "Regular third-party security assessments"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span>{language === "fr" ? "Surveillance et amélioration continues" : "Continuous monitoring and improvement"}</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
                {language === "fr" ? "02 — Base de conformité" : "02 — Compliance Baseline"}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {language === "fr" 
                  ? "La conformité comme fondation, pas comme case à cocher" 
                  : "Compliance as a Foundation, Not a Checkbox"
                }
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {language === "fr" 
                  ? "Nous abordons la conformité non pas comme un fardeau à minimiser, mais comme une discipline qui renforce notre plateforme et gagne la confiance de nos clients."
                  : "We approach compliance not as a burden to be minimized, but as a discipline that strengthens our platform and earns the trust of our clients."
                }
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "fr" 
                  ? "Notre programme de conformité est construit sur des cadres et normes reconnus, avec des évaluations régulières pour garantir que nous répondons ou dépassons les attentes des clients entreprises et institutionnels."
                  : "Our compliance program is built on recognized frameworks and standards, with regular assessments to ensure we meet or exceed the expectations of enterprise and institutional clients."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Handling */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
                {language === "fr" ? "03 — Philosophie de gestion des incidents" : "03 — Incident Handling Philosophy"}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                {language === "fr" ? "Transparence dans l'adversité" : "Transparency in Adversity"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {language === "fr" 
                  ? "Aucun système n'est à l'abri des incidents. Ce qui compte, c'est notre façon de répondre. Notre philosophie de gestion des incidents repose sur trois piliers : transparence, rapidité et responsabilité."
                  : "No system is immune to incidents. What matters is how we respond. Our incident handling philosophy is built on three pillars: transparency, speed, and accountability."
                }
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "fr" 
                  ? "Lorsque des incidents surviennent, nous communiquons rapidement et honnêtement avec les parties concernées, prenons des mesures immédiates pour contenir et remédier, et menons des examens post-incident approfondis pour prévenir la récurrence."
                  : "When incidents occur, we communicate promptly and honestly with affected parties, take immediate action to contain and remediate, and conduct thorough post-incident reviews to prevent recurrence."
                }
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">
                  {language === "fr" ? "Notre engagement de réponse" : "Our Response Commitment"}
                </h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">01</span>
                  <span>{language === "fr" ? "Accusé de réception immédiat des incidents confirmés" : "Immediate acknowledgment of confirmed incidents"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">02</span>
                  <span>{language === "fr" ? "Mises à jour régulières pendant les incidents actifs" : "Regular status updates during active incidents"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">03</span>
                  <span>{language === "fr" ? "Rapports post-incident avec analyse des causes profondes" : "Post-incident reports with root cause analysis"}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">04</span>
                  <span>{language === "fr" ? "Mesures de remédiation et de prévention documentées" : "Documented remediation and prevention measures"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              {language === "fr" 
                ? "Des questions sur notre posture de sécurité?" 
                : "Questions About Our Security Posture?"
              }
            </h2>
            <p className="text-lg text-white/70 mb-8">
              {language === "fr" 
                ? "Nous accueillons l'opportunité de discuter en détail de nos pratiques de sécurité et de conformité avec les clients potentiels."
                : "We welcome the opportunity to discuss our security and compliance practices in detail with prospective clients."
              }
            </p>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link href="/contact">
                {t("nav.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
