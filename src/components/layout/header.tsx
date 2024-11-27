"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "./mobile-nav";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <Image
          src="/logo_dark.svg"
          alt="Logo"
          width={32}
          height={32}
          className="h-8 w-8 dark:hidden"
          priority
        />
        <Image
          src="/logo_light.svg"
          alt="Logo"
          width={32}
          height={32}
          className="hidden h-8 w-8 dark:block"
          priority
        />
        <div className="absolute -inset-1 -z-10 animate-pulse rounded-full bg-primary/20 blur-lg dark:bg-primary/10" />
      </div>
      <span className="text-base font-light tracking-wider text-foreground [font-feature-settings:'ss01','ss02']">
        OLD WORLD LABS
      </span>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
        </Link>

        <nav className="flex flex-1 items-center justify-end space-x-2">
          <div className="mr-4 hidden space-x-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative px-3 py-2 text-sm transition-colors",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="relative">
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-2 left-0 h-px w-full bg-primary/50 opacity-0 transition-all duration-300",
                      pathname === item.href
                        ? "opacity-100"
                        : "group-hover:opacity-50"
                    )}
                  />
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="group relative hidden h-8 items-center justify-center gap-2 rounded-md border border-primary/20 bg-primary/5 px-4 text-sm text-foreground transition-all hover:border-primary/30 sm:flex"
            >
              Get Started
              <svg
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </Link>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <MobileNav items={navItems} />
          </div>
        </nav>
      </div>
    </header>
  );
}
