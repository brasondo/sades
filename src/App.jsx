// src/App.jsx — Sades (Godiva-inspired light luxe)
const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

:root{
  --bg:#FAF7F2;          /* cream */
  --panel:#FFFFFF;        /* white surfaces */
  --ink:#161514;          /* near-black text */
  --muted:#6C6A67;        /* soft grey-brown */
  --border:#E8E2D9;       /* light bone border */
  --cocoa:#3B2A1E;        /* dark cocoa accent */
  --gold:#C9A44B;         /* refined gold */
  --gold-hi:#D9B965;      /* hover gold */
}

*{box-sizing:border-box}
html,body,#root{height:100%}
body{
  margin:0; background:var(--bg); color:var(--ink);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
  -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility;
}
a{color:inherit; text-decoration:none}

.sd-wrap{max-width:1140px; margin:0 auto; padding:0 24px}
.sd-section{padding:96px 0}
.sd-section--tight{padding:64px 0}

/* TYPOGRAPHY */
.sd-serif{font-family: "Cormorant Garamond", Georgia, serif; letter-spacing:.01em}
.sd-eyebrow{ text-transform:uppercase; letter-spacing:.22em; font-size:12px; color:var(--cocoa); opacity:.9}
.sd-h1{font: 600 clamp(40px,6vw,72px)/1.02 "Cormorant Garamond", Georgia, serif; margin:10px 0 12px}
.sd-lead{font-size:18px; color:var(--muted); max-width:72ch}
.sd-h2{font: 600 32px/1.1 "Cormorant Garamond", Georgia, serif; margin:0 0 10px}
.sd-h3{font: 600 20px/1.1 "Cormorant Garamond", Georgia, serif; margin:0 0 8px}

/* NAV (elevated, airy) */
.sd-nav{
  position:sticky; top:0; z-index:50;
  backdrop-filter:saturate(160%) blur(10px);
  background:rgba(250,247,242,.85);
  border-bottom:1px solid var(--border);
}
.sd-nav-inner{height:68px; display:flex; align-items:center; justify-content:space-between}
.sd-brand{display:flex; align-items:center; gap:12px}
.sd-mark{
  width:26px; height:26px; border-radius:8px;
  background:conic-gradient(from 140deg, var(--gold), #b08f43 40%, var(--gold));
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.5);
}
.sd-logo{font:600 18px/1 Inter, system-ui}

/* LINKS */
.sd-links{display:flex; gap:24px}
.sd-link{color:var(--muted); position:relative}
.sd-link::after{
  content:""; position:absolute; left:0; right:0; bottom:-6px; height:1px;
  background:linear-gradient(90deg, transparent, var(--gold), transparent);
  transform:scaleX(0); transform-origin:center; transition:transform .25s ease;
}
.sd-link:hover{color:var(--ink)}
.sd-link:hover::after{transform:scaleX(1)}

/* HERO */
.sd-hero .sd-wrap{display:grid; grid-template-columns:1.1fr .9fr; gap:32px; align-items:center}
.sd-hero-visual{
  border:1px solid var(--border); border-radius:20px; overflow:hidden; background:var(--panel);
  box-shadow: 0 20px 40px rgba(0,0,0,.05);
}
.sd-hero-art{
  aspect-ratio:4/3;
  background:
    radial-gradient(900px 360px at -5% -20%, rgba(201,164,75,.18), transparent 45%),
    radial-gradient(800px 480px at 110% 30%, rgba(59,42,30,.22), transparent 55%),
    linear-gradient(135deg, #fffdf8, #f5efe5);
}

/* PROMO STRIP */
.sd-strip{border-top:1px solid var(--border); border-bottom:1px solid var(--border); background:#FFFDF8; padding:14px 0}
.sd-strip-inner{display:flex; align-items:center; justify-content:center; gap:14px; flex-wrap:wrap}
.sd-chip{
  padding:7px 12px; border:1px solid var(--border); border-radius:999px; font-size:12px;
  color:var(--muted); background:var(--panel)
}
.sd-dot{width:4px; height:4px; border-radius:999px; background:#d9d2c8}

/* BUTTONS */
.sd-cta{display:flex; gap:12px; flex-wrap:wrap; margin-top:24px}
.sd-btn{
  appearance:none; padding:12px 18px; border-radius:12px; font-weight:600; font-size:14px;
  display:inline-flex; align-items:center; gap:10px; transition:.2s ease; border:1px solid var(--border); background:var(--panel);
}
.sd-btn:hover{transform:translateY(-1px); border-color:#ddd4c7}
.sd-btn--gold{background:linear-gradient(180deg, var(--gold), var(--gold-hi)); color:#0f0f0f; border:1px solid #b99646}
.sd-btn--gold:hover{filter:brightness(1.06)}
.sd-btn--ghost{background:transparent}

/* GRID / CARDS (products) */
.sd-head{display:flex; align-items:flex-end; justify-content:space-between; gap:16px; margin-bottom:22px}
.sd-grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:16px}
.sd-card{
  background:var(--panel); border:1px solid var(--border); border-radius:18px; overflow:hidden; transition:.25s ease;
  box-shadow: 0 10px 24px rgba(0,0,0,.06);
}
.sd-card:hover{transform:translateY(-2px)}
.sd-card-img{aspect-ratio: 4/3; background:linear-gradient(135deg,#f6f1e7,#efe6d7)}
.sd-card-body{padding:14px 16px}
.sd-card-row{display:flex; align-items:center; justify-content:space-between; margin-bottom:6px}
.sd-card-title{margin:0; font-weight:600}
.sd-price{font-weight:700; color:var(--cocoa)}
.sd-card-desc{margin:0; color:var(--muted); font-size:14px}

/* STORY SPLIT */
.sd-split{display:grid; grid-template-columns:1.1fr .9fr; gap:28px; align-items:center}
.sd-copy{color:var(--muted); font-size:16px; max-width:62ch}
.sd-panel{border:1px solid var(--border); border-radius:20px; overflow:hidden; background:var(--panel)}
.sd-panel-art{aspect-ratio:4/3; background:
  radial-gradient(900px 360px at -5% -20%, rgba(201,164,75,.18), transparent 45%),
  radial-gradient(800px 480px at 110% 30%, rgba(59,42,30,.22), transparent 55%),
  linear-gradient(135deg, #fffdf8, #f5efe5);
}

/* COLUMNS / BOXES */
.sd-columns{display:grid; grid-template-columns:1fr 1fr; gap:18px}
.sd-box{background:var(--panel); border:1px solid var(--border); border-radius:18px; padding:18px}

/* FORM */
.sd-form{display:grid; grid-template-columns:1fr 1fr; gap:12px; align-content:start}
.sd-field{display:flex; flex-direction:column; gap:6px}
.sd-field span{font-size:12px; color:var(--muted)}
.sd-input{
  appearance:none; border:1px solid var(--border); border-radius:12px; padding:12px; background:#fff; color:var(--ink); font:inherit
}
.sd-input:focus{outline:2px solid var(--gold); outline-offset:2px}
.sd-textarea{resize:vertical}
.sd-form .sd-btn{grid-column:span 2}

/* FOOTER */
.sd-footer{border-top:1px solid var(--border); padding:28px 0; background: #FFFCF5}
.sd-footer-inner{display:flex; align-items:center; justify-content:space-between; color:var(--muted)}
.sd-footer-links{display:flex; gap:16px}
.sd-footer a{color:inherit}
.sd-footer a:hover{color:var(--ink)}

/* RESPONSIVE */
@media (max-width: 1000px){
  .sd-hero .sd-wrap, .sd-split{grid-template-columns:1fr}
  .sd-columns{grid-template-columns:1fr}
  .sd-form{grid-template-columns:1fr}
  .sd-form .sd-btn{grid-column:span 1}
}
`;

function Chip({ children }) {
  return <div className="sd-chip">{children}</div>;
}
function MenuCard({ name, desc, price }) {
  return (
    <article className="sd-card">
      <div className="sd-card-img" />
      <div className="sd-card-body">
        <div className="sd-card-row">
          <h3 className="sd-card-title">{name}</h3>
          <span className="sd-price">{price}</span>
        </div>
        <p className="sd-card-desc">{desc}</p>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <>
      <style>{css}</style>

      {/* NAV */}
      <header className="sd-nav">
        <div className="sd-wrap sd-nav-inner">
          <a className="sd-brand" href="#home" aria-label="Sades home">
            <div className="sd-mark" />
            <span className="sd-logo">Sades</span>
          </a>
          <div className="sd-links">
            <a className="sd-link" href="#menu">Menu</a>
            <a className="sd-link" href="#story">Story</a>
            <a className="sd-link" href="#visit">Visit</a>
            <a className="sd-link" href="#contact">Contact</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="sd-section sd-hero">
        <div className="sd-wrap">
          <div>
            <p className="sd-eyebrow">Since MMXXV</p>
            <h1 className="sd-h1 sd-serif">Sades</h1>
            <p className="sd-lead">
              Hand-crafted pastries and slow-fermented breads. Minimal ingredients. Maximum technique.
            </p>
            <div className="sd-cta">
              <a className="sd-btn sd-btn--gold" href="#order">Shop &nbsp;→</a>
              <a className="sd-btn sd-btn--ghost" href="#menu">View Menu</a>
            </div>
          </div>
          <div className="sd-hero-visual" aria-hidden>
            <div className="sd-hero-art" />
          </div>
        </div>
      </section>

      {/* STRIP */}
      <section className="sd-strip">
        <div className="sd-wrap sd-strip-inner">
          <Chip>Naturally leavened</Chip>
          <div className="sd-dot" />
          <Chip>Small batch</Chip>
          <div className="sd-dot" />
          <Chip>Same-day</Chip>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="sd-section">
        <div className="sd-wrap">
          <div className="sd-head">
            <h2 className="sd-h2 sd-serif">Menu Highlights</h2>
            <a className="sd-link" href="#order">Full menu →</a>
          </div>
          <div className="sd-grid">
            <MenuCard name="Butter Croissant" desc="72-hr laminated dough" price="$4.50" />
            <MenuCard name="Almond Croissant" desc="Frangipane, toasted almonds" price="$5.75" />
            <MenuCard name="Pain au Chocolat" desc="Dark chocolate batons" price="$5.25" />
            <MenuCard name="Levain Sourdough" desc="48-hr ferment, crackle crust" price="$8.00" />
            <MenuCard name="Brioche" desc="Feather-light, enriched" price="$9.50" />
            <MenuCard name="Seasonal Tart" desc="Market fruit, crème pât" price="$7.50" />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="sd-section sd-section--tight">
        <div className="sd-wrap sd-split">
          <div>
            <h2 className="sd-h2 sd-serif">Time. Technique. Taste.</h2>
            <p className="sd-lead" style={{ margin: 0 }}>
              We bake with restraint and precision—thoughtful flours, cultured butter, long ferments,
              exacting temperatures. The result is clarity of flavor: subtle, layered, memorable.
            </p>
          </div>
          <div className="sd-panel" aria-hidden>
            <div className="sd-panel-art" />
          </div>
        </div>
      </section>

      {/* VISIT / PREORDER */}
      <section id="visit" className="sd-section sd-section--tight">
        <div className="sd-wrap sd-columns">
          <div className="sd-box">
            <h3 className="sd-h3 sd-serif">Visit</h3>
            <ul className="sd-list">
              <li>Mon–Fri · 7:00–18:00</li>
              <li>Sat–Sun · 8:00–16:00</li>
              <li>123 Patisserie Ln, Niagara Falls, NY</li>
            </ul>
            <a className="sd-link" href="#contact">Get directions →</a>
          </div>
          <div className="sd-box">
            <h3 className="sd-h3 sd-serif">Pre-order</h3>
            <p className="sd-lead" style={{ fontSize: 16 }}>
              Reserve pastries for pickup. Same-day local delivery until 14:00.
            </p>
            <a className="sd-btn sd-btn--gold" href="#order">Reserve</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="sd-section sd-section--tight">
        <div className="sd-wrap sd-columns">
          <div className="sd-box">
            <h3 className="sd-h3 sd-serif">Contact</h3>
            <ul className="sd-list">
              <li>hello@sades.com</li>
              <li>(716) 555-0123</li>
              <li>@sades.bakehouse</li>
            </ul>
          </div>
          <form className="sd-box sd-form" onSubmit={(e) => e.preventDefault()}>
            <label className="sd-field">
              <span>Name</span>
              <input className="sd-input" placeholder="Your name" />
            </label>
            <label className="sd-field">
              <span>Email</span>
              <input className="sd-input" type="email" placeholder="you@example.com" />
            </label>
            <label className="sd-field">
              <span>Message</span>
              <textarea className="sd-input sd-textarea" rows={4} placeholder="How can we help?" />
            </label>
            <button className="sd-btn sd-btn--ghost" type="submit">Send</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="sd-footer">
        <div className="sd-wrap sd-footer-inner">
          <span>© {new Date().getFullYear()} Sades</span>
          <div className="sd-footer-links">
            <a href="#menu">Menu</a>
            <a href="#visit">Visit</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
