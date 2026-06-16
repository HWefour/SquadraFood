import { useState, useRef, useEffect } from 'react';
import { SF_LEGAL, SF_LEGAL_ORDER } from '../data';
import { Logo } from './Header';

function renderFill(text) {
  const parts = text.split(/(\{[^}]+\})/g);
  return parts.map((p, i) => {
    if (p.startsWith('{') && p.endsWith('}')) {
      return <span key={i} className="sf-fill">{p.slice(1, -1)}</span>;
    }
    return <span key={i}>{p}</span>;
  });
}

export function LegalView({ doc, onChange, onClose }) {
  const d = SF_LEGAL[doc];
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [doc]);

  if (!d) return null;

  return (
    <div className="sf-legal">
      <div className="sf-legal-bar">
        <button className="sf-legal-back" onClick={onClose}>
          <span>←</span> Retour au site
        </button>
        <div className="sf-legal-brand">
          <Logo size={34} /><span>SQUADRA <em>FOOD</em></span>
        </div>
      </div>
      <div className="sf-legal-tabs">
        {SF_LEGAL_ORDER.map((t) => (
          <button
            key={t.id}
            className={'sf-legal-tab' + (doc === t.id ? ' is-on' : '')}
            onClick={() => onChange(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="sf-legal-scroll" ref={scrollRef}>
        <article className="sf-legal-doc">
          <span className="sf-eyebrow">Informations légales</span>
          <h1 className="sf-legal-title">{d.title}</h1>
          <p className="sf-legal-updated">{renderFill(d.updated)}</p>
          <p className="sf-legal-intro">{renderFill(d.intro)}</p>
          {d.sections.map((s, i) => (
            <section key={i} className="sf-legal-section">
              <h2>{s.h}</h2>
              {s.p.map((para, j) => <p key={j}>{renderFill(para)}</p>)}
            </section>
          ))}
          <div className="sf-legal-note">
            <strong>Note :</strong> les éléments <span className="sf-fill">surlignés</span> sont
            des champs à compléter avec les informations officielles de l&apos;entreprise
            (raison sociale, SIRET, RCS, hébergeur, médiateur…).
          </div>
        </article>
      </div>
    </div>
  );
}

export function CookieBanner({ onPolicy }) {
  const [show, setShow] = useState(() => !localStorage.getItem('sf_cookies'));

  if (!show) return null;

  const choose = (val) => { localStorage.setItem('sf_cookies', val); setShow(false); };

  return (
    <div className="sf-cookie">
      <div className="sf-cookie-inner">
        <p className="sf-cookie-txt">
          🍪 Nous utilisons des cookies pour le bon fonctionnement du site et, avec votre accord,
          pour en mesurer l&apos;audience.{' '}
          <button className="sf-cookie-link" onClick={onPolicy}>En savoir plus</button>
        </p>
        <div className="sf-cookie-actions">
          <button className="sf-cookie-btn sf-cookie-ghost" onClick={() => choose('refused')}>Refuser</button>
          <button className="sf-cookie-btn sf-cookie-ghost" onClick={onPolicy}>Personnaliser</button>
          <button className="sf-cookie-btn sf-cookie-accept" onClick={() => choose('accepted')}>Tout accepter</button>
        </div>
      </div>
    </div>
  );
}
