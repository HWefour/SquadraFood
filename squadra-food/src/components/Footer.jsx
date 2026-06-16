import { Logo } from './Header';
import { SF_INFO, SF_LEGAL_ORDER } from '../data';

export function Footer({ onLegal }) {
  return (
    <footer className="sf-footer">
      <div className="sf-footer-grid">
        <div className="sf-footer-brand">
          <Logo size={64} />
          <p className="sf-footer-slogan">{SF_INFO.slogan}</p>
          <div className="sf-socials">
            {['Instagram', 'Facebook', 'TikTok'].map((s) => (
              <span key={s} className="sf-social">{s}</span>
            ))}
          </div>
        </div>
        <div className="sf-footer-col">
          <h5>Nous trouver</h5>
          <p>{SF_INFO.address}</p>
          <p>{SF_INFO.phone}</p>
          <div className="sf-map-placeholder">PLAN / GOOGLE MAPS</div>
        </div>
        <div className="sf-footer-col">
          <h5>Horaires</h5>
          <ul className="sf-hours">
            {SF_INFO.hours.map((h, i) => (
              <li key={i}><span>{h.d}</span><strong>{h.h}</strong></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sf-footer-bottom">
        <span>© {new Date().getFullYear()} Squadra Food — Tous droits réservés</span>
        <nav className="sf-footer-legal">
          {SF_LEGAL_ORDER.map((t) => (
            <button key={t.id} onClick={() => onLegal && onLegal(t.id)}>{t.label}</button>
          ))}
        </nav>
      </div>
      <div className="sf-footer-built-row">
        <span className="sf-footer-built">Maquette site WordPress · Elementor · WooCommerce · Orderable</span>
      </div>
    </footer>
  );
}
