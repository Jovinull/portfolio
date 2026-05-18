import type { ComponentType, SVGProps } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/icons/brand-icons";
import { siteConfig } from "@/lib/site";

export type SocialIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
  handle: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: siteConfig.social.github,
    icon: GithubIcon,
    handle: "@jovinull",
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: LinkedinIcon,
    handle: "felipe-jovino",
  },
  {
    label: "YouTube",
    href: siteConfig.social.youtube,
    icon: YoutubeIcon,
    handle: "Masters Tech",
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    handle: siteConfig.email,
  },
];
