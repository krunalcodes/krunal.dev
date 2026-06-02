import { generatePageMetadata } from "../seo";
import { SERVICES, WORK_PROCESS } from "@/data/services";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { CTABand } from "@/components/portfolio/cta-band";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/data/links";
import { Calendar } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Services",
  description:
    "Product engineering, architecture & scale, AI-native platforms, and technical leadership for startups and founders.",
});

export default function ServicesPage() {
  return (
    <div className="space-y-20">
      <div className="space-y-6">
        <SectionHeading
          title="Work with me"
          description="I partner with founders and teams who need a senior builder—someone who ships production systems and thinks in business outcomes, not just tickets."
        />
        <Button asChild size="lg">
          <a href={LINKS.CAL_COM} target="_blank" rel="noopener noreferrer">
            <Calendar className="mr-2 h-4 w-4" />
            Book a free intro call
          </a>
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-border/60 bg-card/30 p-8"
          >
            <h2 className="font-display text-xl font-semibold">
              {service.title}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {service.description}
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Ideal for
                </p>
                <ul className="mt-2 space-y-1.5">
                  {service.idealFor.map((item) => (
                    <li key={item} className="text-sm text-foreground/90">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Deliverables
                </p>
                <ul className="mt-2 space-y-1.5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      → {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="space-y-8">
        <SectionHeading title="How we start" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WORK_PROCESS.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl border border-border/60 p-6"
            >
              <span className="font-display text-2xl font-bold text-primary/60">
                {step.step}
              </span>
              <h3 className="mt-2 font-display font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-dashed border-border p-8 space-y-4">
        <h2 className="font-display text-lg font-semibold">FAQ</h2>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-medium">Remote & timezone?</dt>
            <dd className="mt-1 text-muted-foreground">
              Based in Ahmedabad (IST). I work async-friendly with US, EU, and
              APAC teams.
            </dd>
          </div>
          <div>
            <dt className="font-medium">Do you write code or only advise?</dt>
            <dd className="mt-1 text-muted-foreground">
              Both—I architect and implement. Engagements range from hands-on
              builds to fractional technical leadership.
            </dd>
          </div>
          <div>
            <dt className="font-medium">Not a fit if…</dt>
            <dd className="mt-1 text-muted-foreground">
              You need a body shop for ticket churn without product context, or
              work outside web/platform engineering.
            </dd>
          </div>
        </dl>
      </section>

      <CTABand />
    </div>
  );
}
