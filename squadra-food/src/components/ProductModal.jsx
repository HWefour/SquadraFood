import { useState } from 'react';
import { SF_VIANDES, SF_SAUCES, SF_SUPPLEMENTS, SF_MENU } from '../data';
import { eur } from './Menu';

const MENU_SUPPLEMENT_PRICE = 3.0;

const SF_CAT_OF = {};
SF_MENU.forEach((c) => c.items.forEach((it) => { SF_CAT_OF[it.id] = c.id; }));
const wantsMeat = (item) => ['tacos', 'sandwichs'].includes(SF_CAT_OF[item.id]) || item.id === 'a-compose';
const wantsSauce = (item) => item.customizable && SF_CAT_OF[item.id] !== 'assiettes';

export function ProductModal({ item, onClose, onAdd }) {
  const [sizeIdx, setSizeIdx] = useState(0);
  const [meat, setMeat] = useState(SF_VIANDES[0]);
  const [asMenu, setAsMenu] = useState(false);
  const [supps, setSupps] = useState([]);
  const [sauce, setSauce] = useState(SF_SAUCES[0]);
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState('');

  if (!item) return null;

  const hasSizes = item.sizes && item.sizes.length > 0;
  const showMeat = wantsMeat(item);
  const showSauce = wantsSauce(item);

  const toggleSupp = (name) =>
    setSupps((p) => p.includes(name) ? p.filter((x) => x !== name) : [...p, name]);

  const suppTotal = supps.reduce((s, n) => s + (SF_SUPPLEMENTS.find((x) => x.name === n)?.price || 0), 0);
  const sizeExtra = hasSizes ? item.sizes[sizeIdx].price : 0;
  const menuExtra = asMenu ? MENU_SUPPLEMENT_PRICE : 0;
  const unit = item.price + sizeExtra + suppTotal + menuExtra;
  const total = unit * qty;

  const handleAdd = () => {
    const opts = [];
    if (hasSizes) opts.push(item.sizes[sizeIdx].label);
    if (showMeat) opts.push(meat);
    if (asMenu) opts.push('Menu (frites + boisson)');
    if (supps.length) opts.push('+ ' + supps.join(', '));
    if (showSauce) opts.push('Sauce ' + sauce);
    onAdd({
      uid: Date.now() + Math.random(),
      id: item.id, name: item.name, img: item.img,
      unitPrice: unit, qty, options: opts, note: note.trim(),
    });
    onClose();
  };

  return (
    <div className="sf-modal-wrap" onClick={onClose}>
      <div className="sf-modal" onClick={(e) => e.stopPropagation()}>
        <button className="sf-modal-close" onClick={onClose} aria-label="Fermer">✕</button>
        <div className="sf-modal-scroll">
          {item.img ? (
            <div className="sf-modal-img" style={{ backgroundImage: `url(${item.img})` }}>
              {item.badge && <span className="sf-prod-badge">{item.badge}</span>}
            </div>
          ) : item.phLabel ? (
            <div className="sf-modal-img sf-ph">
              {item.badge && <span className="sf-prod-badge">{item.badge}</span>}
              <span className="sf-ph-label">photo · {item.phLabel}</span>
            </div>
          ) : null}

          <div className="sf-modal-body">
            <div className="sf-modal-head">
              <h3>{item.name}</h3>
              <span className="sf-modal-price">{eur(item.price)}</span>
            </div>
            <p className="sf-modal-desc">{item.desc}</p>

            {hasSizes && (
              <div className="sf-opt-block">
                <div className="sf-opt-label">Taille <em>obligatoire</em></div>
                <div className="sf-chips">
                  {item.sizes.map((s, i) => (
                    <button key={i} className={'sf-chip' + (sizeIdx === i ? ' is-on' : '')} onClick={() => setSizeIdx(i)}>
                      {s.label}{s.price > 0 && <b>+{eur(s.price)}</b>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showMeat && (
              <div className="sf-opt-block">
                <div className="sf-opt-label">Viande au choix <em>obligatoire</em></div>
                <div className="sf-chips">
                  {SF_VIANDES.map((v) => (
                    <button key={v} className={'sf-chip' + (meat === v ? ' is-on' : '')} onClick={() => setMeat(v)}>{v}</button>
                  ))}
                </div>
              </div>
            )}

            {item.menuOption && (
              <div className="sf-opt-block">
                <div className="sf-opt-label">Formule</div>
                <button className={'sf-menu-toggle' + (asMenu ? ' is-on' : '')} onClick={() => setAsMenu((v) => !v)}>
                  <span className="sf-menu-toggle-check">{asMenu ? '✓' : ''}</span>
                  <span className="sf-menu-toggle-txt"><strong>En menu</strong> · frites maison + boisson 33cl</span>
                  <span className="sf-menu-toggle-price">+{eur(MENU_SUPPLEMENT_PRICE)}</span>
                </button>
              </div>
            )}

            {item.customizable && (
              <div className="sf-opt-block">
                <div className="sf-opt-label">Suppléments <em>au choix</em></div>
                <div className="sf-chips">
                  {SF_SUPPLEMENTS.map((s) => (
                    <button key={s.name} className={'sf-chip' + (supps.includes(s.name) ? ' is-on' : '')} onClick={() => toggleSupp(s.name)}>
                      {s.name}<b>+{eur(s.price)}</b>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showSauce && (
              <div className="sf-opt-block">
                <div className="sf-opt-label">Sauce <em>obligatoire</em></div>
                <div className="sf-chips">
                  {SF_SAUCES.map((s) => (
                    <button key={s} className={'sf-chip' + (sauce === s ? ' is-on' : '')} onClick={() => setSauce(s)}>{s}</button>
                  ))}
                </div>
              </div>
            )}

            <div className="sf-opt-block">
              <div className="sf-opt-label">Note pour la cuisine</div>
              <input
                className="sf-note"
                placeholder="Ex : sans oignons, bien cuit…"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="sf-modal-foot">
          <div className="sf-qty">
            <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
            <span>{qty}</span>
            <button onClick={() => setQty((q) => q + 1)}>+</button>
          </div>
          <button className="sf-btn sf-btn-gold sf-add-btn" onClick={handleAdd}>
            Ajouter · {eur(total)}
          </button>
        </div>
      </div>
    </div>
  );
}
