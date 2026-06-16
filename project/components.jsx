// ====================== SQUADRA FOOD — COMPOSANTS D'AFFICHAGE ======================
const { useState, useEffect, useRef } = React;

const eur = (n) => n.toFixed(2).replace(".", ",") + " €";

// ---------- Logo en pastille ----------
function Logo({ size = 46 }) {
  return (
    <img src={SF_ASSETS.logo} alt="Squadra Food" className="sf-logo" style={{ width: size, height: size }} />
  );
}

// ---------- En-tête / Navigation ----------
function Header({ cartCount, onCart, onNav, active }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const root = document.querySelector(".sf-scroll");
    const onScroll = () => setScrolled((root ? root.scrollTop : window.scrollY) > 20);
    const el = root || window;
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { id: "accueil", label: "Accueil" },
    { id: "carte", label: "La Carte" },
    { id: "apropos", label: "Le Concept" },
    { id: "contact", label: "Infos & Accès" },
  ];
  return (
    <header className={"sf-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="sf-header-inner">
        <button className="sf-brand" onClick={() => onNav("accueil")}>
          <Logo size={44} />
          <span className="sf-brand-txt">SQUADRA <em>FOOD</em></span>
        </button>
        <nav className="sf-nav">
          {links.map((l) => (
            <button key={l.id} className={"sf-nav-link" + (active === l.id ? " is-active" : "")} onClick={() => onNav(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>
        <div className="sf-header-actions">
          <button className="sf-order-btn" onClick={() => onNav("carte")}>Commander</button>
          <button className="sf-cart-btn" onClick={onCart} aria-label="Panier">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            {cartCount > 0 && <span className="sf-cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}

// ---------- Hero ----------
function Hero({ onNav }) {
  return (
    <section className="sf-hero" data-screen-label="Accueil">
      <div className="sf-hero-bg" />
      <div className="sf-hero-grid">
        <div className="sf-hero-copy">
          <span className="sf-eyebrow">★ Street food · Lyon ★</span>
          <h1 className="sf-hero-title">LE TACOS<br/><span className="sf-hl">GRATINÉ</span><br/>QUI DÉCHIRE</h1>
          <p className="sf-hero-sub">{SF_INFO.slogan}. Tacos lyonnais, smash burgers et sandwichs faits minute. Commandez en ligne, récupérez en boutique.</p>
          <div className="sf-hero-cta">
            <button className="sf-btn sf-btn-gold" onClick={() => onNav("carte")}>Commander · Click &amp; Collect</button>
            <button className="sf-btn sf-btn-ghost" onClick={() => onNav("carte")}>Voir la carte</button>
          </div>
          <div className="sf-hero-meta">
            <div><strong>Click &amp; Collect</strong><span>sans frais</span></div>
            <div><strong>Fait maison</strong><span>chaque jour</span></div>
            <div><strong>Tacos · Burgers</strong><span>&amp; sandwichs</span></div>
          </div>
        </div>
        <div className="sf-hero-art">
          <div className="sf-hero-photo sf-hero-photo-1" style={{ backgroundImage: `url(${SF_ASSETS.tacosBowl})` }} />
          <div className="sf-hero-photo sf-hero-photo-2" style={{ backgroundImage: `url(${SF_ASSETS.burgerDouble})` }} />
          <div className="sf-hero-badge"><span>100%</span>maison</div>
        </div>
      </div>
    </section>
  );
}

// ---------- Bandeau défilant ----------
function Marquee() {
  const words = ["TACOS GRATINÉ", "SMASH BURGERS", "SANDWICHS", "TEX MEX", "FAIT MAISON", "CLICK & COLLECT"];
  const line = [...words, ...words];
  return (
    <div className="sf-marquee">
      <div className="sf-marquee-track">
        {line.map((w, i) => (<span key={i} className="sf-marquee-item">{w}<i className="sf-marquee-dot">●</i></span>))}
      </div>
    </div>
  );
}

// ---------- Catégories en vedette ----------
function Highlights({ onNav }) {
  const cards = [
    { cat: "tacos", title: "Tacos & Roulés", img: SF_ASSETS.tacosBowl, txt: "Gratinés au four, cheddar maison." },
    { cat: "burgers", title: "Smash Burgers", img: SF_ASSETS.burgerDouble, txt: "Steaks smashés, pain brioché." },
    { cat: "sandwichs", title: "Sandwichs", img: SF_ASSETS.sandwichOeuf, txt: "Escalope, steak, crudités fraîches." },
  ];
  return (
    <section className="sf-highlights" data-screen-label="Specialites">
      <div className="sf-section-head">
        <span className="sf-eyebrow">Nos spécialités</span>
        <h2 className="sf-h2">CE QU'ON FAIT DE MIEUX</h2>
      </div>
      <div className="sf-hl-grid">
        {cards.map((c) => (
          <button key={c.cat} className="sf-hl-card" onClick={() => onNav("carte", c.cat)}>
            <div className="sf-hl-img" style={{ backgroundImage: `url(${c.img})` }} />
            <div className="sf-hl-body">
              <h3>{c.title}</h3>
              <p>{c.txt}</p>
              <span className="sf-hl-link">Commander →</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

// ---------- Carte produit ----------
function ProductCard({ item, onOpen, onQuickAdd }) {
  return (
    <article className="sf-prod">
      {item.img ? (
        <button className="sf-prod-img" style={{ backgroundImage: `url(${item.img})` }} onClick={() => onOpen(item)}>
          {item.badge && <span className="sf-prod-badge">{item.badge}</span>}
        </button>
      ) : item.phLabel ? (
        <button className="sf-prod-img sf-ph" onClick={() => onOpen(item)}>
          {item.badge && <span className="sf-prod-badge">{item.badge}</span>}
          <span className="sf-ph-label">photo · {item.phLabel}</span>
        </button>
      ) : null}
      <div className="sf-prod-body">
        <div className="sf-prod-head">
          <h4 onClick={() => onOpen(item)}>{item.name}</h4>
          <span className="sf-prod-price">{eur(item.price)}</span>
        </div>
        <p className="sf-prod-desc">{item.desc}</p>
        <div className="sf-prod-foot">
          {item.customizable ? (
            <button className="sf-btn-sm sf-btn-gold" onClick={() => onOpen(item)}>Personnaliser</button>
          ) : (
            <button className="sf-btn-sm sf-btn-gold" onClick={() => onQuickAdd(item)}>Ajouter +</button>
          )}
          {item.customizable && <span className="sf-prod-opt">Options dispo</span>}
        </div>
      </div>
    </article>
  );
}

// ---------- Section Carte complète ----------
function MenuView({ onOpen, onQuickAdd, jumpTo }) {
  const [activeCat, setActiveCat] = useState(SF_MENU[0].id);
  const refs = useRef({});
  const navRef = useRef(null);

  useEffect(() => {
    if (jumpTo && refs.current[jumpTo]) {
      setActiveCat(jumpTo);
      refs.current[jumpTo].scrollIntoView ? null : null;
      const top = refs.current[jumpTo].offsetTop - 150;
      const scroller = document.querySelector(".sf-scroll");
      if (scroller) scroller.scrollTo({ top, behavior: "smooth" });
    }
  }, [jumpTo]);

  const goCat = (id) => {
    setActiveCat(id);
    const el = refs.current[id];
    if (el) {
      const top = el.offsetTop - 150;
      const scroller = document.querySelector(".sf-scroll");
      if (scroller) scroller.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="sf-menu" data-screen-label="Carte">
      <div className="sf-section-head">
        <span className="sf-eyebrow">À emporter · Click &amp; Collect</span>
        <h2 className="sf-h2">LA CARTE</h2>
        <p className="sf-section-sub">Personnalisez vos tacos et burgers, ajoutez au panier, choisissez votre créneau de retrait.</p>
      </div>

      <div className="sf-catnav" ref={navRef}>
        {SF_MENU.map((c) => (
          <button key={c.id} className={"sf-catnav-btn" + (activeCat === c.id ? " is-active" : "")} onClick={() => goCat(c.id)}>
            <span className="sf-catnav-icon">{c.icon}</span>{c.name}
          </button>
        ))}
      </div>

      <div className="sf-menu-cats">
        {SF_MENU.map((c) => (
          <div key={c.id} className="sf-cat" ref={(el) => (refs.current[c.id] = el)}>
            <div className="sf-cat-head">
              <h3 className="sf-cat-title"><span>{c.icon}</span>{c.name}</h3>
              <p className="sf-cat-tag">{c.tagline}</p>
            </div>
            <div className="sf-prod-grid">
              {c.items.map((it) => (
                <ProductCard key={it.id} item={it} onOpen={onOpen} onQuickAdd={onQuickAdd} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- À propos ----------
function About() {
  return (
    <section className="sf-about" data-screen-label="Concept">
      <div className="sf-about-grid">
        <div className="sf-about-photo" style={{ backgroundImage: `url(${SF_ASSETS.burgerFrites})` }} />
        <div className="sf-about-copy">
          <span className="sf-eyebrow">Le concept</span>
          <h2 className="sf-h2">DU BRUT, DU GÉNÉREUX,<br/>DU FAIT MAISON</h2>
          <p>Chez Squadra Food, tout est préparé minute : steaks smashés sur la plancha, tacos gratinés au four, frites fraîches coupées maison. Pas de surgelé, que du goût.</p>
          <ul className="sf-about-list">
            <li><span>01</span>Viandes fraîches & sauces maison</li>
            <li><span>02</span>Tacos lyonnais gratiné, la vraie recette</li>
            <li><span>03</span>Commande en ligne, retrait en boutique</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// ---------- Pied de page / Contact ----------
function Footer({ onLegal }) {
  return (
    <footer className="sf-footer" data-screen-label="Contact">
      <div className="sf-footer-grid">
        <div className="sf-footer-brand">
          <Logo size={64} />
          <p className="sf-footer-slogan">{SF_INFO.slogan}</p>
          <div className="sf-socials">
            {["Instagram", "Facebook", "TikTok"].map((s) => (<span key={s} className="sf-social">{s}</span>))}
          </div>
        </div>
        <div className="sf-footer-col">
          <h5>Nous trouver</h5>
          <p>{SF_INFO.address}</p>
          <p>{SF_INFO.phone}</p>
          <div className="sf-map-placeholder">PLAN / GOOGLE MAPS</div>
        </div>
        <div className="sf-footer-col">
          <h5>Horaires</h5>
          <ul className="sf-hours">
            {SF_INFO.hours.map((h, i) => (<li key={i}><span>{h.d}</span><strong>{h.h}</strong></li>))}
          </ul>
        </div>
      </div>
      <div className="sf-footer-bottom">
        <span>© {new Date().getFullYear()} Squadra Food — Tous droits réservés</span>
        <nav className="sf-footer-legal">
          {SF_LEGAL_ORDER.map((t) => (
            <button key={t.id} onClick={() => onLegal && onLegal(t.id)}>{t.label}</button>
          ))}
        </nav>
      </div>
      <div className="sf-footer-built-row">
        <span className="sf-footer-built">Maquette site WordPress · Elementor · WooCommerce · Orderable</span>
      </div>
    </footer>
  );
}

Object.assign(window, { eur, Logo, Header, Hero, Marquee, Highlights, ProductCard, MenuView, About, Footer });
