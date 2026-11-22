import type { Metadata } from "next";
import { ArrowUpRight, ShieldCheck, Target, Users, TrendingUp, Handshake } from "lucide-react";
import { Emblem, SiteFooter, SiteHeader } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "About BREAKLINE ESPORTS",
  description: "Learn how BREAKLINE ESPORTS is building an emerging competitive esports organisation.",
};

const values = [
  ["01", "Competitiveness", "We strive to improve, prepare seriously and approach competition with intent.", Target],
  ["02", "Integrity", "We act honestly, take responsibility and represent the organisation with respect.", ShieldCheck],
  ["03", "Teamwork", "We recognise that individual talent matters, but collective effort builds organisations.", Users],
  ["04", "Continuous development", "We value learning, improvement, adaptability and long-term thinking.", TrendingUp],
  ["05", "Accountability", "We take ownership of our responsibilities, commitments and decisions.", Handshake],
] as const;

const pillars = [
  ["01", "Competitive development", "Preparing for future competitive participation and establishing dedicated divisions."],
  ["02", "Organisational structure", "Building the operational foundation and responsibilities required to run the organisation."],
  ["03", "Talent development", "Creating opportunities to identify and develop competitive talent."],
  ["04", "Community development", "Establishing meaningful relationships with people who share an interest in the BREAKLINE identity."],
  ["05", "Strategic partnerships", "Building relationships with businesses and organisations that can contribute to sustainable growth."],
] as const;

function Label({ children }: { children: string }) {
  return <p className="section-label">{children}</p>;
}

export default function AboutPage() {
  return (
    <div className="site-shell about-page">
      <SiteHeader />
      <main>
        <section className="about-hero section-frame">
          <div className="about-hero__content reveal">
            <Label>BREAKLINE / OUR IDENTITY</Label>
            <h1>More than a name.<br /><span>A standard to build.</span></h1>
            <p className="hero__strapline">AMBITION. DISCIPLINE. EXCELLENCE.</p>
            <p className="hero__description">
              BREAKLINE ESPORTS is an emerging competitive gaming organisation built around ambition,
              discipline and the pursuit of excellence.
            </p>
            <p className="about-hero__support">
              We&apos;re establishing the foundations of an organisation designed to bring together
              talented individuals, competitive opportunities and a shared commitment to development.
            </p>
          </div>
          <div className="about-hero__visual" aria-hidden="true">
            <div className="hero__grid" />
            <div className="hero__ring hero__ring--outer" />
            <div className="hero__ring hero__ring--inner" />
            <Emblem />
            <span className="hero__coordinate">BL / IDENTITY / 001</span>
          </div>
          <div className="scroll-cue" aria-hidden="true"><span /> ESTABLISHING THE FOUNDATION</div>
        </section>

        <section className="about-who section-frame">
          <div className="section-heading reveal"><Label>01 / WHO WE ARE</Label><h2>An organisation<br /><span>in the making.</span></h2></div>
          <div className="about-who__body reveal">
            <p className="lead">BREAKLINE is being developed as a competitive esports organisation with ambitions beyond individual teams or games.</p>
            <p>Our focus is on establishing an organisational foundation that can support competitive participation, talent development, community engagement and strategic partnerships.</p>
            <p>We recognise that building a sustainable organisation requires more than competitive ambition. It requires structure, accountability, collaboration and a clear direction.</p>
          </div>
        </section>

        <section className="about-purpose section-frame">
          <div className="section-heading reveal"><Label>02 / OUR PURPOSE</Label><h2>Built with purpose.<br /><span>Driven by ambition.</span></h2></div>
          <div className="purpose-grid">
            <article className="purpose-panel reveal">
              <div className="purpose-panel__top"><span>MISSION</span><span>PROPOSED DRAFT</span></div>
              <blockquote>To build a competitive esports organisation that brings together talented individuals, develops competitive opportunities and creates an environment where ambition, discipline and collaboration can thrive.</blockquote>
            </article>
            <article className="purpose-panel reveal">
              <div className="purpose-panel__top"><span>VISION</span><span>PROPOSED DRAFT</span></div>
              <blockquote>To establish BREAKLINE as a recognised and respected esports organisation, built on competitive excellence, sustainable development and a strong organisational identity.</blockquote>
            </article>
          </div>
          <p className="section-disclaimer">Proposed organisational language; not confirmed policy until reviewed and approved by founding leadership.</p>
        </section>

        <section className="about-values section-frame">
          <div className="section-heading reveal"><Label>03 / WHAT WE STAND FOR</Label><h2>The principles behind<br /><span>the emblem.</span></h2></div>
          <div className="values-grid">
            {values.map(([number, title, text, Icon]) => (
              <article className="value-card reveal" key={number}>
                <div className="value-card__top"><span className="card-number">{number}</span><Icon aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="section-disclaimer">These are proposed values pending founding leadership approval.</p>
        </section>

        <section className="about-foundation section-frame">
          <div className="section-heading reveal"><Label>04 / THE FOUNDATION</Label><h2>The foundation<br /><span>comes first.</span></h2></div>
          <div className="about-foundation__intro reveal">
            <p>BREAKLINE is currently developing the organisational capabilities required for sustainable, responsible growth.</p>
          </div>
          <div className="foundation-list">
            {pillars.map(([number, title, text]) => (
              <article className="foundation-item reveal" key={number}>
                <span className="foundation-item__number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="foundation-item__status">IN DEVELOPMENT</span>
              </article>
            ))}
          </div>
        </section>

        <section className="about-leadership section-frame">
          <div className="section-heading reveal"><Label>05 / THE PEOPLE BEHIND BREAKLINE</Label><h2>Built through<br /><span>collective ambition.</span></h2></div>
          <div className="leadership-panel reveal">
            <Emblem />
            <div>
              <p className="lead">An organisation begins with people willing to share responsibility and shape a clear direction.</p>
              <p>BREAKLINE&apos;s development depends on collaborative leadership, open accountability and individuals committed to building the structure that can support future teams and communities. Confirmed leadership profiles will be introduced as the organisation develops.</p>
            </div>
          </div>
        </section>

        <section className="about-journey section-frame">
          <div className="section-heading reveal"><Label>06 / WHERE WE STAND</Label><h2>Everything starts with<br /><span>a foundation.</span></h2></div>
          <div className="journey-status reveal">
            <div><span>CURRENT STATUS</span><strong>Pre-launch</strong></div>
            <ul>
              <li><span />Establishing the founding organisational structure.</li>
              <li><span />Developing the brand and digital presence.</li>
              <li><span />Exploring founding partnerships.</li>
              <li><span />Preparing future competitive divisions.</li>
              <li><span />Building the foundation for recruitment and community engagement.</li>
            </ul>
          </div>
          <p className="section-disclaimer">These areas are under development and do not represent completed capabilities or launch commitments.</p>
        </section>

        <section className="closing about-closing section-frame reveal">
          <Emblem />
          <Label>BREAKLINE / THE BEGINNING</Label>
          <h2>The line<br /><span>starts here.</span></h2>
          <p>We&apos;re building something with purpose. The journey starts with the people, principles and partnerships that shape what comes next.</p>
          <div className="button-row">
            <a className="button button--solid" href="/partnerships">EXPLORE PARTNERSHIPS <ArrowUpRight aria-hidden="true" /></a>
            <a className="button button--outline" href="/partnerships#enquiry">GET INVOLVED</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
