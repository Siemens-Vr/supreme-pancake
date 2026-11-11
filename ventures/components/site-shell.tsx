"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { email, navigation, services } from "@/lib/content";
import { Icon } from "./icon";

export function Brand({ light = false }: { light?: boolean }) {
  return <Link href="/" aria-label="Shonzawa Ventures home" className={`brand ${light ? "brand-light" : ""}`}><svg aria-hidden="true" viewBox="0 0 54 48" width="48" height="44"><path d="M45 9C33-3 4 9 5 28c1 15 26 18 40 4" fill="none" stroke="currentColor" strokeWidth="3"/><path d="M42 4C27-3 1 12 7 28" fill="none" stroke="#e4002b" strokeWidth="3"/><path d="m35 13-17 10 17 6-17 9" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round"/></svg><span><strong>SHONZAWA<span className="brand-dot">.</span></strong><small>VENTURES</small></span></Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => { const handle = () => setScrolled(window.scrollY > 16); handle(); window.addEventListener("scroll", handle, { passive: true }); return () => window.removeEventListener("scroll", handle); }, []);
  useEffect(() => { const close = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}><div className="top-bar"><div className="container top-inner"><a href={`mailto:${email}`}><Icon name="mail" size={14}/>{email}</a><span>ICT Equipment · Networking · Security · Immersive Technology</span></div></div><div className="container navigation"><Brand/><nav aria-label="Main navigation" className="desktop-navigation">{navigation.map(([label, href]) => <Link href={href} key={href} className={pathname === href ? "nav-link active" : "nav-link"} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}</nav><Link href="/quote" className="button button-primary header-quote">Get Quote</Link><button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"}/></button></div>{open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-navigation">{navigation.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={pathname === href ? "active" : ""}>{label}<Icon name="chevron" size={16}/></Link>)}<Link onClick={() => setOpen(false)} href="/quote" className="mobile-quote">Request a Quote<Icon name="arrow" size={16}/></Link></nav>}</header>;
}

export function Footer() {
  return <footer className="site-footer navy-gradient"><div className="container footer-grid"><div className="footer-about"><Brand light/><p>ICT equipment, immersive technology, networking, CCTV, servers and backup solutions — connected through one partner.</p><a className="footer-email" href={`mailto:${email}`}><Icon name="mail" size={17}/>{email}</a></div><div><h3>Company</h3><ul><li><Link href="/about">About Us</Link></li><li><Link href="/why-shonzawa">Why Shonzawa</Link></li><li><Link href="/partners">Partners & Brands</Link></li><li><Link href="/industries">Industries</Link></li></ul></div><div><h3>Services</h3><ul>{services.map(service => <li key={service.id}><Link href={`/services#${service.id}`}>{service.title}</Link></li>)}</ul></div><div><h3>Let’s Connect</h3><p>Discuss your equipment requirements or next technology project.</p><Link href="/contact" className="footer-cta">Contact our team <Icon name="arrow" size={17}/></Link><Link href="/quote" className="footer-cta">Request a Quote <Icon name="arrow" size={17}/></Link></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Shonzawa Ventures. All rights reserved.</span><span>Your technology. Connected.</span></div></footer>;
}

export function ContactFloat() {
  return <Link href="/contact" className="contact-float" aria-label="Contact Shonzawa Ventures"><Icon name="message" size={25}/><span>Let’s talk</span></Link>;
}

export function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("revealed"); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    nodes.forEach(node => { node.classList.add("will-reveal"); observer.observe(node); });
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
