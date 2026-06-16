import { useState, useRef } from 'react';
import { SF_INFO } from '../data';
import { eur } from './Menu';

function buildSlots() {
  const slots = [];
  const now = new Date();
  let start = new Date(now.getTime() + SF_INFO.prepTime * 60000);
  const m = start.getMinutes();
  start.setMinutes(m + (15 - (m % 15)) % 15, 0, 0);
  for (let i = 0; i < 10; i++) {
    const t = new Date(start.getTime() + i * 15 * 60000);
    slots.push(t.getHours().toString().padStart(2, '0') + 'h' + t.getMinutes().toString().padStart(2, '0'));
  }
  return slots;
}

export function Checkout({ items, onClose, onPlaced }) {
  const [step, setStep] = useState(1);
  const [slots] = useState(buildSlots);
  const [slot, setSlot] = useState(null);
  const [asap, setAsap] = useState(true);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [pay, setPay] = useState('cb');
  const orderNum = useRef('SQ-' + Math.floor(1000 + Math.random() * 9000));

  const subtotal = items.reduce((s, i) => s + i.unitPrice * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const pickupLabel = asap ? 'Dès que prêt' : slot;
  const canStep1 = form.name.trim() && form.phone.trim() && (asap || slot);

  const place = () => { setStep(3); onPlaced && onPlaced(); };

  return (
    <div className="sf-modal-wrap" onClick={step === 3 ? onClose : undefined}>
      <div className="sf-checkout" onClick={(e) => e.stopPropagation()}>
        {step !== 3 && <button className="sf-modal-close" onClick={onClose} aria-label="Fermer">✕</button>}

        {step !== 3 && (
          <div className="sf-checkout-steps">
            <span className={step >= 1 ? 'is-on' : ''}>1 · Retrait</span>
            <span className={step >= 2 ? 'is-on' : ''}>2 · Paiement</span>
            <span>3 · Confirmé</span>
          </div>
        )}

        {step === 1 && (
          <div className="sf-checkout-body">
            <h3 className="sf-checkout-title">Click &amp; Collect</h3>
            <p className="sf-checkout-sub">Retrait à {SF_INFO.address}</p>

            <div className="sf-opt-label">Quand venez-vous ?</div>
            <div className="sf-slot-mode">
              <button className={'sf-slot-asap' + (asap ? ' is-on' : '')} onClick={() => setAsap(true)}>
                <strong>Au plus vite</strong><span>dès que prêt</span>
              </button>
              <button className={'sf-slot-asap' + (!asap ? ' is-on' : '')} onClick={() => setAsap(false)}>
                <strong>Choisir un créneau</strong><span>aujourd&apos;hui</span>
              </button>
            </div>
            {!asap && (
              <div className="sf-slots">
                {slots.map((s) => (
                  <button key={s} className={'sf-slot' + (slot === s ? ' is-on' : '')} onClick={() => setSlot(s)}>{s}</button>
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
              <div className="sf-checkout-total">
                <span>{count} article{count > 1 ? 's' : ''}</span>
                <strong>{eur(subtotal)}</strong>
              </div>
              <button className="sf-btn sf-btn-gold" disabled={!canStep1} onClick={() => setStep(2)}>Continuer</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="sf-checkout-body">
            <h3 className="sf-checkout-title">Paiement</h3>
            <p className="sf-checkout-sub">Retrait : <strong>{pickupLabel}</strong> · {form.name}</p>

            <div className="sf-pay-opts">
              {[
                { id: 'cb', t: 'Carte bancaire', s: 'Visa · Mastercard · CB' },
                { id: 'applepay', t: 'Apple Pay', s: 'Paiement express' },
                { id: 'counter', t: 'Payer au comptoir', s: 'À la récupération' },
              ].map((p) => (
                <button key={p.id} className={'sf-pay' + (pay === p.id ? ' is-on' : '')} onClick={() => setPay(p.id)}>
                  <span className="sf-pay-radio" />
                  <span className="sf-pay-txt"><strong>{p.t}</strong><small>{p.s}</small></span>
                </button>
              ))}
            </div>

            {pay === 'cb' && (
              <div className="sf-cardbox">
                <input placeholder="Numéro de carte" />
                <div className="sf-card-row">
                  <input placeholder="MM / AA" />
                  <input placeholder="CVC" />
                </div>
              </div>
            )}

            <div className="sf-recap">
              {items.map((i) => (
                <div key={i.uid} className="sf-recap-line">
                  <span>{i.qty}× {i.name}</span>
                  <span>{eur(i.unitPrice * i.qty)}</span>
                </div>
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
            <p className="sf-confirm-txt">Merci {form.name || ''} ! Votre commande est en préparation.</p>
            <div className="sf-confirm-card">
              <div><span>Retrait</span><strong>{pickupLabel}</strong></div>
              <div><span>Adresse</span><strong>{SF_INFO.address}</strong></div>
              <div><span>Total payé</span><strong>{eur(subtotal)}</strong></div>
            </div>
            <p className="sf-confirm-sms">Un SMS de confirmation a été envoyé au {form.phone || 'votre numéro'}.</p>
            <button className="sf-btn sf-btn-gold" onClick={onClose}>Terminé</button>
          </div>
        )}
      </div>
    </div>
  );
}
