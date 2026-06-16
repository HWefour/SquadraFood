// ====================== SQUADRA FOOD — COMMANDE & CLICK·COLLECT ======================
const MENU_SUPPLEMENT_PRICE = 3.0; // frites + boisson

// map item -> categorie
const SF_CAT_OF = {};
SF_MENU.forEach((c) => c.items.forEach((it) => { SF_CAT_OF[it.id] = c.id; }));
const wantsMeat = (item) => ["tacos", "sandwichs"].includes(SF_CAT_OF[item.id]) || item.id === "a-compose";
const wantsSauce = (item) => item.customizable && SF_CAT_OF[item.id] !== "assiettes";

// ---------- Fiche produit (modale) ----------
function ProductModal({ item, onClose, onAdd }) {
  const [sizeIdx, setSizeIdx] = useState(0);
  const [meat, setMeat] = useState(SF_VIANDES[0]);
  const [asMenu, setAsMenu] = useState(false);
  const [supps, setSupps] = useState([]);
  const [sauce, setSauce] = useState(SF_SAUCES[0]);
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");

  if (!item) return null;
  const hasSizes = item.sizes && item.sizes.length > 0;
  const showMeat = wantsMeat(item);
  const showSauce = wantsSauce(item);

  const toggleSupp = (name) => setSupps((p) => p.includes(name) ? p.filter((x) => x !== name) : [...p, name]);

  const suppTotal = supps.reduce((s, n) => s + (SF_SUPPLEMENTS.find((x) => x.name === n)?.price || 0), 0);
  const sizeExtra = hasSizes ? item.sizes[sizeIdx].price : 0;
  const menuExtra = asMenu ? MENU_SUPPLEMENT_PRICE : 0;
  const unit = item.price + sizeExtra + suppTotal + menuExtra;
  const total = unit * qty;

  const handleAdd = () => {
    const opts = [];
    if (hasSizes) opts.push(item.sizes[sizeIdx].label);
    if (showMeat) opts.push(meat);
    if (asMenu) opts.push("Menu (frites + boisson)");
    if (supps.length) opts.push("+ " + supps.join(", "));
    if (showSauce) opts.push("Sauce " + sauce);
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
                    <button key={i} className={"sf-chip" + (sizeIdx === i ? " is-on" : "")} onClick={() => setSizeIdx(i)}>
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
                    <button key={v} className={"sf-chip" + (meat === v ? " is-on" : "")} onClick={() => setMeat(v)}>{v}</button>
                  ))}
                </div>
              </div>
            )}

            {item.menuOption && (
              <div className="sf-opt-block">
                <div className="sf-opt-label">Formule</div>
                <button className={"sf-menu-toggle" + (asMenu ? " is-on" : "")} onClick={() => setAsMenu((v) => !v)}>
                  <span className="sf-menu-toggle-check">{asMenu ? "✓" : ""}</span>
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
                    <button key={s.name} className={"sf-chip" + (supps.includes(s.name) ? " is-on" : "")} onClick={() => toggleSupp(s.name)}>
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
                    <button key={s} className={"sf-chip" + (sauce === s ? " is-on" : "")} onClick={() => setSauce(s)}>{s}</button>
                  ))}
                </div>
              </div>
            )}

            <div className="sf-opt-block">
              <div className="sf-opt-label">Note pour la cuisine</div>
              <input className="sf-note" placeholder="Ex : sans oignons, bien cuit…" value={note} onChange={(e) => setNote(e.target.value)} />
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

// ---------- Tiroir Panier ----------
function CartDrawer({ open, items, onClose, onQty, onRemove, onCheckout }) {
  const subtotal = items.reduce((s, i) => s + i.unitPrice * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  return (
    <>
      <div className={"sf-drawer-veil" + (open ? " is-open" : "")} onClick={onClose} />
      <aside className={"sf-drawer" + (open ? " is-open" : "")} aria-hidden={!open}>
        <div className="sf-drawer-head">
          <h3>Votre commande {count > 0 && <span>({count})</span>}</h3>
          <button className="sf-modal-close" onClick={onClose} aria-label="Fermer">✕</button>
        </div>
        <div className="sf-drawer-body">
          {items.length === 0 ? (
            <div className="sf-cart-empty">
              <span className="sf-cart-empty-icon">🛒</span>
              <p>Votre panier est vide.</p>
              <small>Ajoutez vos tacos, burgers ou sandwichs préférés.</small>
            </div>
          ) : (
            items.map((i) => (
              <div key={i.uid} className="sf-cart-item">
                {i.img && <div className="sf-cart-thumb" style={{ backgroundImage: `url(${i.img})` }} />}
                <div className="sf-cart-info">
                  <div className="sf-cart-top">
                    <strong>{i.name}</strong>
                    <button className="sf-cart-del" onClick={() => onRemove(i.uid)}>✕</button>
                  </div>
                  {i.options.length > 0 && <p className="sf-cart-opts">{i.options.join(" · ")}</p>}
                  {i.note && <p className="sf-cart-note">“{i.note}”</p>}
                  <div className="sf-cart-bottom">
                    <div className="sf-qty sf-qty-sm">
                      <button onClick={() => onQty(i.uid, -1)}>−</button>
                      <span>{i.qty}</span>
                      <button onClick={() => onQty(i.uid, 1)}>+</button>
                    </div>
                    <span className="sf-cart-price">{eur(i.unitPrice * i.qty)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
          <div className="sf-drawer-foot">
            <div className="sf-drawer-line"><span>Sous-total</span><strong>{eur(subtotal)}</strong></div>
            <div className="sf-drawer-line sf-muted"><span>Retrait en boutique</span><span>Gratuit</span></div>
            <button className="sf-btn sf-btn-gold sf-checkout-btn" onClick={onCheckout}>
              Click &amp; Collect · {eur(subtotal)}
            </button>
            <p className="sf-drawer-prep">Retrait en boutique · Click &amp; Collect</p>
          </div>
        )}
      </aside>
    </>
  );
}

// ---------- Créneaux de retrait ----------
function buildSlots() {
  const slots = [];
  const now = new Date();
  let start = new Date(now.getTime() + SF_INFO.prepTime * 60000);
  const m = start.getMinutes();
  start.setMinutes(m + (15 - (m % 15)) % 15, 0, 0);
  for (let i = 0; i < 10; i++) {
    const t = new Date(start.getTime() + i * 15 * 60000);
    slots.push(t.getHours().toString().padStart(2, "0") + "h" + t.getMinutes().toString().padStart(2, "0"));
  }
  return slots;
}

// ---------- Tunnel Click & Collect ----------
function Checkout({ items, onClose, onPlaced }) {
  const [step, setStep] = useState(1); // 1 infos, 2 paiement, 3 confirmé
  const [slots] = useState(buildSlots);
  const [slot, setSlot] = useState(null);
  const [asap, setAsap] = useState(true);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [pay, setPay] = useState("cb");
  const orderNum = useRef("SQ-" + Math.floor(1000 + Math.random() * 9000));

  const subtotal = items.reduce((s, i) => s + i.unitPrice * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const pickupLabel = asap ? "Dès que prêt" : slot;
  const canStep1 = form.name.trim() && form.phone.trim() && (asap || slot);

  const place = () => { setStep(3); onPlaced && onPlaced(); };

  return (
    <div className="sf-modal-wrap" onClick={step === 3 ? onClose : undefined}>
      <div className="sf-checkout" onClick={(e) => e.stopPropagation()}>
        {step !== 3 && <button className="sf-modal-close" onClick={onClose} aria-label="Fermer">✕</button>}

        {step !== 3 && (
          <div className="sf-checkout-steps">
            <span className={step >= 1 ? "is-on" : ""}>1 · Retrait</span>
            <span className={step >= 2 ? "is-on" : ""}>2 · Paiement</span>
            <span>3 · Confirmé</span>
          </div>
        )}

        {step === 1 && (
          <div className="sf-checkout-body">
            <h3 className="sf-checkout-title">Click &amp; Collect</h3>
            <p className="sf-checkout-sub">Retrait à {SF_INFO.address}</p>

            <div className="sf-opt-label">Quand venez-vous ?</div>
            <div className="sf-slot-mode">
              <button className={"sf-slot-asap" + (asap ? " is-on" : "")} onClick={() => setAsap(true)}>
                <strong>Au plus vite</strong><span>dès que prêt</span>
              </button>
              <button className={"sf-slot-asap" + (!asap ? " is-on" : "")} onClick={() => setAsap(false)}>
                <strong>Choisir un créneau</strong><span>aujourd'hui</span>
              </button>
            </div>
            {!asap && (
              <div className="sf-slots">
                {slots.map((s) => (
                  <button key={s} className={"sf-slot" + (slot === s ? " is-on" : "")} onClick={() => setSlot(s)}>{s}</button>
                ))}
              </div>
            )}

            <div className="sf-form">
              <label className="sf-field">
                <span>Nom *</span>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Votre nom" />
              </label>
              <label className="sf-field">
                <span>Téléphone *</span>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="06 12 34 56 78" />
              </label>
              <label className="sf-field sf-field-full">
                <span>Email (reçu)</span>
                <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="vous@email.com" />
              </label>
            </div>

            <div className="sf-checkout-foot">
              <div className="sf-checkout-total"><span>{count} article{count > 1 ? "s" : ""}</span><strong>{eur(subtotal)}</strong></div>
              <button className="sf-btn sf-btn-gold" disabled={!canStep1} onClick={() => setStep(2)}>Continuer</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="sf-checkout-body">
            <h3 className="sf-checkout-title">Paiement</h3>
            <p className="sf-checkout-sub">Retrait : <strong>{pickupLabel}</strong> · {form.name}</p>

            <div className="sf-pay-opts">
              {[{ id: "cb", t: "Carte bancaire", s: "Visa · Mastercard · CB" }, { id: "applepay", t: "Apple Pay", s: "Paiement express" }, { id: "counter", t: "Payer au comptoir", s: "À la récupération" }].map((p) => (
                <button key={p.id} className={"sf-pay" + (pay === p.id ? " is-on" : "")} onClick={() => setPay(p.id)}>
                  <span className="sf-pay-radio" />
                  <span className="sf-pay-txt"><strong>{p.t}</strong><small>{p.s}</small></span>
                </button>
              ))}
            </div>

            {pay === "cb" && (
              <div className="sf-cardbox">
                <input className="sf-card-num" placeholder="Numéro de carte" />
                <div className="sf-card-row">
                  <input placeholder="MM / AA" />
                  <input placeholder="CVC" />
                </div>
              </div>
            )}

            <div className="sf-recap">
              {items.map((i) => (
                <div key={i.uid} className="sf-recap-line"><span>{i.qty}× {i.name}</span><span>{eur(i.unitPrice * i.qty)}</span></div>
              ))}
              <div className="sf-recap-total"><span>Total</span><strong>{eur(subtotal)}</strong></div>
            </div>

            <div className="sf-checkout-foot">
              <button className="sf-btn sf-btn-ghost" onClick={() => setStep(1)}>Retour</button>
              <button className="sf-btn sf-btn-gold" onClick={place}>Payer {eur(subtotal)}</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="sf-confirm">
            <div className="sf-confirm-check">✓</div>
            <h3>Commande confirmée !</h3>
            <p className="sf-confirm-num">N° {orderNum.current}</p>
            <p className="sf-confirm-txt">Merci {form.name || ""} ! Votre commande est en préparation.</p>
            <div className="sf-confirm-card">
              <div><span>Retrait</span><strong>{pickupLabel}</strong></div>
              <div><span>Adresse</span><strong>{SF_INFO.address}</strong></div>
              <div><span>Total payé</span><strong>{eur(subtotal)}</strong></div>
            </div>
            <p className="sf-confirm-sms">Un SMS de confirmation a été envoyé au {form.phone || "votre numéro"}.</p>
            <button className="sf-btn sf-btn-gold" onClick={onClose}>Terminé</button>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { ProductModal, CartDrawer, Checkout });
