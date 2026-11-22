import type { Metadata } from "next";
import {
  ArrowUpRight,
  AtSign,
  Mail,
  MessageCircle,
  Newspaper,
  Palette,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Emblem, SiteFooter, SiteHeader } from "../components/site-chrome";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact & Get Involved | BREAKLINE ESPORTS",
  description: "Contact BREAKLINE ESPORTS for general enquiries, media requests and community conversations.",
};

const channels = [
  {
    number: "01",
    title: "General enquiries",
    text: "For general questions, feedback and enquiries about BREAKLINE.",
    subject: "General enquiry",
    icon: Mail,
  },
  {
    number: "02",
    title: "Media & press",
    text: "For media representatives, journalists, interview requests and press-related communication.",
    subject: "Media and press enquiry",
    icon: Newspaper,
  },
  {
    number: "03",
    title: "Content & collaborations",
    text: "For content creators, creative collaborations and relevant promotional opportunities.",
    subject: "Content and collaboration enquiry",
    icon: Palette,
  },
  {
    number: "04",
    title: "Other enquiries",
    text: "For questions or conversations that do not fall into the categories above.",
    subject: "General enquiry",
    icon: MessageCircle,
  },
] as const;

function Label({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default function ContactPage() {
  return (
    <div className="site-shell contact-page">
      <SiteHeader />
      <main>
        <section className="contact-hero section-frame">
          <div className="contact-hero__content reveal">
            <Label>BREAKLINE / GET IN TOUCH</Label>
            <h1>Let&apos;s<br /><em>talk.</em></h1>
            <p className="hero__strapline">EVERY CONNECTION STARTS SOMEWHERE.</p>
            <p className="hero__description">
              Whether you have a question, an idea, a media enquiry or simply want to connect with
              BREAKLINE, we&apos;d like to hear from you.
            </p>
            <div className="button-row">
              <a className="button button--solid" href="#contact-form">
                SEND US A MESSAGE <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="contact-hero__visual" aria-hidden="true">
            <div className="hero__grid" />
            <div className="hero__ring hero__ring--outer" />
            <div className="hero__ring hero__ring--inner" />
            <Emblem />
            <span className="hero__coordinate">BL / CONTACT / 001</span>
          </div>
        </section>

        <section className="contact-channels section-frame">
          <div className="section-heading reveal">
            <Label>01 / REACH OUT</Label>
            <h2>The right conversation<br /><span>starts here.</span></h2>
          </div>
          <div className="channel-grid">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
              <article className="channel-card reveal" key={channel.number}>
                <div className="channel-card__top">
                  <span className="card-number">{channel.number}</span>
                  <Icon aria-hidden="true" />
                </div>
                <h3>{channel.title}</h3>
                <p>{channel.text}</p>
                <a
                  className="text-link"
                  href={`mailto:hello@breakline.gg?subject=${encodeURIComponent(channel.subject)}`}
                >
                  Start a conversation <ArrowUpRight aria-hidden="true" />
                </a>
              </article>
              );
            })}
          </div>
        </section>

        <section className="contact-form-section section-frame" id="contact-form">
          <div className="section-heading reveal">
            <Label>02 / START A CONVERSATION</Label>
            <h2>Send us a<br /><span>message.</span></h2>
            <p>
              Have something you&apos;d like to discuss? Send us a message and provide enough context
              for the BREAKLINE team to understand your enquiry.
            </p>
          </div>
          <ContactForm />
        </section>

        <section className="social-section section-frame">
          <div className="section-heading reveal">
            <Label>03 / CONNECT WITH BREAKLINE</Label>
            <h2>Find us<br /><span>out there.</span></h2>
            <p>
              Follow BREAKLINE and stay connected as we build our organisation, develop our identity
              and share our journey.
            </p>
          </div>
          <div className="social-panel reveal">
            <AtSign aria-hidden="true" />
            <div>
              <span>Official social username</span>
              <strong>@breakline.esports</strong>
            </div>
            <Users aria-hidden="true" />
          </div>
          <p className="section-disclaimer">
            Verified profile links will be published here as official BREAKLINE accounts become active.
          </p>
        </section>

        <section className="destinations section-frame">
          <div className="section-heading reveal">
            <Label>04 / LOOKING FOR SOMETHING SPECIFIC?</Label>
            <h2>Let&apos;s get you to<br /><span>the right place.</span></h2>
          </div>
          <div className="destination-grid">
            <article className="destination-card reveal">
              <span className="card-number">A / RECRUITMENT</span>
              <h3>Founding Member Recruitment</h3>
              <p>
                Interested in contributing to the development of BREAKLINE and becoming part of its
                founding team?
              </p>
              <Link className="text-link" href="/recruitment">
                EXPLORE RECRUITMENT <ArrowUpRight aria-hidden="true" />
              </Link>
            </article>
            <article className="destination-card destination-card--accent reveal">
              <span className="card-number">B / PARTNERSHIPS</span>
              <h3>Founding Partnerships</h3>
              <p>
                Representing a business or brand interested in supporting the development of BREAKLINE?
              </p>
              <Link className="text-link" href="/partnerships">
                EXPLORE PARTNERSHIPS <ArrowUpRight aria-hidden="true" />
              </Link>
            </article>
          </div>
        </section>

        <section className="closing contact-closing section-frame reveal">
          <Emblem />
          <Label>BREAKLINE / GET IN TOUCH</Label>
          <h2>We&apos;re always open to<br /><span>a good conversation.</span></h2>
          <p>Every connection has the potential to become something meaningful. Reach out and introduce yourself.</p>
          <a className="button button--solid" href="#contact-form">
            GET IN TOUCH <ArrowUpRight aria-hidden="true" />
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
