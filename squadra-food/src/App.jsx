import { useState, useEffect } from 'react';
import './index.css';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Highlights } from './components/Highlights';
import { MenuView } from './components/Menu';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { Checkout } from './components/Checkout';
import { LegalView, CookieBanner } from './components/Legal';
import { eur } from './components/Menu';

export default function App() {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('sf_cart') || '[]'); } catch { return []; }
  });
  const [modalItem, setModalItem] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [jumpTo, setJumpTo] = useState(null);
  const [active, setActive] = useState('accueil');
  const [legal, setLegal] = useState(null);

  useEffect(() => { localStorage.setItem('sf_cart', JSON.stringify(cart)); }, [cart]);

  const count = cart.reduce((s, i) => s + i.qty, 0);

  const addToCart = (entry) => { setCart((c) => [...c, entry]); setCartOpen(true); };
  const quickAdd = (item) => addToCart({
    uid: Date.now() + Math.random(), id: item.id, name: item.name, img: item.img,
    unitPrice: item.price, qty: 1, options: [], note: '',
  });
  const changeQty = (uid, d) =>
    setCart((c) => c.map((i) => i.uid === uid ? { ...i, qty: Math.max(1, i.qty + d) } : i));
  const removeItem = (uid) => setCart((c) => c.filter((i) => i.uid !== uid));

  const sectionIds = { accueil: 'sec-accueil', carte: 'sec-carte', apropos: 'sec-apropos', contact: 'sec-contact' };

  const onNav = (id, cat) => {
    setActive(id);
    const el = document.getElementById(sectionIds[id]);
    const scroller = document.querySelector('.sf-scroll');
    if (id === 'carte' && cat) setJumpTo({ cat, t: Date.now() });
    if (el && scroller) {
      const top = el.offsetTop - (id === 'accueil' ? 0 : 70);
      scroller.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const scroller = document.querySelector('.sf-scroll');
    if (!scroller) return;
    const onScroll = () => {
      const y = scroller.scrollTop + 200;
      let cur = 'accueil';
      Object.entries(sectionIds).forEach(([k, v]) => {
        const el = document.getElementById(v);
        if (el && el.offsetTop <= y) cur = k;
      });
      setActive(cur);
    };
    scroller.addEventListener('scroll', onScroll);
    return () => scroller.removeEventListener('scroll', onScroll);
  }, []);

  const goCheckout = () => { setCartOpen(false); setCheckout(true); };

  return (
    <div className="sf-app">
      <Header cartCount={count} onCart={() => setCartOpen(true)} onNav={onNav} active={active} />
      <div className="sf-scroll">
        <div id="sec-accueil"><Hero onNav={onNav} /></div>
        <Marquee />
        <Highlights onNav={onNav} />
        <div id="sec-carte">
          <MenuView onOpen={setModalItem} onQuickAdd={quickAdd} jumpTo={jumpTo && jumpTo.cat} />
        </div>
        <div id="sec-apropos"><About /></div>
        <div id="sec-contact"><Footer onLegal={setLegal} /></div>
      </div>

      {count > 0 && !cartOpen && !checkout && !modalItem && (
        <button className="sf-mobile-cart" onClick={() => setCartOpen(true)}>
          <span className="sf-mobile-cart-count">{count}</span>
          <span>Voir le panier</span>
          <span className="sf-mobile-cart-total">{eur(cart.reduce((s, i) => s + i.unitPrice * i.qty, 0))}</span>
        </button>
      )}

      {modalItem && (
        <ProductModal item={modalItem} onClose={() => setModalItem(null)} onAdd={addToCart} />
      )}
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)}
        onQty={changeQty} onRemove={removeItem} onCheckout={goCheckout} />
      {checkout && (
        <Checkout items={cart} onClose={() => setCheckout(false)} onPlaced={() => setCart([])} />
      )}

      {legal && <LegalView doc={legal} onChange={setLegal} onClose={() => setLegal(null)} />}
      <CookieBanner onPolicy={() => setLegal('cookies')} />
    </div>
  );
}
