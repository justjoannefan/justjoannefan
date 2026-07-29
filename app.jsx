// Joanne's Journey — main React app
const { useState, useEffect, useMemo, useRef } = React;
const { FLIGHTS, AIRLINE_COLORS, DESTINATIONS, STATS, COUNTRIES, LOUNGES, CARDS, APPS, YEAR_SUMMARY, YEAR_COUNTRIES, FINANCE_CARDS, FINANCE_TIPS, FINANCE_LINKS, OPTIMIZER_GROUPS } = window.JJ_DATA;

// ===================== Topbar =====================
function Topbar({ active, onNav }) {
  const [time, setTime] = useState(() => formatTime(new Date()));
  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(id);
  }, []);
  function formatTime(d) {
    return d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' UTC' + (d.getTimezoneOffset() <= 0 ? '+' : '-') + (Math.abs(d.getTimezoneOffset())/60).toFixed(0);
  }
  const tabs = [
    { id: 'map', label: 'Passport' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'finance', label: 'Cards' },
    { id: 'apps', label: 'Apps' },
    { id: 'about', label: 'About' },
  ];
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <a href="#top" className="brand" onClick={(e) => { e.preventDefault(); onNav('top'); }}>
          <span className="glyph">JF</span>
          Joanne's Journey
        </a>
        <nav className="nav-tabs">
          {tabs.map(t => (
            <a key={t.id} href={`#${t.id}`} className={active === t.id ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); onNav(t.id); }}>{t.label}</a>
          ))}
        </nav>
        <div className="topbar-right">
          <div className="live-clock"><span className="live-dot"></span>{time}</div>
        </div>
      </div>
    </div>
  );
}

// ===================== Boarding Pass (hero) =====================
function BoardingPass({ flight }) {
  return (
    <div className="pass">
      <div className="pass-perf" />
      <div className="pass-perf right" />
      <div className="pass-header">
        <div className="pass-flight">FLT {flight.flt} · {flight.date.toUpperCase()}</div>
        <div className="pass-status">ARRIVED</div>
      </div>
      <div className="pass-body">
        <div className="pass-airport from">
          <div className="code">{flight.from}</div>
          <div className="city">{flight.fromCity}</div>
        </div>
        <div className="pass-arc">
          <svg className="arc-svg" viewBox="0 0 88 28" fill="none">
            <path d="M 4 22 Q 44 -8 84 22" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3"/>
            <circle cx="4" cy="22" r="2" fill="currentColor" />
            <circle cx="84" cy="22" r="2" fill="currentColor" />
            <g transform="translate(44 7) rotate(90)">
              <path d="M 0 -6 L 5 4 L 0 1 L -5 4 Z" fill="var(--accent)" />
            </g>
          </svg>
          NON-STOP
        </div>
        <div className="pass-airport to">
          <div className="code">{flight.to}</div>
          <div className="city">{flight.toCity}</div>
        </div>
      </div>
      <div className="pass-footer">
        <div><div className="label">Passenger</div><div className="value">FAN/JOANNE</div></div>
        <div><div className="label">Carrier</div><div className="value">{flight.airline.toUpperCase()}</div></div>
        <div><div className="label">Seat</div><div className="value">3A</div></div>
        <div><div className="label">Class</div><div className="value">ECON · WINDOW</div></div>
      </div>
    </div>
  );
}

// ===================== Hero =====================
function Hero({ featured }) {
  return (
    <section id="top" className="hero sticker-zone">
      <img src="assets/stickers/capybara.png" alt="" className="sticker hero-sticker-1"
           style={{ '--sz': '140px', '--rot': '-2deg', top: '-20px', right: '40%' }} />
      <img src="assets/stickers/best-day.png" alt="" className="sticker hero-sticker-2"
           style={{ '--sz': '115px', '--rot': '6deg', bottom: '-30px', right: '-30px' }} />
      <div>
        <div className="eyebrow">A travel log · Allergy-safe eats · Hidden over Hype</div>
        <h1 className="hero-title">
          Journo entry from <em>seat&nbsp;3A.</em>
        </h1>
        <p className="hero-lede">
          Hi, I'm Joanne — frequent flyer with 37+ food allergies. This site is my
          archive of the restaurants and hidden spots that actually let me eat (and the
          hyped places I had to skip). Sorted by city. All edited from the airport lounge. :)
        </p>
        <div className="hero-meta">
          <div><b>16</b>Countries logged</div>
          <div><b>3A</b>Seat preference</div>
          <div><b>37+</b>Food allergies</div>
          <div><b>23</b>Age</div>
        </div>
      </div>
      <BoardingPass flight={featured} />
    </section>
  );
}

// ===================== Stats =====================
function StatsStrip() {
  return (
    <section className="stats scroll-in" aria-label="Travel stats">
      {STATS.map((s, i) => (
        <div className="stat" key={i}>
          <div className="num">{s.num}{s.suffix && <small>{s.suffix}</small>}</div>
          <div className="label">{s.label}</div>
          <div className="delta">{s.delta}</div>
        </div>
      ))}
    </section>
  );
}

// ===================== Destinations grid =====================
function DestinationsGrid() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(false);
  const COLLAPSED_COUNT = 6;
  const countries = ['all', 'Taiwan', 'South Korea', 'Japan', 'USA', 'Thailand', 'Europe'];
  const filtered = useMemo(() => {
    let arr = DESTINATIONS;
    if (filter !== 'all') arr = arr.filter(d => d.country === filter);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      arr = arr.filter(d =>
        d.name.toLowerCase().includes(q) ||
        (d.country || '').toLowerCase().includes(q) ||
        (d.sub || '').toLowerCase().includes(q) ||
        (d.summary || '').toLowerCase().includes(q) ||
        (d.vibe || []).some(v => v.toLowerCase().includes(q))
      );
    }
    return arr;
  }, [filter, search]);
  const isFiltering = filter !== 'all' || search.trim().length > 0;
  const visible = (showAll || isFiltering) ? filtered : filtered.slice(0, COLLAPSED_COUNT);
  const hiddenCount = filtered.length - visible.length;

  return (
    <section id="destinations" className="sticker-zone">
      <img src="assets/stickers/foodie.png" alt="" className="sticker scroll-in"
           style={{ '--sz': '120px', '--rot': '-2deg', top: '170px', right: '-30px' }} />
      <div className="sec-head scroll-in">
        <div>
          <div className="eyebrow">02 — Destinations</div>
          <h2>Where I&apos;ve <em>actually</em> eaten well.</h2>
        </div>
        <div className="filter-row">
          {countries.map(c => (
            <button key={c}
                    className={`chip ${filter === c ? 'on' : ''}`}
                    onClick={() => setFilter(c)}>{c === 'all' ? 'All cities' : c}</button>
          ))}
        </div>
      </div>

      <p className="dest-blurb">
        Tap any city to open the full guide — restaurants safe for nut / seafood / dairy
        allergies, the hyped spots I had to skip, plus the hidden gems worth your one meal a day.
      </p>

      <div className="search-row">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input type="text" value={search} placeholder="Search a city, neighborhood, or vibe (try 'soup curry', 'Big Sur', 'allergy-aware')..."
               onChange={e => setSearch(e.target.value)} />
        {search && <button className="kbd" onClick={() => setSearch('')} style={{ background: 'transparent', cursor: 'pointer' }}>Clear</button>}
      </div>

      <div className="destinations-grid scroll-stagger scroll-in">
        {filtered.length === 0 ? (
          <div className="search-empty" style={{ gridColumn: '1 / -1' }}>
            <div className="se-emoji">✈️</div>
            No destinations match &ldquo;{search}&rdquo; yet — the world is wide. Try clearing the search or filter.
          </div>
        ) : visible.map(d => {
          const pub = !!d.published;
          const El = pub ? 'a' : 'div';
          const props = pub ? { href: `destinations/${d.slug}.html` } : { 'aria-disabled': true };
          return (
            <El key={d.slug} className={`dest-card ${pub ? '' : 'is-locked'}`}
                style={{ '--card-accent': d.color }} {...props}>
              <div className="dest-card-top">
                <div className="dest-code">
                  <span className="dest-flag">{d.flag}</span>
                  <span className="dest-iata">{d.code}</span>
                </div>
                <div className="dest-meta">
                  <span>{d.visits} visit{d.visits > 1 ? 's' : ''}</span>
                  <span>Last · {d.lastVisit}</span>
                </div>
              </div>
              <div className="dest-card-body">
                <h3>{d.name}</h3>
                <div className="dest-country">{d.country}{d.sub ? <span className="dest-sub"> · {d.sub}</span> : null}</div>
                <p>{d.summary}</p>
              </div>
              <div className="dest-card-foot">
                <div className="vibe-row">
                  {d.vibe.slice(0, 3).map(v => (
                    <span className="vibe-tag" key={v}>{v}</span>
                  ))}
                </div>
                <span className="dest-arrow" aria-hidden="true">→</span>
              </div>
              {!pub && (
                <div className="dest-lock" aria-label="Coming soon">
                  <div className="dest-lock-badge">
                    <span className="dl-icon">🔒</span>
                    <span className="dl-label">Coming soon</span>
                  </div>
                  <div className="dest-lock-sub">Guide in progress</div>
                </div>
              )}
            </El>
          );
        })}
      </div>

      {!isFiltering && hiddenCount > 0 && (
        <div className="expand-row">
          <button className="expand-btn" onClick={() => setShowAll(true)}>
            Show all {filtered.length} destinations
            <span className="expand-count">+{hiddenCount} more</span>
          </button>
        </div>
      )}
      {!isFiltering && showAll && (
        <div className="expand-row">
          <button className="expand-btn collapse" onClick={() => setShowAll(false)}>
            Show fewer ↑
          </button>
        </div>
      )}
    </section>
  );
}

// ===================== Flight Log (Flighty-style) =====================
function FlightLog() {
  const [tab, setTab] = useState('All-Time');
  const [sort, setSort] = useState('Date');

  const years = useMemo(() => {
    const ys = Array.from(new Set(FLIGHTS.map(f => f.year))).sort((a, b) => b - a);
    return ['All-Time', ...ys];
  }, []);

  const visible = useMemo(() => {
    if (tab === 'All-Time') return FLIGHTS;
    return FLIGHTS.filter(f => String(f.year) === String(tab));
  }, [tab]);

  // Group by year for headers
  const grouped = useMemo(() => {
    const map = {};
    visible.forEach(f => {
      const y = f.year;
      if (!map[y]) map[y] = [];
      map[y].push(f);
    });
    return Object.entries(map).sort((a, b) => b[0] - a[0]);
  }, [visible]);

  return (
    <section id="flights">
      <div className="sec-head">
        <div>
          <div className="eyebrow">02 — Flight log</div>
          <h2><em>Passport</em>, year by year.</h2>
        </div>
        <div className="filter-row">
          {years.map(y => (
            <button key={y}
                    className={`chip ${tab === y ? 'on' : ''}`}
                    onClick={() => setTab(y)}>{y}</button>
          ))}
        </div>
      </div>

      <div className="flightlog">
        <div className="fl-toolbar">
          <div className="fl-sort">
            {['Date', 'From', 'To', 'Airline'].map(s => (
              <button key={s}
                      className={`fl-sort-btn ${sort === s ? 'on' : ''}`}
                      onClick={() => setSort(s)}>
                {s}{sort === s && <span className="sort-arrow"> ↓</span>}
              </button>
            ))}
          </div>
        </div>

        {grouped.map(([year, flights]) => (
          <React.Fragment key={year}>
            <div className="fl-year">
              <div className="fl-year-num">{year}</div>
              <div className="fl-year-count">{flights.length} FLIGHTS</div>
            </div>
            {flights.map((f, i) => (
              <FlightRow key={`${f.flt}-${f.date}-${i}`} flight={f} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function FlightRow({ flight }) {
  const color = AIRLINE_COLORS[flight.airline] || '#888';
  // Find the destination this flight arrives at; clicking opens that city page
  const dest = DESTINATIONS.find(d => d.name.toLowerCase() === flight.toCity.toLowerCase()
                                  || d.code === flight.to);
  const link = dest ? `destinations/${dest.slug}.html` : null;
  const RowEl = link ? 'a' : 'div';
  const props = link ? { href: link } : {};
  return (
    <RowEl className="fl-row" {...props}>
      <div className="fl-airline-chip" style={{ background: color }}>
        <span>{flight.airline.split(' ').map(w => w[0]).join('').slice(0, 2)}</span>
      </div>
      <div className="fl-main">
        <div className="fl-meta">
          <span className="fl-flt">{flight.flt}</span>
          <span className="fl-codes">{flight.from}</span>
          <span className="fl-arrow">→</span>
          <span className="fl-codes">{flight.to}</span>
        </div>
        <div className="fl-cities">
          <span className="fl-city">{flight.fromCity}</span>
          <span className="fl-to"> to </span>
          <span className="fl-city">{flight.toCity}</span>
          {dest && <span className="fl-open">↗ guide</span>}
        </div>
      </div>
      <div className="fl-date">{flight.date}</div>
    </RowEl>
  );
}

// ===================== Year Pills =====================
function YearPills() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <div className="year-pills">
        {YEAR_SUMMARY.map(y => (
          <button
            key={y.year}
            className={`year-pill ${open === y.year ? 'on' : ''}`}
            onClick={() => setOpen(open === y.year ? null : y.year)}>
            <span>{y.year}</span>
            <span className="yp-count">{y.flights} flt · {y.countries} ctry</span>
          </button>
        ))}
      </div>
      {open && (
        <div className="year-expand" key={open}>
          <div className="year-expand-head">
            <div className="year-expand-year">{open}</div>
            <div className="year-expand-stats">
              {YEAR_SUMMARY.find(y => y.year === open).flights} flights · {YEAR_COUNTRIES[open].length} countries · {YEAR_SUMMARY.find(y => y.year === open).miles} miles
            </div>
          </div>
          <div className="year-flag-grid">
            {YEAR_COUNTRIES[open].map(c => (
              <div className="year-flag-chip" key={c.code}>
                <span className="yfc-flag">{c.flag}</span>
                <span className="yfc-name">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

// ===================== Passport (Flighty map image + year aggregates) =====================
function WorldMap() {
  return (
    <section id="map" className="sticker-zone">
      <img src="assets/stickers/photo-dump.png" alt="" className="sticker scroll-in"
           style={{ '--sz': '115px', '--rot': '8deg', top: '80px', right: '-30px' }} />
      <div className="sec-head scroll-in">
        <div>
          <div className="eyebrow">01 — Passport</div>
          <h2>Every <em>line</em> drawn so far.</h2>
        </div>
        <div className="ticker">FLIGHTY PASSPORT · ISSUED MAY 26</div>
      </div>

      <div className="passport-wrap scroll-in">
        <div className="passport-card">
          <img src="assets/flighty-passport.png" alt="Joanne's flight map — 105 flights, 154,708 miles, 46 airports across 16 countries" />
          <div className="passport-corner">REF · 105 FLT · 154,708 MI · 46 AP</div>
        </div>

        <div className="passport-side">
          <h3>The receipts</h3>
          <p className="passport-blurb">
            Auto-logged from every boarding pass I've scanned since January 2023.
            Sixteen countries and counting — and somehow only fourteen days of my life
            actually spent in the air.
          </p>
          <p className="passport-edit">
            <span className="edit-badge">edit — 2026</span>
            I actually officially started my solo travels in 2017 — went to Korea alone at 19,
            and in 2022 I did a month-long backpacking trip through Europe. Didn't log either
            into Flighty until way too long after. Haha.
          </p>

          <div className="passport-stats">
            <div><span className="ps-num">16</span><span className="ps-lbl">Countries</span></div>
            <div><span className="ps-num">105</span><span className="ps-lbl">Flights</span></div>
            <div><span className="ps-num">32</span><span className="ps-lbl">Airlines</span></div>
            <div><span className="ps-num">46</span><span className="ps-lbl">Airports</span></div>
          </div>

          <h3 style={{ marginTop: 22 }}>Stamped passports</h3>
          <div className="country-grid">
            {COUNTRIES.map(c => (
              <div className="country-chip" key={c.code} title={c.name}>
                <span className="cflag">{c.flag}</span>
                <span className="ccode">{c.code}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="year-summary">
        <div className="year-summary-head">
          <div className="eyebrow">Year by year</div>
          <div className="ticker">Click any year to see flags</div>
        </div>
        <YearPills />
      </div>
    </section>
  );
}

// ===================== Finance / Credit Cards (homepage preview) =====================
function FinancePreview() {
  return (
    <section id="finance" className="sticker-zone">
      <img src="assets/stickers/shopping.png" alt="" className="sticker scroll-in"
           style={{ '--sz': '115px', '--rot': '3deg', top: '-70px', right: '20px' }} />
      <div className="sec-head scroll-in">
        <div>
          <div className="eyebrow">03 — Cards &amp; finance</div>
          <h2>How I <em>actually</em> pay for flights.</h2>
        </div>
        <div className="ticker">POINTS · LOUNGES · BIG TIPS</div>
      </div>

      <p className="dest-blurb">
        The way I fly half the time is points, lounges, and a multi-card stack. These are the cards I carry —
        tap through for the full breakdown of why each earns its fee, the rules I follow, and which card to swipe for what.
      </p>

      <div className="fin-preview-row scroll-in">
        {FINANCE_CARDS.map((c, i) => (
          <a className="fin-preview-card" key={i} href="cards.html" style={{ '--fin-bg': c.color }}>
            <div className="fin-preview-badge">{c.badge}</div>
            <div className="fin-preview-name">{c.name}</div>
            <div className="fin-preview-fee">{c.annualFee}{c.annualFee !== 'No fee' ? '/yr' : ''}</div>
          </a>
        ))}
      </div>

      <a className="fin-preview-cta scroll-in" href="cards.html">
        See my full card breakdown
        <span aria-hidden="true">→</span>
      </a>

      <p className="advertiser-disclosure" style={{fontSize:'11px', cursor:'pointer'}} onClick={() => {
        const d = document.getElementById('fin-disclosure-modal');
        if (d) d.style.display = 'flex';
      }}>
        * Advertiser Disclosure (tap to read)
      </p>
      <div id="fin-disclosure-modal" style={{display:'none', position:'fixed', inset:0, background:'rgba(0,0,0,.65)', alignItems:'center', justifyContent:'center', zIndex:100, backdropFilter:'blur(4px)'}} onClick={(e) => { if(e.target.id==='fin-disclosure-modal') e.target.style.display='none'; }}>
        <div style={{background:'var(--panel)', border:'1px solid var(--line)', borderRadius:'16px', padding:'28px 32px', maxWidth:'480px', width:'calc(100% - 40px)'}}>
          <div style={{display:'flex', justifyContent:'space-between', marginBottom:'14px', fontFamily:'var(--font-mono)', fontSize:'12px', letterSpacing:'.12em', textTransform:'uppercase', color:'var(--text-dim)'}}>
            <span>Advertiser Disclosure</span>
            <button style={{background:'transparent', border:'none', cursor:'pointer', fontSize:'20px', color:'var(--muted)'}} onClick={() => document.getElementById('fin-disclosure-modal').style.display='none'}>&times;</button>
          </div>
          <p style={{fontSize:'14px', lineHeight:'1.65', color:'var(--text-dim)', margin:0}}>The links below are affiliate links. If you apply through one of mine I may earn a commission, at no extra cost to you. Opinions are my own.</p>
        </div>
      </div>

      <div className="finance-links scroll-in">
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
  );
}

// ===================== Substack promo =====================
function SubstackPromo() {
  return (
    <section style={{background:'#0d1014',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'22px 26px',maxWidth:'640px',margin:'32px auto',color:'#e8e6e0',fontFamily:'system-ui,sans-serif'}}>
      <div style={{fontFamily:"ui-monospace,'SF Mono',Menlo,monospace",fontSize:'11px',letterSpacing:'0.5px',color:'#8a8a85',textTransform:'uppercase',marginBottom:'10px'}}>Now boarding · The Allergy Table</div>
      <p style={{fontFamily:"Georgia,'Times New Roman',serif",fontStyle:'italic',fontSize:'18px',margin:'0 0 10px'}}>A living guide to eating safely in the cities I keep going back to.</p>
      <div style={{display:'flex',gap:'10px',flexWrap:'wrap',marginBottom:'14px'}}>
        <span style={{fontSize:'12px',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'999px',padding:'4px 12px',color:'#b5b3ad'}}>Free · trip recaps</span>
        <span style={{fontSize:'12px',border:'1px solid #f2c341',borderRadius:'999px',padding:'4px 12px',color:'#f2c341'}}>$8/mo · full guide</span>
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'12px',flexWrap:'wrap'}}>
        <span style={{fontSize:'12px',color:'#8a8a85'}}>20+ Seoul spots reviewed and counting</span>
        <a href="https://joannefan.substack.com" target="_blank" rel="noopener" style={{background:'#f2c341',color:'#0d1014',fontWeight:600,fontSize:'13px',padding:'10px 18px',borderRadius:'8px',textDecoration:'none',whiteSpace:'nowrap'}}>Subscribe on Substack ↗</a>
      </div>
    </section>
  );
}

// ===================== Apps grid =====================
function AppsGrid() {
  return (
    <section id="apps" className="sticker-zone">
      <img src="assets/stickers/idea.png" alt="" className="sticker scroll-in"
           style={{ '--sz': '115px', '--rot': '6deg', top: '0px', right: '-30px' }} />
      <div className="sec-head scroll-in">
        <div>
          <div className="eyebrow">04 — On my homescreen</div>
          <h2>The apps I <em>actually</em> use.</h2>
        </div>
        <div className="ticker">CURATED · 09 APPS</div>
      </div>
      <p className="apps-disclosure scroll-in">Klook, Hostelworld, Agoda &amp; Skyscanner are affiliate links — thank you in advance for the support :)</p>
      <div className="apps-grid scroll-stagger scroll-in">
        {APPS.map((a, i) => {
          const El = a.url ? 'a' : 'div';
          const props = a.url ? { href: a.url, target: '_blank', rel: 'noopener' } : {};
          return (
            <El className="app" key={i} {...props}>
              <div className="app-row">
                <div className="app-icon" style={{ background: a.color }}>
                  {a.logoUrl
                    ? <img src={a.logoUrl} alt={`${a.name} logo`} onError={(e) => { e.target.style.display='none'; e.target.parentElement.innerText = a.initials; }} />
                    : a.initials}
                </div>
                <div className="app-meta">
                  <div className="name">{a.name}</div>
                  <div className="tagline">{a.tag}</div>
                </div>
              </div>
              <div className="app-desc">{a.desc}</div>
              <div className="app-cta">
                <span>{a.url ? 'OPEN APP' : 'COMING SOON'}</span>
                <span>↗</span>
              </div>
            </El>
          );
        })}
      </div>
    </section>
  );
}

// ===================== About =====================
function About() {
  return (
    <section id="about" className="sticker-zone">
      <img src="assets/stickers/melting.png" alt="" className="sticker scroll-in"
           style={{ '--sz': '115px', '--rot': '-4deg', top: '0px', right: '-30px' }} />
      <div className="sec-head scroll-in">
        <div>
          <div className="eyebrow">05 — Cabin crew</div>
          <h2>Who&apos;s <em>flying</em> this thing.</h2>
        </div>
        <div className="ticker">CAPT · J. FAN</div>
      </div>
      <div className="about scroll-in">
        <div className="about-video">
          <video autoPlay loop muted playsInline preload="metadata"
                 poster="assets/about-poster.jpg"
                 src="assets/about-video.mp4">
            Your browser doesn&apos;t support embedded video.
          </video>
        </div>
        <div className="about-text">
          <h3>Hi, I&apos;m Joanne — a window-seat tourist building the allergy-safe
            travel guide I always wished existed.</h3>
          <p>
            I&apos;m allergic to all nuts, all seafood, most dairy, and 30-some other
            things. Now my travel means a shortlist of restaurants in every city that
            get it right — and the hyped spots I had to skip so you don&apos;t waste a meal.
          </p>
          <p style={{ marginTop: 12 }}>
            DM me allergen tips or a hidden spot I missed. The list is collaborative. :)
          </p>
          <div className="socials">
            <a className="social" href="https://www.instagram.com/joanneffan/" target="_blank" rel="noopener">
              <div>
                <div className="platform">Instagram</div>
                <div className="handle">@joanneffan</div>
              </div>
            </a>
            <a className="social" href="https://tiktok.com/@justjjoanne" target="_blank" rel="noopener">
              <div>
                <div className="platform">TikTok</div>
                <div className="handle">@justjjoanne</div>
              </div>
            </a>
            <a className="social" href="https://www.youtube.com/@justjjoanne/featured" target="_blank" rel="noopener">
              <div>
                <div className="platform">YouTube</div>
                <div className="handle">@justjjoanne</div>
              </div>
            </a>
            <a className="social" href="mailto:contact@justjoannefan.com">
              <div>
                <div className="platform">Email</div>
                <div className="handle">contact@justjoannefan.com</div>
              </div>
            </a>
          </div>

          <div className="hashtag-strip">
            <div className="hashtag-label">Series on Instagram</div>
            <a className="hashtag-link" href="https://www.instagram.com/explore/tags/justjoanneintaiwan/" target="_blank" rel="noopener">
              <span className="ht-flag">🇹🇼</span> #justjoanneintaiwan
            </a>
            <a className="hashtag-link" href="https://www.instagram.com/explore/tags/justjoanneinjapan/" target="_blank" rel="noopener">
              <span className="ht-flag">🇯🇵</span> #justjoanneinjapan
            </a>
            <a className="hashtag-link" href="https://www.instagram.com/explore/tags/justjoanneinkorea/" target="_blank" rel="noopener">
              <span className="ht-flag">🇰🇷</span> #justjoanneinkorea
            </a>
            <a className="hashtag-link" href="https://www.instagram.com/explore/tags/justjoanneinthailand/" target="_blank" rel="noopener">
              <span className="ht-flag">🇹🇭</span> #justjoanneinthailand
            </a>
            <a className="hashtag-link" href="https://www.instagram.com/explore/tags/justjoanneineurope/" target="_blank" rel="noopener">
              <span className="ht-flag">🇪🇺</span> #justjoanneineurope
            </a>
          </div>
        </div>
      </div>

      <div className="quote scroll-in sticker-zone" style={{ marginTop: 56 }}>
        <img src="assets/stickers/sparkle.png" alt="" className="sticker"
             style={{ '--sz': '140px', '--rot': '6deg', bottom: '-40px', right: '20px', top: 'auto' }} />
        <blockquote>
          The list of things I can&apos;t eat is long. The list of cities where I&apos;ve eaten
          well anyway is longer.
          <footer>— House philosophy</footer>
        </blockquote>
      </div>
    </section>
  );
}

// ===================== Tweaks Panel =====================
function JJTweaks() {
  const { TweaksPanel, useTweaks, TweakSection, TweakColor, TweakRadio } = window;
  const [t, setT] = useTweaks(window.__INITIAL_TWEAKS__);

  useEffect(() => { document.body.setAttribute('data-theme', t.theme); }, [t.theme]);
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
    document.documentElement.style.setProperty('--accent-soft', t.accent + '22');
  }, [t.accent]);
  useEffect(() => {
    document.documentElement.style.setProperty('--sky', t.secondary);
    document.documentElement.style.setProperty('--sky-soft', t.secondary + '22');
  }, [t.secondary]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Theme" />
      <TweakRadio label="Mode"
        value={t.theme}
        onChange={(v) => setT('theme', v)}
        options={[
          { value: 'dark', label: 'Night' },
          { value: 'light', label: 'Day' },
          { value: 'sepia', label: 'Sepia' },
        ]} />
      <TweakSection label="Palette" />
      <TweakColor label="Accent"
        value={t.accent}
        onChange={(v) => setT('accent', v)}
        options={['#ff7a3d', '#e0344c', '#5fcf80', '#7b61ff', '#f4c25a']} />
      <TweakColor label="Secondary"
        value={t.secondary}
        onChange={(v) => setT('secondary', v)}
        options={['#6fb0d6', '#9fe870', '#f08fc4', '#c6a3ff', '#d6c39f']} />
    </TweaksPanel>
  );
}

// ===================== App root =====================
function App() {
  const [active, setActive] = useState('top');
  // Hero boarding pass — always show Taipei → Los Angeles (our most-iconic route)
  const featured = {
    flt: 'JX 2',
    from: 'TPE', fromCity: 'Taipei',
    to: 'LAX', toCity: 'Los Angeles',
    airline: 'Starlux',
    date: 'Apr 1, 2026',
  };

  function nav(id) {
    setActive(id);
    const el = id === 'top' ? document.body : document.getElementById(id);
    if (el) window.scrollTo({ top: id === 'top' ? 0 : el.offsetTop - 70, behavior: 'smooth' });
  }

  useEffect(() => {
    function onScroll() {
      const sections = ['about','apps','finance','map','destinations'];
      const y = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) { setActive(id); return; }
      }
      setActive('top');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-in animation observer — toggles .in-view when elements enter viewport
  useEffect(() => {
    const targets = document.querySelectorAll('.scroll-in');
    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('in-view'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(el => io.observe(el));
    return () => io.disconnect();
  });

  return (
    <React.Fragment>
      <Topbar active={active} onNav={nav} />
      <div className="shell">
        <Hero featured={featured} />
        <StatsStrip />
        <WorldMap />
        <DestinationsGrid />
        <SubstackPromo />
        <FinancePreview />
        <AppsGrid />
        <About />

        <footer className="foot">
          <div>© 2026 Joanne Fan · Made between gate changes</div>
          <div>v3.0 · WordPress → React</div>
        </footer>
      </div>
      <JJTweaks />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  window.location.pathname === '/cards.html'
    ? (window.CardsPage ? React.createElement(window.CardsPage) : React.createElement(App))
    : React.createElement(App)
);
