/**
 * Enterprise Solutions Page
 * Design: Swiss Corporate Modernism
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Shield, Layers, Globe } from "lucide-react";
import { Link } from "wouter";

export default function SolutionEnterprise() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/enterprise-scale.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#1a2332]/80 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="section-number mb-4">Solutions</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              Calm authority for the complex enterprise. A unified governance 
              plane to manage complexity, enforce standards, and drive cohesive 
              strategy across your entire digital footprint.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                Explore Enterprise Solutions
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
              Enterprise Complexity Requires Enterprise Discipline
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Large enterprises operate across multiple business units, geographies, 
              and regulatory environments. This complexity creates fragmentation, 
              inconsistency, and risk. KOLIVO™ provides the unified platform to 
              bring order to this complexity without sacrificing agility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Multi-Entity Management
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Unified control across subsidiaries, divisions, and business units 
                while respecting operational autonomy.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Enterprise Governance
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Consistent policies, controls, and audit trails across your 
                entire digital ecosystem.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Integration Architecture
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A coherent integration layer that connects legacy systems, 
                cloud services, and partner ecosystems.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Global Operations
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Support for multi-region, multi-currency, and multi-language 
                operations with localized compliance.
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
              Ready for Enterprise-Grade Control?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with our team to explore how KOLIVO™ can serve as the 
              unified platform for your enterprise operations.
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
