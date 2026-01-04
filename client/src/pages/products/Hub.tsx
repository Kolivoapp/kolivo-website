/**
 * HUB by KOLIVO™ Product Page
 * Design: Swiss Corporate Modernism
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Shield, Zap, Globe } from "lucide-react";
import { Link } from "wouter";

export default function ProductHub() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/images/platform-hub.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#1a2332]/80 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="section-number mb-4">Product</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              HUB by KOLIVO™
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              The main application layer for building, deploying, and managing 
              sophisticated user-facing applications within your digital ecosystem.
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
                The Core of Your Digital Ecosystem
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                HUB by KOLIVO™ is the main application layer where your digital 
                ecosystem comes to life. It provides the foundation for building 
                sophisticated, user-facing applications that are fully integrated 
                with your system of record.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike fragmented point solutions, HUB ensures that every application, 
                every workflow, and every user interaction is governed by a single, 
                coherent set of rules and standards.
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="font-display text-xl font-semibold mb-6">Key Capabilities</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Unified Application Layer</h4>
                    <p className="text-sm text-muted-foreground">Build and deploy applications from a single, governed platform.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Built-in Governance</h4>
                    <p className="text-sm text-muted-foreground">Every action is logged, auditable, and compliant by design.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Real-time Integration</h4>
                    <p className="text-sm text-muted-foreground">Seamless connection to your system of record and external services.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Multi-tenant Architecture</h4>
                    <p className="text-sm text-muted-foreground">Serve multiple audiences with isolated, secure environments.</p>
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
              Ready to Build on HUB?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with our team to explore how HUB by KOLIVO™ can serve as the 
              foundation for your digital ecosystem.
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
