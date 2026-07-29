// Joanne's Journey — Cards & Finance (dedicated page)
// Loaded by cards.html. Reuses window.JJ_DATA as the single source of truth.
const { useState, useEffect } = React;
const { FINANCE_CARDS, FINANCE_TIPS, FINANCE_LINKS, OPTIMIZER_GROUPS } = window.JJ_DATA;

// ---- Top bar (back to home) ----
function CardsTopbar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <a href="index.html" className="brand">
          <span className="glyph">JF</span>
          Joanne's Journey
        </a>
        <nav className="nav-tabs">
          <a href="index.html#destinations">Destinations</a>
          <a href="cards.html" className="active">Cards</a>
          <a href="index.html#apps">Apps</a>
          <a href="index.html#about">About</a>
        </nav>
        <div className="topbar-right">
          <a href="index.html" className="cards-back">← Back to home</a>
        </div>
      </div>
    </div>
  );
}

// ---- Advertiser Disclosure Modal ----
function DisclosureModal() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button className="disclosure-btn" onClick={() => setOpen(true)}>
        * Advertiser Disclosure
      </button>
      {open && (
        <div className="disclosure-overlay" onClick={() => setOpen(false)}>
          <div className="disclosure-modal" onClick={e => e.stopPropagation()}>
            <div className="disclosure-modal-head">
              <span>Advertiser Disclosure</span>
              <button className="disclosure-close" onClick={() => setOpen(false)}>×</button>
            </div>
            <p>This page contains affiliate links. If you apply through one of my links I may earn a commission, at no extra cost to you. Opinions are my own. Card details, rates, and benefits are accurate to the best of my knowledge but can change — always confirm current terms on the issuer’s site before applying.</p>
          </div>
        </div>
      )}
    </>
  );
}

// ---- One "rule I live by" (expandable) ----
function FinTip({ tip, idx }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`fin-tip ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="fin-tip-num">{String(idx + 1).padStart(2, '0')}</div>
      <h4>{tip.title}</h4>
      {!open && tip.short && <p className="fin-tip-short">{tip.short}</p>}
      <p className="fin-tip-body">{tip.body}</p>
      <div className="fin-tip-toggle">{open ? '− less' : '+ more'}</div>
    </div>
  );
}

// ---- Card optimizer ----
function OptimizerOption({ opt, idx, initiallyOpen }) {
  const [open, setOpen] = useState(initiallyOpen);
  return (
    <div className={`co-option ${open ? 'open' : ''}`}>
      <button className="co-option-head" onClick={() => setOpen(!open)} aria-expanded={open}>
        <div className="co-option-head-left">
          <span className="co-option-label">{opt.label}</span>
          <span className="co-option-rate">{opt.rate}</span>
        </div>
        <span className="co-option-chev" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="co-option-body">
          <div className="co-option-pick-row">
            <div className="co-option-pick-eyebrow">Best card</div>
            <div className="co-option-pick">{opt.pick}</div>
          </div>
          <p className="co-option-why">{opt.why}</p>
        </div>
      )}
    </div>
  );
}

function CardOptimizer() {
  const [active, setActive] = useState(OPTIMIZER_GROUPS[0].key);
  const group = OPTIMIZER_GROUPS.find(g => g.key === active);
  return (
    <div className="card-optimizer">
      <div className="co-head">
        <div className="eyebrow">Optimizer</div>
        <h3>Which card should I <em>swipe?</em></h3>
        <p className="co-sub">Pick what you&apos;re buying. I&apos;ll tell you which card in my stack earns the most.</p>
      </div>

      <div className="co-tabs" role="tablist">
        {OPTIMIZER_GROUPS.map(g => (
          <button
            key={g.key}
            role="tab"
            aria-selected={active === g.key}
            className={`co-tab ${active === g.key ? 'on' : ''}`}
            onClick={() => setActive(g.key)}>
            <span className="co-tab-emoji" aria-hidden="true">{g.emoji}</span>
            <span className="co-tab-label">{g.label}</span>
          </button>
        ))}
      </div>

      <div className="co-options" key={group.key}>
        {group.options.map((opt, i) => (
          <OptimizerOption key={i} opt={opt} idx={i} initiallyOpen={i === 0} />
        ))}
      </div>
    </div>
  );
}

// ---- Full page ----
function CardsPage() {
  return (
    <>
      <CardsTopbar />
      <div className="shell" id="top">
        <section className="cards-hero">
          <div className="eyebrow">Cards &amp; finance</div>
          <h1 className="cards-hero-title">How I <em>actually</em> pay for flights.</h1>
          <p className="cards-hero-lede">
            The way I fly half the time is points, lounges, and a multi-card stack.
            Here&apos;s the whole setup — the cards I carry, why each one earns its annual fee,
            the rules I follow, and which card to swipe for what.
          </p>
        </section>

        <DisclosureModal />

        <section className="cards-block">
          <div className="sec-head">
            <div>
              <div className="eyebrow">The stack</div>
              <h2>The cards I <em>carry</em>.</h2>
            </div>
            <div className="ticker">4 CARDS</div>
          </div>
          <div className="finance-cards">
            {FINANCE_CARDS.map((c, i) => (
              <div className="fin-card" key={i} style={{ '--fin-bg': c.color }}>
                <div className="fin-card-head">
                  <div className="fin-badge">{c.badge}</div>
                  <div className="fin-fee">{c.annualFee}{c.annualFee !== 'No fee' ? '/yr' : ''}</div>
                </div>
                <h4 className="fin-name">{c.name}</h4>
                <div className="fin-issuer">{c.issuer}</div>
                <ul className="fin-perks">
                  {c.perks.map((p, j) => {
                    const neg = typeof p === 'object' && p.neg;
                    const text = typeof p === 'object' ? p.text : p;
                    return <li key={j} className={neg ? 'neg' : ''}>{text}</li>;
                  })}
                </ul>
                <p className="fin-why">{c.why}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cards-block">
          <div className="csr-tool">
            <div className="csr-tool-left">
              <div className="eyebrow">Tool</div>
              <h3 className="csr-tool-title">Chase Sapphire Reserve® points calculator</h3>
              <p className="csr-tool-desc">A handy calculator built by a friend — see exactly how many points you'd earn on your spending and what they're worth as travel credits.</p>
              <a className="csr-tool-btn" href="https://www.nextcard.com/calculators/chase-sapphire-reserve-calculator" target="_blank" rel="noopener">
                Open calculator ↗
              </a>
            </div>
            <div className="csr-tool-badge" aria-hidden="true">
              <span>CSR</span>
              <span style={{fontSize:'11px', opacity:.6, letterSpacing:'.12em', textTransform:'uppercase', marginTop:'6px'}}>Points calc</span>
            </div>
          </div>
        </section>

        <section className="cards-block">
          <div className="csr-tool csr-tool--csp">
            <div className="csr-tool-left">
              <div className="eyebrow">News</div>
              <h3 className="csr-tool-title">Chase Sapphire Preferred® is changing</h3>
              <p className="csr-tool-desc">The CSP is getting updated benefits and a new annual fee structure. Here's what's actually changing and whether it's still worth carrying.</p>
              <a className="csr-tool-btn csr-tool-btn--csp" href="https://www.nextcard.com/articles/how-is-my-chase-sapphire-preferred-changing" target="_blank" rel="noopener">
                Read the breakdown ↗
              </a>
            </div>
            <div className="csr-tool-badge csr-tool-badge--csp" aria-hidden="true">
              <span>CSP</span>
              <span style={{fontSize:'11px', opacity:.6, letterSpacing:'.12em', textTransform:'uppercase', marginTop:'6px'}}>Changes</span>
            </div>
          </div>
        </section>

        <section className="cards-block">
          <div className="finance-tips">
            <h3 className="fin-tips-title">Rules I live by</h3>
            <div className="fin-tips-grid">
              {FINANCE_TIPS.map((t, i) => <FinTip tip={t} idx={i} key={i} />)}
            </div>
          </div>
        </section>

        <section className="cards-block">
          <CardOptimizer />
        </section>

        <section className="cards-block">
          <div className="finance-links">
            <div className="fin-links-head">
              <h3 className="fin-tips-title" style={{ margin: 0 }}>Card affiliate links</h3>
              <p className="fin-links-thanks">Thanks for supporting my content — it keeps the site free.</p>
            </div>
            {FINANCE_LINKS.map((l, i) => (
              <a key={i} className="fin-link" href={l.url} target={l.url.startsWith('http') ? '_blank' : undefined} rel="noopener">
                <div>
                  <div className="fin-link-label">{l.label}</div>
                  <div className="fin-link-sub">{l.subtitle}</div>
                </div>
                <span className="fin-link-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

        <div className="cards-foot">
          <a href="index.html" className="cards-foot-back">← Back to Joanne&apos;s Journey</a>
          <a href="https://www.instagram.com/joanneffan/" target="_blank" rel="noopener" className="cards-foot-ig">@joanneffan ↗</a>
        </div>
      </div>
    </>
  );
}

// Export CardsPage for use by app.jsx router (don't auto-render)
Object.assign(window, { CardsPage });

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(CardsPage));
