export type SocialLink = {
  label: string;
  href: string;
};

export type FooterProps = {
  email?: string;
  brandName?: string;
  socials?: SocialLink[];
};
