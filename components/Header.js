"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, CaretDown, List, MagnifyingGlass, X } from "@phosphor-icons/react";

const groups = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", items: [["Mission, Vision, & Values", "/about#mission", "/images/menu/mission.png"], ["History", "/about#history", "/images/menu/history.webp"], ["Theory of Change", "/about#theory", "/images/menu/theory.webp"], ["Our Team", "/about#team", "/images/menu/team.webp"]] },
  { label: "What We Do", href: "/what-we-do", wide: true, items: [["Where We Work", "/what-we-do#where", "/images/menu/where.webp"], ["Who We Serve", "/what-we-do#serve", "/images/menu/serve.webp"], ["Programs", "/what-we-do#programs", "/images/menu/programs.webp"], ["What We Prioritize", "/what-we-do#priorities", "/images/menu/priorities.webp"], ["Success Stories", "/success-stories", "/images/menu/stories.webp"]] },
  { label: "Impact", href: "/impact" },
  { label: "Support Our Mission", href: "/partner", small: true, items: [["Partner With Us", "/partner", "/images/menu/partner.png"], ["Donate", "/donate", "/images/menu/donate.png"]] },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return <header className="site-header">
    <nav className="site-nav" aria-label="Primary">
      <Link aria-label="Internet for Humanity home" href="/" className="header-logo"><Image src="/images/logo.png" alt="Internet for Humanity" width={420} height={140} priority /></Link>
      <ul className="desktop-nav">{groups.map(group => <li className="nav-item" key={group.label}>
        <Link href={group.href} className={group.href === "/" ? "current" : ""}>{group.label}{group.items && <CaretDown className="nav-caret" size={14} weight="bold" />}</Link>
        {group.items && <div className="mega-shell"><div className={`mega-menu ${group.wide ? "five" : group.small ? "two" : "four"}`}>{group.items.map(([label, href, image]) => <Link className="mega-card" href={href} key={label}><span className="mega-orb"><Image src={image} alt="" fill sizes="132px" /></span><strong>{label}</strong></Link>)}</div></div>}
      </li>)}</ul>
      <div className="nav-actions"><form className="search-bar" role="search" onSubmit={event => { event.preventDefault(); setSearchOpen(true); }}><button aria-label="Search" type="submit"><MagnifyingGlass weight="bold" /></button><input aria-label="Search pages, blog posts, and stories" placeholder="Search…" onFocus={() => setSearchOpen(true)} /></form><Link className="header-donate" href="/donate"><span>Donate</span><ArrowUpRight weight="bold" /></Link></div>
      <button className="mobile-search" aria-label="Search site" aria-expanded={searchOpen} onClick={() => setSearchOpen(true)}><MagnifyingGlass size={22} /></button>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>{menuOpen ? <X size={25} /> : <List size={25} />}</button>
      {menuOpen && <div className="mobile-panel"><ul>{groups.map(group => <li key={group.label}><Link className="mobile-main" href={group.href}>{group.label}</Link>{group.items && <ul>{group.items.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul>}</li>)}</ul><Link className="header-donate mobile-donate" href="/donate"><span>Donate</span><ArrowUpRight weight="bold" /></Link></div>}
    </nav>
    {searchOpen && <div className="search-overlay" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setSearchOpen(false); }}>
      <section className="search-dialog" role="dialog" aria-modal="true" aria-label="Search our site" onKeyDown={event => { if (event.key === "Escape") setSearchOpen(false); }}>
        <form role="search" onSubmit={event => event.preventDefault()}>
          <div className="search-input-wrap"><MagnifyingGlass size={22} weight="regular" /><input autoFocus type="search" maxLength={120} autoComplete="off" placeholder="Search pages, posts, and stories…" aria-label="Search pages, blog posts, and stories" /></div>
        </form>
        <button type="button" className="search-close" aria-label="Close search" onClick={() => setSearchOpen(false)}><X size={24} /></button>
      </section>
    </div>}
  </header>;
}
