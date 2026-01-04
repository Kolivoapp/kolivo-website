/**
 * Waitlist Form Component
 * Formulaire d'inscription à la liste d'attente avec consentement explicite
 * Conforme aux exigences de la Commission d'accès à l'information du Québec
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { CheckCircle2, Loader2 } from "lucide-react";

interface WaitlistFormProps {
  onClose?: () => void;
  variant?: "modal" | "inline";
}

export default function WaitlistForm({ onClose, variant = "inline" }: WaitlistFormProps) {
  const { language, t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const content = {
    en: {
      title: "Join the Waitlist",
      subtitle: "Be the first to know when HUB by KOLIVO™ launches.",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Mobile Phone Number",
      phonePlaceholder: "+1 (514) 000-0000",
      consent: "I consent to receive electronic communications from KOLIVO™ Technologies Inc. regarding product updates, launch announcements, and promotional offers. I understand that I can withdraw my consent at any time by contacting privacy@kolivo.ca or by clicking the unsubscribe link in any communication.",
      privacyLink: "View our Privacy Policy",
      submit: "Join the Waitlist",
      submitting: "Submitting...",
      success: "You're on the list!",
      successMessage: "We'll notify you as soon as HUB by KOLIVO™ is available.",
      required: "This field is required",
      invalidEmail: "Please enter a valid email address",
      invalidPhone: "Please enter a valid phone number",
      consentRequired: "You must consent to receive communications to join the waitlist",
    },
    fr: {
      title: "Rejoindre la liste d'attente",
      subtitle: "Soyez parmi les premiers informés du lancement de HUB by KOLIVO™.",
      firstName: "Prénom",
      lastName: "Nom de famille",
      email: "Adresse courriel",
      phone: "Numéro de téléphone cellulaire",
      phonePlaceholder: "+1 (514) 000-0000",
      consent: "Je consens à recevoir des communications électroniques de KOLIVO™ Technologies Inc. concernant les mises à jour de produits, les annonces de lancement et les offres promotionnelles. Je comprends que je peux retirer mon consentement à tout moment en contactant privacy@kolivo.ca ou en cliquant sur le lien de désabonnement dans toute communication.",
      privacyLink: "Consulter notre Politique de confidentialité",
      submit: "Rejoindre la liste d'attente",
      submitting: "Envoi en cours...",
      success: "Vous êtes inscrit!",
      successMessage: "Nous vous informerons dès que HUB by KOLIVO™ sera disponible.",
      required: "Ce champ est requis",
      invalidEmail: "Veuillez entrer une adresse courriel valide",
      invalidPhone: "Veuillez entrer un numéro de téléphone valide",
      consentRequired: "Vous devez consentir à recevoir des communications pour rejoindre la liste d'attente",
    },
  };

  const c = content[language];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = c.required;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = c.required;
    }
    if (!formData.email.trim()) {
      newErrors.email = c.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = c.invalidEmail;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = c.required;
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = c.invalidPhone;
    }
    if (!formData.consent) {
      newErrors.consent = c.consentRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call - in production, this would send to your backend
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={`text-center ${variant === "modal" ? "py-8" : "py-12"}`}>
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
          {c.success}
        </h3>
        <p className="text-muted-foreground">
          {c.successMessage}
        </p>
        {onClose && (
          <Button onClick={onClose} className="mt-6">
            {language === "en" ? "Close" : "Fermer"}
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className={variant === "modal" ? "" : "max-w-md mx-auto"}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
          {c.title}
        </h3>
        <p className="text-muted-foreground">
          {c.subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm font-medium">
              {c.firstName} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className={errors.firstName ? "border-destructive" : ""}
            />
            {errors.firstName && (
              <p className="text-xs text-destructive">{errors.firstName}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-sm font-medium">
              {c.lastName} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className={errors.lastName ? "border-destructive" : ""}
            />
            {errors.lastName && (
              <p className="text-xs text-destructive">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            {c.email} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            {c.phone} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder={c.phonePlaceholder}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, consent: checked === true })
              }
              className={errors.consent ? "border-destructive" : ""}
            />
            <Label 
              htmlFor="consent" 
              className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
            >
              {c.consent}
            </Label>
          </div>
          {errors.consent && (
            <p className="text-xs text-destructive ml-7">{errors.consent}</p>
          )}
          <div className="ml-7">
            <Link 
              href="/legal/privacy" 
              className="text-sm text-primary hover:underline"
            >
              {c.privacyLink}
            </Link>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {c.submitting}
            </>
          ) : (
            c.submit
          )}
        </Button>
      </form>
    </div>
  );
}
