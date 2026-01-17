/**
 * Accessibility Statement
 * Style: Institutional Light Mode
 */

import { useLanguage } from "@/contexts/LanguageContext";

export default function LegalAccessibility() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Accessibility Statement",
      lastUpdated: "Last updated: January 2026",
      sections: [
        {
          title: "Our Commitment",
          content: "KOLIVO™ Technologies Inc. is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards."
        },
        {
          title: "Conformance Status",
          content: "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone."
        },
        {
          title: "Measures We Take",
          content: `We take the following measures to ensure accessibility:
          
• Include accessibility as part of our mission statement
• Integrate accessibility into our procurement practices
• Provide continual accessibility training for our staff
• Include people with disabilities in our design and testing processes
• Assign clear accessibility goals and responsibilities`
        },
        {
          title: "Technical Specifications",
          content: `Our platforms are designed to be compatible with the following assistive technologies:

• Screen readers (NVDA, JAWS, VoiceOver)
• Screen magnification software
• Speech recognition software
• Keyboard-only navigation`
        },
        {
          title: "Known Limitations",
          content: "Despite our best efforts to ensure accessibility, there may be some limitations. We are actively working to identify and address any barriers. If you encounter any issues, please contact us."
        },
        {
          title: "Feedback",
          content: "We welcome your feedback on the accessibility of KOLIVO™ platforms. Please let us know if you encounter accessibility barriers by contacting us at accessibility@kolivo.ca."
        }
      ]
    },
    fr: {
      title: "Déclaration d'accessibilité",
      lastUpdated: "Dernière mise à jour : Janvier 2026",
      sections: [
        {
          title: "Notre engagement",
          content: "KOLIVO™ Technologies Inc. s'engage à assurer l'accessibilité numérique pour les personnes handicapées. Nous améliorons continuellement l'expérience utilisateur pour tous et appliquons les normes d'accessibilité pertinentes."
        },
        {
          title: "État de conformité",
          content: "Nous visons à nous conformer aux Règles pour l'accessibilité des contenus Web (WCAG) 2.1 au niveau AA. Ces règles expliquent comment rendre le contenu Web plus accessible aux personnes handicapées et plus convivial pour tous."
        },
        {
          title: "Mesures que nous prenons",
          content: `Nous prenons les mesures suivantes pour assurer l'accessibilité :
          
• Inclure l'accessibilité dans notre énoncé de mission
• Intégrer l'accessibilité dans nos pratiques d'approvisionnement
• Offrir une formation continue sur l'accessibilité à notre personnel
• Inclure des personnes handicapées dans nos processus de conception et de test
• Attribuer des objectifs et responsabilités clairs en matière d'accessibilité`
        },
        {
          title: "Spécifications techniques",
          content: `Nos plateformes sont conçues pour être compatibles avec les technologies d'assistance suivantes :

• Lecteurs d'écran (NVDA, JAWS, VoiceOver)
• Logiciels de grossissement d'écran
• Logiciels de reconnaissance vocale
• Navigation au clavier uniquement`
        },
        {
          title: "Limitations connues",
          content: "Malgré nos meilleurs efforts pour assurer l'accessibilité, il peut y avoir certaines limitations. Nous travaillons activement à identifier et à éliminer les obstacles. Si vous rencontrez des problèmes, veuillez nous contacter."
        },
        {
          title: "Commentaires",
          content: "Nous accueillons vos commentaires sur l'accessibilité des plateformes KOLIVO™. Veuillez nous informer si vous rencontrez des obstacles d'accessibilité en nous contactant à accessibility@kolivo.ca."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t.title}
            </h1>
            <p className="text-slate-500">
              {t.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-slate max-w-none">
              {t.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    {section.title}
                  </h2>
                  <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
