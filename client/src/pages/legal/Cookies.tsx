/**
 * Cookie Policy Page
 * Design: Swiss Corporate Modernism
 */

export default function LegalCookies() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-20 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <p className="section-number mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Cookie Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: January 2026
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                1. What Are Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are stored on your device when you 
                visit a website. They are widely used to make websites work more 
                efficiently and to provide information to website owners.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                2. How We Use Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                KOLIVO™ Technologies Inc. uses cookies and similar technologies for 
                the following purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the operation of our websites</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our websites</li>
                <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                3. Types of Cookies We Use
              </h2>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-2">Essential Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  These cookies are necessary for the website to function and cannot be 
                  switched off. They are usually set in response to actions made by you, 
                  such as setting your privacy preferences or filling in forms.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-2">Analytics Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  These cookies allow us to count visits and traffic sources so we can 
                  measure and improve the performance of our site. They help us know 
                  which pages are the most and least popular.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Functional Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  These cookies enable the website to provide enhanced functionality 
                  and personalization. They may be set by us or by third-party providers 
                  whose services we have added to our pages.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                4. Managing Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. 
                You can typically find these settings in the "Options" or "Preferences" 
                menu of your browser. You can:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Delete all cookies from your browser</li>
                <li>Block all cookies from being set</li>
                <li>Allow all cookies to be set</li>
                <li>Block third-party cookies</li>
                <li>Clear all cookies when you close your browser</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                5. Third-Party Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Some cookies on our websites are set by third-party services that appear 
                on our pages. We do not control these cookies and recommend reviewing 
                the privacy policies of these third parties for more information about 
                their cookie practices.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                6. Updates to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes 
                in our practices or for other operational, legal, or regulatory reasons. 
                We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                7. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about our use of cookies, please contact us at{" "}
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
