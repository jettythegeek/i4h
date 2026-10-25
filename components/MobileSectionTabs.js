"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useRef, useState } from "react";

export default function MobileSectionTabs({ items = [] }) {
  const track = useRef(null);
  const pathname = usePathname();
  const initialActive =
    items.find((item) => item.href.startsWith("/") && item.href === pathname)
      ?.href || items[0]?.href;
  const [active, setActive] = useState(initialActive);
  if (!items.length) return null;
  const move = (direction) =>
    track.current?.scrollBy({ left: direction * 240, behavior: "smooth" });
  return (
    <nav className="mobile-section-tabs" aria-label="Page sections">
      <button
        type="button"
        onClick={() => move(-1)}
        aria-label="Scroll section tabs left"
      >
        <CaretLeft size={19} weight="bold" />
      </button>
      <div className="mobile-section-track" ref={track}>
        {items.map((item) => (
          <Link
            className={active === item.href ? "active" : ""}
            href={item.href}
            key={item.href}
            onClick={() => setActive(item.href)}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <button
        type="button"
        onClick={() => move(1)}
        aria-label="Scroll section tabs right"
      >
        <CaretRight size={19} weight="bold" />
      </button>
    </nav>
  );
}
