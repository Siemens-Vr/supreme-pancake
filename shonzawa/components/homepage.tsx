"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Check,
  ChevronRight,
  Cpu,
  DatabaseBackup,
  Glasses,
  HardDrive,
  Layers,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Network,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";

const PHONE = "254728778476";
const quoteUrl = (service?: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(service ? `Hello Shonzawa Ventures, I'd like to request a quote for ${service}. My requirements are: ` : "Hello Shonzawa Ventures, I'd like to request a quote. I'm interested in: ")}`;

type Service = {
  id: string;
  title: string;
  heading: string;
  description: string;
  detail: string;
  points: string[];
  image: string;
  icon: LucideIcon;
  artLabels: string[];
};
const services: Service[] = [
  {
    id: "vr",
    title: "VR Headsets",
    heading: "VR headsets, to open up a new world of possibilities",
    description:
      "Explore immersive technology with VR hardware from Shonzawa Ventures. Tell us what you have in mind, and let's discuss the equipment you need.",
    detail: "Start with the headset. Imagine what comes next.",
    points: [
      "VR headset supply.",
      "Hardware enquiries for your requirements.",
      "Request a quotation for your equipment.",
    ],
    image: "vr",
    icon: Glasses,
    artLabels: ["Virtual Reality", "Immersive Hardware", "New Possibilities"],
  },
  {
    id: "ict",
    title: "ICT Equipment",
    heading: "ICT equipment, to keep your workspace moving",
    description:
      "Source the technology equipment your organisation needs. Share your equipment list, preferred specifications, and quantities with us.",
    detail: "The right conversation starts with your requirements.",
    points: [
      "ICT equipment supply.",
      "Equipment lists and specification enquiries.",
      "Quotations for your workspace hardware.",
    ],
    image: "ict",
    icon: Monitor,
    artLabels: ["Your Workspace", "Equipment Supply", "Everyday Technology"],
  },
  {
    id: "networking",
    title: "Networking",
    heading: "Networking, to bring your systems together",
    description:
      "Connect the people and equipment in your workspace. Speak to us about your network requirements and the setup you have in mind.",
    detail: "Let's talk about how your workspace connects.",
    points: [
      "Networking solutions.",
      "Network equipment enquiries.",
      "Discuss your connectivity requirements.",
    ],
    image: "networking",
    icon: Network,
    artLabels: ["Connected Systems", "Network Hardware", "Your Workspace"],
  },
  {
    id: "cctv",
    title: "CCTV Installation",
    heading: "CCTV installation, to see the bigger picture",
    description:
      "Plan a CCTV installation for your premises. Tell us about the space and the areas you want to monitor so we can discuss your requirements.",
    detail: "A clearer view starts with a conversation.",
    points: [
      "CCTV installation.",
      "Camera and monitoring requirements.",
      "Request a quotation for your premises.",
    ],
    image: "cctv",
    icon: ShieldCheck,
    artLabels: ["CCTV Systems", "Monitoring", "Installation"],
  },
  {
    id: "servers",
    title: "Server Supply",
    heading: "Server hardware, at the heart of your operations",
    description:
      "Source servers for your organisation. Share your preferred specifications or tell us what your systems need to start a quotation.",
    detail: "Equipment chosen around your requirements.",
    points: [
      "Server hardware supply.",
      "Specification and quantity enquiries.",
      "Quotations for your infrastructure.",
    ],
    image: "servers",
    icon: Server,
    artLabels: ["Server Hardware", "Infrastructure", "Your Operations"],
  },
  {
    id: "backup",
    title: "Backup Solutions",
    heading: "Backup solutions, for what matters to your business",
    description:
      "Explore backup solutions for your data. Let's discuss what you need to back up, your storage requirements, and the equipment involved.",
    detail: "Make room for a backup plan.",
    points: [
      "Backup solutions.",
      "Data storage requirements.",
      "Discuss the equipment you need.",
    ],
    image: "backup",
    icon: DatabaseBackup,
    artLabels: ["Backup Solutions", "Data Storage", "Plan Ahead"],
  },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.5 11.8a8.5 8.5 0 0 1-12.7 7.4l-4.3 1.3 1.3-4.2a8.5 8.5 0 1 1 15.7-4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.1 7.5c-.5 0-.9.7-.8 1.4.2 2.9 3.9 6.7 6.9 6.8.8 0 1.6-1.1 1.3-1.5l-1.9-1.1c-.4-.2-.7.5-1.1.6-.8.1-3.2-2.1-3.2-3 0-.5.8-.8.6-1.2L8.8 7.6l-.7-.1Z"
        fill="currentColor"
      />
    </svg>
  );
}
function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand ${compact ? "brand-compact" : ""}`}>
      <span>
        SHONZAWA
        <span className="brand-sun" />
      </span>
      <small>VENTURES LIMITED</small>
    </span>
  );
}
function Quote({
  service,
  className = "",
  simple = false,
  children = "Request a Quote",
}: {
  service?: string;
  className?: string;
  simple?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <a
      className={`${simple ? "button-simple" : "button-glow"} ${className}`}
      href={quoteUrl(service)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${typeof children === "string" ? children : "Request a Quote"}${service ? ` for ${service}` : ""} on WhatsApp (opens in a new tab)`}
    >
      {children}
      <ArrowRight size={15} aria-hidden="true" />
    </a>
  );
}
function Orbit({
  className = "",
  eager = false,
}: {
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`orbit ${className}`} aria-hidden="true">
      <Image
        src="/images/blue-ring.webp"
        alt=""
        width={1536}
        height={1580}
        sizes="(max-width: 760px) 110vw, 1200px"
        className="orbit-image"
        loading={eager ? "eager" : "lazy"}
      />
      <div className="orbit-glow" />
    </div>
  );
}
function ProductImage({
  name,
  alt,
  className = "",
  priority = false,
}: {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={`/images/${name}.webp`}
      alt={alt}
      width={960}
      height={960}
      className={`product-image ${className}`}
      sizes="(max-width: 760px) 90vw, 550px"
      priority={priority}
    />
  );
}

function HardwareBoard() {
  return (
    <div className="board-shell">
      <div className="hardware-board">
        <div className="board-top">
          <Brand compact />
          <div className="board-tabs">
            <span>
              <Layers size={13} />
              Hardware
            </span>
            <span>
              <Network size={13} />
              Networking
            </span>
            <span>
              <ShieldCheck size={13} />
              Security
            </span>
            <span>
              <Server size={13} />
              Infrastructure
            </span>
          </div>
          <span className="board-location">
            <span className="green-dot" />
            Nairobi, Kenya
          </span>
        </div>
        <div className="board-body">
          <div className="board-title">
            <h2>Hardware & technology</h2>
            <span>Shonzawa Ventures Limited</span>
          </div>
          <div className="board-categories">
            {services.slice(0, 4).map(({ id, title, icon: Icon }) => (
              <a href={`#${id}`} key={id}>
                <Icon size={22} />
                <div>
                  <span>EXPLORE OUR SERVICES</span>
                  <strong>{title}</strong>
                </div>
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
          <div className="board-products">
            <a href="#vr" className="board-immersive">
              <div className="board-panel-heading">
                <h3>A new world of possibilities</h3>
                <span>Explore VR headsets & immersive hardware</span>
              </div>
              <ProductImage
                name="vr"
                alt="Illustration of a VR headset and controllers"
                priority
              />
              <div className="board-panel-bottom">
                <Glasses size={19} />
                <span>VR headsets</span>
                <ArrowUpRight size={17} />
              </div>
            </a>
            <div className="board-infrastructure">
              <a href="#servers" className="board-mini-product">
                <div>
                  <Server size={18} />
                  <h3>Server supply</h3>
                  <span>Your digital foundation.</span>
                </div>
                <ProductImage
                  name="servers"
                  alt="Illustration of server hardware"
                />
                <ArrowUpRight size={16} />
              </a>
              <a href="#backup" className="board-mini-product">
                <div>
                  <DatabaseBackup size={18} />
                  <h3>Backup solutions</h3>
                  <span>Make room for a backup plan.</span>
                </div>
                <ProductImage
                  name="backup"
                  alt="Illustration of storage devices"
                />
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceArtwork({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;
  return (
    <div className={`feature-art art-${service.id}`}>
      <div className="feature-art-inner">
        <div className="art-list">
          {service.artLabels.map((label, i) => (
            <div className={`art-list-item item-${i}`} key={label}>
              <span className="art-icon">
                {i === 0 ? (
                  <Icon size={27} />
                ) : i === 1 ? (
                  <Layers size={25} />
                ) : (
                  <Box size={25} />
                )}
              </span>
              <div>
                <strong>{label}</strong>
                <span>
                  {i === 0
                    ? service.title
                    : i === 1
                      ? "Shonzawa Ventures"
                      : "Let's discuss your requirements"}
                </span>
              </div>
            </div>
          ))}
        </div>
        <Orbit className="feature-orbit" />
        <div className="feature-object">
          <ProductImage
            name={`cutouts/${service.image}`}
            alt={`Illustrative ${service.title.toLowerCase()} equipment`}
          />
        </div>
        <div className="art-floor" />
        <span className="art-reference">SHONZAWA / 0{index + 1}</span>
      </div>
    </div>
  );
}

export default function Homepage() {
  const root = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!menuOpen) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [menuOpen]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CustomEase);
    CustomEase.create("referenceEase", "0.25,0.1,0.25,1");
    const media = gsap.matchMedia();
    const ctx = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline();
        [1, 2, 3, 4].forEach((n) =>
          intro.from(
            `.load-${n}`,
            { y: 30, autoAlpha: 0, duration: 1.4, ease: "expo.out" },
            0.2 + n * 0.2,
          ),
        );
        intro
          .from(
            ".site-header",
            { autoAlpha: 0, duration: 1.4, ease: "expo.out" },
            1,
          )
          .from(
            ".hero-ring-turn",
            { rotation: -360, duration: 2.5, ease: "expo.out" },
            0.6,
          )
          .from(
            ".hero-ring",
            { scale: 0.7, autoAlpha: 0, duration: 2, ease: "expo.out" },
            1.2,
          )
          .from(
            ".hero-ring .orbit-glow",
            {
              x: -248,
              y: 95,
              rotation: -26,
              autoAlpha: 0,
              duration: 1.2,
              ease: "expo.out",
            },
            1.4,
          )
          .from(
            ".board-shell",
            {
              scale: 1.15,
              y: 100,
              autoAlpha: 0,
              duration: 1.2,
              ease: "expo.out",
            },
            1.2,
          )
          .from(
            ".light-beam",
            {
              scaleY: 0,
              autoAlpha: 0,
              stagger: 0.1,
              duration: 1.2,
              ease: "expo.out",
            },
            1,
          );
        const heroScroll = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
        heroScroll
          .to(
            ".hero-copy",
            { y: 408, opacity: 0, duration: 0.5, ease: "none" },
            0,
          )
          .to(".hero-ring-shift", { y: 600, duration: 0.5, ease: "none" }, 0)
          .to(
            ".hero-ring-scroll",
            { rotation: 90, duration: 0.5, ease: "none" },
            0,
          )
          .fromTo(
            ".hero-board-wrapper",
            { y: 40, scale: 1 },
            { y: -17, scale: 1.05, duration: 0.5, ease: "none" },
            0,
          );
        gsap.utils.toArray<HTMLElement>(".fade-in").forEach((item) =>
          gsap.from(item, {
            y: 20,
            autoAlpha: 0,
            delay: 0.3,
            duration: 0.8,
            ease: "referenceEase",
            scrollTrigger: { trigger: item, start: "top bottom", once: true },
          }),
        );
        gsap.utils
          .toArray<HTMLElement>(".service-row")
          .forEach((row, index) => {
            const art = row.querySelector(".feature-art");
            gsap.from(art, {
              x: index % 2 ? -100 : 100,
              autoAlpha: 0,
              duration: 1,
              delay: 0.15,
              ease: "power3.out",
              scrollTrigger: { trigger: row, start: "top 85%", once: true },
            });
            gsap.from(row.querySelectorAll(".feature-copy > *"), {
              y: 20,
              autoAlpha: 0,
              stagger: 0.07,
              delay: 0.3,
              duration: 0.8,
              ease: "referenceEase",
              scrollTrigger: { trigger: row, start: "top 85%", once: true },
            });
          });
        gsap.from(".cta-copy", {
          x: 65,
          autoAlpha: 0,
          rotationY: -55,
          duration: 0.6,
          ease: "referenceEase",
          scrollTrigger: {
            trigger: ".contact-cta",
            start: "top 78%",
            once: true,
          },
        });
        gsap.from(".cta-preview", {
          x: 177,
          autoAlpha: 0,
          delay: 0.1,
          duration: 0.6,
          ease: "referenceEase",
          scrollTrigger: {
            trigger: ".contact-cta",
            start: "top 78%",
            once: true,
          },
        });
        const light = root.current?.querySelector(
          ".cursor-light",
        ) as HTMLElement | null;
        if (!light || !window.matchMedia("(pointer:fine)").matches) return;
        const x = gsap.quickTo(light, "x", {
          duration: 0.65,
          ease: "power2.out",
        });
        const y = gsap.quickTo(light, "y", {
          duration: 0.65,
          ease: "power2.out",
        });
        const move = (e: PointerEvent) => {
          x(e.clientX);
          y(e.clientY);
          gsap.to(light, { opacity: 1, duration: 0.5, overwrite: "auto" });
        };
        const leave = () => gsap.to(light, { opacity: 0, duration: 0.5 });
        window.addEventListener("pointermove", move);
        document.documentElement.addEventListener("pointerleave", leave);
        return () => {
          window.removeEventListener("pointermove", move);
          document.documentElement.removeEventListener("pointerleave", leave);
        };
      });
    }, root);
    // Font metrics can change section heights after ScrollTrigger measures them.
    let disposed = false;
    void document.fonts.ready.then(() => {
      if (!disposed) ScrollTrigger.refresh();
    });
    return () => {
      disposed = true;
      media.revert();
      ctx.revert();
    };
  }, []);

  return (
    <div className="page-shell" ref={root}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-container">
          <a href="#home" aria-label="Shonzawa Ventures Limited home">
            <Brand />
          </a>
          <nav aria-label="Main navigation" className="main-nav">
            <a className="nav-current" href="#home">
              Home
            </a>
            <a href="#services">Services</a>
            <a href="#vr">VR Hardware</a>
            <a href="#ict">ICT Solutions</a>
            <a href="#contact">Contact Us</a>
          </nav>
          <div className="nav-actions">
            <Quote />
            <button
              id="menu-toggle"
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls={menuOpen ? "mobile-menu" : undefined}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            className="mobile-nav"
            id="mobile-menu"
            aria-label="Mobile navigation"
          >
            {[
              ["Home", "home"],
              ["Services", "services"],
              ["VR Hardware", "vr"],
              ["ICT Solutions", "ict"],
              ["Contact Us", "contact"],
            ].map(([name, id]) => (
              <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>
                {name}
                <ArrowRight size={17} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main">
        <section
          className="hero-section"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="hero-lights" aria-hidden="true">
            <div className="light-beam beam-left" />
            <div className="light-beam beam-middle" />
            <div className="light-beam beam-right" />
          </div>
          <div className="container hero-container">
            <div className="hero-copy">
              <a href="#services" className="ease-badge load-1">
                <span>Shonzawa</span>Technology & ICT
                <ChevronRight size={13} />
              </a>
              <div className="home-hero load-2">
                <h1 id="hero-title">
                  Technology & ICT
                  <br />
                  For Your Business.
                </h1>
              </div>
              <p className="hero-description load-3">
                VR headsets, ICT equipment, networking and security.
                <br className="desktop-break" /> The hardware and systems your
                business needs.
              </p>
              <div className="hero-buttons load-4">
                <a className="button-simple" href="#services">
                  Our Services
                  <ArrowRight size={15} />
                </a>
                <Quote />
              </div>
            </div>
            <div className="hero-ring-shift">
              <div className="hero-ring-scroll">
                <div className="hero-ring-turn">
                  <Orbit className="hero-ring" eager />
                </div>
              </div>
            </div>
            <div className="hero-board-wrapper">
              <HardwareBoard />
            </div>
          </div>
        </section>
        <section className="service-ticker-section">
          <div className="container">
            <p className="fade-in">
              Hardware and technology. Connected around your needs.
            </p>
            <div className="service-ticker fade-in">
              {services.map(({ id, title, icon: Icon }) => (
                <a href={`#${id}`} key={id}>
                  <Icon size={27} />
                  <span>{title}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="overview-section">
          <div className="container overview-grid">
            <a href="#vr" className="overview-card overview-wide fade-in">
              <div>
                <h3>Explore the immersive</h3>
                <p>
                  VR headsets and hardware.
                  <br />A new world of possibilities.
                </p>
              </div>
              <ProductImage name="vr" alt="VR headset and controllers" />
            </a>
            <a
              href="#networking"
              className="overview-card overview-tall fade-in"
            >
              <div>
                <h3>Stay connected</h3>
                <p>Networking for your workspace.</p>
              </div>
              <div className="network-art" aria-hidden="true">
                <span className="network-node node-a">
                  <Monitor size={32} />
                </span>
                <span className="network-node node-b">
                  <Network size={50} />
                </span>
                <span className="network-node node-c">
                  <Server size={30} />
                </span>
                <span className="network-node node-d">
                  <Cpu size={24} />
                </span>
                <i />
                <i />
                <i />
              </div>
            </a>
            <a href="#cctv" className="overview-card overview-security fade-in">
              <span className="overview-shield">
                <ShieldCheck size={86} strokeWidth={1} />
              </span>
              <div>
                <h3>See the bigger picture</h3>
                <p>CCTV installation for your premises.</p>
              </div>
            </a>
            <a
              href="#servers"
              className="overview-card overview-wide overview-storage fade-in"
            >
              <div>
                <h3>Your digital foundation</h3>
                <p>
                  Servers and backup solutions.
                  <br />
                  Built around your requirements.
                </p>
              </div>
              <ProductImage name="servers" alt="Illustrative server hardware" />
            </a>
          </div>
        </section>
        <section
          className="services-section"
          id="services"
          aria-labelledby="services-heading"
        >
          <div className="container">
            <div className="section-heading fade-in">
              <h2 className="title" id="services-heading">
                Technology & Services
              </h2>
              <p>
                Explore the hardware and systems available from Shonzawa
                Ventures.
                <br className="desktop-break" /> Six areas of focus. A
                conversation shaped around your requirements.
              </p>
            </div>
            <div className="feature-rows">
              {services.map((service, index) => (
                <article
                  className={`service-row ${index % 2 ? "reversed" : ""}`}
                  id={service.id}
                  key={service.id}
                  aria-labelledby={`${service.id}-title`}
                >
                  <div className="feature-copy">
                    <h3 id={`${service.id}-title`}>{service.heading}</h3>
                    <p>{service.description}</p>
                    <p className="feature-detail">{service.detail}</p>
                    <Quote service={service.title} simple />
                    <ul>
                      {service.points.map((point) => (
                        <li key={point}>
                          <span className="check-icon">
                            <Check size={17} />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ServiceArtwork service={service} index={index} />
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="container">
            <div className="section-heading fade-in">
              <h2 className="title" id="contact-heading">
                Let's Start a Conversation
              </h2>
              <p>
                Have an equipment list or a service in mind?
                <br />
                Choose how you'd like to get in touch with Shonzawa Ventures.
              </p>
            </div>
            <div className="contact-grid">
              <div className="contact-card fade-in">
                <div className="contact-card-top">
                  <Mail size={30} />
                  <h3>Email Us</h3>
                  <p>
                    Share your requirements, equipment list, or questions by
                    email.
                  </p>
                  <a
                    className="button-simple"
                    href="mailto:info@shonzawaventures.com"
                  >
                    Send an Email
                    <ArrowRight size={15} />
                  </a>
                </div>
                <div className="contact-card-bottom">
                  <span className="check-icon">
                    <Check size={15} />
                  </span>
                  <a href="mailto:info@shonzawaventures.com">
                    info@shonzawaventures.com
                  </a>
                </div>
              </div>
              <div className="contact-card featured fade-in">
                <div className="contact-card-top">
                  <WhatsAppIcon />
                  <h3>Request a Quote</h3>
                  <p>
                    Tell us what you need on WhatsApp. Edit the message and send
                    when ready.
                  </p>
                  <Quote>Let's Talk on WhatsApp</Quote>
                </div>
                <div className="contact-card-bottom">
                  <span className="check-icon">
                    <Check size={15} />
                  </span>
                  <span>+254 728 778476</span>
                </div>
              </div>
              <div className="contact-card fade-in">
                <div className="contact-card-top">
                  <Phone size={29} />
                  <h3>Give Us a Call</h3>
                  <p>
                    Discuss the equipment, installation, or systems you have in
                    mind.
                  </p>
                  <a className="button-simple" href="tel:+254728778476">
                    Call Shonzawa
                    <ArrowRight size={15} />
                  </a>
                </div>
                <div className="contact-card-bottom">
                  <span className="check-icon">
                    <Check size={15} />
                  </span>
                  <a href="tel:+254728778476">+254 728 778476</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-cta">
          <div className="container">
            <div className="cta-shell">
              <div className="cta-copy">
                <h2 className="title">
                  Connect Your Business
                  <br />
                  with Shonzawa
                </h2>
                <p>
                  VR hardware. ICT equipment. Networking.
                  <br />
                  CCTV, servers, and backup solutions.
                </p>
                <Quote />
              </div>
              <div className="cta-preview">
                <HardwareBoard />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#home" aria-label="Shonzawa Ventures Limited home">
                <Brand />
              </a>
              <p>
                Hardware and technology solutions.
                <br />
                Shonzawa Ventures Limited, Nairobi, Kenya.
              </p>
              <a
                className="footer-mail"
                href="mailto:info@shonzawaventures.com"
              >
                info@shonzawaventures.com
                <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="footer-column">
              <h3>EXPLORE</h3>
              <a href="#home">Home</a>
              <a href="#services">Our Services</a>
              <a href="#contact">Contact Us</a>
              <a href={quoteUrl()} target="_blank" rel="noopener noreferrer">
                Request a Quote
              </a>
            </div>
            <div className="footer-column">
              <h3>OUR SERVICES</h3>
              {services.map(({ id, title }) => (
                <a href={`#${id}`} key={id}>
                  {title}
                </a>
              ))}
            </div>
            <div className="footer-column footer-address">
              <h3>CONTACT</h3>
              <a href="tel:+254728778476">+254 728 778476</a>
              <span>
                P.O. Box 61896-00200
                <br />
                Nairobi, Kenya
              </span>
              <span className="footer-location">
                <MapPin size={14} />
                Nairobi, Kenya
              </span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} SHONZAWA VENTURES LIMITED.</span>
            <a href="#home">
              BACK TO TOP
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </footer>
      <div className="cursor-light" aria-hidden="true" />
    </div>
  );
}
