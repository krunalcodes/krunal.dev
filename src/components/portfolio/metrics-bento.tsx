"use client";

import { motion } from "framer-motion";
import { HIGHLIGHTS } from "@/data/highlights";
import {
  fadeUp,
  staggerContainer,
  defaultTransition,
  motionSafeProps,
} from "@/lib/motion";
import { SectionHeading } from "./section-heading";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function MetricsBento() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="space-y-8">
      <SectionHeading
        title="Impact at a glance"
        description="Proof points from production systems—not resume filler."
      />
      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={reducedMotion ? undefined : staggerContainer}
        {...(reducedMotion ? {} : motionSafeProps)}
      >
        {HIGHLIGHTS.map((item) => (
          <motion.article
            key={item.label}
            variants={reducedMotion ? undefined : fadeUp}
            transition={reducedMotion ? { duration: 0 } : defaultTransition}
            className="group rounded-2xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/30 hover:bg-muted/30"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {item.label}
            </p>
            <p className="mt-2 font-display text-3xl font-bold tracking-tight">
              {item.value}
            </p>
            {item.description ? (
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            ) : null}
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
