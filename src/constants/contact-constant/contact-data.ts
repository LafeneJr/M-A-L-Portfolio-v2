import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiTwitterXLine,
  RiMailLine,  
  RiWhatsappLine,
  RiTelegram2Line,
} from "react-icons/ri";

import type { IconType } from "react-icons";



export interface ContactInfo {
  title: string;

  value: string;

  icon: IconType;
}

export interface SocialLink {
  name: string;
  username: string;
  href: string;
  icon: IconType;
}

export interface AvailabilityCard {
  title: string;

  value: string;
}

export const CONTACT_HEADER = {
  section: "Contact",

  title: [
    "Let's build",
    " something",
    " remarkable.",
  ],

  description:
    "Whether you're building an AI platform, SaaS product, business website, I'd love to hear about your idea and help bring it to life.",
};


export const SOCIAL_LINKS: SocialLink[] = [
    {
    name: "Email",
    username: "lafene070@gamil.com",
    href:"mailto:lafene070@gmail.com?subject=Project%20Inquiry&body=Hello%20Muhammad,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
    icon: RiMailLine,
  },
  {
    name: "GitHub",
    username: "LafeneJr",
    href: "https://github.com/LafeneJr",
    icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    username: "Muhammad Aliyu Lafene",
    href: "https://www.linkedin.com/in/muhammad-aliyu-lafene-b35763261",
    icon: RiLinkedinBoxLine,
  },
  {
    name: "X",
    username: "@aliyu_lafene",
    href: "https://x.com/aliyu_lafene",
    icon: RiTwitterXLine,
  },
  {
    name: "WhatsApp",
    username: "@lafenejr",
    href: "https://wa.me/2347082679592",
    icon: RiWhatsappLine,
  },
  {
    name: "Telegram",
    username: "@lafenejr",
    href: "https://t.me/LafeneJr",
    icon: RiTelegram2Line,
  },
];

export const AVAILABILITY: AvailabilityCard[] = [
  {
    title: "Status",

    value: "Available",
  },

  {
    title: "Response",

    value: "< 24 Hours",
  },
];