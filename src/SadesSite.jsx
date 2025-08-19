import React, { useEffect } from "react";

export default function SadesSite() {
    // Compact nav on scroll
    useEffect(() => {
        const nav = document.querySelector(".sd-nav");
        const onScroll = () => {
            if (!nav) return;
            nav.classList.toggle("shrink", window.scrollY > 8);
        };
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="sd-root">
            {/* NAV */}
            <header className="sd-nav">
                <nav className="sd-wrap sd-nav-inner">
                    <a href="#home" className="sd-brand" aria-label="Sades home">
                        <div className="sd-mark" />
                        <span className="sd-logo">Sades</span>
                    </a>
                    <div className="sd-links">
                        <a href="#menu" className="sd-link">Menu</a>
                        <a href="#story" className="sd-link">Story</a>
                        <a href="#visit" className="sd-link">Visit</a>
                        <a href="#contact" className="sd-link">Contact</a>
                    </div>
                </nav>
            </header>

            {/* HERO */}
            <section id="home" className="sd-section sd-hero">
                <div className="sd-wrap">
                    <p className="sd-eyebrow">Artisanal Bakehouse</p>
                    <h1 className="sd-h1">Sades</h1>
                    <p className="sd-lead">
                        Hand-crafted pastries and slow-fermented breads. Minimal ingredients. Maximum technique.
                    </p>
                    <div className="sd-cta-row">
                        <a href="#order" className="sd-btn sd-btn--gold" aria-label="Shop Sades">Shop →</a>
                        <a href="#menu" className="sd-btn sd-btn--ghost">View Menu</a>
                    </div>
                </div>
            </section>

            {/* STRIP */}
            <section className="sd-strip">
                <div className="sd-wrap sd-strip-inner">
                    <div className="sd-chip">Naturally leavened</div>
                    <div className="sd-dot" />
                    <div className="sd-chip">Small batch</div>
                    <div className="sd-dot" />
                    <div className="sd-chip">Same-day freshness</div>
                </div>
            </section>

            {/* MENU */}
            <section id="menu" className="sd-section">
                <div className="sd-wrap">
                    <div className="sd-section-head">
                        <h2 className="sd-h2">Menu Highlights</h2>
                        <a href="#order" className="sd-link-quiet">Full menu →</a>
                    </div>
                    <div className="sd-grid">
                        {[
                            { name: "Butter Croissant", desc: "72-hr laminated dough", price: "$4.50", img: "/images/croissant.jpg" },
                            { name: "Almond Croissant", desc: "Frangipane, toasted almonds", price: "$5.75", img: "/images/almond.jpg" },
                            { name: "Pain au Chocolat", desc: "Dark chocolate batons", price: "$5.25", img: "/images/choco.jpg" },
                            { name: "Levain Sourdough", desc: "48-hr ferment, crackle crust", price: "$8.00", img: "/images/levain.jpg" },
                            { name: "Brioche", desc: "Feather-light, enriched", price: "$9.50", img: "/images/brioche.jpg" },
                            { name: "Seasonal Tart", desc: "Market fruit, crème pât", price: "$7.50", img: "/images/tart.jpg" },
                        ].map((i) => (
                            <article key={i.name} className="sd-card">
                                <img className="sd-card-img" src={i.img} alt={i.name} loading="lazy" />
                                <div className="sd-card-row">
                                    <h3 className="sd-card-title">{i.name}</h3>
                                    <span className="sd-price">{i.price}</span>
                                </div>
                                <p className="sd-card-desc">{i.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* STORY */}
            <section id="story" className="sd-section sd-section-alt">
                <div className="sd-wrap sd-split">
                    <div>
                        <h2 className="sd-h2">Time. Technique. Taste.</h2>
                        <p className="sd-copy">
                            We bake with restraint and precision. Thoughtful flours, cultured butter, long ferments, and
                            exacting temperatures. The result is flavor with clarity—subtle, layered, and memorable.
                        </p>
                    </div>
                    <div className="sd-panel" aria-hidden>
                        <div className="sd-panel-art" />
                    </div>
                </div>
            </section>

            {/* VISIT + ORDER */}
            <section id="visit" className="sd-section">
                <div className="sd-wrap sd-columns">
                    <div className="sd-box">
                        <h3 className="sd-h3">Visit</h3>
                        <ul className="sd-list">
                            <li>Mon–Fri · 7:00–18:00</li>
                            <li>Sat–Sun · 8:00–16:00</li>
                            <li>123 Patisserie Ln, Niagara Falls, NY</li>
                        </ul>
                        <a href="#contact" className="sd-link-quiet">Get directions →</a>
                    </div>
                    <div className="sd-box">
                        <h3 className="sd-h3">Pre-order</h3>
                        <p className="sd-copy">Reserve pastries for pickup. Same-day local delivery until 14:00.</p>
                        <a href="#order" className="sd-btn sd-btn--gold">Reserve</a>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="sd-section sd-section-alt">
                <div className="sd-wrap sd-columns">
                    <div className="sd-box">
                        <h3 className="sd-h3">Contact</h3>
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
        </div>
    );
}
