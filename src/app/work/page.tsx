import { generatePageMetadata } from "../seo";
import { WorkPageClient } from "@/components/portfolio/work-page-client";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { CTABand } from "@/components/portfolio/cta-band";

export const metadata = generatePageMetadata({
  title: "Work",
  description:
    "Case studies: AI tax automation, billion-request news platforms, social scale, edtech, Web3, and more.",
});

export default function WorkPage() {
  return (
    <div className="space-y-16">
      <SectionHeading
        title="Case studies"
        description="Problem → architecture → stack → measurable outcomes. Filter by domain."
      />
      <WorkPageClient />
      <CTABand
        title="Interested in similar outcomes?"
        description="Let's discuss your product, scale challenges, or team needs."
      />
    </div>
  );
}
