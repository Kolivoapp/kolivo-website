/**
 * B2B Solutions Page
 * Design: Swiss Corporate Modernism
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, LineChart, Users, Workflow } from "lucide-react";
import { Link } from "wouter";

export default function SolutionB2B() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/partnership-network.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#1a2332]/80 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="section-number mb-4">Solutions</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              B2B Solutions
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              Master the complexity of B2B engagement with a unified platform 
              that orchestrates every touchpoint of your customer relationships.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                Explore B2B Solutions
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
              B2B Complexity Demands Unified Control
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              B2B relationships are inherently complex. Multiple stakeholders, 
              extended sales cycles, sophisticated commercial terms, and ongoing 
              service delivery create a web of interactions that most systems 
              cannot adequately manage. KOLIVO™ provides the unified platform 
              to orchestrate this complexity with precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Account Management
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A complete view of every account relationship, from initial 
                engagement through ongoing partnership.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Workflow className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Complex Deal Management
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Structured workflows for managing sophisticated commercial 
                arrangements and multi-party agreements.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Stakeholder Orchestration
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Manage relationships across multiple contacts, roles, and 
                decision-making hierarchies within each account.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Revenue Intelligence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Clear visibility into pipeline health, forecast accuracy, and 
                revenue performance across your B2B portfolio.
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
              Ready to Transform Your B2B Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with our team to explore how KOLIVO™ can unify your B2B 
              customer engagement.
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
