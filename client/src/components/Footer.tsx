/**
 * KOLIVO™ Footer
 * Style: Institutional with Navy background
 */

import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { CDN } from "@/lib/cdn";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const content = {
    en: {
      description: "KOLIVO™ Technologies Inc. builds technology for shared living. Our platforms help roommates, property managers, and communities organize collaborative spaces with clarity and trust.",
      products: "Products",
      company: "Company",
      legal: "Legal",
      resources: "Resources",
      hub: "KOLIVO™ Hub",
      nest: "KOLIVO™ Nest",
      seed: "KOLIVO™ Seed",
      halo: "Halo • ID",
      about: "About Us",
      careers: "Careers",
      press: "Press",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      accessibility: "Accessibility",
      help: "Help Center",
      blog: "Blog",
      developers: "Developers",
      status: "System Status",
      copyright: `© ${currentYear} KOLIVO™ Technologies Inc.`,
      allRights: "All rights reserved.",
      headquarters: "Headquarters",
      corporate: "Corporate Website"
    },
    fr: {
      description: "KOLIVO™ Technologies Inc. développe des technologies pour la vie partagée. Nos plateformes aident les colocataires, gestionnaires immobiliers et communautés à organiser les espaces collaboratifs avec clarté et confiance.",
      products: "Produits",
      company: "Entreprise",
      legal: "Légal",
      resources: "Ressources",
      hub: "KOLIVO™ Hub",
      nest: "KOLIVO™ Nest",
      seed: "KOLIVO™ Seed",
      halo: "Halo • ID",
      about: "À propos",
      careers: "Carrières",
      press: "Presse",
      contact: "Contact",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      cookies: "Politique des témoins",
      accessibility: "Accessibilité",
      help: "Centre d'aide",
      blog: "Blogue",
      developers: "Développeurs",
      status: "État du système",
      copyright: `© ${currentYear} KOLIVO™ Technologies Inc.`,
      allRights: "Tous droits réservés.",
      headquarters: "Siège social",
      corporate: "Site corporatif"
    }
  };

  const t = content[language];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link href="/" className="inline-block mb-4">
              <img 
                src={CDN.logos.wordmark.white}
                alt="KOLIVO™" 
                className="h-6 w-auto"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.style.display = 'none';
                }}
              />
            </Link>
            <p className="footer-description">
              {t.description}
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.8)' }}>{t.headquarters}</p>
                  <p>800, rue du Square-Victoria, Suite 2624</p>
                  <p>Montréal (Québec) H3C 0B4</p>
                </div>
              </div>
              <a 
                href="tel:+18445654861"
                className="flex items-center gap-3 hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                <Phone className="w-4 h-4" />
                1 (844) 565-4861
              </a>
              <a 
                href="mailto:contact@kolivo.ca"
                className="flex items-center gap-3 hover:text-white transition-colors"
                style={{ color: 'rgba(255,255,255,0.6)' }}
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
              <Link href="/company/press" className="footer-link">{t.press}</Link>
              <Link href="/contact" className="footer-link">{t.contact}</Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="footer-title">{t.legal}</h4>
            <nav className="space-y-2">
              <Link href="/legal/privacy" className="footer-link">{t.privacy}</Link>
              <Link href="/legal/terms" className="footer-link">{t.terms}</Link>
              <Link href="/legal/cookies" className="footer-link">{t.cookies}</Link>
              <Link href="/legal/accessibility" className="footer-link">{t.accessibility}</Link>
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
            className="flex items-center gap-1 text-sm transition-colors"
            style={{ color: 'rgba(255,255,255,0.4)' }}
            onMouseOver={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
          >
            {t.corporate}
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
