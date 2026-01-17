/**
 * KOLIVO™ Footer - Liquid Glass Design
 * Clean, minimal, premium
 */

import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight } from "lucide-react";
import { CDN } from "@/lib/cdn";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "The infrastructure for shared living",
      products: "Products",
      company: "Company",
      legal: "Legal",
      hub: "Hub",
      nest: "Nest",
      halo: "Halo",
      vault: "Vault",
      about: "About",
      careers: "Careers",
      contact: "Contact",
      trust: "Trust",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
      copyright: `© ${currentYear} KOLIVO™ Technologies Inc.`,
      allRights: "All rights reserved.",
      corporate: "Corporate"
    },
    fr: {
      tagline: "L'infrastructure de la vie partagée",
      products: "Produits",
      company: "Entreprise",
      legal: "Légal",
      hub: "Hub",
      nest: "Nest",
      halo: "Halo",
      vault: "Vault",
      about: "À propos",
      careers: "Carrières",
      contact: "Contact",
      trust: "Confiance",
      privacy: "Confidentialité",
      terms: "Conditions",
      cookies: "Témoins",
      copyright: `© ${currentYear} KOLIVO™ Technologies Inc.`,
      allRights: "Tous droits réservés.",
      corporate: "Corporatif"
    }
  };

  const t = content[language];

  return (
    <footer className="relative border-t border-white/5">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent pointer-events-none" />
      
      <div className="container relative z-10">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <img 
                  src={CDN.logos.wordmark.white}
                  alt="KOLIVO™" 
                  className="h-7 w-auto opacity-90"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/kolivo-logo-white.svg';
                  }}
                />
              </Link>
              <p className="text-foreground/40 text-sm max-w-xs leading-relaxed">
                {t.tagline}
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-foreground/30 mb-4">
                {t.products}
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/products/hub" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    {t.hub}
                  </Link>
                </li>
                <li>
                  <Link href="/products/nest" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    {t.nest}
                  </Link>
                </li>
                <li>
                  <Link href="/products/halo" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    {t.halo}
                  </Link>
                </li>
                <li>
                  <Link href="/products/vault" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    {t.vault}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-foreground/30 mb-4">
                {t.company}
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/company" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    {t.about}
                  </Link>
                </li>
                <li>
                  <Link href="/company/careers" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    {t.careers}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    {t.contact}
                  </Link>
                </li>
                <li>
                  <Link href="/security-trust" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    {t.trust}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-foreground/30 mb-4">
                {t.legal}
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/legal/privacy" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    {t.privacy}
                  </Link>
                </li>
                <li>
                  <Link href="/legal/terms" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    {t.terms}
                  </Link>
                </li>
                <li>
                  <Link href="/legal/cookies" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    {t.cookies}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/30">
            {t.copyright} {t.allRights}
          </p>
          
          <a 
            href="https://corporate.kolivo.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-xs text-foreground/30 hover:text-foreground/60 transition-colors"
          >
            {t.corporate}
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}
