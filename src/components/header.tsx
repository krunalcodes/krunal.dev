"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggler } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/data/links";
import { Calendar } from "lucide-react";

const navItems = [
  { href: "/", name: "Home" },
  { href: "/work", name: "Work" },
  { href: "/services", name: "Services" },
  { href: "/blog", name: "Blog" },
];

export function Header() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }
  if (pathname === "/projects") {
    pathname = "/work";
  }

  return (
    <header className="sticky top-0 z-50 -mx-2 mb-12 mt-4 border-b border-border/40 bg-background/80 px-2 py-4 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 md:-mx-0 md:px-0">
      <nav className="flex w-full items-center justify-between gap-4">
        <div className="flex items-center gap-6 md:gap-8">
          <Link
            href="/"
            className="font-display text-sm font-semibold tracking-tight hover:text-primary transition-colors"
          >
            krunal.dev
          </Link>
          <div className="hidden sm:flex items-center gap-6">
            {navItems.map(({ href, name }) => {
              const isActive =
                href === pathname ||
                (href === "/work" && pathname.startsWith("/work"));
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground",
                    isActive ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" className="hidden md:inline-flex" asChild>
            <a
              href={LINKS.CAL_COM}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-1.5 h-3.5 w-3.5" />
              Book a call
            </a>
          </Button>
          <ThemeToggler />
        </div>
      </nav>
      <div className="mt-3 flex gap-4 sm:hidden overflow-x-auto pb-1">
        {navItems.map(({ href, name }) => {
          const isActive = href === pathname;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "shrink-0 text-sm font-medium whitespace-nowrap",
                isActive ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
