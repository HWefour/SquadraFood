// ====================== SQUADRA FOOD — DONNÉES DE LA CARTE ======================
// Extraites des photos de la carte. Prix en euros.

const SF_ASSETS = {
  logo: "assets/logo.png",
  tacosGratine: "assets/tacos-gratine.png",
  tacosRoule: "assets/tacos-roule.png",
  burgerDouble: "assets/burger-double.png",
  burgerFrites: "assets/burger-frites.png",
  tacosBowl: "assets/tacos-bowl.png",
  sandwichOeuf: "assets/sandwich-oeuf.png",
  dessert: "assets/dessert.png",
};

// Options de personnalisation réutilisables
const SF_VIANDES = ["Steak haché", "Tenders de poulet", "Kefta", "Cordon bleu", "Merguez", "Nuggets"];
const SF_SAUCES = ["Algérienne", "Samouraï", "Blanche", "Ketchup", "Mayo", "BBQ", "Harissa", "Andalouse", "Biggy", "Curry"];
const SF_SUPPLEMENTS = [
  { name: "Cheddar", price: 1.0 },
  { name: "Chèvre", price: 1.0 },
  { name: "Mozzarella", price: 1.0 },
  { name: "Bleu", price: 1.0 },
  { name: "Boursin", price: 1.0 },
  { name: "Bacon", price: 1.0 },
  { name: "Lardons", price: 1.0 },
  { name: "Œuf", price: 1.0 },
  { name: "Raclette", price: 1.5 },
  { name: "Oignons", price: 0.5 },
];

// Catégories de la carte
const SF_MENU = [
  {
    id: "tacos",
    name: "Tacos & Roulés",
    tagline: "Le tacos lyonnais gratiné, notre signature",
    icon: "🌯",
    items: [
      {
        id: "tacos-simple", name: "Tacos Simple", price: 8.5, phLabel: "Tacos roulé",
        desc: "1 viande au choix, frites, cheddar fondu, sauce au choix.",
        customizable: true, sizes: [{ label: "Simple", price: 0 }, { label: "Double", price: 1.5 }, { label: "Maxi", price: 3.0 }],
        menuOption: true,
      },
      {
        id: "tacos-squadra", name: "Le Squadra Gratiné", price: 11.5, phLabel: "Tacos gratiné", badge: "Signature",
        desc: "Double viande, frites, cheddar gratiné maison, oignons, sauce signature.",
        customizable: true, menuOption: true,
      },
      {
        id: "tacos-curly", name: "Le Curly Tacos", price: 12.0, img: SF_ASSETS.tacosBowl, badge: "Best-seller",
        desc: "Steak, cheddar gratiné, potatoes curly, sauce fromagère, oignons frits.",
        customizable: true, menuOption: true,
      },
      {
        id: "tacos-roule", name: "Tacos Roulé Gratiné", price: 11.0, phLabel: "Tacos roulé gratiné",
        desc: "Version roulée et gratinée au four, viande au choix, frites, cheddar.",
        customizable: true, menuOption: true,
      },
    ],
  },
  {
    id: "burgers",
    name: "Smash Burgers",
    tagline: "Steaks smashés minute, pain brioché toasté",
    icon: "🍔",
    items: [
      { id: "b-cheese", name: "Cheese", price: 7.0, img: SF_ASSETS.burgerFrites, desc: "Steak smashé, cheddar, oignons, ketchup, moutarde.", customizable: true, menuOption: true },
      { id: "b-double", name: "Double Cheese", price: 9.0, img: SF_ASSETS.burgerDouble, badge: "Best-seller", desc: "2 steaks smashés, double cheddar, oignons, sauce maison.", customizable: true, menuOption: true },
      { id: "b-triple", name: "Triple Cheese", price: 10.5, img: SF_ASSETS.burgerDouble, desc: "3 steaks smashés, triple cheddar, oignons, ketchup.", customizable: true, menuOption: true },
      { id: "b-montagnard", name: "Montagnard Smash", price: 10.5, img: SF_ASSETS.burgerDouble, desc: "2 steaks, raclette, bacon, oignons confits, sauce fromagère.", customizable: true, menuOption: true },
      { id: "b-bacon", name: "Smash Bacon", price: 8.0, img: SF_ASSETS.burgerFrites, desc: "Steak smashé, cheddar, bacon croustillant, sauce barbecue.", customizable: true, menuOption: true },
      { id: "b-kefta", name: "Smash Kefta", price: 7.0, img: SF_ASSETS.burgerFrites, desc: "Galette kefta maison, cheddar, oignons, sauce algérienne.", customizable: true, menuOption: true },
      { id: "b-supreme", name: "Smash Suprême", price: 8.5, img: SF_ASSETS.burgerDouble, desc: "Steak smashé, cheddar, œuf, oignons, sauce suprême.", customizable: true, menuOption: true },
      { id: "b-chicken", name: "Chicken Burger", price: 8.5, img: SF_ASSETS.burgerFrites, desc: "Filet de poulet pané, cheddar, crudités, sauce maison.", customizable: true, menuOption: true },
    ],
  },
  {
    id: "sandwichs",
    name: "Sandwichs",
    tagline: "Escalope ou steak, crudités fraîches",
    icon: "🥖",
    items: [
      { id: "s-boursin", name: "Boursin", price: 8.5, img: SF_ASSETS.sandwichOeuf, desc: "Escalope tendre, Boursin, cheddar, sauce et crudités au choix.", customizable: true, menuOption: true },
      { id: "s-forestier", name: "Forestier", price: 8.5, img: SF_ASSETS.sandwichOeuf, desc: "Escalope tendre, forestier, sauce et crudités au choix.", customizable: true, menuOption: true },
      { id: "s-parigo", name: "Parigo", price: 9.5, img: SF_ASSETS.sandwichOeuf, badge: "Signature", desc: "2 steaks (80g), œuf, galette de PDT, cheddar, crudités au choix.", customizable: true, menuOption: true },
      { id: "s-mixte", name: "Mixte", price: 9.0, img: SF_ASSETS.sandwichOeuf, desc: "Escalope marinée + steak, sauce et crudités au choix.", customizable: true, menuOption: true },
    ],
  },
  {
    id: "texmex",
    name: "Tex Mex & Frites",
    tagline: "À grignoter, à partager",
    icon: "🍟",
    items: [
      { id: "t-nuggets", name: "Nuggets x6", price: 5.0, img: SF_ASSETS.burgerFrites, desc: "6 nuggets de poulet croustillants, sauce au choix." },
      { id: "t-tenders", name: "Tenders x4", price: 5.5, img: SF_ASSETS.burgerFrites, desc: "4 tenders panés maison, sauce au choix." },
      { id: "t-chili", name: "Chili Cheese x6", price: 5.5, img: SF_ASSETS.burgerFrites, desc: "6 bouchées de cheddar fondant et piment doux." },
      { id: "t-camembert", name: "Bouchées Camembert x6", price: 5.5, img: SF_ASSETS.burgerFrites, desc: "6 bouchées de camembert pané, sauce au choix." },
      { id: "t-frites", name: "Frites Maison", price: 3.5, img: SF_ASSETS.burgerFrites, desc: "Frites fraîches coupées et assaisonnées maison." },
      { id: "t-potatoes", name: "Potatoes Curly", price: 4.0, img: SF_ASSETS.tacosBowl, desc: "Potatoes torsadées et épicées." },
      { id: "t-royale", name: "Frite Royale", price: 4.5, img: SF_ASSETS.burgerFrites, desc: "Frites, cheddar fondu, oignons frits, sauce." },
    ],
  },
  {
    id: "assiettes",
    name: "Assiettes & Salades",
    tagline: "Composées et copieuses",
    icon: "🥗",
    items: [
      { id: "a-spectra", name: "Assiette Spectra", price: 15.0, img: SF_ASSETS.burgerDouble, desc: "Assortiment de viandes, salade mixte, riz ou frites." },
      { id: "a-cheval", name: "Steak à Cheval", price: 13.0, img: SF_ASSETS.burgerDouble, desc: "Steak, œuf à cheval, riz ou frites, salade." },
      { id: "a-compose", name: "Compose ton Assiette", price: 11.0, img: SF_ASSETS.burgerFrites, desc: "1 viande, salade mixte, riz ou frites.", customizable: true, sizes: [{ label: "Simple (1 viande)", price: 0 }, { label: "Spéciale (2 viandes)", price: 2.5 }, { label: "Royale (3 viandes)", price: 4.9 }] },
      { id: "a-cesar", name: "Salade César", price: 10.0, img: SF_ASSETS.dessert, desc: "Salade romaine, poulet pané, croûtons, parmesan, sauce césar." },
      { id: "a-burrata", name: "Tomate Burrata", price: 10.5, img: SF_ASSETS.dessert, desc: "Burrata crémeuse, tomates fraîches, basilic, huile d'olive." },
      { id: "a-feta", name: "Sweet Feta", price: 10.0, img: SF_ASSETS.dessert, desc: "Salade fraîche, feta, légumes croquants, vinaigrette miel." },
    ],
  },
  {
    id: "desserts",
    name: "Desserts & Boissons",
    tagline: "La touche finale",
    icon: "🥤",
    items: [
      { id: "d-tiramisu", name: "Tiramisu Maison", price: 4.0, img: SF_ASSETS.dessert, badge: "Maison", desc: "Tiramisu crémeux préparé maison, biscuit croustillant." },
      { id: "d-daim", name: "Tarte au Daim", price: 4.0, img: SF_ASSETS.dessert, desc: "Tarte gourmande caramel et éclats de Daim." },
      { id: "d-moment", name: "Dessert du Moment", price: 4.0, img: SF_ASSETS.dessert, desc: "La création sucrée du jour, demandez en caisse." },
      { id: "d-canette", name: "Canette 33cl", price: 2.0, desc: "Coca, Fanta, Sprite, Oasis…" },
      { id: "d-verre", name: "Bouteille Verre 33cl", price: 2.5, desc: "Coca, Orangina, Ice Tea." },
      { id: "d-eau", name: "Bouteille d'Eau 50cl", price: 1.5, desc: "Eau plate ou pétillante." },
      { id: "d-cafe", name: "Café", price: 1.5, desc: "Expresso serré ou allongé." },
    ],
  },
];

const SF_INFO = {
  name: "Squadra Food",
  slogan: "Le vrai tacos lyonnais gratiné",
  address: "12 rue de la République, 69002 Lyon",
  phone: "04 78 00 00 00",
  hours: [
    { d: "Lun – Jeu", h: "11h30 – 14h30 · 18h30 – 23h00" },
    { d: "Ven – Sam", h: "11h30 – 14h30 · 18h30 – 00h00" },
    { d: "Dimanche", h: "18h30 – 23h00" },
  ],
  prepTime: 20, // minutes
};

Object.assign(window, { SF_ASSETS, SF_VIANDES, SF_SAUCES, SF_SUPPLEMENTS, SF_MENU, SF_INFO });
