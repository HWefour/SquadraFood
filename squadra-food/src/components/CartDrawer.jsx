import { eur } from './Menu';

export function CartDrawer({ open, items, onClose, onQty, onRemove, onCheckout }) {
  const subtotal = items.reduce((s, i) => s + i.unitPrice * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <>
      <div className={'sf-drawer-veil' + (open ? ' is-open' : '')} onClick={onClose} />
      <aside className={'sf-drawer' + (open ? ' is-open' : '')} aria-hidden={!open}>
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
                  {i.options.length > 0 && <p className="sf-cart-opts">{i.options.join(' · ')}</p>}
                  {i.note && <p className="sf-cart-note">&quot;{i.note}&quot;</p>}
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
