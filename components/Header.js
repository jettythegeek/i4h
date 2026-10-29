"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, CaretDown, List, MagnifyingGlass, X } from "@phosphor-icons/react";
import { searchItems as searchPages } from "@/data/site";

const groups = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", items: [["Mission, Vision & Values", "/about#mission", "/images/chs/about-cover.jpeg"], ["History", "/about#history", "/images/chs/about-mission.jpg"], ["Theory of Change", "/about#theory", "/images/chs/theory.jpeg"], ["Our Team", "/about#team", "/images/chs/home-who.jpeg"]] },
  { label: "What We Do", href: "/what-we-do", items: [["Where We Work", "/what-we-do#where", "/images/chs/where-we-work.jpeg"], ["Who We Serve", "/what-we-do#serve", "/images/chs/home-who.jpeg"], ["What We Prioritize", "/what-we-do#priorities", "/images/chs/home-accountability.jpeg"], ["Success Stories", "/success-stories", "/images/chs/impact.jpeg"]] },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Support Our Mission", href: "/donate", small: true, items: [["Partner With Us", "/partner", "/images/chs/partnerships-cover.jpeg"], ["Donate", "/donate", "/images/chs/donate-cover.jpeg"]] },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

function Highlight({ text, query }) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.split(new RegExp(`(${escaped})`, "ig")).map((part, index) => part.toLowerCase() === query.toLowerCase() ? <mark key={index}>{part}</mark> : part);
}

function SearchResults({ query, compact = false, onSelect }) {
  const term = query.trim().toLowerCase();
  if (!term) return null;
  const results = searchPages.filter(([, title, , excerpt]) => `${title} ${excerpt}`.toLowerCase().includes(term));

  return <div className={`search-results ${compact ? "compact" : ""}`} role="region" aria-live="polite" aria-label="Search results">
    <p className="search-count">{results.length} result{results.length === 1 ? "" : "s"} for “{query.trim()}”</p>
    <div className="search-result-list">
      {results.map(([type, title, href, excerpt]) => <Link className="search-result-card" href={href} key={href} onClick={onSelect}>
        <span>{type}</span>
        <strong><Highlight text={title} query={query.trim()} /></strong>
        <p><Highlight text={excerpt} query={query.trim()} /></p>
      </Link>)}
      {!results.length && <p className="search-empty">No matching pages or posts were found.</p>}
    </div>
  </div>;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [query, setQuery] = useState("");

  return <header className="site-header">
    <nav className="site-nav" aria-label="Primary">
      <Link aria-label="Christ’s Hands Centre home" href="/" className="header-logo"><Image src="/images/chs/logo.png" alt="Christ’s Hands Centre" width={420} height={180} priority /></Link>
      <ul className="desktop-nav">{groups.map(group => <li className="nav-item" key={group.label}>
        <Link href={group.href} className={group.href === "/" ? "current" : ""}>{group.label}{group.items && <CaretDown className="nav-caret" size={14} weight="bold" />}</Link>
        {group.items && <div className="mega-shell"><div className={`mega-menu ${group.wide ? "five" : group.small ? "two" : "four"}`}>{group.items.map(([label, href, image]) => <Link className="mega-card" href={href} key={label}><span className="mega-orb"><Image src={image} alt="" fill sizes="132px" /></span><strong>{label}</strong></Link>)}</div></div>}
      </li>)}</ul>
      <div className="nav-actions" onFocusCapture={() => setSearchFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setSearchFocused(false); }}>
        <form className="search-bar" role="search" onSubmit={event => event.preventDefault()}><MagnifyingGlass weight="bold" /><input value={query} onChange={event => setQuery(event.target.value)} aria-label="Search pages, blog posts, and stories" placeholder="Search…" />{query && <button className="search-clear" aria-label="Clear search" type="button" onClick={() => setQuery("")}><X weight="bold" /></button>}</form>
        {searchFocused && query.trim() && <SearchResults query={query} compact onSelect={() => setSearchFocused(false)} />}
        <Link className="header-donate" href="/donate"><span>Donate</span><ArrowUpRight weight="bold" /></Link>
      </div>
      <button className="mobile-search" aria-label="Search site" aria-expanded={searchOpen} onClick={() => setSearchOpen(true)}><MagnifyingGlass size={22} /></button>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>{menuOpen ? <X size={25} /> : <List size={25} />}</button>
      {menuOpen && <div className="mobile-panel"><ul>{groups.map(group => <li key={group.label}><Link className="mobile-main" href={group.href}>{group.label}</Link>{group.items && <ul>{group.items.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul>}</li>)}</ul><Link className="header-donate mobile-donate" href="/donate"><span>Donate</span><ArrowUpRight weight="bold" /></Link></div>}
    </nav>
    {searchOpen && <div className="search-overlay" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setSearchOpen(false); }}>
      <section className={`search-dialog ${query.trim() ? "has-results" : ""}`} role="dialog" aria-modal="true" aria-label="Search our site" onKeyDown={event => { if (event.key === "Escape") setSearchOpen(false); }}>
        <div className="search-dialog-row">
          <form role="search" onSubmit={event => event.preventDefault()}>
            <div className="search-input-wrap"><MagnifyingGlass size={22} weight="regular" /><input value={query} onChange={event => setQuery(event.target.value)} autoFocus type="search" maxLength={120} autoComplete="off" placeholder="Search pages, posts, and stories…" aria-label="Search pages, blog posts, and stories" />{query && <button className="mobile-search-clear" aria-label="Clear search" type="button" onClick={() => setQuery("")}><X size={20} weight="bold" /></button>}</div>
          </form>
          <button type="button" className="search-close" aria-label="Close search" onClick={() => { setSearchOpen(false); setQuery(""); }}><X size={24} /></button>
        </div>
        <SearchResults query={query} onSelect={() => { setSearchOpen(false); setQuery(""); }} />
      </section>
    </div>}
  </header>;
}
