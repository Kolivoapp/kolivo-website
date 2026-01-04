/**
 * Contact Page
 * Design: Swiss Corporate Modernism
 * Bilingual support (FR/EN)
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Building2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t, language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(language === "fr" 
      ? "Merci pour votre message. Nous vous répondrons sous peu."
      : "Thank you for your inquiry. We will be in touch shortly."
    );
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
              {t("contact.tagline")}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              {t("contact.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                {t("contact.form.title")}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{language === "fr" ? "Prénom" : "First Name"}</Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      required 
                      placeholder={language === "fr" ? "Jean" : "John"}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{language === "fr" ? "Nom" : "Last Name"}</Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      required 
                      placeholder={language === "fr" ? "Dupont" : "Smith"}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t("contact.form.email")}</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    placeholder="jean.dupont@entreprise.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">{t("contact.form.company")}</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    placeholder={language === "fr" ? "Entreprise ABC" : "Acme Corporation"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">{t("contact.form.subject")}</Label>
                  <Select name="interest">
                    <SelectTrigger>
                      <SelectValue placeholder={language === "fr" ? "Sélectionner une option" : "Select an option"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="platform">{t("contact.form.subject.general")}</SelectItem>
                      <SelectItem value="partnership">{t("contact.form.subject.sales")}</SelectItem>
                      <SelectItem value="consulting">{language === "fr" ? "Conseil Studio+" : "Studio+ Consulting"}</SelectItem>
                      <SelectItem value="careers">{language === "fr" ? "Carrières" : "Careers"}</SelectItem>
                      <SelectItem value="other">{language === "fr" ? "Autre" : "Other"}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={5}
                    placeholder={language === "fr" 
                      ? "Parlez-nous de votre organisation et de comment nous pouvons vous aider..."
                      : "Tell us about your organization and how we can help..."
                    }
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting 
                    ? (language === "fr" ? "Envoi..." : "Sending...") 
                    : t("contact.form.submit")
                  }
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                {t("contact.info.title")}
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("contact.info.email")}</h3>
                    <p className="text-muted-foreground mb-2">
                      {language === "fr" ? "Pour les demandes générales" : "For general inquiries"}
                    </p>
                    <a href="mailto:contact@kolivo.ca" className="text-primary hover:underline">
                      contact@kolivo.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {language === "fr" ? "Siège social" : "Corporate"}
                    </h3>
                    <p className="text-muted-foreground">
                      KOLIVO™ Technologies Inc.<br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("contact.info.location")}</h3>
                    <p className="text-muted-foreground">
                      {t("contact.info.location.value")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Expectations */}
              <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                <h3 className="font-display font-semibold text-foreground mb-3">
                  {language === "fr" ? "À quoi s'attendre" : "What to Expect"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === "fr" 
                    ? "Nous examinons toutes les demandes avec soin et visons à répondre dans les deux jours ouvrables. Pour les questions urgentes, veuillez l'indiquer dans votre message."
                    : "We review all inquiries carefully and aim to respond within two business days. For urgent matters, please indicate so in your message."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
