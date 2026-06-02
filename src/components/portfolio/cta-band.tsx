import { Calendar, Mail } from "lucide-react";
import { LINKS } from "@/data/links";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";

type CTABandProps = {
  title?: string;
  description?: string;
};

export function CTABand({
  title = "Let's build something ambitious",
  description = "Remote roles, product builds, and architecture consulting—book a call or email directly.",
}: CTABandProps) {
  return (
    <section className="rounded-3xl border border-border bg-gradient-to-r from-muted/50 to-muted/20 p-8 md:p-10 text-center md:text-left">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 max-w-xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:justify-end">
          <Button asChild size="lg">
            <a href={LINKS.CAL_COM} target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-4 w-4" />
              Book a call
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={`mailto:${profile.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              {profile.email}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
