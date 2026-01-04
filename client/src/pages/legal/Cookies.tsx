/**
 * Cookie Policy - KOLIVO™ Technologies Inc.
 * Compliant with Quebec Law 25 and Canadian law
 * Bilingual (FR/EN)
 */

import { useLanguage } from "@/contexts/LanguageContext";

export default function LegalCookies() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Cookie Policy",
      lastUpdated: "Last updated: January 4, 2026",
      intro: `This Cookie Policy explains how KOLIVO™ Technologies Inc. ("KOLIVO™", "we", "us", or "our") uses cookies and similar tracking technologies when you visit our websites and use our services. This policy should be read in conjunction with our Privacy Policy.`,
      sections: [
        {
          title: "1. What Are Cookies?",
          content: `Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, provide information to website owners, and enable certain features.

Cookies can be "session cookies" (which are deleted when you close your browser) or "persistent cookies" (which remain on your device for a set period or until you delete them).

Cookies can be set by the website you are visiting ("first-party cookies") or by third parties ("third-party cookies").`
        },
        {
          title: "2. Your Consent",
          content: `In accordance with Quebec's Act respecting the protection of personal information in the private sector (Law 25) and applicable Canadian privacy legislation, we obtain your consent before placing non-essential cookies on your device.

When you first visit our website, you will be presented with a cookie consent banner that allows you to:
• Accept all cookies
• Reject non-essential cookies
• Customize your cookie preferences

You can change your cookie preferences at any time by clicking on the "Cookie Settings" link in the footer of our website.

Essential cookies that are strictly necessary for the operation of our website do not require consent and cannot be disabled.`
        },
        {
          title: "3. Types of Cookies We Use",
          content: `We use the following categories of cookies:

STRICTLY NECESSARY COOKIES
These cookies are essential for the website to function properly. They enable basic functions like page navigation, secure area access, and remembering your cookie consent preferences. The website cannot function properly without these cookies.
• Session management
• Security features
• Cookie consent preferences
• Load balancing

FUNCTIONAL COOKIES
These cookies enable enhanced functionality and personalization, such as remembering your language preference, region, or login details. If you do not allow these cookies, some or all of these features may not function properly.
• Language preferences
• User interface customization
• Remember login status

ANALYTICS COOKIES
These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
• Page views and navigation patterns
• Time spent on pages
• Error tracking
• Performance monitoring

MARKETING COOKIES
These cookies are used to track visitors across websites to display relevant advertisements. They are also used to limit the number of times you see an advertisement and to measure the effectiveness of advertising campaigns.
• Advertising targeting
• Campaign measurement
• Social media integration`
        },
        {
          title: "4. Specific Cookies We Use",
          content: `Below is a detailed list of the cookies we use:

STRICTLY NECESSARY
• cookie_consent - Stores your cookie consent preferences (1 year)
• session_id - Maintains your session state (Session)
• csrf_token - Security token to prevent cross-site request forgery (Session)

FUNCTIONAL
• language - Stores your language preference (1 year)
• theme - Stores your display theme preference (1 year)
• halo_session - HALO identity session management (Session)

ANALYTICS
• _ga - Google Analytics identifier (2 years)
• _gid - Google Analytics session identifier (24 hours)
• _gat - Google Analytics rate limiting (1 minute)

We regularly review and update this list. For the most current information, please check your browser's cookie settings or contact us.`
        },
        {
          title: "5. Third-Party Cookies",
          content: `Some cookies are placed by third-party services that appear on our pages. We do not control the use of these cookies and cannot access them. The third-party service providers are responsible for the cookies they set on our site.

Third parties that may set cookies through our website include:
• Google Analytics (analytics)
• Stripe (payment processing)
• Social media platforms (if you use social sharing features)

We encourage you to review the privacy policies of these third parties to understand how they use cookies and your personal information.`
        },
        {
          title: "6. Managing Cookies",
          content: `You have several options for managing cookies:

THROUGH OUR WEBSITE
Use our cookie consent tool to manage your preferences. Click "Cookie Settings" in the footer to access this tool at any time.

THROUGH YOUR BROWSER
Most web browsers allow you to control cookies through their settings. You can:
• View what cookies are stored on your device
• Delete individual cookies or all cookies
• Block cookies from specific websites
• Block all cookies
• Set your browser to notify you when a cookie is being set

Please note that blocking all cookies may affect your ability to use certain features of our website.

Browser-specific instructions:
• Chrome: Settings > Privacy and Security > Cookies
• Firefox: Options > Privacy & Security > Cookies
• Safari: Preferences > Privacy > Cookies
• Edge: Settings > Privacy & Services > Cookies

DO NOT TRACK SIGNALS
Some browsers have a "Do Not Track" feature that signals to websites that you do not want to have your online activity tracked. Our website currently does not respond to "Do Not Track" signals, but we honor your cookie consent preferences set through our consent tool.`
        },
        {
          title: "7. Similar Technologies",
          content: `In addition to cookies, we may use similar technologies including:

LOCAL STORAGE
We may use browser local storage to store preferences and improve performance. Local storage is similar to cookies but can store larger amounts of data.

PIXEL TAGS / WEB BEACONS
These are small graphic images embedded in web pages or emails that allow us to track whether you have performed a specific action, such as opening an email.

DEVICE FINGERPRINTING
We do not use device fingerprinting techniques to track users across websites.`
        },
        {
          title: "8. Quebec Law 25 Compliance",
          content: `In compliance with Quebec's Act respecting the protection of personal information in the private sector (commonly known as "Law 25"), we:

• Obtain express consent before collecting personal information through cookies
• Provide clear and simple information about our cookie practices
• Allow you to withdraw your consent at any time
• Limit cookie data collection to what is necessary for the stated purposes
• Ensure appropriate security measures for any personal information collected
• Designate a person responsible for the protection of personal information
• Maintain a privacy policy that is easily accessible

If you are a Quebec resident and have questions about how we comply with Law 25, please contact our Privacy Officer at privacy@kolivo.ca.`
        },
        {
          title: "9. Children's Privacy",
          content: `Our services are not directed to children under 16 years of age. We do not knowingly collect personal information from children through cookies or any other means. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.`
        },
        {
          title: "10. Changes to This Policy",
          content: `We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.

We encourage you to review this policy periodically to stay informed about our use of cookies.`
        },
        {
          title: "11. Contact Us",
          content: `If you have questions about our use of cookies or this Cookie Policy, please contact us:

KOLIVO™ Technologies Inc.
Privacy Officer
Email: privacy@kolivo.ca
Website: kolivo.ca
Location: Montréal, Québec, Canada

For general inquiries: info@kolivo.ca
For legal matters: legal@kolivo.ca`
        }
      ]
    },
    fr: {
      title: "Politique sur les témoins (cookies)",
      lastUpdated: "Dernière mise à jour : 4 janvier 2026",
      intro: `Cette politique sur les témoins explique comment KOLIVO™ Technologies Inc. (« KOLIVO™ », « nous », « notre » ou « nos ») utilise les témoins (cookies) et les technologies de suivi similaires lorsque vous visitez nos sites Web et utilisez nos services. Cette politique doit être lue conjointement avec notre Politique de confidentialité.`,
      sections: [
        {
          title: "1. Qu'est-ce qu'un témoin (cookie)?",
          content: `Les témoins sont de petits fichiers texte qui sont stockés sur votre appareil (ordinateur, tablette ou téléphone mobile) lorsque vous visitez un site Web. Ils sont largement utilisés pour faire fonctionner les sites Web plus efficacement, fournir des informations aux propriétaires de sites Web et activer certaines fonctionnalités.

Les témoins peuvent être des « témoins de session » (qui sont supprimés lorsque vous fermez votre navigateur) ou des « témoins persistants » (qui restent sur votre appareil pendant une période déterminée ou jusqu'à ce que vous les supprimiez).

Les témoins peuvent être définis par le site Web que vous visitez (« témoins de première partie ») ou par des tiers (« témoins de tierce partie »).`
        },
        {
          title: "2. Votre consentement",
          content: `Conformément à la Loi sur la protection des renseignements personnels dans le secteur privé du Québec (Loi 25) et à la législation canadienne applicable en matière de protection de la vie privée, nous obtenons votre consentement avant de placer des témoins non essentiels sur votre appareil.

Lors de votre première visite sur notre site Web, une bannière de consentement aux témoins vous sera présentée, vous permettant de :
• Accepter tous les témoins
• Refuser les témoins non essentiels
• Personnaliser vos préférences en matière de témoins

Vous pouvez modifier vos préférences en matière de témoins à tout moment en cliquant sur le lien « Paramètres des témoins » dans le pied de page de notre site Web.

Les témoins essentiels qui sont strictement nécessaires au fonctionnement de notre site Web ne nécessitent pas de consentement et ne peuvent pas être désactivés.`
        },
        {
          title: "3. Types de témoins que nous utilisons",
          content: `Nous utilisons les catégories de témoins suivantes :

TÉMOINS STRICTEMENT NÉCESSAIRES
Ces témoins sont essentiels au bon fonctionnement du site Web. Ils permettent des fonctions de base comme la navigation entre les pages, l'accès aux zones sécurisées et la mémorisation de vos préférences de consentement aux témoins. Le site Web ne peut pas fonctionner correctement sans ces témoins.
• Gestion de session
• Fonctionnalités de sécurité
• Préférences de consentement aux témoins
• Équilibrage de charge

TÉMOINS FONCTIONNELS
Ces témoins permettent des fonctionnalités améliorées et une personnalisation, comme la mémorisation de votre préférence linguistique, de votre région ou de vos informations de connexion. Si vous n'autorisez pas ces témoins, certaines ou toutes ces fonctionnalités peuvent ne pas fonctionner correctement.
• Préférences linguistiques
• Personnalisation de l'interface utilisateur
• Mémorisation de l'état de connexion

TÉMOINS ANALYTIQUES
Ces témoins nous aident à comprendre comment les visiteurs interagissent avec notre site Web en collectant et en rapportant des informations de manière anonyme. Cela nous aide à améliorer notre site Web et nos services.
• Pages vues et modèles de navigation
• Temps passé sur les pages
• Suivi des erreurs
• Surveillance des performances

TÉMOINS MARKETING
Ces témoins sont utilisés pour suivre les visiteurs sur les sites Web afin d'afficher des publicités pertinentes. Ils sont également utilisés pour limiter le nombre de fois que vous voyez une publicité et pour mesurer l'efficacité des campagnes publicitaires.
• Ciblage publicitaire
• Mesure des campagnes
• Intégration des médias sociaux`
        },
        {
          title: "4. Témoins spécifiques que nous utilisons",
          content: `Voici une liste détaillée des témoins que nous utilisons :

STRICTEMENT NÉCESSAIRES
• cookie_consent - Stocke vos préférences de consentement aux témoins (1 an)
• session_id - Maintient l'état de votre session (Session)
• csrf_token - Jeton de sécurité pour prévenir la falsification de requêtes intersites (Session)

FONCTIONNELS
• language - Stocke votre préférence linguistique (1 an)
• theme - Stocke votre préférence de thème d'affichage (1 an)
• halo_session - Gestion de session d'identité HALO (Session)

ANALYTIQUES
• _ga - Identifiant Google Analytics (2 ans)
• _gid - Identifiant de session Google Analytics (24 heures)
• _gat - Limitation de débit Google Analytics (1 minute)

Nous révisons et mettons à jour régulièrement cette liste. Pour les informations les plus récentes, veuillez vérifier les paramètres de témoins de votre navigateur ou nous contacter.`
        },
        {
          title: "5. Témoins de tierces parties",
          content: `Certains témoins sont placés par des services tiers qui apparaissent sur nos pages. Nous ne contrôlons pas l'utilisation de ces témoins et ne pouvons pas y accéder. Les fournisseurs de services tiers sont responsables des témoins qu'ils définissent sur notre site.

Les tiers qui peuvent définir des témoins via notre site Web comprennent :
• Google Analytics (analytique)
• Stripe (traitement des paiements)
• Plateformes de médias sociaux (si vous utilisez les fonctionnalités de partage social)

Nous vous encourageons à consulter les politiques de confidentialité de ces tiers pour comprendre comment ils utilisent les témoins et vos renseignements personnels.`
        },
        {
          title: "6. Gestion des témoins",
          content: `Vous avez plusieurs options pour gérer les témoins :

VIA NOTRE SITE WEB
Utilisez notre outil de consentement aux témoins pour gérer vos préférences. Cliquez sur « Paramètres des témoins » dans le pied de page pour accéder à cet outil à tout moment.

VIA VOTRE NAVIGATEUR
La plupart des navigateurs Web vous permettent de contrôler les témoins via leurs paramètres. Vous pouvez :
• Voir quels témoins sont stockés sur votre appareil
• Supprimer des témoins individuels ou tous les témoins
• Bloquer les témoins de sites Web spécifiques
• Bloquer tous les témoins
• Configurer votre navigateur pour vous avertir lorsqu'un témoin est défini

Veuillez noter que le blocage de tous les témoins peut affecter votre capacité à utiliser certaines fonctionnalités de notre site Web.

Instructions spécifiques au navigateur :
• Chrome : Paramètres > Confidentialité et sécurité > Cookies
• Firefox : Options > Vie privée et sécurité > Cookies
• Safari : Préférences > Confidentialité > Cookies
• Edge : Paramètres > Confidentialité et services > Cookies

SIGNAUX « NE PAS SUIVRE »
Certains navigateurs ont une fonction « Ne pas suivre » qui signale aux sites Web que vous ne souhaitez pas que votre activité en ligne soit suivie. Notre site Web ne répond actuellement pas aux signaux « Ne pas suivre », mais nous respectons vos préférences de consentement aux témoins définies via notre outil de consentement.`
        },
        {
          title: "7. Technologies similaires",
          content: `En plus des témoins, nous pouvons utiliser des technologies similaires, notamment :

STOCKAGE LOCAL
Nous pouvons utiliser le stockage local du navigateur pour stocker des préférences et améliorer les performances. Le stockage local est similaire aux témoins mais peut stocker de plus grandes quantités de données.

PIXELS ESPIONS / BALISES WEB
Ce sont de petites images graphiques intégrées dans des pages Web ou des courriels qui nous permettent de suivre si vous avez effectué une action spécifique, comme l'ouverture d'un courriel.

EMPREINTE NUMÉRIQUE DE L'APPAREIL
Nous n'utilisons pas de techniques d'empreinte numérique de l'appareil pour suivre les utilisateurs sur les sites Web.`
        },
        {
          title: "8. Conformité à la Loi 25 du Québec",
          content: `En conformité avec la Loi sur la protection des renseignements personnels dans le secteur privé du Québec (communément appelée « Loi 25 »), nous :

• Obtenons un consentement exprès avant de collecter des renseignements personnels via les témoins
• Fournissons des informations claires et simples sur nos pratiques en matière de témoins
• Vous permettons de retirer votre consentement à tout moment
• Limitons la collecte de données par témoins à ce qui est nécessaire aux fins énoncées
• Assurons des mesures de sécurité appropriées pour tout renseignement personnel collecté
• Désignons une personne responsable de la protection des renseignements personnels
• Maintenons une politique de confidentialité facilement accessible

Si vous êtes un résident du Québec et avez des questions sur notre conformité à la Loi 25, veuillez contacter notre responsable de la protection des renseignements personnels à privacy@kolivo.ca.`
        },
        {
          title: "9. Vie privée des enfants",
          content: `Nos services ne s'adressent pas aux enfants de moins de 16 ans. Nous ne collectons pas sciemment de renseignements personnels auprès d'enfants via des témoins ou tout autre moyen. Si vous êtes un parent ou un tuteur et croyez que votre enfant nous a fourni des renseignements personnels, veuillez nous contacter.`
        },
        {
          title: "10. Modifications de cette politique",
          content: `Nous pouvons mettre à jour cette politique sur les témoins de temps à autre pour refléter les changements dans nos pratiques ou pour d'autres raisons opérationnelles, juridiques ou réglementaires. Nous vous informerons de tout changement important en publiant la politique mise à jour sur notre site Web et en mettant à jour la date de « Dernière mise à jour ».

Nous vous encourageons à consulter cette politique périodiquement pour rester informé de notre utilisation des témoins.`
        },
        {
          title: "11. Nous contacter",
          content: `Si vous avez des questions sur notre utilisation des témoins ou cette politique sur les témoins, veuillez nous contacter :

KOLIVO™ Technologies Inc.
Responsable de la protection des renseignements personnels
Courriel : privacy@kolivo.ca
Site Web : kolivo.ca
Emplacement : Montréal, Québec, Canada

Pour les demandes générales : info@kolivo.ca
Pour les questions juridiques : legal@kolivo.ca`
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">{t.title}</h1>
            <p className="text-muted-foreground mb-6">{t.lastUpdated}</p>
            <p className="text-muted-foreground leading-relaxed">{t.intro}</p>
          </div>

          <div className="space-y-10">
            {t.sections.map((section, index) => (
              <section key={index}>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">{section.title}</h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
