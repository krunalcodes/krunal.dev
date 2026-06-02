"use client";

import { motion } from "framer-motion";
import { EXPERIENCE, EDUCATION } from "@/data/experience";
import {
  fadeUp,
  staggerContainer,
  defaultTransition,
  motionSafeProps,
} from "@/lib/motion";
import { SectionHeading } from "./section-heading";

export function ExperienceTimeline() {
  return (
    <section className="space-y-8">
      <SectionHeading
        title="Experience"
        description="9 years from founding engineer to solution architect and technical project manager."
      />
      <motion.div
        className="space-y-8"
        variants={staggerContainer}
        {...motionSafeProps}
      >
        {EXPERIENCE.map((job) => (
          <motion.div
            key={`${job.company}-${job.start}`}
            variants={fadeUp}
            transition={defaultTransition}
            className="relative border-l-2 border-border pl-6 md:pl-8"
          >
            <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-primary" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-lg font-semibold">{job.role}</h3>
              <span className="text-sm text-muted-foreground">
                {job.start} — {job.end}
              </span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              {job.company} · {job.location}
            </p>
            <ul className="mt-4 space-y-2">
              {job.highlights.map((item) => (
                <li
                  key={item.slice(0, 40)}
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
      <div className="rounded-2xl border border-border/60 bg-muted/20 p-6">
        <p className="text-sm font-medium text-muted-foreground">Education</p>
        <p className="mt-1 font-display font-semibold">{EDUCATION.degree}</p>
        <p className="text-sm text-muted-foreground">
          {EDUCATION.school} · {EDUCATION.years}
        </p>
      </div>
    </section>
  );
}
