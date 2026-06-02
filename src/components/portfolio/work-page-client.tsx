"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CASE_STUDIES,
  CASE_STUDY_CATEGORIES,
  type CaseStudyCategory,
} from "@/data/case-studies";
import { CaseStudyCard } from "./case-study-card";
import { cn } from "@/lib/utils";
import { defaultTransition } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function WorkPageClient() {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState<CaseStudyCategory | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return CASE_STUDIES;
    return CASE_STUDIES.filter((s) => s.categories.includes(active));
  }, [active]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-2">
        <FilterChip
          label="All"
          active={active === "All"}
          onClick={() => setActive("All")}
        />
        {CASE_STUDY_CATEGORIES.map((cat) => (
          <FilterChip
            key={cat}
            label={cat}
            active={active === cat}
            onClick={() => setActive(cat)}
          />
        ))}
      </div>

      <motion.div
        layout
        className="grid gap-6 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((study) => (
            <motion.div
              key={study.slug}
              layout={!reducedMotion}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={reducedMotion ? { duration: 0 } : defaultTransition}
            >
              <CaseStudyCard study={study} variant="detail" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}
