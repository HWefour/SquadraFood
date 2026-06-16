import { SF_ASSETS } from '../data';

export function About() {
  return (
    <section className="sf-about">
      <div className="sf-about-grid">
        <div
          className="sf-about-photo"
          style={{ backgroundImage: `url(${SF_ASSETS.burgerFrites})` }}
        />
        <div className="sf-about-copy">
          <span className="sf-eyebrow">Le concept</span>
          <h2 className="sf-h2">DU BRUT, DU GÉNÉREUX,<br />DU FAIT MAISON</h2>
          <p>
            Chez Squadra Food, tout est préparé minute : steaks smashés sur la plancha,
            tacos gratinés au four, frites fraîches coupées maison. Pas de surgelé, que du goût.
          </p>
          <ul className="sf-about-list">
            <li><span>01</span>Viandes fraîches &amp; sauces maison</li>
            <li><span>02</span>Tacos lyonnais gratiné, la vraie recette</li>
            <li><span>03</span>Commande en ligne, retrait en boutique</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
