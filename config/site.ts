import { Metadata } from "next";

export const siteConfig = {
  name: "Taskify",
  description:
    "Collaborative, manage projects, and reach new productivity peaks.",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s | " + siteConfig.name,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "logo.svg",
      href: "logo.svg",
    },
  ],
};
