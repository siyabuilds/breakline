import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Emblem, SiteFooter, SiteHeader } from "../components/site-chrome";
import { RegistryForm } from "./registry-form";

export const metadata: Metadata = {
  title: "Founding Community Registry | BREAKLINE ESPORTS",
  description: "Join the BREAKLINE community or register interest as a competitive player.",
};

export default function RecruitmentPage() {
  return (
    <div className="site-shell recruitment-page">
      <SiteHeader />
      <main>
        <section className="registry-hero section-frame">
          <div className="registry-hero__content reveal">
            <p className="section-label">BREAKLINE / FOUNDING COMMUNITY REGISTRY</p>
            <h1>Become part<br />of <em>BREAKLINE.</em></h1>
            <p className="hero__strapline">ONE COMMUNITY. TWO WAYS TO GROW.</p>
            <p className="hero__description">
              Whether you want to grow with our community or compete under the BREAKLINE banner,
              your journey starts here.
            </p>
            <p className="registry-context">
              BREAKLINE is building its organisation from the ground up. This registry does not
              guarantee acceptance to a roster, funding, tournament participation or any other
              competitive opportunity.
            </p>
            <div className="button-row">
              <a className="button button--solid" href="#registry-form">
                REGISTER YOUR INTEREST <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="registry-hero__visual" aria-hidden="true">
            <div className="hero__grid" />
            <div className="hero__ring hero__ring--outer" />
            <div className="hero__ring hero__ring--inner" />
            <Emblem />
            <span className="hero__coordinate">BL / REGISTRY / 001</span>
          </div>
        </section>

        <section className="registry-form-section section-frame" id="registry-form">
          <div className="section-heading reveal">
            <p className="section-label">01 / APPLICATION</p>
            <h2>Founding Community<br /><span>Registry.</span></h2>
            <p>
              Choose the pathway that reflects where you want to contribute. Everyone can join the
              wider BREAKLINE community; competitive applicants may additionally be considered for
              future roster opportunities.
            </p>
          </div>
          <RegistryForm />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
