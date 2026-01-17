/**
 * KOLIVO™ Footer
 * Style: Institutional / Corporate
 */

import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { CDN } from "@/lib/cdn";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const content = {
    en: {
      description: "Building the infrastructure for shared living.",
      products: "Products",
      company: "Company",
      legal: "Legal",
      hub: "Hub",
      nest: "Nest",
      seed: "Seed",
      halo: "Halo",
      about: "About",
      careers: "Careers",
      contact: "Contact",
      trust: "Trust",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
      copyright: `© ${currentYear} KOLIVO™ Technologies Inc.`,
      allRights: "All rights reserved.",
      headquarters: "Headquarters",
      corporate: "Corporate Site"
    },
    fr: {
      description: "Construire l'infrastructure de la vie partagée.",
      products: "Produits",
      company: "Entreprise",
      legal: "Légal",
      hub: "Hub",
      nest: "Nest",
      seed: "Seed",
      halo: "Halo",
      about: "À propos",
      careers: "Carrières",
      contact: "Contact",
      trust: "Confiance",
      privacy: "Confidentialité",
      terms: "Conditions",
      cookies: "Témoins",
      copyright: `© ${currentYear} KOLIVO™ Technologies Inc.`,
      allRights: "Tous droits réservés.",
      headquarters: "Siège social",
      corporate: "Site corporatif"
    }
  };

  const t = content[language];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <img 
                src={CDN.logos.wordmark.white}
                alt="KOLIVO™" 
                className="h-6 w-auto opacity-80"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.style.display = 'none';
                }}
              />
            </Link>
            <p className="text-foreground-muted text-sm mb-6 max-w-xs">
              {t.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-foreground-muted">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>800, rue du Square-Victoria</p>
                  <p>Suite 2624</p>
                  <p>Montréal (Québec) H3C 0B4</p>
                </div>
              </div>
              <a 
                href="mailto:contact@kolivo.ca"
                className="flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@kolivo.ca
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="footer-title">{t.products}</h4>
            <nav className="space-y-2">
              <Link href="/products/hub" className="footer-link">{t.hub}</Link>
              <Link href="/products/nest" className="footer-link">{t.nest}</Link>
              <Link href="/products/seed" className="footer-link">{t.seed}</Link>
              <Link href="/products/halo" className="footer-link">{t.halo}</Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="footer-title">{t.company}</h4>
            <nav className="space-y-2">
              <Link href="/company" className="footer-link">{t.about}</Link>
              <Link href="/company/careers" className="footer-link">{t.careers}</Link>
              <Link href="/contact" className="footer-link">{t.contact}</Link>
              <Link href="/security-trust" className="footer-link">{t.trust}</Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="footer-title">{t.legal}</h4>
            <nav className="space-y-2">
              <Link href="/legal/privacy" className="footer-link">{t.privacy}</Link>
              <Link href="/legal/terms" className="footer-link">{t.terms}</Link>
              <Link href="/legal/cookies" className="footer-link">{t.cookies}</Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            {t.copyright} {t.allRights}
          </p>
          
          <a 
            href="https://corporate.kolivo.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-foreground-subtle hover:text-foreground-secondary transition-colors"
          >
            {t.corporate}
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
