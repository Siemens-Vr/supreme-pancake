import { Activity, ArrowRight, Award, Boxes, Building2, Camera, Check, ChevronRight, CloudUpload, Copy, DatabaseBackup, Gamepad2, Globe2, GraduationCap, HardDrive, HeartPulse, Home, Hotel, Landmark, Laptop, Mail, Menu, MessageSquare, Network, Send, Server, ShieldCheck, Store, Users, X, Wrench, BriefcaseBusiness, Headphones, Cpu, FileCheck, CheckCircle2 } from "lucide-react";

const icons = { activity: Activity, arrow: ArrowRight, award: Award, boxes: Boxes, building: Building2, camera: Camera, check: Check, chevron: ChevronRight, upload: CloudUpload, copy: Copy, backup: DatabaseBackup, vr: Gamepad2, globe: Globe2, school: GraduationCap, drive: HardDrive, heart: HeartPulse, home: Home, hotel: Hotel, bank: Landmark, laptop: Laptop, mail: Mail, menu: Menu, message: MessageSquare, network: Network, send: Send, server: Server, shield: ShieldCheck, store: Store, users: Users, close: X, wrench: Wrench, briefcase: BriefcaseBusiness, support: Headphones, cpu: Cpu, file: FileCheck, success: CheckCircle2 };
export function Icon({ name, size = 22, className = "" }: { name: string; size?: number; className?: string }) {
  const Component = icons[name as keyof typeof icons] || Boxes;
  return <Component aria-hidden="true" size={size} strokeWidth={1.8} className={className} />;
}
