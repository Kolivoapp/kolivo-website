/**
 * KOLIVO™ Footer Component
 * Design: Brand Aligned 2026 - Navy Foundation
 * Bilingual support (FR/EN)
 */

import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const content = {
    en: {
      description: "Building the infrastructure for shared living. Technology that brings people together.",
      products: "Products",
      solutions: "Solutions",
      company: "Company",
      legal: "Legal",
      identity: "Identity",
      about: "About",
      careers: "Careers",
      security: "Security & Trust",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      cookies: "Cookies",
      copyright: `© ${currentYear} KOLIVO™ Technologies Inc. All rights reserved.`,
      tagline: "Shared Living, Simplified",
      haloPortal: "HALO ID Portal",
      coliving: "Coliving",
      owners: "Property Owners",
      communities: "Communities"
    },
    fr: {
      description: "Construire l'infrastructure de la vie partagée. La technologie qui rassemble les gens.",
      products: "Produits",
      solutions: "Solutions",
      company: "Entreprise",
      legal: "Légal",
      identity: "Identité",
      about: "À propos",
      careers: "Carrières",
      security: "Sécurité et Confiance",
      contact: "Contact",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      cookies: "Témoins",
      copyright: `© ${currentYear} KOLIVO™ Technologies Inc. Tous droits réservés.`,
      tagline: "La colocation, simplifiée",
      haloPortal: "Portail HALO ID",
      coliving: "Colocation",
      owners: "Propriétaires",
      communities: "Communautés"
    }
  };

  const t = content[language];

  const footerLinks = {
    products: [
      { name: "HUB by KOLIVO™", href: "/products/hub", color: "#10b981" },
      { name: "Nest by KOLIVO™", href: "/products/nest", color: "#f59e0b" },
      { name: "Seed by KOLIVO™", href: "/products/seed", color: "#14b8a6" },
    ],
    solutions: [
      { name: t.coliving, href: "/solutions/coliving" },
      { name: t.owners, href: "/solutions/owners" },
      { name: t.communities, href: "/solutions/communities" },
    ],
    company: [
      { name: t.about, href: "/company" },
      { name: t.careers, href: "/company/careers" },
      { name: t.security, href: "/security-trust" },
      { name: t.contact, href: "/contact" },
    ],
    legal: [
      { name: t.privacy, href: "/legal/privacy" },
      { name: t.terms, href: "/legal/terms" },
      { name: t.cookies, href: "/legal/cookies" },
    ],
  };

  return (
    <footer className="bg-[#172638] text-white/90">
      <div className="container py-16 lg:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 mb-8 lg:mb-0">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img 
                src="https://cdn.groupekolivo.com/logos/kolivo-wordmark-white-tm.svg" 
                alt="KOLIVO™" 
                className="h-8 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/kolivo-logo-white.png";
                }}
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-6">
              {t.description}
            </p>
            <p className="text-sm text-white/40 mb-2">
              Montréal, Québec, Canada
            </p>
            <a href="mailto:contact@kolivo.ca" className="text-sm text-white/70 hover:text-white transition-colors">
              contact@kolivo.ca
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              {t.products}
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name} className="flex items-center gap-2">
                  <div 
                    className="w-1.5 h-1.5 rounded-full" 
                    style={{ backgroundColor: link.color }}
                  />
                  <Link 
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              {t.solutions}
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              {t.company}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Identity & Legal */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              {t.identity}
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://id.halo.kolivo.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#EF4444] hover:text-[#EF4444]/80 transition-colors flex items-center gap-1"
                >
                  {t.haloPortal}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
            
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4 mt-8">
              {t.legal}
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              {t.copyright}
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-white/40 uppercase tracking-wider">
                {t.tagline}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
