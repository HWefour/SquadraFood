import { useState, useEffect } from 'react';
import { SF_ASSETS } from '../data';

export function Logo({ size = 46 }) {
  return (
    <img src={SF_ASSETS.logo} alt="Squadra Food" className="sf-logo" style={{ width: size, height: size }} />
  );
}

export function Header({ cartCount, onCart, onNav, active }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.querySelector('.sf-scroll');
    const onScroll = () => setScrolled((root ? root.scrollTop : window.scrollY) > 20);
    const el = root || window;
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'carte', label: 'La Carte' },
    { id: 'apropos', label: 'Le Concept' },
    { id: 'contact', label: 'Infos & Accès' },
  ];

  return (
    <header className={'sf-header' + (scrolled ? ' is-scrolled' : '')}>
      <div className="sf-header-inner">
        <button className="sf-brand" onClick={() => onNav('accueil')}>
          <Logo size={44} />
          <span className="sf-brand-txt">SQUADRA <em>FOOD</em></span>
        </button>
        <nav className="sf-nav">
          {links.map((l) => (
            <button
              key={l.id}
              className={'sf-nav-link' + (active === l.id ? ' is-active' : '')}
              onClick={() => onNav(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>
        <div className="sf-header-actions">
          <button className="sf-order-btn" onClick={() => onNav('carte')}>Commander</button>
          <button className="sf-cart-btn" onClick={onCart} aria-label="Panier">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cartCount > 0 && <span className="sf-cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
