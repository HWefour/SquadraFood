import { SF_ASSETS } from '../data';

export function Highlights({ onNav }) {
  const cards = [
    { cat: 'tacos', title: 'Tacos & Roulés', img: SF_ASSETS.tacosBowl, txt: 'Gratinés au four, cheddar maison.' },
    { cat: 'burgers', title: 'Smash Burgers', img: SF_ASSETS.burgerDouble, txt: 'Steaks smashés, pain brioché.' },
    { cat: 'sandwichs', title: 'Sandwichs', img: SF_ASSETS.sandwichOeuf, txt: 'Escalope, steak, crudités fraîches.' },
  ];

  return (
    <section className="sf-highlights">
      <div className="sf-section-head">
        <span className="sf-eyebrow">Nos spécialités</span>
        <h2 className="sf-h2">CE QU&apos;ON FAIT DE MIEUX</h2>
      </div>
      <div className="sf-hl-grid">
        {cards.map((c) => (
          <button key={c.cat} className="sf-hl-card" onClick={() => onNav('carte', c.cat)}>
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
