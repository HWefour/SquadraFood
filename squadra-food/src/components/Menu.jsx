import { useState, useEffect, useRef } from 'react';
import { SF_MENU } from '../data';

export const eur = (n) => n.toFixed(2).replace('.', ',') + ' €';

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

export function MenuView({ onOpen, onQuickAdd, jumpTo }) {
  const [activeCat, setActiveCat] = useState(SF_MENU[0].id);
  const refs = useRef({});

  useEffect(() => {
    if (jumpTo && refs.current[jumpTo]) {
      setActiveCat(jumpTo);
      const top = refs.current[jumpTo].offsetTop - 150;
      const scroller = document.querySelector('.sf-scroll');
      if (scroller) scroller.scrollTo({ top, behavior: 'smooth' });
    }
  }, [jumpTo]);

  const goCat = (id) => {
    setActiveCat(id);
    const el = refs.current[id];
    if (el) {
      const top = el.offsetTop - 150;
      const scroller = document.querySelector('.sf-scroll');
      if (scroller) scroller.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="sf-menu">
      <div className="sf-section-head">
        <span className="sf-eyebrow">À emporter · Click &amp; Collect</span>
        <h2 className="sf-h2">LA CARTE</h2>
        <p className="sf-section-sub">
          Personnalisez vos tacos et burgers, ajoutez au panier, choisissez votre créneau de retrait.
        </p>
      </div>

      <div className="sf-catnav">
        {SF_MENU.map((c) => (
          <button
            key={c.id}
            className={'sf-catnav-btn' + (activeCat === c.id ? ' is-active' : '')}
            onClick={() => goCat(c.id)}
          >
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
