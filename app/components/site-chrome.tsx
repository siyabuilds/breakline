"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Emblem({ small = false }: { small?: boolean }) {
  return (
    <span className={`brand-mark${small ? " brand-mark--small" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" role="presentation">
        <path d="M7 8h34L29 20h12L17 40H7l12-16H7l12-16H7Z" />
      </svg>
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="BREAKLINE home">
        <Emblem small />
        <span>BREAKLINE</span>
      </Link>
      <details className="mobile-menu">
        <summary aria-label="Toggle navigation menu">
          <span />
          <span />
        </summary>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <Link className={pathname === "/about" ? "is-active" : undefined} href="/about">ABOUT</Link>
          <Link href="/#divisions">DIVISIONS</Link>
          <Link className={pathname === "/partnerships" ? "is-active" : undefined} href="/partnerships">PARTNERS</Link>
          <Link href="/#contact">CONTACT</Link>
          <Link className="button button--small button--solid" href="/partnerships#enquiry">GET INVOLVED</Link>
        </nav>
      </details>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/">HOME</Link>
        <Link className={pathname === "/about" ? "is-active" : undefined} href="/about">ABOUT</Link>
        <Link href="/#divisions">DIVISIONS</Link>
        <Link className={pathname === "/partnerships" ? "is-active" : undefined} href="/partnerships">PARTNERS</Link>
        <Link href="/#contact">CONTACT</Link>
        <Link className="button button--small button--solid" href="/partnerships#enquiry">GET INVOLVED</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <Link className="wordmark" href="/" aria-label="BREAKLINE home">
          <Emblem small />
          <span>BREAKLINE</span>
        </Link>
        <p>An emerging esports organisation built around ambition, discipline, and excellence.</p>
      </div>
      <div className="site-footer__links">
        <div>
          <span className="footer-heading">EXPLORE</span>
          <Link href="/about">About</Link>
          <Link href="/#divisions">Competitive</Link>
          <Link href="/#foundation">Foundation</Link>
        </div>
        <div>
          <span className="footer-heading">CONNECT</span>
          <Link href="/partnerships">Partnerships</Link>
          <Link href="/#contact">Get involved</Link>
          <a href="mailto:hello@breakline.gg">Enquiries</a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© 2026 BREAKLINE ESPORTS</span>
        <span>BUILT TO COMPETE / DRIVEN TO EXCEL</span>
      </div>
    </footer>
  );
}

export function ExternalLinkIcon() {
  return <ArrowUpRight aria-hidden="true" />;
}
