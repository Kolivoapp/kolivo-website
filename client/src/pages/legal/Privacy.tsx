/**
 * Privacy Policy - KOLIVO™ Technologies Inc.
 * Compliant with: Quebec Law 25, PIPEDA, CASL
 * Bilingual (FR/EN)
 */

import { useLanguage } from "@/contexts/LanguageContext";

export default function LegalPrivacy() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: January 4, 2026",
      intro: {
        title: "Introduction",
        text: `KOLIVO™ Technologies Inc. ("KOLIVO™", "we", "us", or "our") is committed to protecting the privacy and personal information of individuals who use our platforms and services. This Privacy Policy explains how we collect, use, disclose, and protect your personal information in accordance with applicable Canadian privacy legislation, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and Quebec's Act respecting the protection of personal information in the private sector (Law 25).`
      },
      scope: {
        title: "Scope of This Policy",
        text: "This Privacy Policy applies to all personal information collected, used, or disclosed by KOLIVO™ Technologies Inc. through our websites (kolivo.ca, corporate.kolivo.ca), our platforms (HUB by KOLIVO™, Studio+ by KOLIVO™, GUARDO by KOLIVO™), and our identity service (HALO by KOLIVO™)."
      },
      responsiblePerson: {
        title: "Person Responsible for Personal Information Protection",
        text: "In accordance with Quebec Law 25, KOLIVO™ has designated a person responsible for the protection of personal information. For any questions, concerns, or requests regarding your personal information, please contact:",
        contact: {
          title: "Privacy Officer",
          name: "KOLIVO™ Technologies Inc.",
          email: "privacy@kolivo.ca",
          address: "Montréal, Québec, Canada"
        }
      },
      collection: {
        title: "Personal Information We Collect",
        intro: "We collect personal information that you provide directly to us, as well as information collected automatically when you use our services.",
        categories: [
          {
            title: "Identity Information",
            items: ["Full name", "Email address", "Phone number", "Date of birth", "Profile photograph", "HALO ID credentials"]
          },
          {
            title: "Account Information",
            items: ["Username and password", "Account preferences", "Communication preferences", "Language preferences"]
          },
          {
            title: "Financial Information",
            items: ["Payment method details (processed by secure third-party providers)", "Transaction history", "Shared expense records"]
          },
          {
            title: "Usage Information",
            items: ["Platform activity logs", "Feature usage patterns", "Device information", "IP address", "Browser type and version"]
          },
          {
            title: "Communication Information",
            items: ["Messages sent through our platforms", "Support requests", "Feedback and surveys"]
          }
        ]
      },
      purposes: {
        title: "How We Use Your Personal Information",
        intro: "We use your personal information for the following purposes:",
        items: [
          { purpose: "Service Delivery", description: "To provide, maintain, and improve our platforms and services, including user authentication through HALO by KOLIVO™." },
          { purpose: "Account Management", description: "To create and manage your account, process transactions, and provide customer support." },
          { purpose: "Communication", description: "To send you service-related communications, updates, and promotional materials (with your consent)." },
          { purpose: "Security", description: "To protect the security and integrity of our platforms, detect and prevent fraud, and enforce our terms of service." },
          { purpose: "Legal Compliance", description: "To comply with applicable laws, regulations, and legal processes." },
          { purpose: "Analytics and Improvement", description: "To analyze usage patterns and improve our services, with anonymized or aggregated data where possible." }
        ]
      },
      consent: {
        title: "Consent",
        text: "We obtain your consent before collecting, using, or disclosing your personal information, except where permitted or required by law. You may withdraw your consent at any time by contacting our Privacy Officer. Withdrawal of consent may affect your ability to use certain features of our services.",
        impliedConsent: "In some cases, consent may be implied based on your actions, such as when you provide information to complete a transaction or when you continue to use our services after being notified of changes to this policy."
      },
      disclosure: {
        title: "Disclosure of Personal Information",
        intro: "We may disclose your personal information to:",
        items: [
          { recipient: "Service Providers", description: "Third-party companies that provide services on our behalf, such as payment processing, data hosting, and customer support. These providers are contractually bound to protect your information." },
          { recipient: "Business Partners", description: "Partners who collaborate with us to provide integrated services, subject to your consent where required." },
          { recipient: "Legal Authorities", description: "Government agencies, law enforcement, or other parties when required by law or to protect our legal rights." },
          { recipient: "Business Transfers", description: "In connection with a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity." }
        ],
        noSale: "We do not sell your personal information to third parties for marketing purposes."
      },
      retention: {
        title: "Retention of Personal Information",
        text: "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. When personal information is no longer needed, we securely destroy or anonymize it.",
        periods: [
          { type: "Account information", period: "Duration of account plus 3 years" },
          { type: "Transaction records", period: "7 years (legal requirement)" },
          { type: "Communication logs", period: "2 years" },
          { type: "Usage analytics", period: "Anonymized after 1 year" }
        ]
      },
      security: {
        title: "Security Measures",
        text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. These measures include:",
        measures: [
          "256-bit encryption for data in transit and at rest",
          "Multi-factor authentication for account access",
          "Regular security audits and vulnerability assessments",
          "Access controls limiting employee access to personal information",
          "Secure data centers located in Canada",
          "Incident response procedures for potential data breaches"
        ]
      },
      rights: {
        title: "Your Rights",
        intro: "Under Canadian privacy law and Quebec Law 25, you have the following rights:",
        items: [
          { right: "Right of Access", description: "You may request access to your personal information held by us." },
          { right: "Right of Rectification", description: "You may request correction of inaccurate or incomplete personal information." },
          { right: "Right of Deletion", description: "You may request deletion of your personal information, subject to legal retention requirements." },
          { right: "Right to Data Portability", description: "You may request a copy of your personal information in a structured, commonly used format." },
          { right: "Right to Withdraw Consent", description: "You may withdraw your consent to the processing of your personal information at any time." },
          { right: "Right to File a Complaint", description: "You may file a complaint with the Commission d'accès à l'information du Québec or the Office of the Privacy Commissioner of Canada." }
        ],
        exercise: "To exercise any of these rights, please contact our Privacy Officer at privacy@kolivo.ca. We will respond to your request within 30 days."
      },
      breach: {
        title: "Privacy Breach Notification",
        text: "In accordance with Law 25 and PIPEDA, we will notify you and the relevant authorities of any privacy breach that presents a real risk of significant harm. Notification will be provided as soon as feasible after becoming aware of the breach."
      },
      children: {
        title: "Children's Privacy",
        text: "Our services are not intended for children under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete that information."
      },
      international: {
        title: "International Transfers",
        text: "Your personal information is primarily stored and processed in Canada. If we transfer your information outside of Canada, we ensure that appropriate safeguards are in place to protect your information in accordance with applicable privacy laws."
      },
      changes: {
        title: "Changes to This Policy",
        text: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website and, where appropriate, by email. Your continued use of our services after such changes constitutes your acceptance of the updated policy."
      },
      contact: {
        title: "Contact Us",
        text: "If you have any questions, concerns, or complaints about this Privacy Policy or our privacy practices, please contact:"
      },
      regulators: {
        title: "Regulatory Authorities",
        quebec: { name: "Commission d'accès à l'information du Québec", website: "cai.gouv.qc.ca" },
        federal: { name: "Office of the Privacy Commissioner of Canada", website: "priv.gc.ca" }
      }
    },
    fr: {
      title: "Politique de confidentialité",
      lastUpdated: "Dernière mise à jour : 4 janvier 2026",
      intro: {
        title: "Introduction",
        text: `KOLIVO™ Technologies Inc. (« KOLIVO™ », « nous », « notre » ou « nos ») s'engage à protéger la vie privée et les renseignements personnels des personnes qui utilisent nos plateformes et services. Cette politique de confidentialité explique comment nous recueillons, utilisons, divulguons et protégeons vos renseignements personnels conformément aux lois canadiennes applicables en matière de protection de la vie privée, notamment la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE) et la Loi sur la protection des renseignements personnels dans le secteur privé du Québec (Loi 25).`
      },
      scope: {
        title: "Portée de cette politique",
        text: "Cette politique de confidentialité s'applique à tous les renseignements personnels recueillis, utilisés ou divulgués par KOLIVO™ Technologies Inc. par l'intermédiaire de nos sites Web (kolivo.ca, corporate.kolivo.ca), de nos plateformes (HUB by KOLIVO™, Studio+ by KOLIVO™, GUARDO by KOLIVO™) et de notre service d'identité (HALO by KOLIVO™)."
      },
      responsiblePerson: {
        title: "Personne responsable de la protection des renseignements personnels",
        text: "Conformément à la Loi 25 du Québec, KOLIVO™ a désigné une personne responsable de la protection des renseignements personnels. Pour toute question, préoccupation ou demande concernant vos renseignements personnels, veuillez communiquer avec :",
        contact: {
          title: "Responsable de la protection de la vie privée",
          name: "KOLIVO™ Technologies Inc.",
          email: "privacy@kolivo.ca",
          address: "Montréal, Québec, Canada"
        }
      },
      collection: {
        title: "Renseignements personnels que nous recueillons",
        intro: "Nous recueillons les renseignements personnels que vous nous fournissez directement, ainsi que les renseignements recueillis automatiquement lorsque vous utilisez nos services.",
        categories: [
          { title: "Renseignements d'identité", items: ["Nom complet", "Adresse courriel", "Numéro de téléphone", "Date de naissance", "Photo de profil", "Identifiants HALO ID"] },
          { title: "Renseignements de compte", items: ["Nom d'utilisateur et mot de passe", "Préférences de compte", "Préférences de communication", "Préférences linguistiques"] },
          { title: "Renseignements financiers", items: ["Détails du mode de paiement (traités par des fournisseurs tiers sécurisés)", "Historique des transactions", "Registres des dépenses partagées"] },
          { title: "Renseignements d'utilisation", items: ["Journaux d'activité de la plateforme", "Modèles d'utilisation des fonctionnalités", "Informations sur l'appareil", "Adresse IP", "Type et version du navigateur"] },
          { title: "Renseignements de communication", items: ["Messages envoyés via nos plateformes", "Demandes de support", "Commentaires et sondages"] }
        ]
      },
      purposes: {
        title: "Comment nous utilisons vos renseignements personnels",
        intro: "Nous utilisons vos renseignements personnels aux fins suivantes :",
        items: [
          { purpose: "Prestation de services", description: "Pour fournir, maintenir et améliorer nos plateformes et services, y compris l'authentification des utilisateurs via HALO by KOLIVO™." },
          { purpose: "Gestion de compte", description: "Pour créer et gérer votre compte, traiter les transactions et fournir un support client." },
          { purpose: "Communication", description: "Pour vous envoyer des communications liées au service, des mises à jour et des documents promotionnels (avec votre consentement)." },
          { purpose: "Sécurité", description: "Pour protéger la sécurité et l'intégrité de nos plateformes, détecter et prévenir la fraude, et faire respecter nos conditions d'utilisation." },
          { purpose: "Conformité légale", description: "Pour nous conformer aux lois, règlements et processus juridiques applicables." },
          { purpose: "Analyse et amélioration", description: "Pour analyser les modèles d'utilisation et améliorer nos services, avec des données anonymisées ou agrégées lorsque possible." }
        ]
      },
      consent: {
        title: "Consentement",
        text: "Nous obtenons votre consentement avant de recueillir, d'utiliser ou de divulguer vos renseignements personnels, sauf lorsque la loi le permet ou l'exige. Vous pouvez retirer votre consentement à tout moment en communiquant avec notre responsable de la protection de la vie privée. Le retrait du consentement peut affecter votre capacité à utiliser certaines fonctionnalités de nos services.",
        impliedConsent: "Dans certains cas, le consentement peut être implicite en fonction de vos actions, par exemple lorsque vous fournissez des informations pour effectuer une transaction ou lorsque vous continuez à utiliser nos services après avoir été informé des modifications apportées à cette politique."
      },
      disclosure: {
        title: "Divulgation des renseignements personnels",
        intro: "Nous pouvons divulguer vos renseignements personnels aux parties suivantes :",
        items: [
          { recipient: "Fournisseurs de services", description: "Entreprises tierces qui fournissent des services en notre nom, comme le traitement des paiements, l'hébergement de données et le support client. Ces fournisseurs sont contractuellement tenus de protéger vos informations." },
          { recipient: "Partenaires commerciaux", description: "Partenaires qui collaborent avec nous pour fournir des services intégrés, sous réserve de votre consentement lorsque requis." },
          { recipient: "Autorités légales", description: "Organismes gouvernementaux, forces de l'ordre ou autres parties lorsque la loi l'exige ou pour protéger nos droits légaux." },
          { recipient: "Transferts d'entreprise", description: "Dans le cadre d'une fusion, d'une acquisition ou d'une vente d'actifs, vos informations peuvent être transférées à l'entité acquéreuse." }
        ],
        noSale: "Nous ne vendons pas vos renseignements personnels à des tiers à des fins de marketing."
      },
      retention: {
        title: "Conservation des renseignements personnels",
        text: "Nous conservons vos renseignements personnels uniquement aussi longtemps que nécessaire pour atteindre les fins pour lesquelles ils ont été recueillis, ou comme l'exige la loi. Lorsque les renseignements personnels ne sont plus nécessaires, nous les détruisons ou les anonymisons de manière sécurisée.",
        periods: [
          { type: "Informations de compte", period: "Durée du compte plus 3 ans" },
          { type: "Registres de transactions", period: "7 ans (exigence légale)" },
          { type: "Journaux de communication", period: "2 ans" },
          { type: "Analyses d'utilisation", period: "Anonymisées après 1 an" }
        ]
      },
      security: {
        title: "Mesures de sécurité",
        text: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos renseignements personnels contre l'accès, la divulgation, la modification ou la destruction non autorisés. Ces mesures comprennent :",
        measures: [
          "Chiffrement 256 bits pour les données en transit et au repos",
          "Authentification multifacteur pour l'accès au compte",
          "Audits de sécurité réguliers et évaluations des vulnérabilités",
          "Contrôles d'accès limitant l'accès des employés aux renseignements personnels",
          "Centres de données sécurisés situés au Canada",
          "Procédures de réponse aux incidents pour les violations de données potentielles"
        ]
      },
      rights: {
        title: "Vos droits",
        intro: "En vertu des lois canadiennes sur la protection de la vie privée et de la Loi 25 du Québec, vous disposez des droits suivants :",
        items: [
          { right: "Droit d'accès", description: "Vous pouvez demander l'accès à vos renseignements personnels que nous détenons." },
          { right: "Droit de rectification", description: "Vous pouvez demander la correction de renseignements personnels inexacts ou incomplets." },
          { right: "Droit de suppression", description: "Vous pouvez demander la suppression de vos renseignements personnels, sous réserve des exigences légales de conservation." },
          { right: "Droit à la portabilité des données", description: "Vous pouvez demander une copie de vos renseignements personnels dans un format structuré et couramment utilisé." },
          { right: "Droit de retirer le consentement", description: "Vous pouvez retirer votre consentement au traitement de vos renseignements personnels à tout moment." },
          { right: "Droit de déposer une plainte", description: "Vous pouvez déposer une plainte auprès de la Commission d'accès à l'information du Québec ou du Commissariat à la protection de la vie privée du Canada." }
        ],
        exercise: "Pour exercer l'un de ces droits, veuillez communiquer avec notre responsable de la protection de la vie privée à privacy@kolivo.ca. Nous répondrons à votre demande dans un délai de 30 jours."
      },
      breach: {
        title: "Notification en cas d'atteinte à la vie privée",
        text: "Conformément à la Loi 25 et à la LPRPDE, nous vous informerons, ainsi que les autorités compétentes, de toute atteinte à la vie privée présentant un risque réel de préjudice grave. La notification sera fournie dès que possible après avoir pris connaissance de l'atteinte."
      },
      children: {
        title: "Vie privée des enfants",
        text: "Nos services ne sont pas destinés aux enfants de moins de 16 ans. Nous ne recueillons pas sciemment de renseignements personnels auprès d'enfants. Si nous apprenons que nous avons recueilli des renseignements personnels d'un enfant, nous prendrons des mesures pour supprimer ces informations."
      },
      international: {
        title: "Transferts internationaux",
        text: "Vos renseignements personnels sont principalement stockés et traités au Canada. Si nous transférons vos informations à l'extérieur du Canada, nous nous assurons que des mesures de protection appropriées sont en place pour protéger vos informations conformément aux lois applicables sur la protection de la vie privée."
      },
      changes: {
        title: "Modifications à cette politique",
        text: "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement important en publiant la politique mise à jour sur notre site Web et, le cas échéant, par courriel. Votre utilisation continue de nos services après ces changements constitue votre acceptation de la politique mise à jour."
      },
      contact: {
        title: "Nous contacter",
        text: "Si vous avez des questions, des préoccupations ou des plaintes concernant cette politique de confidentialité ou nos pratiques en matière de protection de la vie privée, veuillez communiquer avec :"
      },
      regulators: {
        title: "Autorités réglementaires",
        quebec: { name: "Commission d'accès à l'information du Québec", website: "cai.gouv.qc.ca" },
        federal: { name: "Commissariat à la protection de la vie privée du Canada", website: "priv.gc.ca" }
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">{t.title}</h1>
            <p className="text-muted-foreground">{t.lastUpdated}</p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.intro.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.intro.text}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.scope.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.scope.text}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.responsiblePerson.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.responsiblePerson.text}</p>
              <div className="bg-muted/30 rounded-lg p-6">
                <p className="font-semibold text-foreground">{t.responsiblePerson.contact.title}</p>
                <p className="text-muted-foreground">{t.responsiblePerson.contact.name}</p>
                <p className="text-muted-foreground">{t.responsiblePerson.contact.email}</p>
                <p className="text-muted-foreground">{t.responsiblePerson.contact.address}</p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.collection.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t.collection.intro}</p>
              <div className="space-y-4">
                {t.collection.categories.map((cat, i) => (
                  <div key={i} className="bg-muted/30 rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-3">{cat.title}</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {cat.items.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.purposes.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t.purposes.intro}</p>
              <div className="space-y-4">
                {t.purposes.items.map((item, i) => (
                  <div key={i} className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground">{item.purpose}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.consent.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.consent.text}</p>
              <p className="text-muted-foreground leading-relaxed">{t.consent.impliedConsent}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.disclosure.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t.disclosure.intro}</p>
              <div className="space-y-4">
                {t.disclosure.items.map((item, i) => (
                  <div key={i} className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground">{item.recipient}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mt-6 font-medium">{t.disclosure.noSale}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.retention.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t.retention.text}</p>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-semibold text-foreground">{language === 'en' ? 'Data Type' : 'Type de données'}</th>
                    <th className="text-left py-3 font-semibold text-foreground">{language === 'en' ? 'Retention Period' : 'Période de conservation'}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.retention.periods.map((p, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-3 text-muted-foreground">{p.type}</td>
                      <td className="py-3 text-muted-foreground">{p.period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.security.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t.security.text}</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {t.security.measures.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.rights.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t.rights.intro}</p>
              <div className="space-y-4">
                {t.rights.items.map((item, i) => (
                  <div key={i} className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground">{item.right}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mt-6">{t.rights.exercise}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.breach.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.breach.text}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.children.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.children.text}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.international.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.international.text}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.changes.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.changes.text}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.contact.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.contact.text}</p>
              <div className="bg-muted/30 rounded-lg p-6">
                <p className="font-semibold text-foreground">KOLIVO™ Technologies Inc.</p>
                <p className="text-muted-foreground">{language === 'en' ? 'Privacy Officer' : 'Responsable de la protection de la vie privée'}</p>
                <p className="text-muted-foreground">privacy@kolivo.ca</p>
                <p className="text-muted-foreground">kolivo.ca</p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t.regulators.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="font-semibold text-foreground">{t.regulators.quebec.name}</p>
                  <p className="text-muted-foreground">{t.regulators.quebec.website}</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="font-semibold text-foreground">{t.regulators.federal.name}</p>
                  <p className="text-muted-foreground">{t.regulators.federal.website}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
