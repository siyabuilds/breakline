import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Emblem, SiteFooter, SiteHeader } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "Founding Member Recruitment | BREAKLINE ESPORTS",
  description: "Information about BREAKLINE ESPORTS founding member recruitment.",
};

export default function RecruitmentPage() {
  return (
    <div className="site-shell recruitment-page">
      <SiteHeader />
      <main>
        <section className="recruitment-placeholder section-frame reveal">
          <Emblem />
          <p className="section-label">BREAKLINE / FOUNDING MEMBER RECRUITMENT</p>
          <h1>Recruitment<br /><span>in development.</span></h1>
          <p>
            BREAKLINE&apos;s founding member recruitment experience is not open yet. Use the contact
            page if you would like to introduce yourself or ask a general question.
          </p>
          <div className="button-row">
            <Link className="button button--solid" href="/contact">
              CONTACT BREAKLINE
            </Link>
            <Link className="button button--outline" href="/">
              <ArrowLeft aria-hidden="true" /> BACK HOME
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
