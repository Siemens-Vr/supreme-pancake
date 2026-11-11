import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AboutPage, ContactPage, IndustriesPage, PartnersPage, QuotePage, ServicesPage, WhyPage } from "@/components/inner-pages";

const pages = {
  about: { title: "About Us", component: AboutPage },
  services: { title: "Services", component: ServicesPage },
  industries: { title: "Industries", component: IndustriesPage },
  "why-shonzawa": { title: "Why Shonzawa Ventures", component: WhyPage },
  partners: { title: "Technology Brands", component: PartnersPage },
  contact: { title: "Contact", component: ContactPage },
  quote: { title: "Request a Quote", component: QuotePage },
};
export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(pages).map(slug => ({slug})); }
export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> { const {slug} = await params; const page = pages[slug as keyof typeof pages]; return {title: page?.title || "Page not found", alternates: {canonical:`/${slug}`}}; }
export default async function InnerPage({params}: {params: Promise<{slug: string}>}) { const {slug} = await params; const page = pages[slug as keyof typeof pages]; if (!page) notFound(); const Component = page.component; return <Component/>; }
