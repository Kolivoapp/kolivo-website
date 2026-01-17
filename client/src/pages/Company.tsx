/**
 * Company (About) Page
 * Style: Institutional Light Mode
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import WaitlistForm from "@/components/WaitlistForm";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Company() {
  const { language } = useLanguage();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const content = {
    en: {
      hero: {
        tagline: "About KOLIVO™",
        title: "Building the infrastructure for shared living",
        description: "KOLIVO™ Technologies Inc. develops digital solutions that transform how people live, collaborate, and trust each other."
      },
      founder: {
        tagline: "Our Founder",
        name: "Lou Hébert",
        role: "Founder & CEO",
        bio1: "A passionate entrepreneur driven by technological innovation and social impact, Lou Hébert founded KOLIVO™ with a clear vision: to create digital tools that strengthen human connections rather than replace them.",
        bio2: "With expertise in digital product development and a deep understanding of modern shared living challenges, Lou leads KOLIVO™ toward its mission of becoming the standard for collaborative management.",
        bio3: "Based in Montréal, Lou combines operational rigor with creative vision to build a technology ecosystem that addresses real user needs while maintaining the highest standards of governance and security."
      },
      mission: {
        tagline: "Our Mission",
        title: "Order from complexity",
        description1: "Shared living—whether in a roommate situation, family, or community—comes with unique challenges. Shared finances, common responsibilities, constant communication. These challenges deserve solutions that match their complexity.",
        description2: "KOLIVO™ brings structure, clarity, and trust to these daily interactions, allowing people to focus on what truly matters: living together harmoniously.",
        principlesTitle: "Our Principles",
        principles: [
          { title: "Kindness", desc: "Technology in service of human relationships, not the other way around." },
          { title: "Trust", desc: "Your data belongs to you. Complete transparency about what we do." },
          { title: "Fairness", desc: "Systems designed for balance and fairness in every interaction." },
          { title: "Excellence", desc: "No compromise on quality. Every detail matters." }
        ]
      },
      vision: {
        tagline: "Our Vision",
        title: "The standard for collaborative management",
        description1: "We envision a future where every shared household, every community, every group has access to the tools they need to function with the same efficiency and harmony as the best-run organizations.",
        description2: "KOLIVO™ is building toward that future—one thoughtful feature at a time."
      },
      company: {
        headquarters: {
          title: "Headquarters",
          location: "Montréal, Québec",
          country: "Canada"
        },
        founded: {
          title: "Founded",
          year: "2024"
        },
        status: {
          title: "Status",
          value: "Private Company"
        }
      },
      join: {
        tagline: "Join Us",
        title: "Be part of the journey",
        description: "We're building something meaningful. If you share our vision of technology that brings people together, we'd love to hear from you.",
        cta: "Become a Beta Tester",
        ctaSecondary: "Contact Us"
      },
      cta: {
        title: "Ready to simplify shared living?",
        description: "Join our beta program and help shape the future of collaborative living.",
        button: "Become a Beta Tester"
      }
    },
    fr: {
      hero: {
        tagline: "À propos de KOLIVO™",
        title: "Construire l'infrastructure de la vie partagée",
        description: "KOLIVO™ Technologies Inc. développe des solutions numériques qui transforment la façon dont les gens vivent, collaborent et se font confiance."
      },
      founder: {
        tagline: "Notre fondateur",
        name: "Lou Hébert",
        role: "Fondateur et PDG",
        bio1: "Entrepreneur passionné par l'innovation technologique et l'impact social, Lou Hébert a fondé KOLIVO™ avec une vision claire : créer des outils numériques qui renforcent les liens humains plutôt que de les remplacer.",
        bio2: "Avec une expertise en développement de produits numériques et une compréhension profonde des défis de la vie partagée moderne, Lou dirige KOLIVO™ vers sa mission de devenir la référence en matière de gestion collaborative.",
        bio3: "Basé à Montréal, Lou combine rigueur opérationnelle et vision créative pour bâtir un écosystème technologique qui répond aux besoins réels des utilisateurs tout en maintenant les plus hauts standards de gouvernance et de sécurité."
      },
      mission: {
        tagline: "Notre mission",
        title: "L'ordre dans la complexité",
        description1: "La vie partagée — que ce soit en colocation, en famille ou en communauté — comporte des défis uniques. Finances partagées, responsabilités communes, communication constante. Ces défis méritent des solutions à la hauteur.",
        description2: "KOLIVO™ apporte structure, clarté et confiance à ces interactions quotidiennes, permettant aux gens de se concentrer sur ce qui compte vraiment : vivre ensemble harmonieusement.",
        principlesTitle: "Nos principes",
        principles: [
          { title: "Bienveillance", desc: "La technologie au service des relations humaines, pas l'inverse." },
          { title: "Confiance", desc: "Vos données vous appartiennent. Transparence totale sur ce que nous faisons." },
          { title: "Équité", desc: "Des systèmes conçus pour l'équilibre et la justice dans chaque interaction." },
          { title: "Excellence", desc: "Pas de compromis sur la qualité. Chaque détail compte." }
        ]
      },
      vision: {
        tagline: "Notre vision",
        title: "La référence en gestion collaborative",
        description1: "Nous envisageons un avenir où chaque ménage partagé, chaque communauté, chaque groupe a accès aux outils dont il a besoin pour fonctionner avec la même efficacité et harmonie que les meilleures organisations.",
        description2: "KOLIVO™ construit vers cet avenir — une fonctionnalité réfléchie à la fois."
      },
      company: {
        headquarters: {
          title: "Siège social",
          location: "Montréal, Québec",
          country: "Canada"
        },
        founded: {
          title: "Fondée",
          year: "2024"
        },
        status: {
          title: "Statut",
          value: "Entreprise privée"
        }
      },
      join: {
        tagline: "Rejoignez-nous",
        title: "Faites partie de l'aventure",
        description: "Nous construisons quelque chose de significatif. Si vous partagez notre vision d'une technologie qui rapproche les gens, nous aimerions avoir de vos nouvelles.",
        cta: "Devenez testeur",
        ctaSecondary: "Nous contacter"
      },
      cta: {
        title: "Prêt à simplifier la vie partagée?",
        description: "Rejoignez notre programme bêta et aidez à façonner l'avenir de la vie collaborative.",
        button: "Devenez testeur"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Light Mode */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-4">
              {t.hero.tagline}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/images/lou-hebert-founder.jpg" 
                  alt="Lou Hébert - Founder & CEO"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
                {t.founder.tagline}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                {t.founder.name}
              </h2>
              <p className="text-lg text-emerald-600 font-medium mb-6">
                {t.founder.role}
              </p>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>{t.founder.bio1}</p>
                <p>{t.founder.bio2}</p>
                <p>{t.founder.bio3}</p>
              </div>
              <div className="mt-6">
                <a 
                  href="https://linkedin.com/in/louhebert" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
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
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
                {t.mission.tagline}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                {t.mission.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t.mission.description1}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t.mission.description2}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">
                {t.mission.principlesTitle}
              </h3>
              <div className="space-y-6">
                {t.mission.principles.map((principle, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-slate-900 mb-1">{principle.title}</h4>
                    <p className="text-sm text-slate-600">{principle.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
              {t.vision.tagline}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              {t.vision.title}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              {t.vision.description1}
            </p>
            <p className="text-slate-600 leading-relaxed">
              {t.vision.description2}
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-base font-semibold text-slate-900 mb-3">
                {t.company.headquarters.title}
              </h3>
              <p className="text-slate-600">{t.company.headquarters.location}</p>
              <p className="text-slate-500 text-sm">{t.company.headquarters.country}</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-base font-semibold text-slate-900 mb-3">
                {t.company.founded.title}
              </h3>
              <p className="text-slate-600">{t.company.founded.year}</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-base font-semibold text-slate-900 mb-3">
                {t.company.status.title}
              </h3>
              <p className="text-slate-600">{t.company.status.value}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-3">
              {t.join.tagline}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {t.join.title}
            </h2>
            <p className="text-slate-600 mb-8">
              {t.join.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg">
                    {t.join.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <WaitlistForm onClose={() => setIsWaitlistOpen(false)} variant="modal" />
                </DialogContent>
              </Dialog>
              <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6 py-3 rounded-lg">
                <Link href="/contact">
                  {t.join.ctaSecondary}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-slate-900">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.cta.title}
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              {t.cta.description}
            </p>
            <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg">
                  {t.cta.button}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <WaitlistForm onClose={() => setIsWaitlistOpen(false)} variant="modal" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  );
}
