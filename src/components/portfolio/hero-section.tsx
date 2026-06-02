"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { LINKS } from "@/data/links";
import { SOCIALS } from "@/data/socials";
import { SocialLink } from "@/components/social-link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeUp, defaultTransition } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-muted/40 via-background to-background p-8 md:p-12">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />
      <div className="relative grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reducedMotion ? { duration: 0 } : defaultTransition}
        >
          <Image
            src={profile.image}
            width={140}
            height={140}
            alt={profile.name}
            className="rounded-2xl ring-2 ring-border/80 shadow-lg"
            priority
          />
        </motion.div>

        <div className="space-y-6">
          <motion.div
            className="space-y-3"
            variants={reducedMotion ? undefined : fadeUp}
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            transition={
              reducedMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.05 }
            }
          >
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{profile.title}</Badge>
              <Badge variant="outline">{profile.location}</Badge>
              <Badge variant="outline">{profile.timezone}</Badge>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {profile.name}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              {profile.tagline}
            </p>
          </motion.div>

          <motion.p
            className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...defaultTransition, delay: 0.12 }}
          >
            {profile.headline}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...defaultTransition, delay: 0.18 }}
          >
            {SOCIALS.map((social) => (
              <SocialLink
                key={social.label}
                aria-label={`Follow on ${social.label}`}
                href={social.href}
                icon={social.icon}
                className="text-muted-foreground hover:text-foreground transition-colors"
              />
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...defaultTransition, delay: 0.24 }}
          >
            <Button asChild size="lg">
              <a
                href={LINKS.CAL_COM}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book a 30-min call
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={LINKS.RESUME} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download resume
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/work">
                View case studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
