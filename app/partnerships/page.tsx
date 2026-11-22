import { ArrowUpRight, Plus } from "lucide-react";
import { Emblem, SiteFooter, SiteHeader } from "../components/site-chrome";
import { EnquiryForm } from "./enquiry-form";

const opportunityPoints = [
  ["EARLY INVOLVEMENT", "Support the organisation while its foundations are being established."],
  ["SHARED AMBITION", "Align with a team focused on competitive gaming and long-term development."],
  ["COLLABORATION", "Explore mutually beneficial opportunities rather than transactional sponsorship alone."],
  ["GROWING RELATIONSHIPS", "Develop a relationship that can evolve alongside the organisation."],
];

const supportAreas = [
  ["ORGANISATIONAL INFRASTRUCTURE", "Establishing the systems, resources and operations required to run the organisation."],
  ["COMPETITIVE DEVELOPMENT", "Supporting future team preparation, equipment and competitive participation."],
  ["BRAND AND APPAREL", "Developing BREAKLINE's visual identity, team apparel and merchandise."],
  ["TECHNOLOGY AND EQUIPMENT", "Building the technological foundation needed for competitive gaming and content production."],
  ["COMMUNITY DEVELOPMENT", "Supporting future community engagement and organisational visibility."],
  ["CONTENT AND MEDIA", "Developing the capabilities needed to document and promote BREAKLINE's journey."],
];

const process = [
  ["01", "INITIAL CONVERSATION", "Introduce your organisation and the contribution you are considering."],
  ["02", "OPPORTUNITY ASSESSMENT", "We evaluate the proposed contribution and identify areas of alignment."],
  ["03", "COLLABORATION PROPOSAL", "Both parties discuss possible deliverables, expectations and terms."],
  ["04", "PARTNERSHIP AGREEMENT", "Formalise the agreed collaboration and establish the next steps."],
];

const valuePoints = [
  "Brand visibility across approved organisational platforms.",
  "Co-branded content and campaigns.",
  "Product integration and demonstrations.",
  "Potential apparel branding opportunities.",
  "Strategic promotional collaborations.",
  "Long-term partnership development.",
];

function Label({ children }: { children: string }) {
  return <p className="section-label">{children}</p>;
}

export default function PartnershipsPage() {
  return (
    <div className="site-shell partnerships-page">
      <SiteHeader />
      <main>
        <section className="partnership-hero section-frame">
          <div className="partnership-hero__content reveal">
            <Label>BREAKLINE / FOUNDING PARTNERS</Label>
            <h1>Build the<br /><em>foundation.</em></h1>
            <p className="hero__strapline">BECOME PART OF WHAT COMES NEXT.</p>
            <p className="hero__description">BREAKLINE ESPORTS is building an ambitious competitive gaming organisation from the ground up. We&apos;re inviting forward-thinking businesses and brands to become part of that journey through financial support, in-kind contributions and strategic partnerships.</p>
            <div className="button-row">
              <a className="button button--solid" href="#enquiry">BECOME A FOUNDING PARTNER <ArrowUpRight aria-hidden="true" /></a>
              <a className="button button--outline" href="#pathways">EXPLORE OPPORTUNITIES</a>
            </div>
          </div>
          <div className="partnership-hero__visual" aria-hidden="true">
            <div className="hero__grid" />
            <div className="hero__ring hero__ring--outer" />
            <div className="hero__ring hero__ring--inner" />
            <Emblem />
            <span className="hero__coordinate">BL / PARTNERS / 001</span>
          </div>
        </section>

        <section className="opportunity section-frame">
          <div className="section-heading reveal"><Label>01 / THE OPPORTUNITY</Label><h2>Be there from<br /><span>the beginning.</span></h2></div>
          <div className="opportunity__body reveal"><p className="lead">Founding partners have an opportunity to support BREAKLINE during its formative stage and help shape what comes next.</p><p>We are building with ambition, discipline and a long-term view. The right relationships will be developed thoughtfully as the organisation grows.</p></div>
          <div className="opportunity-grid">{opportunityPoints.map(([title, text]) => <article className="opportunity-card reveal" key={title}><span className="card-number">+</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="pathways-section section-frame" id="pathways">
          <div className="section-heading reveal"><Label>02 / PARTNERSHIP PATHWAYS</Label><h2>Different contributions.<br /><span>One shared ambition.</span></h2></div>
          <div className="partner-panels">
            <article className="partner-panel reveal"><span className="card-number">01 / FINANCIAL</span><h3>Financial<br />partnership</h3><p>Financial contributions can help establish and develop BREAKLINE&apos;s organisational foundation.</p><ul><li>Organisational development</li><li>Operational infrastructure</li><li>Competitive preparation</li><li>Marketing and brand development</li><li>Event participation and related expenses</li></ul><a className="text-link" href="#enquiry">Discuss financial sponsorship <ArrowUpRight aria-hidden="true" /></a></article>
            <article className="partner-panel partner-panel--accent reveal"><span className="card-number">02 / IN-KIND</span><h3>In-kind<br />partnership</h3><p>Products, equipment, services and resources can be equally valuable in building the organisation.</p><ul><li>Gaming PCs and components</li><li>Gaming peripherals and monitors</li><li>Team apparel and jerseys</li><li>Technology and software</li><li>Hosting, infrastructure and creative services</li></ul><a className="text-link" href="#enquiry">Discuss in-kind support <ArrowUpRight aria-hidden="true" /></a></article>
          </div>
        </section>

        <section className="foundation support-foundation section-frame">
          <div className="section-heading reveal"><Label>03 / BUILDING THE FOUNDATION</Label><h2>Every contribution<br /><span>moves us forward.</span></h2></div>
          <div className="support-grid">{supportAreas.map(([title, text], index) => <article className="support-card reveal" key={title}><span className="card-number">0{index + 1}</span><span className="pillar__icon" aria-hidden="true"><Plus /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
          <p className="section-disclaimer">These are potential development areas, not confirmed funded projects.</p>
        </section>

        <section className="value-section section-frame">
          <div className="value-section__content reveal"><Label>04 / PARTNERSHIP VALUE</Label><h2>More than a logo<br /><span>on a jersey.</span></h2><p>BREAKLINE wants to develop meaningful relationships with its founding partners. Together, we can explore opportunities that fit the organisation, the brand and the work ahead.</p></div>
          <div className="value-list reveal"><span>Potential collaboration opportunities</span><ul>{valuePoints.map((point) => <li key={point}>{point}</li>)}</ul><p className="section-disclaimer">Visibility, branding placement, exclusivity and commercial terms are potential opportunities to be agreed individually.</p></div>
        </section>

        <section className="process-section section-frame">
          <div className="section-heading reveal"><Label>05 / HOW WE COLLABORATE</Label><h2>A shared vision.<br /><span>A clear process.</span></h2></div>
          <div className="process-grid">{process.map(([number, title, text]) => <article className="process-card reveal" key={number}><span className="card-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="enquiry-section section-frame" id="enquiry">
          <div className="section-heading reveal"><Label>06 / START A CONVERSATION</Label><h2>Let&apos;s build something<br /><span>together.</span></h2><p>Interested in becoming a founding partner? Tell us about your organisation, the support you&apos;re considering and how you envision working with BREAKLINE.</p></div>
          <EnquiryForm />
        </section>

        <section className="closing partnership-closing section-frame reveal"><Emblem /><Label>BREAKLINE / THE FUTURE</Label><h2>The future is<br /><span>built together.</span></h2><p>Every great organisation starts with a foundation. Help us build ours.</p><a className="button button--solid" href="#enquiry">BECOME A FOUNDING PARTNER <ArrowUpRight aria-hidden="true" /></a></section>
      </main>
      <SiteFooter />
    </div>
  );
}
