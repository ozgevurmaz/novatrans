import { LucideIcon } from "lucide-react";

export interface FreightServiceType {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    image: string;
    bullets: string[];
    slug: string;
};

export interface allServicesType{
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServicesType {
  name: string,
  title: string,
  description: string,
  image: string,
  features: string[],
  icon: string,
  stats: { label: string, value: string }[],
  benefits: string[],
  process: { step: number, title: string, description: string }[],
  pricing: { tier: string, description: string, features: string[] }[]
}