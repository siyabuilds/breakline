const principles = [
  {
    number: "01",
    title: "Competitive mindset",
    text: "Building a culture that values preparation, discipline, and performance.",
  },
  {
    number: "02",
    title: "Organisational growth",
    text: "Establishing the structure and foundation required for sustainable development.",
  },
  {
    number: "03",
    title: "Shared ambition",
    text: "Bringing together people who believe in building something meaningful.",
  },
];

const pillars = [
  {
    number: "01",
    title: "Talent",
    text: "Identifying and developing competitive talent with room to grow.",
  },
  {
    number: "02",
    title: "Structure",
    text: "Establishing sustainable organisational operations from the ground up.",
  },
  {
    number: "03",
    title: "Community",
    text: "Building a community around the BREAKLINE identity and its values.",
  },
  {
    number: "04",
    title: "Partnerships",
    text: "Developing strategic relationships that support long-term growth.",
  },
];

const pathways = [
  {
    label: "01 / PLAYERS",
    title: "Represent the line.",
    text: "Interested in representing BREAKLINE competitively? Tell us where you want to go.",
    link: "Start a conversation",
  },
  {
    label: "02 / FOUNDING MEMBERS",
    title: "Build what comes next.",
    text: "Bring your skills, energy, and perspective to an organisation being built from zero.",
    link: "Join the build",
  },
  {
    label: "03 / PARTNERS",
    title: "Back the ambition.",
    text: "Support the development of a serious esports organisation with a long-term view.",
    link: "Explore partnerships",
  },
];

function Emblem({ small = false }: { small?: boolean }) {
  return (
    <span className={`brand-mark${small ? " brand-mark--small" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" role="presentation">
        <path d="M7 8h34L29 20h12L17 40H7l12-16H7l12-16H7Z" />
      </svg>
    </span>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label">{children}</p>;
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="BREAKLINE home">
          <Emblem small />
          <span>BREAKLINE</span>
        </a>
        <details className="mobile-menu">
          <summary aria-label="Toggle navigation menu">
            <span />
            <span />
          </summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#about">ABOUT</a>
            <a href="#divisions">DIVISIONS</a>
            <a href="#partnerships">PARTNERS</a>
            <a href="#contact">CONTACT</a>
            <a className="button button--small button--solid" href="#contact">GET INVOLVED</a>
          </nav>
        </details>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a className="is-active" href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#divisions">DIVISIONS</a>
          <a href="#partnerships">PARTNERS</a>
          <a href="#contact">CONTACT</a>
          <a className="button button--small button--solid" href="#contact">GET INVOLVED</a>
        </nav>
      </header>

      <main>
        <section className="hero section-frame" id="home">
          <div className="hero__content reveal">
            <p className="eyebrow"><span /> PRE-LAUNCH / 2026</p>
            <h1>Break <em>the</em><br /><strong>line.</strong></h1>
            <p className="hero__strapline">BUILT TO COMPETE. DRIVEN TO EXCEL.</p>
            <p className="hero__description">
              BREAKLINE ESPORTS is an emerging competitive gaming organisation built around ambition,
              discipline, and the pursuit of excellence. We&apos;re building something bigger than the game.
            </p>
            <div className="button-row">
              <a className="button button--solid" href="#about">DISCOVER BREAKLINE <span>↗</span></a>
              <a className="button button--outline" href="#contact">JOIN THE MOVEMENT</a>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__grid" />
            <div className="hero__ring hero__ring--outer" />
            <div className="hero__ring hero__ring--inner" />
            <Emblem />
            <span className="hero__coordinate">BL / 001 — EST. IN THE MAKING</span>
          </div>
          <div className="scroll-cue" aria-hidden="true"><span /> SCROLL TO EXPLORE</div>
        </section>

        <section className="intro section-frame" id="about">
          <div className="section-heading reveal">
            <SectionLabel>01 / WHO WE ARE</SectionLabel>
            <h2>More than a team.<br /><span>An organisation.</span></h2>
          </div>
          <div className="intro__body reveal">
            <p className="lead">
              BREAKLINE ESPORTS is being built with a clear ambition: to establish a competitive
              organisation that brings together talented players, dedicated individuals, and strategic
              partners under one identity.
            </p>
            <p>
              We believe in creating an environment where competition, discipline, teamwork, and
              continuous improvement are central to everything we do.
            </p>
          </div>
          <div className="principles">
            {principles.map((principle) => (
              <article className="principle reveal" key={principle.number}>
                <span className="card-number">{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="divisions section-frame" id="divisions">
          <div className="section-heading section-heading--row reveal">
            <div>
              <SectionLabel>02 / COMPETITION</SectionLabel>
              <h2>The future is<br /><span>competitive.</span></h2>
            </div>
            <p>Our competitive divisions will be the foundation of BREAKLINE&apos;s esports ambitions.</p>
          </div>
          <div className="division-card reveal">
            <div className="division-card__art"><span>?</span><i /></div>
            <div className="division-card__content">
              <span className="status-pill"><i /> IN DEVELOPMENT</span>
              <h3>Competitive<br />divisions</h3>
              <p>
                We&apos;re building towards structured competitive participation, talent recruitment,
                and the development of dedicated teams. Game titles will be announced as the foundation takes shape.
              </p>
              <a className="text-link" href="#contact">Register your interest <span>↗</span></a>
            </div>
            <span className="division-card__index">BL / 02</span>
          </div>
        </section>

        <section className="foundation section-frame" id="foundation">
          <div className="section-heading reveal">
            <SectionLabel>03 / THE FOUNDATION</SectionLabel>
            <h2>Built with purpose.<br /><span>Developed for the future.</span></h2>
          </div>
          <div className="foundation__intro reveal">
            <p>BREAKLINE is currently establishing its organisational foundation. Every decision now is designed to make the future stronger.</p>
          </div>
          <div className="pillars">
            {pillars.map((pillar) => (
              <article className="pillar reveal" key={pillar.number}>
                <span className="pillar__number">{pillar.number}</span>
                <span className="pillar__icon" aria-hidden="true">+</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="partnerships section-frame" id="partnerships">
          <div className="partnerships__content reveal">
            <SectionLabel>04 / PARTNERSHIPS</SectionLabel>
            <h2>Build the<br /><span>foundation</span> with us.</h2>
            <p>Every ambitious organisation needs the right people and partners behind it.</p>
            <p>BREAKLINE is seeking founding partners who share our ambition to establish a competitive esports organisation and contribute to its development.</p>
            <div className="button-row">
              <a className="button button--solid" href="#contact">BECOME A FOUNDING PARTNER <span>↗</span></a>
              <a className="text-link" href="#contact">Explore partnerships <span>↗</span></a>
            </div>
          </div>
          <div className="partnerships__list reveal">
            <span>WE WELCOME CONVERSATIONS AROUND</span>
            <ul>
              <li>Financial sponsorship</li>
              <li>Gaming hardware &amp; peripherals</li>
              <li>Technology &amp; infrastructure</li>
              <li>Apparel &amp; merchandise</li>
              <li>Media &amp; content partnerships</li>
              <li>Strategic brand collaborations</li>
            </ul>
          </div>
        </section>

        <section className="involved section-frame" id="contact">
          <div className="section-heading reveal">
            <SectionLabel>05 / JOIN BREAKLINE</SectionLabel>
            <h2>Your place in<br /><span>the movement.</span></h2>
            <p>We&apos;re building BREAKLINE from the ground up, and the right people will help shape what comes next.</p>
          </div>
          <div className="pathways">
            {pathways.map((pathway) => (
              <article className="pathway reveal" key={pathway.label}>
                <span className="section-label">{pathway.label}</span>
                <h3>{pathway.title}</h3>
                <p>{pathway.text}</p>
                <a className="text-link" href="mailto:hello@breakline.gg">{pathway.link} <span>↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="closing section-frame reveal">
          <Emblem />
          <SectionLabel>BREAKLINE / THE BEGINNING</SectionLabel>
          <h2>The line<br /><span>starts here.</span></h2>
          <p>An organisation in the making. An ambition without limits. Welcome to BREAKLINE.</p>
          <a className="button button--solid" href="#contact">FOLLOW THE JOURNEY <span>↗</span></a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <a className="wordmark" href="#home" aria-label="BREAKLINE home"><Emblem small /><span>BREAKLINE</span></a>
          <p>An emerging esports organisation built around ambition, discipline, and excellence.</p>
        </div>
        <div className="site-footer__links">
          <div><span className="footer-heading">EXPLORE</span><a href="#about">About</a><a href="#divisions">Divisions</a><a href="#foundation">Foundation</a></div>
          <div><span className="footer-heading">CONNECT</span><a href="#partnerships">Partnerships</a><a href="mailto:hello@breakline.gg">Enquiries</a><a href="mailto:hello@breakline.gg">Recruitment</a></div>
        </div>
        <div className="site-footer__bottom"><span>© 2026 BREAKLINE ESPORTS</span><span>BUILT TO COMPETE / DRIVEN TO EXCEL</span></div>
      </footer>
    </div>
  );
}
