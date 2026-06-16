import tacosGratine from './assets/tacos-gratine.png';
import tacosRoule from './assets/tacos-roule.png';
import burgerDouble from './assets/burger-double.png';
import burgerFrites from './assets/burger-frites.png';
import tacosBowl from './assets/tacos-bowl.png';
import sandwichOeuf from './assets/sandwich-oeuf.png';
import dessert from './assets/dessert.png';
import logo from './assets/logo.png';

export const SF_ASSETS = {
  logo,
  tacosGratine,
  tacosRoule,
  burgerDouble,
  burgerFrites,
  tacosBowl,
  sandwichOeuf,
  dessert,
};

export const SF_VIANDES = ['Steak haché', 'Tenders de poulet', 'Kefta', 'Cordon bleu', 'Merguez', 'Nuggets'];
export const SF_SAUCES = ['Algérienne', 'Samouraï', 'Blanche', 'Ketchup', 'Mayo', 'BBQ', 'Harissa', 'Andalouse', 'Biggy', 'Curry'];
export const SF_SUPPLEMENTS = [
  { name: 'Cheddar', price: 1.0 },
  { name: 'Chèvre', price: 1.0 },
  { name: 'Mozzarella', price: 1.0 },
  { name: 'Bleu', price: 1.0 },
  { name: 'Boursin', price: 1.0 },
  { name: 'Bacon', price: 1.0 },
  { name: 'Lardons', price: 1.0 },
  { name: 'Œuf', price: 1.0 },
  { name: 'Raclette', price: 1.5 },
  { name: 'Oignons', price: 0.5 },
];

export const SF_MENU = [
  {
    id: 'tacos',
    name: 'Tacos & Roulés',
    tagline: 'Le tacos lyonnais gratiné, notre signature',
    icon: '🌯',
    items: [
      {
        id: 'tacos-simple', name: 'Tacos Simple', price: 8.5, phLabel: 'Tacos roulé',
        desc: '1 viande au choix, frites, cheddar fondu, sauce au choix.',
        customizable: true, sizes: [{ label: 'Simple', price: 0 }, { label: 'Double', price: 1.5 }, { label: 'Maxi', price: 3.0 }],
        menuOption: true,
      },
      {
        id: 'tacos-squadra', name: 'Le Squadra Gratiné', price: 11.5, phLabel: 'Tacos gratiné', badge: 'Signature',
        desc: 'Double viande, frites, cheddar gratiné maison, oignons, sauce signature.',
        customizable: true, menuOption: true,
      },
      {
        id: 'tacos-curly', name: 'Le Curly Tacos', price: 12.0, img: tacosBowl, badge: 'Best-seller',
        desc: 'Steak, cheddar gratiné, potatoes curly, sauce fromagère, oignons frits.',
        customizable: true, menuOption: true,
      },
      {
        id: 'tacos-roule', name: 'Tacos Roulé Gratiné', price: 11.0, phLabel: 'Tacos roulé gratiné',
        desc: 'Version roulée et gratinée au four, viande au choix, frites, cheddar.',
        customizable: true, menuOption: true,
      },
    ],
  },
  {
    id: 'burgers',
    name: 'Smash Burgers',
    tagline: 'Steaks smashés minute, pain brioché toasté',
    icon: '🍔',
    items: [
      { id: 'b-cheese', name: 'Cheese', price: 7.0, img: burgerFrites, desc: 'Steak smashé, cheddar, oignons, ketchup, moutarde.', customizable: true, menuOption: true },
      { id: 'b-double', name: 'Double Cheese', price: 9.0, img: burgerDouble, badge: 'Best-seller', desc: '2 steaks smashés, double cheddar, oignons, sauce maison.', customizable: true, menuOption: true },
      { id: 'b-triple', name: 'Triple Cheese', price: 10.5, img: burgerDouble, desc: '3 steaks smashés, triple cheddar, oignons, ketchup.', customizable: true, menuOption: true },
      { id: 'b-montagnard', name: 'Montagnard Smash', price: 10.5, img: burgerDouble, desc: '2 steaks, raclette, bacon, oignons confits, sauce fromagère.', customizable: true, menuOption: true },
      { id: 'b-bacon', name: 'Smash Bacon', price: 8.0, img: burgerFrites, desc: 'Steak smashé, cheddar, bacon croustillant, sauce barbecue.', customizable: true, menuOption: true },
      { id: 'b-kefta', name: 'Smash Kefta', price: 7.0, img: burgerFrites, desc: 'Galette kefta maison, cheddar, oignons, sauce algérienne.', customizable: true, menuOption: true },
      { id: 'b-supreme', name: 'Smash Suprême', price: 8.5, img: burgerDouble, desc: 'Steak smashé, cheddar, œuf, oignons, sauce suprême.', customizable: true, menuOption: true },
      { id: 'b-chicken', name: 'Chicken Burger', price: 8.5, img: burgerFrites, desc: 'Filet de poulet pané, cheddar, crudités, sauce maison.', customizable: true, menuOption: true },
    ],
  },
  {
    id: 'sandwichs',
    name: 'Sandwichs',
    tagline: 'Escalope ou steak, crudités fraîches',
    icon: '🥖',
    items: [
      { id: 's-boursin', name: 'Boursin', price: 8.5, img: sandwichOeuf, desc: 'Escalope tendre, Boursin, cheddar, sauce et crudités au choix.', customizable: true, menuOption: true },
      { id: 's-forestier', name: 'Forestier', price: 8.5, img: sandwichOeuf, desc: 'Escalope tendre, forestier, sauce et crudités au choix.', customizable: true, menuOption: true },
      { id: 's-parigo', name: 'Parigo', price: 9.5, img: sandwichOeuf, badge: 'Signature', desc: '2 steaks (80g), œuf, galette de PDT, cheddar, crudités au choix.', customizable: true, menuOption: true },
      { id: 's-mixte', name: 'Mixte', price: 9.0, img: sandwichOeuf, desc: 'Escalope marinée + steak, sauce et crudités au choix.', customizable: true, menuOption: true },
    ],
  },
  {
    id: 'texmex',
    name: 'Tex Mex & Frites',
    tagline: 'À grignoter, à partager',
    icon: '🍟',
    items: [
      { id: 't-nuggets', name: 'Nuggets x6', price: 5.0, img: burgerFrites, desc: '6 nuggets de poulet croustillants, sauce au choix.' },
      { id: 't-tenders', name: 'Tenders x4', price: 5.5, img: burgerFrites, desc: '4 tenders panés maison, sauce au choix.' },
      { id: 't-chili', name: 'Chili Cheese x6', price: 5.5, img: burgerFrites, desc: '6 bouchées de cheddar fondant et piment doux.' },
      { id: 't-camembert', name: 'Bouchées Camembert x6', price: 5.5, img: burgerFrites, desc: '6 bouchées de camembert pané, sauce au choix.' },
      { id: 't-frites', name: 'Frites Maison', price: 3.5, img: burgerFrites, desc: 'Frites fraîches coupées et assaisonnées maison.' },
      { id: 't-potatoes', name: 'Potatoes Curly', price: 4.0, img: tacosBowl, desc: 'Potatoes torsadées et épicées.' },
      { id: 't-royale', name: 'Frite Royale', price: 4.5, img: burgerFrites, desc: 'Frites, cheddar fondu, oignons frits, sauce.' },
    ],
  },
  {
    id: 'assiettes',
    name: 'Assiettes & Salades',
    tagline: 'Composées et copieuses',
    icon: '🥗',
    items: [
      { id: 'a-spectra', name: 'Assiette Spectra', price: 15.0, img: burgerDouble, desc: 'Assortiment de viandes, salade mixte, riz ou frites.' },
      { id: 'a-cheval', name: 'Steak à Cheval', price: 13.0, img: burgerDouble, desc: 'Steak, œuf à cheval, riz ou frites, salade.' },
      { id: 'a-compose', name: 'Compose ton Assiette', price: 11.0, img: burgerFrites, desc: '1 viande, salade mixte, riz ou frites.', customizable: true, sizes: [{ label: 'Simple (1 viande)', price: 0 }, { label: 'Spéciale (2 viandes)', price: 2.5 }, { label: 'Royale (3 viandes)', price: 4.9 }] },
      { id: 'a-cesar', name: 'Salade César', price: 10.0, img: dessert, desc: 'Salade romaine, poulet pané, croûtons, parmesan, sauce césar.' },
      { id: 'a-burrata', name: 'Tomate Burrata', price: 10.5, img: dessert, desc: 'Burrata crémeuse, tomates fraîches, basilic, huile d\'olive.' },
      { id: 'a-feta', name: 'Sweet Feta', price: 10.0, img: dessert, desc: 'Salade fraîche, feta, légumes croquants, vinaigrette miel.' },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts & Boissons',
    tagline: 'La touche finale',
    icon: '🥤',
    items: [
      { id: 'd-tiramisu', name: 'Tiramisu Maison', price: 4.0, img: dessert, badge: 'Maison', desc: 'Tiramisu crémeux préparé maison, biscuit croustillant.' },
      { id: 'd-daim', name: 'Tarte au Daim', price: 4.0, img: dessert, desc: 'Tarte gourmande caramel et éclats de Daim.' },
      { id: 'd-moment', name: 'Dessert du Moment', price: 4.0, img: dessert, desc: 'La création sucrée du jour, demandez en caisse.' },
      { id: 'd-canette', name: 'Canette 33cl', price: 2.0, desc: 'Coca, Fanta, Sprite, Oasis…' },
      { id: 'd-verre', name: 'Bouteille Verre 33cl', price: 2.5, desc: 'Coca, Orangina, Ice Tea.' },
      { id: 'd-eau', name: 'Bouteille d\'Eau 50cl', price: 1.5, desc: 'Eau plate ou pétillante.' },
      { id: 'd-cafe', name: 'Café', price: 1.5, desc: 'Expresso serré ou allongé.' },
    ],
  },
];

export const SF_INFO = {
  name: 'Squadra Food',
  slogan: 'Le vrai tacos lyonnais gratiné',
  address: '12 rue de la République, 69002 Lyon',
  phone: '04 78 00 00 00',
  hours: [
    { d: 'Lun – Jeu', h: '11h30 – 14h30 · 18h30 – 23h00' },
    { d: 'Ven – Sam', h: '11h30 – 14h30 · 18h30 – 00h00' },
    { d: 'Dimanche', h: '18h30 – 23h00' },
  ],
  prepTime: 20,
};

export const SF_LEGAL = {
  mentions: {
    title: 'Mentions légales',
    updated: 'Dernière mise à jour : {JJ/MM/AAAA}',
    intro: 'Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l\'économie numérique (LCEN), voici les informations relatives à l\'éditeur et à l\'hébergeur du présent site.',
    sections: [
      { h: 'Éditeur du site', p: [
        'Le site squadrafood.fr est édité par {Raison sociale}, {forme juridique} au capital de {montant} €.',
        'Siège social : {adresse complète}. SIRET : {n° SIRET} — RCS {ville} {n° RCS}. N° TVA intracommunautaire : {FR00000000000}.',
        'Directeur de la publication : {Nom Prénom}. Contact : 04 78 00 00 00 — {email@squadrafood.fr}.',
      ]},
      { h: 'Hébergement', p: [
        'Le site est hébergé par {Nom de l\'hébergeur}, {adresse de l\'hébergeur}. Téléphone : {numéro hébergeur}.',
      ]},
      { h: 'Propriété intellectuelle', p: [
        'L\'ensemble des contenus présents sur le site (textes, visuels, logo, photographies, mise en page) est la propriété exclusive de {Raison sociale}, sauf mention contraire.',
        'Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.',
      ]},
      { h: 'Données personnelles', p: [
        'Le traitement de vos données est détaillé dans notre Politique de confidentialité. Vous pouvez exercer vos droits à tout moment à l\'adresse {email@squadrafood.fr}.',
      ]},
    ],
  },
  cgv: {
    title: 'Conditions Générales de Vente',
    updated: 'Dernière mise à jour : {JJ/MM/AAAA}',
    intro: 'Les présentes CGV régissent les commandes passées en ligne sur le site squadrafood.fr en mode retrait sur place (« Click & Collect »).',
    sections: [
      { h: 'Article 1 — Objet', p: ['Les présentes conditions s\'appliquent à toute commande de produits alimentaires préparés par {Raison sociale} et retirés en boutique par le client.'] },
      { h: 'Article 2 — Commande', p: ['Le client sélectionne ses produits, valide son panier puis choisit un créneau de retrait. La commande est ferme après confirmation et, le cas échéant, paiement en ligne.', 'Un récapitulatif est affiché et un email/SMS de confirmation est envoyé au client.'] },
      { h: 'Article 3 — Prix', p: ['Les prix sont indiqués en euros, toutes taxes comprises (TTC). {Raison sociale} se réserve le droit de modifier ses prix à tout moment ; les produits sont facturés sur la base des tarifs en vigueur au moment de la validation de la commande.'] },
      { h: 'Article 4 — Paiement', p: ['Le paiement s\'effectue en ligne par carte bancaire ou solution équivalente, ou sur place au moment du retrait selon l\'option choisie. La commande n\'est préparée qu\'après confirmation du paiement (le cas échéant).'] },
      { h: 'Article 5 — Retrait des commandes', p: ['Les commandes sont à retirer à l\'adresse : 12 rue de la République, 69002 Lyon, au créneau indiqué. Les temps de préparation peuvent varier selon l\'affluence ; aucun délai de préparation n\'est garanti.', 'En cas de retard du client, {Raison sociale} ne saurait être tenue responsable de l\'altération des produits.'] },
      { h: 'Article 6 — Droit de rétractation', p: ['Conformément à l\'article L.221-28 du Code de la consommation, le droit de rétractation ne s\'applique pas aux denrées alimentaires périssables, susceptibles de se détériorer rapidement.'] },
      { h: 'Article 7 — Allergènes & informations produits', p: ['La liste des allergènes est disponible en boutique et sur demande. Il appartient au client de signaler toute allergie avant commande.'] },
      { h: 'Article 8 — Réclamations & litiges', p: ['Toute réclamation peut être adressée à {email@squadrafood.fr}. À défaut de solution amiable, le client peut recourir gratuitement au médiateur de la consommation {Nom du médiateur}. Les présentes CGV sont soumises au droit français.'] },
    ],
  },
  confidentialite: {
    title: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : {JJ/MM/AAAA}',
    intro: 'Cette politique décrit comment {Raison sociale} collecte et traite vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.',
    sections: [
      { h: 'Responsable du traitement', p: ['Le responsable de traitement est {Raison sociale}, {adresse}. Contact : {email@squadrafood.fr}.'] },
      { h: 'Données collectées', p: ['Lors d\'une commande, nous collectons : nom, numéro de téléphone, adresse email et le détail de la commande. Aucune donnée bancaire n\'est conservée par nos soins (traitement assuré par notre prestataire de paiement).'] },
      { h: 'Finalités & base légale', p: ['Vos données sont utilisées pour traiter et préparer vos commandes (exécution du contrat), vous contacter en cas de besoin, et, avec votre consentement, vous adresser des offres.'] },
      { h: 'Durée de conservation', p: ['Les données de commande sont conservées le temps nécessaire à la gestion de la relation client puis archivées conformément aux obligations légales (notamment comptables).'] },
      { h: 'Vos droits', p: ['Vous disposez d\'un droit d\'accès, de rectification, d\'effacement, de limitation, d\'opposition et de portabilité. Exercez-les à {email@squadrafood.fr}. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).'] },
    ],
  },
  cookies: {
    title: 'Politique de cookies',
    updated: 'Dernière mise à jour : {JJ/MM/AAAA}',
    intro: 'Le site utilise des cookies pour assurer son bon fonctionnement et, sous réserve de votre consentement, mesurer son audience.',
    sections: [
      { h: 'Qu\'est-ce qu\'un cookie ?', p: ['Un cookie est un petit fichier déposé sur votre terminal lors de la visite d\'un site. Il permet notamment de mémoriser votre panier et vos préférences.'] },
      { h: 'Cookies utilisés', p: ['Cookies strictement nécessaires : fonctionnement du panier et de la commande (aucun consentement requis).', 'Cookies de mesure d\'audience et marketing : déposés uniquement après votre consentement, ils nous aident à améliorer le site.'] },
      { h: 'Gérer votre consentement', p: ['Vous pouvez accepter, refuser ou personnaliser les cookies via le bandeau affiché à votre arrivée, et modifier votre choix à tout moment depuis les paramètres de votre navigateur.'] },
    ],
  },
};

export const SF_LEGAL_ORDER = [
  { id: 'mentions', label: 'Mentions légales' },
  { id: 'cgv', label: 'CGV' },
  { id: 'confidentialite', label: 'Confidentialité' },
  { id: 'cookies', label: 'Cookies' },
];
