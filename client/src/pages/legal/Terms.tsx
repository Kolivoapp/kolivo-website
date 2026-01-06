/**
 * Terms of Use - KOLIVO™ Technologies Inc.
 * Compliant with Canadian and Quebec law
 * Bilingual (FR/EN)
 */

import { useLanguage } from "@/contexts/LanguageContext";

export default function LegalTerms() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Terms of Use",
      lastUpdated: "Last updated: January 4, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: `By accessing or using the websites, platforms, and services (collectively, the "Services") provided by KOLIVO™ Technologies Inc. ("KOLIVO™", "we", "us", or "our"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, you must not access or use our Services.

These Terms constitute a legally binding agreement between you and KOLIVO™ Technologies Inc., a corporation incorporated under the laws of Quebec, Canada, with its principal place of business in Montréal, Quebec.`
        },
        {
          title: "2. Eligibility",
          content: `You must be at least 16 years of age to use our Services. By using our Services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.

If you are using our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.`
        },
        {
          title: "3. Description of Services",
          content: `KOLIVO™ provides technology platforms designed to facilitate collaborative living and organizational management. Our Services include:

• HUB by KOLIVO™ – A platform for shared living management, including expense tracking, task management, and household coordination.
• Studio+ by KOLIVO™ – Strategic consulting and professional services.
• GUARDO by KOLIVO™ – Trust, compliance, and incident management services.
• HALO by KOLIVO™ – Secure identity and authentication services.

The specific features and functionality of each Service may vary and are subject to change at our discretion.`
        },
        {
          title: "4. Account Registration and Security",
          content: `To access certain features of our Services, you may be required to create an account. When creating an account, you agree to:

• Provide accurate, current, and complete information during registration.
• Maintain and promptly update your account information.
• Maintain the security and confidentiality of your login credentials.
• Accept responsibility for all activities that occur under your account.
• Notify us immediately of any unauthorized use of your account.

We reserve the right to suspend or terminate your account if any information provided is inaccurate, incomplete, or fraudulent.`
        },
        {
          title: "5. HALO Identity Services",
          content: `HALO by KOLIVO™ provides secure identity verification and authentication services. By using HALO, you acknowledge and agree that:

• Your HALO ID is personal and non-transferable.
• You are responsible for maintaining the security of your HALO credentials.
• Identity verification may be required for certain Services or features.
• We may collect and process biometric or identity-related information in accordance with our Privacy Policy.
• False or misleading identity information may result in immediate account termination.`
        },
        {
          title: "6. Acceptable Use",
          content: `You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree NOT to:

• Use the Services in any way that violates any applicable federal, provincial, or local law or regulation.
• Use the Services to transmit any material that is defamatory, obscene, fraudulent, or otherwise objectionable.
• Attempt to gain unauthorized access to any portion of the Services or any systems or networks connected to the Services.
• Use any robot, spider, scraper, or other automated means to access the Services.
• Interfere with or disrupt the Services or servers or networks connected to the Services.
• Impersonate any person or entity or falsely state or misrepresent your affiliation with any person or entity.
• Collect or store personal data about other users without their consent.
• Use the Services to send unsolicited commercial communications.`
        },
        {
          title: "7. Intellectual Property Rights",
          content: `The Services and all content, features, and functionality thereof, including but not limited to all information, software, text, displays, images, video, audio, and the design, selection, and arrangement thereof, are owned by KOLIVO™ Technologies Inc., its licensors, or other providers of such material and are protected by Canadian and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.

KOLIVO™ and all related names, logos, product and service names, designs, and slogans are trademarks of KOLIVO™ Technologies Inc. You must not use such marks without our prior written permission.

KOLIVO™ is a trademark with a registration application submitted. Until official registration is granted, the ™ symbol is used to indicate trademark status.`
        },
        {
          title: "8. User Content",
          content: `Our Services may allow you to submit, post, or share content, including text, images, and other materials ("User Content"). You retain ownership of your User Content, but by submitting User Content, you grant KOLIVO™ a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Content in connection with operating and providing the Services.

You represent and warrant that:
• You own or have the necessary rights to your User Content.
• Your User Content does not violate the rights of any third party.
• Your User Content complies with these Terms and all applicable laws.

We reserve the right to remove any User Content that violates these Terms or that we find objectionable.`
        },
        {
          title: "9. Payment Terms",
          content: `Certain Services may require payment of fees. By subscribing to or purchasing such Services, you agree to pay all applicable fees as described at the time of purchase.

• All fees are quoted in Canadian dollars unless otherwise specified.
• Fees are non-refundable except as expressly stated in these Terms or required by applicable law.
• We reserve the right to change our fees upon reasonable notice.
• You are responsible for all taxes associated with your use of the Services.
• Failure to pay fees may result in suspension or termination of your access to paid Services.`
        },
        {
          title: "10. Third-Party Services",
          content: `Our Services may contain links to third-party websites or services that are not owned or controlled by KOLIVO™. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.

You acknowledge and agree that KOLIVO™ shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such third-party content, goods, or services.`
        },
        {
          title: "11. Disclaimer of Warranties",
          content: `THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, KOLIVO™ DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

KOLIVO™ DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.`
        },
        {
          title: "12. Limitation of Liability",
          content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL KOLIVO™ TECHNOLOGIES INC., ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:

• Your access to or use of or inability to access or use the Services.
• Any conduct or content of any third party on the Services.
• Any content obtained from the Services.
• Unauthorized access, use, or alteration of your transmissions or content.

IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU TO KOLIVO™ FOR THE SERVICES DURING THE TWELVE (12) MONTHS PRIOR TO THE CLAIM, OR ONE HUNDRED CANADIAN DOLLARS ($100 CAD), WHICHEVER IS GREATER.`
        },
        {
          title: "13. Indemnification",
          content: `You agree to defend, indemnify, and hold harmless KOLIVO™ Technologies Inc. and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.`
        },
        {
          title: "14. Termination",
          content: `We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.

Upon termination:
• Your right to use the Services will immediately cease.
• We may delete your account and all associated data, subject to our data retention policies and legal obligations.
• All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.`
        },
        {
          title: "15. Governing Law and Jurisdiction",
          content: `These Terms shall be governed by and construed in accordance with the laws of the Province of Quebec and the federal laws of Canada applicable therein, without regard to conflict of law principles.

Any legal action or proceeding arising out of or relating to these Terms or the Services shall be brought exclusively in the courts of the Province of Quebec, District of Montréal, and you consent to the jurisdiction of such courts.`
        },
        {
          title: "16. Dispute Resolution",
          content: `Before initiating any legal proceeding, you agree to first contact us at legal@kolivo.ca to attempt to resolve any dispute informally. We will attempt to resolve the dispute through good-faith negotiation within thirty (30) days.

If the dispute cannot be resolved informally, either party may pursue formal legal remedies in accordance with the jurisdiction provisions above.`
        },
        {
          title: "17. Changes to Terms",
          content: `We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our website and updating the "Last updated" date.

Your continued use of the Services after such changes constitutes your acceptance of the modified Terms. If you do not agree to the modified Terms, you must stop using the Services.`
        },
        {
          title: "18. Severability",
          content: `If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid, illegal, or unenforceable provision shall be modified to the minimum extent necessary to make it valid, legal, and enforceable while preserving its original intent.`
        },
        {
          title: "19. Entire Agreement",
          content: `These Terms, together with our Privacy Policy and any other agreements expressly incorporated by reference, constitute the entire agreement between you and KOLIVO™ Technologies Inc. regarding the Services and supersede all prior and contemporaneous understandings, agreements, representations, and warranties.`
        },
        {
          title: "20. Contact Information",
          content: `For questions about these Terms, please contact:

KOLIVO™ Technologies Inc.
Legal Department
Email: legal@kolivo.ca
Website: kolivo.ca
Location: Montréal, Québec, Canada`
        }
      ]
    },
    fr: {
      title: "Conditions d'utilisation",
      lastUpdated: "Dernière mise à jour : 4 janvier 2026",
      sections: [
        {
          title: "1. Acceptation des conditions",
          content: `En accédant ou en utilisant les sites Web, plateformes et services (collectivement, les « Services ») fournis par KOLIVO™ Technologies Inc. (« KOLIVO™ », « nous », « notre » ou « nos »), vous acceptez d'être lié par ces conditions d'utilisation (« Conditions »). Si vous n'acceptez pas ces Conditions, vous ne devez pas accéder ou utiliser nos Services.

Ces Conditions constituent un accord juridiquement contraignant entre vous et KOLIVO™ Technologies Inc., une société constituée en vertu des lois du Québec, Canada, ayant son siège social à Montréal, Québec.`
        },
        {
          title: "2. Admissibilité",
          content: `Vous devez avoir au moins 16 ans pour utiliser nos Services. En utilisant nos Services, vous déclarez et garantissez que vous répondez à cette exigence d'âge et que vous avez la capacité juridique de conclure ces Conditions.

Si vous utilisez nos Services au nom d'une organisation, vous déclarez et garantissez que vous avez l'autorité de lier cette organisation à ces Conditions.`
        },
        {
          title: "3. Description des services",
          content: `KOLIVO™ fournit des plateformes technologiques conçues pour faciliter la vie collaborative et la gestion organisationnelle. Nos Services comprennent :

• HUB by KOLIVO™ – Une plateforme de gestion de la vie partagée, incluant le suivi des dépenses, la gestion des tâches et la coordination du ménage.
• Studio+ by KOLIVO™ – Services de conseil stratégique et professionnels.
• GUARDO by KOLIVO™ – Services de confiance, conformité et gestion des incidents.
• HALO by KOLIVO™ – Services d'identité sécurisée et d'authentification.

Les fonctionnalités spécifiques de chaque Service peuvent varier et sont sujettes à modification à notre discrétion.`
        },
        {
          title: "4. Inscription au compte et sécurité",
          content: `Pour accéder à certaines fonctionnalités de nos Services, vous pourriez être tenu de créer un compte. En créant un compte, vous acceptez de :

• Fournir des informations exactes, actuelles et complètes lors de l'inscription.
• Maintenir et mettre à jour rapidement les informations de votre compte.
• Maintenir la sécurité et la confidentialité de vos identifiants de connexion.
• Accepter la responsabilité de toutes les activités qui se produisent sous votre compte.
• Nous informer immédiatement de toute utilisation non autorisée de votre compte.

Nous nous réservons le droit de suspendre ou de résilier votre compte si les informations fournies sont inexactes, incomplètes ou frauduleuses.`
        },
        {
          title: "5. Services d'identité HALO",
          content: `HALO by KOLIVO™ fournit des services de vérification d'identité et d'authentification sécurisés. En utilisant HALO, vous reconnaissez et acceptez que :

• Votre HALO ID est personnel et non transférable.
• Vous êtes responsable du maintien de la sécurité de vos identifiants HALO.
• Une vérification d'identité peut être requise pour certains Services ou fonctionnalités.
• Nous pouvons recueillir et traiter des informations biométriques ou liées à l'identité conformément à notre Politique de confidentialité.
• Des informations d'identité fausses ou trompeuses peuvent entraîner la résiliation immédiate du compte.`
        },
        {
          title: "6. Utilisation acceptable",
          content: `Vous acceptez d'utiliser nos Services uniquement à des fins légales et conformément à ces Conditions. Vous acceptez de NE PAS :

• Utiliser les Services d'une manière qui viole toute loi ou réglementation fédérale, provinciale ou locale applicable.
• Utiliser les Services pour transmettre tout matériel diffamatoire, obscène, frauduleux ou autrement répréhensible.
• Tenter d'obtenir un accès non autorisé à toute partie des Services ou à tout système ou réseau connecté aux Services.
• Utiliser tout robot, araignée, grattoir ou autre moyen automatisé pour accéder aux Services.
• Interférer avec ou perturber les Services ou les serveurs ou réseaux connectés aux Services.
• Usurper l'identité de toute personne ou entité ou déclarer faussement ou déformer votre affiliation avec toute personne ou entité.
• Recueillir ou stocker des données personnelles sur d'autres utilisateurs sans leur consentement.
• Utiliser les Services pour envoyer des communications commerciales non sollicitées.`
        },
        {
          title: "7. Droits de propriété intellectuelle",
          content: `Les Services et tout le contenu, les fonctionnalités et les fonctions y afférents, y compris, mais sans s'y limiter, toutes les informations, logiciels, textes, affichages, images, vidéos, audio et la conception, la sélection et l'arrangement de ceux-ci, sont la propriété de KOLIVO™ Technologies Inc., de ses concédants de licence ou d'autres fournisseurs de ce matériel et sont protégés par les lois canadiennes et internationales sur le droit d'auteur, les marques de commerce, les brevets, les secrets commerciaux et autres droits de propriété intellectuelle.

KOLIVO™ et tous les noms, logos, noms de produits et services, designs et slogans connexes sont des marques de commerce de KOLIVO™ Technologies Inc. Vous ne devez pas utiliser ces marques sans notre autorisation écrite préalable.

KOLIVO™ est une marque de commerce dont une demande d'enregistrement a été soumise. Jusqu'à l'obtention de l'enregistrement officiel, le symbole ™ est utilisé pour indiquer le statut de marque de commerce.`
        },
        {
          title: "8. Contenu utilisateur",
          content: `Nos Services peuvent vous permettre de soumettre, publier ou partager du contenu, y compris du texte, des images et d'autres matériaux (« Contenu utilisateur »). Vous conservez la propriété de votre Contenu utilisateur, mais en soumettant du Contenu utilisateur, vous accordez à KOLIVO™ une licence mondiale, non exclusive, libre de redevances, pouvant faire l'objet d'une sous-licence et transférable pour utiliser, reproduire, modifier, adapter, publier, traduire, créer des œuvres dérivées, distribuer et afficher ce Contenu utilisateur en relation avec l'exploitation et la fourniture des Services.

Vous déclarez et garantissez que :
• Vous possédez ou avez les droits nécessaires sur votre Contenu utilisateur.
• Votre Contenu utilisateur ne viole pas les droits de tiers.
• Votre Contenu utilisateur est conforme à ces Conditions et à toutes les lois applicables.

Nous nous réservons le droit de supprimer tout Contenu utilisateur qui viole ces Conditions ou que nous jugeons répréhensible.`
        },
        {
          title: "9. Conditions de paiement",
          content: `Certains Services peuvent nécessiter le paiement de frais. En vous abonnant ou en achetant de tels Services, vous acceptez de payer tous les frais applicables tels que décrits au moment de l'achat.

• Tous les frais sont indiqués en dollars canadiens, sauf indication contraire.
• Les frais ne sont pas remboursables, sauf indication expresse dans ces Conditions ou exigence de la loi applicable.
• Nous nous réservons le droit de modifier nos frais moyennant un préavis raisonnable.
• Vous êtes responsable de toutes les taxes associées à votre utilisation des Services.
• Le non-paiement des frais peut entraîner la suspension ou la résiliation de votre accès aux Services payants.`
        },
        {
          title: "10. Services tiers",
          content: `Nos Services peuvent contenir des liens vers des sites Web ou des services tiers qui ne sont pas détenus ou contrôlés par KOLIVO™. Nous n'avons aucun contrôle sur, et n'assumons aucune responsabilité pour, le contenu, les politiques de confidentialité ou les pratiques de tout site Web ou service tiers.

Vous reconnaissez et acceptez que KOLIVO™ ne sera pas responsable de tout dommage ou perte causé par ou en relation avec l'utilisation de tout contenu, bien ou service tiers.`
        },
        {
          title: "11. Exclusion de garanties",
          content: `LES SERVICES SONT FOURNIS « TELS QUELS » ET « SELON LA DISPONIBILITÉ », SANS AUCUNE GARANTIE DE QUELQUE NATURE QUE CE SOIT, EXPRESSE OU IMPLICITE. DANS TOUTE LA MESURE PERMISE PAR LA LOI APPLICABLE, KOLIVO™ DÉCLINE TOUTES LES GARANTIES, EXPRESSES OU IMPLICITES, Y COMPRIS, MAIS SANS S'Y LIMITER, LES GARANTIES IMPLICITES DE QUALITÉ MARCHANDE, D'ADÉQUATION À UN USAGE PARTICULIER ET DE NON-CONTREFAÇON.

KOLIVO™ NE GARANTIT PAS QUE LES SERVICES SERONT ININTERROMPUS, OPPORTUNS, SÉCURISÉS OU EXEMPTS D'ERREURS, OU QUE LES DÉFAUTS SERONT CORRIGÉS.`
        },
        {
          title: "12. Limitation de responsabilité",
          content: `DANS LA MESURE MAXIMALE PERMISE PAR LA LOI APPLICABLE, EN AUCUN CAS KOLIVO™ TECHNOLOGIES INC., SES ADMINISTRATEURS, DIRIGEANTS, EMPLOYÉS, AGENTS OU AFFILIÉS NE SERONT RESPONSABLES DE TOUT DOMMAGE INDIRECT, ACCESSOIRE, SPÉCIAL, CONSÉCUTIF OU PUNITIF, Y COMPRIS, MAIS SANS S'Y LIMITER, LA PERTE DE PROFITS, DE DONNÉES, D'UTILISATION, DE CLIENTÈLE OU D'AUTRES PERTES INTANGIBLES, RÉSULTANT DE :

• Votre accès ou utilisation ou incapacité d'accéder ou d'utiliser les Services.
• Toute conduite ou contenu de tout tiers sur les Services.
• Tout contenu obtenu des Services.
• Accès non autorisé, utilisation ou altération de vos transmissions ou contenu.

EN AUCUN CAS NOTRE RESPONSABILITÉ TOTALE ENVERS VOUS POUR TOUTES LES RÉCLAMATIONS NE DÉPASSERA LE MONTANT QUE VOUS AVEZ PAYÉ À KOLIVO™ POUR LES SERVICES AU COURS DES DOUZE (12) MOIS PRÉCÉDANT LA RÉCLAMATION, OU CENT DOLLARS CANADIENS (100 $ CAD), SELON LE MONTANT LE PLUS ÉLEVÉ.`
        },
        {
          title: "13. Indemnisation",
          content: `Vous acceptez de défendre, d'indemniser et de dégager de toute responsabilité KOLIVO™ Technologies Inc. et ses dirigeants, administrateurs, employés, agents et affiliés contre toute réclamation, responsabilité, dommage, jugement, attribution, perte, coût, dépense ou frais (y compris les honoraires d'avocat raisonnables) découlant de ou liés à votre violation de ces Conditions ou à votre utilisation des Services.`
        },
        {
          title: "14. Résiliation",
          content: `Nous pouvons résilier ou suspendre votre accès aux Services immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris si vous violez ces Conditions.

En cas de résiliation :
• Votre droit d'utiliser les Services cessera immédiatement.
• Nous pouvons supprimer votre compte et toutes les données associées, sous réserve de nos politiques de conservation des données et de nos obligations légales.
• Toutes les dispositions de ces Conditions qui, par leur nature, devraient survivre à la résiliation survivront, y compris les dispositions relatives à la propriété, les exclusions de garantie, l'indemnisation et les limitations de responsabilité.`
        },
        {
          title: "15. Droit applicable et juridiction",
          content: `Ces Conditions seront régies et interprétées conformément aux lois de la province de Québec et aux lois fédérales du Canada qui y sont applicables, sans égard aux principes de conflit de lois.

Toute action ou procédure juridique découlant de ou liée à ces Conditions ou aux Services sera intentée exclusivement devant les tribunaux de la province de Québec, district de Montréal, et vous consentez à la compétence de ces tribunaux.`
        },
        {
          title: "16. Résolution des différends",
          content: `Avant d'initier toute procédure judiciaire, vous acceptez de nous contacter d'abord à legal@kolivo.ca pour tenter de résoudre tout différend de manière informelle. Nous tenterons de résoudre le différend par une négociation de bonne foi dans les trente (30) jours.

Si le différend ne peut être résolu de manière informelle, l'une ou l'autre des parties peut poursuivre des recours juridiques formels conformément aux dispositions de juridiction ci-dessus.`
        },
        {
          title: "17. Modifications des conditions",
          content: `Nous nous réservons le droit de modifier ces Conditions à tout moment. Nous vous informerons de tout changement important en publiant les Conditions mises à jour sur notre site Web et en mettant à jour la date de « Dernière mise à jour ».

Votre utilisation continue des Services après de tels changements constitue votre acceptation des Conditions modifiées. Si vous n'acceptez pas les Conditions modifiées, vous devez cesser d'utiliser les Services.`
        },
        {
          title: "18. Divisibilité",
          content: `Si une disposition de ces Conditions est jugée invalide, illégale ou inapplicable, les dispositions restantes resteront pleinement en vigueur. La disposition invalide, illégale ou inapplicable sera modifiée dans la mesure minimale nécessaire pour la rendre valide, légale et applicable tout en préservant son intention originale.`
        },
        {
          title: "19. Intégralité de l'accord",
          content: `Ces Conditions, ainsi que notre Politique de confidentialité et tout autre accord expressément incorporé par référence, constituent l'intégralité de l'accord entre vous et KOLIVO™ Technologies Inc. concernant les Services et remplacent toutes les ententes, accords, représentations et garanties antérieurs et contemporains.`
        },
        {
          title: "20. Coordonnées",
          content: `Pour toute question concernant ces Conditions, veuillez communiquer avec :

KOLIVO™ Technologies Inc.
Département juridique
Courriel : legal@kolivo.ca
Site Web : kolivo.ca
Emplacement : Montréal, Québec, Canada`
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
            <p className="text-muted-foreground">{t.lastUpdated}</p>
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
