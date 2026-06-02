"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./icons";
import { Button } from "@/components/ui/button";

export function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="h-9 w-9 px-0"
      aria-label="Toggle theme"
    >
      {!mounted ? (
        <span className="inline-block h-[18px] w-[18px]" aria-hidden />
      ) : resolvedTheme === "dark" ? (
        <SunIcon height={18} width={18} />
      ) : (
        <MoonIcon height={18} width={18} />
      )}
    </Button>
  );
}
