/**
 * Privacy Policy Page
 * Design: Swiss Corporate Modernism
 */

export default function LegalPrivacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-20 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <p className="section-number mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: January 2026
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                KOLIVO™ Technologies Inc. ("KOLIVO™", "we", "us", or "our") is committed 
                to protecting the privacy of individuals who visit our websites, use our 
                services, or otherwise interact with us. This Privacy Policy describes 
                how we collect, use, disclose, and protect personal information.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By accessing our services, you acknowledge that you have read and 
                understood this Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Company or organization information</li>
                <li>Communications you send to us</li>
                <li>Information provided through forms on our websites</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We also automatically collect certain information when you use our 
                services, including device information, log data, and usage information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and communications</li>
                <li>Send you technical notices and support messages</li>
                <li>Comply with legal obligations</li>
                <li>Protect the rights and safety of KOLIVO™ and our users</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                4. Information Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell personal information. We may share information with 
                service providers who assist us in operating our services, with your 
                consent, or as required by law. Any third parties with whom we share 
                information are contractually obligated to protect it.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                5. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to 
                protect personal information against unauthorized access, alteration, 
                disclosure, or destruction. However, no method of transmission over 
                the Internet is completely secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                6. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your jurisdiction, you may have certain rights regarding 
                your personal information, including the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict certain processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                7. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, 
                please contact us at{" "}
                <a href="mailto:privacy@kolivo.ca" className="text-primary hover:underline">
                  privacy@kolivo.ca
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
