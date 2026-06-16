// ====================== SQUADRA FOOD — APP ======================
const SF_ACCENTS = {
  jaune: ["#FAC012", "#ffd23f", "#d99a00"],
  orange: ["#FF8A1E", "#ffab57", "#e0720a"],
  soleil: ["#F4D03F", "#f9e07a", "#d4af1f"],
};
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": ["#FAC012", "#ffd23f", "#d99a00"],
  "displayFont": "Anton",
  "radius": 24,
  "showBadges": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("sf_cart") || "[]"); } catch { return []; }
  });
  const [modalItem, setModalItem] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [jumpTo, setJumpTo] = useState(null);
  const [active, setActive] = useState("accueil");
  const [legal, setLegal] = useState(null);

  useEffect(() => { localStorage.setItem("sf_cart", JSON.stringify(cart)); }, [cart]);

  // Application des tweaks
  useEffect(() => {
    const r = document.documentElement;
    const acc = Array.isArray(t.accent) ? t.accent : SF_ACCENTS.jaune;
    r.style.setProperty("--gold", acc[0]);
    r.style.setProperty("--gold-2", acc[1] || acc[0]);
    r.style.setProperty("--gold-deep", acc[2] || acc[0]);
    r.style.setProperty("--disp", `'${t.displayFont || "Anton"}', sans-serif`);
    r.style.setProperty("--r-lg", (t.radius ?? 24) + "px");
    r.style.setProperty("--r", Math.round((t.radius ?? 24) * 0.66) + "px");
    document.body.classList.toggle("sf-no-badges", !t.showBadges);
  }, [t]);

  const count = cart.reduce((s, i) => s + i.qty, 0);

  const addToCart = (entry) => {
    setCart((c) => [...c, entry]);
    setCartOpen(true);
  };
  const quickAdd = (item) => addToCart({
    uid: Date.now() + Math.random(), id: item.id, name: item.name, img: item.img,
    unitPrice: item.price, qty: 1, options: [], note: "",
  });
  const changeQty = (uid, d) => setCart((c) => c.map((i) => i.uid === uid ? { ...i, qty: Math.max(1, i.qty + d) } : i));
  const removeItem = (uid) => setCart((c) => c.filter((i) => i.uid !== uid));

  const sectionIds = { accueil: "sec-accueil", carte: "sec-carte", apropos: "sec-apropos", contact: "sec-contact" };
  const onNav = (id, cat) => {
    setActive(id);
    const el = document.getElementById(sectionIds[id]);
    const scroller = document.querySelector(".sf-scroll");
    if (id === "carte" && cat) setJumpTo({ cat, t: Date.now() });
    if (el && scroller) {
      const top = el.offsetTop - (id === "accueil" ? 0 : 70);
      scroller.scrollTo({ top, behavior: "smooth" });
    }
  };

  // suivi de section active au scroll
  useEffect(() => {
    const scroller = document.querySelector(".sf-scroll");
    if (!scroller) return;
    const onScroll = () => {
      const y = scroller.scrollTop + 200;
      let cur = "accueil";
      Object.entries(sectionIds).forEach(([k, v]) => {
        const el = document.getElementById(v);
        if (el && el.offsetTop <= y) cur = k;
      });
      setActive(cur);
    };
    scroller.addEventListener("scroll", onScroll);
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  const goCheckout = () => { setCartOpen(false); setCheckout(true); };

  return (
    <div className="sf-app">
      <Header cartCount={count} onCart={() => setCartOpen(true)} onNav={onNav} active={active} />
      <div className="sf-scroll">
        <div id="sec-accueil"><Hero onNav={onNav} /></div>
        <Marquee />
        <Highlights onNav={onNav} />
        <div id="sec-carte"><MenuView onOpen={setModalItem} onQuickAdd={quickAdd} jumpTo={jumpTo && jumpTo.cat} /></div>
        <div id="sec-apropos"><About /></div>
        <div id="sec-contact"><Footer onLegal={setLegal} /></div>
      </div>

      {/* Barre panier mobile */}
      {count > 0 && !cartOpen && !checkout && !modalItem && (
        <button className="sf-mobile-cart" onClick={() => setCartOpen(true)}>
          <span className="sf-mobile-cart-count">{count}</span>
          <span>Voir le panier</span>
          <span className="sf-mobile-cart-total">{eur(cart.reduce((s, i) => s + i.unitPrice * i.qty, 0))}</span>
        </button>
      )}

      {modalItem && <ProductModal item={modalItem} onClose={() => setModalItem(null)} onAdd={addToCart} />}
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onQty={changeQty} onRemove={removeItem} onCheckout={goCheckout} />
      {checkout && <Checkout items={cart} onClose={() => { setCheckout(false); }} onPlaced={() => setCart([])} />}

      {legal && <LegalView doc={legal} onChange={setLegal} onClose={() => setLegal(null)} />}
      <CookieBanner onPolicy={() => setLegal("cookies")} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Identité" />
        <TweakColor label="Couleur d'accent" value={t.accent}
          options={[SF_ACCENTS.jaune, SF_ACCENTS.orange, SF_ACCENTS.soleil]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakRadio label="Police des titres" value={t.displayFont}
          options={["Anton", "Bebas Neue", "Archivo Black"]}
          onChange={(v) => setTweak("displayFont", v)} />
        <TweakSection label="Style" />
        <TweakSlider label="Arrondi des coins" value={t.radius} min={4} max={28} step={2} unit="px"
          onChange={(v) => setTweak("radius", v)} />
        <TweakToggle label="Badges produits" value={t.showBadges}
          onChange={(v) => setTweak("showBadges", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
