/**
 * KOLIVO™ Lens Product Page
 * Business Process Optimization Consulting
 * Color: Purple #7A3AD7
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Target, TrendingUp, Workflow, BarChart3, Users, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { PRODUCT_COLORS, CDN } from "@/lib/cdn";

export default function ProductLens() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const content = {
    en: {
      tagline: "Business Process Optimization",
      title: "KOLIVO™ Lens",
      subtitle: "See clearly. Optimize confidently.",
      description: "Strategic consulting to optimize your business processes. We analyze, design, and implement solutions that drive efficiency, reduce costs, and accelerate growth.",
      status: "Consulting Services",
      cta: "Book a Consultation",
      services: {
        title: "How we help",
        items: [
          {
            icon: Target,
            title: "Process Analysis",
            description: "Deep dive into your current operations to identify bottlenecks, inefficiencies, and opportunities for improvement."
          },
          {
            icon: Workflow,
            title: "Workflow Design",
            description: "Design optimized workflows that align with your business goals and industry best practices."
          },
          {
            icon: TrendingUp,
            title: "Performance Optimization",
            description: "Implement changes that measurably improve your key performance indicators."
          },
          {
            icon: BarChart3,
            title: "Data-Driven Insights",
            description: "Leverage analytics to make informed decisions and track the impact of optimizations."
          },
          {
            icon: Users,
            title: "Change Management",
            description: "Guide your team through transitions with training, documentation, and ongoing support."
          },
          {
            icon: CheckCircle,
            title: "Continuous Improvement",
            description: "Establish frameworks for ongoing optimization and adaptation to changing needs."
          }
        ]
      },
      form: {
        title: "Book a Consultation",
        description: "Tell us about your business challenges and we'll schedule a discovery call.",
        name: "Full Name",
        email: "Email Address",
        company: "Company",
        phone: "Phone (optional)",
        message: "Describe your challenges",
        messagePlaceholder: "What business processes are you looking to optimize?",
        submit: "Request Consultation",
        submitting: "Sending...",
        success: "Thank you! We'll be in touch within 24 hours to schedule your consultation."
      },
      ctaSection: {
        title: "Ready to optimize your operations?",
        description: "Let's discuss how KOLIVO™ Lens can help transform your business processes.",
        button: "Book a Consultation"
      }
    },
    fr: {
      tagline: "Optimisation des processus d'affaires",
      title: "KOLIVO™ Lens",
      subtitle: "Voir clairement. Optimiser en confiance.",
      description: "Conseil stratégique pour optimiser vos processus d'affaires. Nous analysons, concevons et mettons en œuvre des solutions qui améliorent l'efficacité, réduisent les coûts et accélèrent la croissance.",
      status: "Services de conseil",
      cta: "Réserver une consultation",
      services: {
        title: "Comment nous aidons",
        items: [
          {
            icon: Target,
            title: "Analyse des processus",
            description: "Analyse approfondie de vos opérations actuelles pour identifier les goulots d'étranglement, les inefficacités et les opportunités d'amélioration."
          },
          {
            icon: Workflow,
            title: "Conception de flux de travail",
            description: "Conception de flux de travail optimisés alignés sur vos objectifs d'affaires et les meilleures pratiques de l'industrie."
          },
          {
            icon: TrendingUp,
            title: "Optimisation de la performance",
            description: "Mise en œuvre de changements qui améliorent de manière mesurable vos indicateurs clés de performance."
          },
          {
            icon: BarChart3,
            title: "Insights basés sur les données",
            description: "Exploitez l'analytique pour prendre des décisions éclairées et suivre l'impact des optimisations."
          },
          {
            icon: Users,
            title: "Gestion du changement",
            description: "Accompagnez votre équipe à travers les transitions avec formation, documentation et support continu."
          },
          {
            icon: CheckCircle,
            title: "Amélioration continue",
            description: "Établissez des cadres pour l'optimisation continue et l'adaptation aux besoins changeants."
          }
        ]
      },
      form: {
        title: "Réserver une consultation",
        description: "Parlez-nous de vos défis d'affaires et nous planifierons un appel de découverte.",
        name: "Nom complet",
        email: "Adresse courriel",
        company: "Entreprise",
        phone: "Téléphone (optionnel)",
        message: "Décrivez vos défis",
        messagePlaceholder: "Quels processus d'affaires cherchez-vous à optimiser?",
        submit: "Demander une consultation",
        submitting: "Envoi...",
        success: "Merci! Nous vous contacterons dans les 24 heures pour planifier votre consultation."
      },
      ctaSection: {
        title: "Prêt à optimiser vos opérations?",
        description: "Discutons de comment KOLIVO™ Lens peut aider à transformer vos processus d'affaires.",
        button: "Réserver une consultation"
      }
    }
  };

  const t = content[language];
  const accentColor = PRODUCT_COLORS.lens;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success(t.form.success);
    setIsSubmitting(false);
    setShowForm(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Light Mode */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
            >
              {language === 'en' ? 'Book Now' : 'Réserver'}
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: accentColor }}>
              {t.tagline}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {t.title}
            </h1>
            <p className="text-xl font-medium mb-6" style={{ color: accentColor }}>
              {t.subtitle}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              {t.description}
            </p>
            <Button 
              size="lg" 
              className="text-white px-6 py-3 rounded-lg"
              style={{ backgroundColor: accentColor }}
              onClick={() => setShowForm(true)}
            >
              {t.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Consultation Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t.form.title}</h3>
            <p className="text-slate-600 text-sm mb-6">{t.form.description}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700">{t.form.name}</Label>
                <Input id="name" name="name" required className="border-slate-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700">{t.form.email}</Label>
                <Input id="email" name="email" type="email" required className="border-slate-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-slate-700">{t.form.company}</Label>
                <Input id="company" name="company" required className="border-slate-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-700">{t.form.phone}</Label>
                <Input id="phone" name="phone" type="tel" className="border-slate-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-700">{t.form.message}</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={4}
                  placeholder={t.form.messagePlaceholder}
                  className="border-slate-300"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setShowForm(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 text-white"
                  style={{ backgroundColor: accentColor }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t.form.submitting : t.form.submit}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">
            {t.services.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((service, index) => (
              <div key={index} className="p-6 rounded-lg bg-slate-50 border border-slate-200">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${accentColor}15` }}
                >
                  <service.icon className="w-6 h-6" style={{ color: accentColor }} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-slate-900">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.ctaSection.title}
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              {t.ctaSection.description}
            </p>
            <Button 
              size="lg" 
              className="text-white px-6 py-3 rounded-lg"
              style={{ backgroundColor: accentColor }}
              onClick={() => setShowForm(true)}
            >
              {t.ctaSection.button}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
