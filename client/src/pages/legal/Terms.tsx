/**
 * Terms of Use Page
 * Design: Swiss Corporate Modernism
 */

export default function LegalTerms() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-20 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <p className="section-number mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms of Use
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: January 2026
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the websites, services, or platforms operated by 
                KOLIVO™ Technologies Inc. ("KOLIVO™", "we", "us", or "our"), you agree 
                to be bound by these Terms of Use. If you do not agree to these terms, 
                you may not access or use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                2. Use of Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use our services only for lawful purposes and in accordance 
                with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our services</li>
                <li>Use our services to transmit harmful or malicious content</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                3. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of our services, including but 
                not limited to text, graphics, logos, and software, are owned by KOLIVO™ 
                or its licensors and are protected by intellectual property laws. KOLIVO™ 
                is a trademark of KOLIVO™ Technologies Inc.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                4. Disclaimer of Warranties
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are provided "as is" and "as available" without warranties 
                of any kind, either express or implied. We do not warrant that our 
                services will be uninterrupted, error-free, or free of harmful components.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, KOLIVO™ shall not be liable for 
                any indirect, incidental, special, consequential, or punitive damages, 
                or any loss of profits or revenues, whether incurred directly or indirectly, 
                or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                6. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the 
                laws of the Province of Ontario and the federal laws of Canada applicable 
                therein, without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                7. Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will provide 
                notice of material changes by posting the updated Terms on our website. 
                Your continued use of our services after such changes constitutes 
                acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                8. Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these Terms of Use, please contact us at{" "}
                <a href="mailto:legal@kolivo.ca" className="text-primary hover:underline">
                  legal@kolivo.ca
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
