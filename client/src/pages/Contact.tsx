/**
 * Contact Page
 * Style: Institutional Light Mode
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Building2, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        tagline: "Contact",
        title: "Let's talk",
        description: "Have questions about KOLIVO™? We'd love to hear from you. Our team is here to help."
      },
      form: {
        title: "Send us a message",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        company: "Company (optional)",
        subject: "Subject",
        subjectPlaceholder: "Select a topic",
        subjectOptions: {
          general: "General Inquiry",
          beta: "Beta Program",
          partnership: "Partnership",
          consulting: "Enterprise Solutions",
          careers: "Careers",
          other: "Other"
        },
        message: "Message",
        messagePlaceholder: "Tell us how we can help...",
        submit: "Send Message",
        submitting: "Sending..."
      },
      info: {
        title: "Other ways to reach us",
        email: "Email",
        emailDesc: "For general inquiries",
        phone: "Phone",
        phoneDesc: "Monday to Friday, 9am - 5pm ET",
        corporate: "Corporate Headquarters"
      },
      expectations: {
        title: "What to expect",
        description: "We review all inquiries carefully and aim to respond within two business days. For urgent matters, please indicate so in your message."
      },
      success: "Thank you for your message. We will be in touch shortly."
    },
    fr: {
      hero: {
        tagline: "Contact",
        title: "Parlons-en",
        description: "Des questions sur KOLIVO™? Nous serions ravis de vous entendre. Notre équipe est là pour vous aider."
      },
      form: {
        title: "Envoyez-nous un message",
        firstName: "Prénom",
        lastName: "Nom",
        email: "Adresse courriel",
        company: "Entreprise (optionnel)",
        subject: "Sujet",
        subjectPlaceholder: "Sélectionner un sujet",
        subjectOptions: {
          general: "Demande générale",
          beta: "Programme bêta",
          partnership: "Partenariat",
          consulting: "Solutions entreprise",
          careers: "Carrières",
          other: "Autre"
        },
        message: "Message",
        messagePlaceholder: "Dites-nous comment nous pouvons vous aider...",
        submit: "Envoyer le message",
        submitting: "Envoi..."
      },
      info: {
        title: "Autres façons de nous joindre",
        email: "Courriel",
        emailDesc: "Pour les demandes générales",
        phone: "Téléphone",
        phoneDesc: "Lundi au vendredi, 9h - 17h HE",
        corporate: "Siège social"
      },
      expectations: {
        title: "À quoi s'attendre",
        description: "Nous examinons toutes les demandes avec soin et visons à répondre dans les deux jours ouvrables. Pour les questions urgentes, veuillez l'indiquer dans votre message."
      },
      success: "Merci pour votre message. Nous vous répondrons sous peu."
    }
  };

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(t.success);
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

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

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                {t.form.title}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-slate-700">{t.form.firstName}</Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      required 
                      className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-slate-700">{t.form.lastName}</Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      required 
                      className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">{t.form.email}</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-700">{t.form.company}</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest" className="text-slate-700">{t.form.subject}</Label>
                  <Select name="interest">
                    <SelectTrigger className="border-slate-300">
                      <SelectValue placeholder={t.form.subjectPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">{t.form.subjectOptions.general}</SelectItem>
                      <SelectItem value="beta">{t.form.subjectOptions.beta}</SelectItem>
                      <SelectItem value="partnership">{t.form.subjectOptions.partnership}</SelectItem>
                      <SelectItem value="consulting">{t.form.subjectOptions.consulting}</SelectItem>
                      <SelectItem value="careers">{t.form.subjectOptions.careers}</SelectItem>
                      <SelectItem value="other">{t.form.subjectOptions.other}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700">{t.form.message}</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={5}
                    placeholder={t.form.messagePlaceholder}
                    className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t.form.submitting : t.form.submit}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                {t.info.title}
              </h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{t.info.email}</h3>
                    <p className="text-slate-600 text-sm mb-1">{t.info.emailDesc}</p>
                    <a href="mailto:contact@kolivo.ca" className="text-emerald-600 hover:underline">
                      contact@kolivo.ca
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{t.info.phone}</h3>
                    <p className="text-slate-600 text-sm mb-1">{t.info.phoneDesc}</p>
                    <a href="tel:+18445654861" className="text-emerald-600 hover:underline">
                      1 (844) 565-4861
                    </a>
                  </div>
                </div>

                {/* Corporate Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{t.info.corporate}</h3>
                    <p className="text-slate-600 text-sm">
                      KOLIVO™ Technologies Inc.<br />
                      Tour de la Bourse - Place Victoria<br />
                      800, rue du Square-Victoria<br />
                      Suite 2624<br />
                      Montréal (Québec) H3C 0B4<br />
                      Canada
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Expectations */}
              <div className="mt-10 p-5 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">
                  {t.expectations.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.expectations.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
