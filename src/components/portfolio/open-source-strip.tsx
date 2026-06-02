import { OPEN_SOURCE } from "@/data/experience";
import { SectionHeading } from "./section-heading";
import { ArrowUpRight } from "lucide-react";

export function OpenSourceStrip() {
  return (
    <section className="space-y-8">
      <SectionHeading
        title="Open source"
        description="Third-party proof beyond self-written copy."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {OPEN_SOURCE.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border/60 p-5 transition-colors hover:border-primary/40 hover:bg-muted/20"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-semibold group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
            </div>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary/80">
              {item.role}
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
