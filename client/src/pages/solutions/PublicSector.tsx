/**
 * Public Sector Solutions Page
 * Design: Swiss Corporate Modernism
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Shield, FileCheck, Lock } from "lucide-react";
import { Link } from "wouter";

export default function SolutionPublicSector() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/security-trust.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#1a2332]/80 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="section-number mb-4">Solutions</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Public Sector Readiness
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              Accountable, secure, and auditable. KOLIVO™ provides the platform 
              for public sector institutions to modernize services with the 
              highest degree of trust and governance.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                Explore Public Sector Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="section-number mb-4">The Challenge</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Public Trust Demands the Highest Standards
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Public sector institutions operate under unique constraints. They 
              must balance innovation with accountability, efficiency with equity, 
              and modernization with security. KOLIVO™ is built to meet these 
              exacting standards while enabling the digital transformation that 
              citizens expect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Institutional Governance
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Built-in controls and workflows that align with public sector 
                governance requirements.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Security First
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Enterprise-grade security architecture designed to protect 
                sensitive citizen data.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Compliance Ready
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Pre-built compliance frameworks for common regulatory 
                requirements and audit standards.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Data Sovereignty
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Flexible deployment options that respect data residency 
                and sovereignty requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Modernize Public Services?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with our team to explore how KOLIVO™ can serve as the 
              trusted platform for your institution.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                Connect with KOLIVO™
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
