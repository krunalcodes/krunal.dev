import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import { BlogListItem } from "@/components/blog/blog-list-item";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/portfolio/hero-section";
import { MetricsBento } from "@/components/portfolio/metrics-bento";
import { CaseStudyCard } from "@/components/portfolio/case-study-card";
import { ExperienceTimeline } from "@/components/portfolio/experience-timeline";
import { OpenSourceStrip } from "@/components/portfolio/open-source-strip";
import { CTABand } from "@/components/portfolio/cta-band";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { FEATURED_CASE_STUDIES } from "@/data/case-studies";
import { SERVICES } from "@/data/services";

export default function Home() {
  const blogs = allBlogs
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 2);

  return (
    <div className="space-y-20 md:space-y-28">
      <HeroSection />
      <MetricsBento />

      <section className="space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            title="Selected work"
            description="Outcome-first case studies across AI, media, social, and scale."
          />
          <Button variant="ghost" asChild>
            <Link href="/work">
              View all work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {FEATURED_CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      <ExperienceTimeline />
      <OpenSourceStrip />

      <section className="space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            title="Work with me"
            description="Product builds, architecture, AI platforms, and technical leadership."
          />
          <Button variant="ghost" asChild>
            <Link href="/services">
              All services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {SERVICES.slice(0, 4).map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-border/60 p-6"
            >
              <h3 className="font-display font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTABand />

      {blogs.length > 0 ? (
        <>
          <Separator />
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <SectionHeading
                title="Writing"
                description="Technical notes and engineering practices."
              />
              <Button variant="ghost" asChild>
                <Link href="/blog">
                  View all posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="divide-y divide-border/40">
              {blogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="block hover:bg-muted/30 transition-colors duration-200 rounded-lg -mx-4 px-4 py-2"
                >
                  <BlogListItem blog={blog} />
                </Link>
              ))}
            </div>
          </section>
        </>
      ) : null}
    </div>
  );
}
