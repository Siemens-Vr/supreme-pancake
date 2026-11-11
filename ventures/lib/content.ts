export const email = "info@shonzawaventures.com";

export const services = [
  {
    id: "vr-headsets", title: "VR Headsets", short: "VR Headsets", category: "IMMERSIVE TECHNOLOGY", icon: "vr",
    description: "Explore new ways to learn, train and experience with virtual reality headsets and accessories.",
    detail: "Virtual reality hardware for immersive experiences, learning, demonstrations and business applications.",
    items: ["Standalone VR headsets", "PC-compatible VR headsets", "Controllers and accessories", "Business and education applications", "Headset selection and procurement", "Setup guidance and support"],
    image: "/images/vr.webp",
  },
  {
    id: "ict-equipment", title: "ICT Equipment Supply", short: "ICT Equipment", category: "PROCUREMENT", icon: "laptop",
    description: "Laptops, desktops, printers and everyday business technology, selected for your requirements.",
    detail: "The right computing and office equipment for your team, your workplace and your budget.",
    items: ["Business laptops and desktops", "Monitors and workstations", "Printers and scanners", "Computer peripherals", "Storage devices and memory", "Office ICT accessories", "Equipment sourcing and quotations", "Hardware upgrades"],
    image: "/images/ict.webp",
  },
  {
    id: "networking", title: "Networking", short: "Networking", category: "CONNECTIVITY", icon: "network",
    description: "Structured cabling, routers, switches and wireless networks that keep your workplace connected.",
    detail: "Connect your people, devices and locations with a network designed around the way you work.",
    items: ["LAN and WAN networks", "Structured network cabling", "Routers and network switches", "Business Wi-Fi and access points", "Fibre connectivity equipment", "Network cabinets and accessories", "Network installation and configuration", "Network troubleshooting"],
    image: "/images/networking.webp",
  },
  {
    id: "cctv-installation", title: "CCTV Installation", short: "CCTV", category: "SURVEILLANCE", icon: "camera",
    description: "Cameras, recording systems and CCTV installation for visibility across your home or business.",
    detail: "A practical surveillance setup for your premises, from camera selection to installation and viewing.",
    items: ["IP and analogue CCTV cameras", "Indoor and outdoor camera systems", "NVR and DVR recording equipment", "Camera installation and positioning", "Surveillance storage", "Remote viewing configuration", "CCTV network cabling", "System maintenance and upgrades"],
    image: "/images/cctv.webp",
  },
  {
    id: "servers", title: "Server Supply", short: "Servers", category: "INFRASTRUCTURE", icon: "server",
    description: "Business servers, racks and storage equipment to support your applications and growing data needs.",
    detail: "Server hardware and supporting equipment selected for your workloads, capacity and future growth.",
    items: ["Tower and rack servers", "Server storage and drives", "Network Attached Storage", "Server memory and components", "Rack cabinets and accessories", "Server equipment procurement", "Hardware specification guidance", "Infrastructure upgrades"],
    image: "/images/servers.webp",
  },
  {
    id: "backups", title: "Backup Solutions", short: "Backups", category: "BUSINESS CONTINUITY", icon: "backup",
    description: "Data backup, storage and power backup equipment to help protect the work your business depends on.",
    detail: "Plan for interruptions with backup equipment and storage options suited to your business.",
    items: ["External backup drives", "Network backup storage", "Data backup planning", "Backup hardware and accessories", "UPS and power backup equipment", "Business continuity requirements", "Storage capacity upgrades", "Recovery planning guidance"],
    image: "/images/backup.webp",
  },
] as const;

export const industries = [
  { title: "Banking & Financial Services", description: "Computing, servers, networking and backup equipment for day-to-day financial operations.", icon: "bank" },
  { title: "Professional Services", description: "Reliable workplace equipment and connectivity for offices and distributed teams.", icon: "building" },
  { title: "NGOs & Organisations", description: "Practical ICT procurement, networking and installation services for mission-driven teams.", icon: "globe" },
  { title: "Retail & Business", description: "Connected equipment, CCTV and backup solutions for shops and commercial premises.", icon: "store" },
  { title: "Hotels & Hospitality", description: "Networks, surveillance and back-office computing for guest-focused environments.", icon: "hotel" },
  { title: "Education & Training", description: "Computing, VR headsets and network equipment for classrooms, labs and learning spaces.", icon: "school" },
  { title: "Healthcare", description: "Workplace computing, connectivity and equipment for clinics and healthcare offices.", icon: "heart" },
  { title: "Homes & Small Offices", description: "Wi-Fi, CCTV and technology equipment for everyday use and peace of mind.", icon: "home" },
  { title: "Corporate Enterprises", description: "Equipment supply, server infrastructure, networking and continuity requirements.", icon: "briefcase" },
] as const;

export const reasons = [
  { title: "One Point of Contact", text: "VR headsets, ICT equipment, networking, CCTV, servers and backups — coordinated through one technology supplier.", icon: "boxes" },
  { title: "Equipment That Fits", text: "Start with your requirements. We help you select equipment around the way your organisation works.", icon: "check" },
  { title: "Connected Thinking", text: "Consider devices, networks, surveillance, servers and backups together, so every part has a clear role.", icon: "network" },
  { title: "Practical Support", text: "Discuss installation, configuration and support needs alongside your equipment requirements.", icon: "support" },
  { title: "Clear Communication", text: "Understand the specification, scope and next steps before you move ahead with a project.", icon: "message" },
] as const;

export const navigation = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Industries", "/industries"],
  ["Why Shonzawa", "/why-shonzawa"], ["Partners", "/partners"], ["Contact", "/contact"],
] as const;
