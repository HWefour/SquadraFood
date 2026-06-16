// ====================== SQUADRA FOOD — PAGES LÉGALES & COOKIES ======================
// Les {tokens} entre accolades sont des champs à compléter avec les vraies infos.

const SF_LEGAL = {
  mentions: {
    title: "Mentions légales",
    updated: "Dernière mise à jour : {JJ/MM/AAAA}",
    intro: "Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), voici les informations relatives à l'éditeur et à l'hébergeur du présent site.",
    sections: [
      { h: "Éditeur du site", p: [
        "Le site squadrafood.fr est édité par {Raison sociale}, {forme juridique} au capital de {montant} €.",
        "Siège social : {adresse complète}. SIRET : {n° SIRET} — RCS {ville} {n° RCS}. N° TVA intracommunautaire : {FR00000000000}.",
        "Directeur de la publication : {Nom Prénom}. Contact : " + SF_INFO.phone + " — {email@squadrafood.fr}.",
      ]},
      { h: "Hébergement", p: [
        "Le site est hébergé par {Nom de l'hébergeur}, {adresse de l'hébergeur}. Téléphone : {numéro hébergeur}.",
      ]},
      { h: "Propriété intellectuelle", p: [
        "L'ensemble des contenus présents sur le site (textes, visuels, logo, photographies, mise en page) est la propriété exclusive de {Raison sociale}, sauf mention contraire.",
        "Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.",
      ]},
      { h: "Données personnelles", p: [
        "Le traitement de vos données est détaillé dans notre Politique de confidentialité. Vous pouvez exercer vos droits à tout moment à l'adresse {email@squadrafood.fr}.",
      ]},
    ],
  },
  cgv: {
    title: "Conditions Générales de Vente",
    updated: "Dernière mise à jour : {JJ/MM/AAAA}",
    intro: "Les présentes CGV régissent les commandes passées en ligne sur le site squadrafood.fr en mode retrait sur place (« Click & Collect »).",
    sections: [
      { h: "Article 1 — Objet", p: [
        "Les présentes conditions s'appliquent à toute commande de produits alimentaires préparés par {Raison sociale} et retirés en boutique par le client.",
      ]},
      { h: "Article 2 — Commande", p: [
        "Le client sélectionne ses produits, valide son panier puis choisit un créneau de retrait. La commande est ferme après confirmation et, le cas échéant, paiement en ligne.",
        "Un récapitulatif est affiché et un email/SMS de confirmation est envoyé au client.",
      ]},
      { h: "Article 3 — Prix", p: [
        "Les prix sont indiqués en euros, toutes taxes comprises (TTC). {Raison sociale} se réserve le droit de modifier ses prix à tout moment ; les produits sont facturés sur la base des tarifs en vigueur au moment de la validation de la commande.",
      ]},
      { h: "Article 4 — Paiement", p: [
        "Le paiement s'effectue en ligne par carte bancaire ou solution équivalente, ou sur place au moment du retrait selon l'option choisie. La commande n'est préparée qu'après confirmation du paiement (le cas échéant).",
      ]},
      { h: "Article 5 — Retrait des commandes", p: [
        "Les commandes sont à retirer à l'adresse : " + SF_INFO.address + ", au créneau indiqué. Les temps de préparation peuvent varier selon l'affluence ; aucun délai de préparation n'est garanti.",
        "En cas de retard du client, {Raison sociale} ne saurait être tenue responsable de l'altération des produits.",
      ]},
      { h: "Article 6 — Droit de rétractation", p: [
        "Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux denrées alimentaires périssables, susceptibles de se détériorer rapidement.",
      ]},
      { h: "Article 7 — Allergènes & informations produits", p: [
        "La liste des allergènes est disponible en boutique et sur demande. Il appartient au client de signaler toute allergie avant commande.",
      ]},
      { h: "Article 8 — Réclamations & litiges", p: [
        "Toute réclamation peut être adressée à {email@squadrafood.fr}. À défaut de solution amiable, le client peut recourir gratuitement au médiateur de la consommation {Nom du médiateur}. Les présentes CGV sont soumises au droit français.",
      ]},
    ],
  },
  confidentialite: {
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : {JJ/MM/AAAA}",
    intro: "Cette politique décrit comment {Raison sociale} collecte et traite vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.",
    sections: [
      { h: "Responsable du traitement", p: [
        "Le responsable de traitement est {Raison sociale}, {adresse}. Contact : {email@squadrafood.fr}.",
      ]},
      { h: "Données collectées", p: [
        "Lors d'une commande, nous collectons : nom, numéro de téléphone, adresse email et le détail de la commande. Aucune donnée bancaire n'est conservée par nos soins (traitement assuré par notre prestataire de paiement).",
      ]},
      { h: "Finalités & base légale", p: [
        "Vos données sont utilisées pour traiter et préparer vos commandes (exécution du contrat), vous contacter en cas de besoin, et, avec votre consentement, vous adresser des offres.",
      ]},
      { h: "Durée de conservation", p: [
        "Les données de commande sont conservées le temps nécessaire à la gestion de la relation client puis archivées conformément aux obligations légales (notamment comptables).",
      ]},
      { h: "Vos droits", p: [
        "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité. Exercez-les à {email@squadrafood.fr}. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).",
      ]},
    ],
  },
  cookies: {
    title: "Politique de cookies",
    updated: "Dernière mise à jour : {JJ/MM/AAAA}",
    intro: "Le site utilise des cookies pour assurer son bon fonctionnement et, sous réserve de votre consentement, mesurer son audience.",
    sections: [
      { h: "Qu'est-ce qu'un cookie ?", p: [
        "Un cookie est un petit fichier déposé sur votre terminal lors de la visite d'un site. Il permet notamment de mémoriser votre panier et vos préférences.",
      ]},
      { h: "Cookies utilisés", p: [
        "Cookies strictement nécessaires : fonctionnement du panier et de la commande (aucun consentement requis).",
        "Cookies de mesure d'audience et marketing : déposés uniquement après votre consentement, ils nous aident à améliorer le site.",
      ]},
      { h: "Gérer votre consentement", p: [
        "Vous pouvez accepter, refuser ou personnaliser les cookies via le bandeau affiché à votre arrivée, et modifier votre choix à tout moment depuis les paramètres de votre navigateur.",
      ]},
    ],
  },
};

const SF_LEGAL_ORDER = [
  { id: "mentions", label: "Mentions légales" },
  { id: "cgv", label: "CGV" },
  { id: "confidentialite", label: "Confidentialité" },
  { id: "cookies", label: "Cookies" },
];

// Rendu d'un texte avec champs {à compléter} surlignés
function renderFill(text, key) {
  const parts = text.split(/(\{[^}]+\})/g);
  return parts.map((p, i) => {
    if (p.startsWith("{") && p.endsWith("}")) {
      return <span key={i} className="sf-fill">{p.slice(1, -1)}</span>;
    }
    return <React.Fragment key={i}>{p}</React.Fragment>;
  });
}

function LegalView({ doc, onChange, onClose }) {
  const d = SF_LEGAL[doc];
  const scrollRef = useRef(null);
  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = 0; }, [doc]);
  if (!d) return null;
  return (
    <div className="sf-legal" data-screen-label="Legal">
      <div className="sf-legal-bar">
        <button className="sf-legal-back" onClick={onClose}>
          <span>←</span> Retour au site
        </button>
        <div className="sf-legal-brand"><Logo size={34} /><span>SQUADRA <em>FOOD</em></span></div>
      </div>
      <div className="sf-legal-tabs">
        {SF_LEGAL_ORDER.map((t) => (
          <button key={t.id} className={"sf-legal-tab" + (doc === t.id ? " is-on" : "")} onClick={() => onChange(t.id)}>{t.label}</button>
        ))}
      </div>
      <div className="sf-legal-scroll" ref={scrollRef}>
        <article className="sf-legal-doc">
          <span className="sf-eyebrow">Informations légales</span>
          <h1 className="sf-legal-title">{d.title}</h1>
          <p className="sf-legal-updated">{renderFill(d.updated)}</p>
          <p className="sf-legal-intro">{renderFill(d.intro)}</p>
          {d.sections.map((s, i) => (
            <section key={i} className="sf-legal-section">
              <h2>{s.h}</h2>
              {s.p.map((para, j) => <p key={j}>{renderFill(para)}</p>)}
            </section>
          ))}
          <div className="sf-legal-note">
            <strong>Note :</strong> les éléments <span className="sf-fill">surlignés</span> sont des champs à compléter avec les informations officielles de l'entreprise (raison sociale, SIRET, RCS, hébergeur, médiateur…).
          </div>
        </article>
      </div>
    </div>
  );
}

// ---------- Bandeau cookies ----------
function CookieBanner({ onPolicy }) {
  const [show, setShow] = useState(() => !localStorage.getItem("sf_cookies"));
  if (!show) return null;
  const choose = (val) => { localStorage.setItem("sf_cookies", val); setShow(false); };
  return (
    <div className="sf-cookie">
      <div className="sf-cookie-inner">
        <p className="sf-cookie-txt">
          🍪 Nous utilisons des cookies pour le bon fonctionnement du site et, avec votre accord, pour en mesurer l'audience.{" "}
          <button className="sf-cookie-link" onClick={onPolicy}>En savoir plus</button>
        </p>
        <div className="sf-cookie-actions">
          <button className="sf-cookie-btn sf-cookie-ghost" onClick={() => choose("refused")}>Refuser</button>
          <button className="sf-cookie-btn sf-cookie-ghost" onClick={onPolicy}>Personnaliser</button>
          <button className="sf-cookie-btn sf-cookie-accept" onClick={() => choose("accepted")}>Tout accepter</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SF_LEGAL, SF_LEGAL_ORDER, LegalView, CookieBanner });
