import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/case-studies";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type CaseStudyCardProps = {
  study: CaseStudy;
  className?: string;
  /** summary = home teaser; detail = full card on /work */
  variant?: "summary" | "detail";
};

export function CaseStudyCard({
  study,
  className,
  variant = "summary",
}: CaseStudyCardProps) {
  const isDetail = variant === "detail";

  return (
    <article
      id={isDetail ? study.slug : undefined}
      className={cn(
        "group flex h-full scroll-mt-24 flex-col rounded-2xl border border-border/60 bg-card/40 p-6 transition-all hover:border-primary/40 hover:bg-muted/20",
        className,
      )}
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {study.categories.slice(0, 2).map((cat) => (
          <Badge key={cat} variant="secondary" className="text-xs">
            {cat}
          </Badge>
        ))}
        {isDetail ? (
          <Badge variant="outline" className="text-xs">
            {study.role}
          </Badge>
        ) : null}
      </div>
      <h3 className="font-display text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
        {study.headline}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {study.company} · {study.region}
      </p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {study.problem}
      </p>

      {isDetail ? (
        <>
          <div className="mt-4 space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Architecture
            </p>
            <p className="text-sm leading-relaxed text-foreground/90">
              {study.architecture}
            </p>
          </div>
          <ul className="mt-4 space-y-1.5">
            {study.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="text-sm leading-relaxed text-muted-foreground before:mr-2 before:content-['→']"
              >
                {outcome}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ul className="mt-4 space-y-1.5">
          {study.metrics.slice(0, 3).map((metric) => (
            <li
              key={metric}
              className="text-sm font-medium text-foreground/90 before:mr-2 before:content-['→']"
            >
              {metric}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {study.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      {study.demo ? (
        <a
          href={study.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          View live
          <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
        </a>
      ) : !isDetail ? (
        <Link
          href={`/work#${study.slug}`}
          className="mt-4 inline-flex items-center text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors"
        >
          View case study
          <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
        </Link>
      ) : null}
    </article>
  );
}
