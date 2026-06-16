import { SF_ASSETS, SF_INFO } from '../data';

export function Hero({ onNav }) {
  return (
    <section className="sf-hero">
      <div className="sf-hero-bg" />
      <div className="sf-hero-grid">
        <div className="sf-hero-copy">
          <span className="sf-eyebrow">★ Street food · Vendargues ★</span>
          <h1 className="sf-hero-title">
            LE TACOS<br />
            <span className="sf-hl">GRATINÉ</span><br />
            QUI DÉCHIRE
          </h1>
          <p className="sf-hero-sub">
            {SF_INFO.slogan}. Tacos gratinés, smash burgers et sandwichs faits minute à Vendargues.
            Commandez en ligne, récupérez en boutique.
          </p>
          <div className="sf-hero-cta">
            <button className="sf-btn sf-btn-gold" onClick={() => onNav('carte')}>
              Commander · Click &amp; Collect
            </button>
            <button className="sf-btn sf-btn-ghost" onClick={() => onNav('carte')}>
              Voir la carte
            </button>
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
          <div className="sf-hero-badge">
            <span>100%</span>maison
          </div>
        </div>
      </div>
    </section>
  );
}
