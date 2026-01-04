/**
 * GUARDO by KOLIVO™ Product Page
 * Design: Swiss Corporate Modernism
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileCheck, AlertTriangle, Eye } from "lucide-react";
import { Link } from "wouter";

export default function ProductGuardo() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/images/security-trust.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#1a2332]/80 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="section-number mb-4">Product</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              GUARDO by KOLIVO™
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              The definitive portal for trust, compliance, and incident management. 
              A single source of truth for governance across your ecosystem.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-number mb-4">Overview</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Governance Without Compromise
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                GUARDO by KOLIVO™ is the trust and compliance layer of the ecosystem. 
                It provides a unified interface for managing compliance obligations, 
                tracking incidents, and maintaining the governance posture of your 
                entire digital operation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In an era of increasing regulatory scrutiny, GUARDO ensures that 
                compliance is not an afterthought but a core operational capability.
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="font-display text-xl font-semibold mb-6">Core Functions</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Trust Portal</h4>
                    <p className="text-sm text-muted-foreground">Public-facing transparency on security and compliance posture.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Compliance Management</h4>
                    <p className="text-sm text-muted-foreground">Track and manage regulatory obligations across jurisdictions.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Incident Management</h4>
                    <p className="text-sm text-muted-foreground">Structured response workflows for security and operational incidents.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Audit Trail</h4>
                    <p className="text-sm text-muted-foreground">Complete, immutable record of all governance-related activities.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Strengthen Your Governance?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with our team to explore how GUARDO by KOLIVO™ can serve as 
              your unified trust and compliance platform.
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
