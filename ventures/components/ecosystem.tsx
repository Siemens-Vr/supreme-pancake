"use client";
import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/content";
import { Icon } from "./icon";

export function Ecosystem() {
  const [selected, setSelected] = useState<number | null>(null);
  return <div className="ecosystem"><div className="ecosystem-hub navy-gradient"><span>Shonzawa Ventures</span><h3>{selected === null ? "One accountable partner" : services[selected].title}</h3><div className="red-rule"/><p>{selected === null ? "Equipment · Connectivity · Security · Continuity" : services[selected].detail}</p><Link href={selected === null ? "/services" : `/services#${services[selected].id}`}>Explore {selected === null ? "our services" : "this service"}<Icon name="arrow" size={16}/></Link></div>{services.map((service, index) => <button key={service.id} className={`ecosystem-card ecosystem-${index} ${selected === index ? "selected" : ""}`} aria-pressed={selected === index} onClick={() => setSelected(selected === index ? null : index)}><span className="icon-box"><Icon name={service.icon}/></span><h3>{service.title}</h3><p>{service.description}</p><Icon name="arrow" className="ecosystem-arrow" size={16}/></button>)}</div>;
}
