import Link from "next/link";
import { Icon } from "./icon";

export function Button({ children, href, variant = "primary", arrow = false }: { children: React.ReactNode; href: string; variant?: "primary" | "outline" | "light"; arrow?: boolean }) {
  return <Link className={`button button-${variant}`} href={href}>{children}{arrow && <Icon name="arrow" size={17}/>}</Link>;
}
export function SectionHeading({ eyebrow, title, description, dark = false }: { eyebrow: string; title: React.ReactNode; description?: string; dark?: boolean }) {
  return <div className={`section-heading ${dark ? "on-dark" : ""}`}><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <section className="page-hero grid-background"><div className="container"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1>{description && <p>{description}</p>}</div></section>;
}
export function CallToAction({ title = "Let’s build the technology behind your next stage of growth.", description = "From ICT equipment and immersive technology to networking, CCTV, servers and backups — start the conversation with Shonzawa Ventures." }: {title?: string; description?: string}) {
  return <section className="section cta-section"><div className="container cta-inner"><div><div className="eyebrow">Ready to talk?</div><h2>{title}</h2><p>{description}</p></div><div className="button-row"><Button href="/quote" arrow>Request a Quote</Button><Button href="/contact" variant="outline">Talk to Us</Button></div></div></section>;
}
