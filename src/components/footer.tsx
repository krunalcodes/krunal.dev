"use client";

import Link from "next/link";
import { siteMetadata } from "@/data/siteMetadata";
import { SOCIALS } from "@/data/socials";
import { SocialLink } from "./social-link";
import { Separator } from "@/components/ui/separator";
import { LINKS } from "@/data/links";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-20 space-y-6 pb-8">
      <Separator />

      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <p className="font-display font-semibold">{profile.name}</p>
          <p className="max-w-sm text-sm text-muted-foreground">
            {profile.title} · {profile.availability}
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href={LINKS.CAL_COM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              Book a call
            </a>
            <a
              href={LINKS.RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Resume (PDF)
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="flex space-x-4">
          {SOCIALS.map((social) => (
            <SocialLink
              key={social.label}
              aria-label={`Follow on ${social.label}`}
              href={social.href}
              icon={social.icon}
              className="text-muted-foreground hover:text-foreground transition-colors"
            />
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-muted-foreground md:text-left">
        &copy; 2026{" "}
        <Link
          href={siteMetadata.social.x}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          Krunal Shah
        </Link>
        . All rights reserved.
      </p>
    </footer>
  );
}
