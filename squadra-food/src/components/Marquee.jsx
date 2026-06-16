export function Marquee() {
  const words = ['TACOS GRATINÉ', 'SMASH BURGERS', 'SANDWICHS', 'TEX MEX', 'FAIT MAISON', 'VENDARGUES'];
  const line = [...words, ...words];
  return (
    <div className="sf-marquee">
      <div className="sf-marquee-track">
        {line.map((w, i) => (
          <span key={i} className="sf-marquee-item">
            {w}<i className="sf-marquee-dot">●</i>
          </span>
        ))}
      </div>
    </div>
  );
}
