"use client";

import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  Cross2Icon,
  HamburgerMenuIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

interface NavItem {
  href: string;
  label: string;
}

interface MobileNavProps {
  items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="relative h-8 w-8 rounded-md border border-primary/20 bg-primary/5 text-foreground transition-colors hover:border-primary/30 md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <HamburgerMenuIcon className="h-4 w-4" />
        <span className="sr-only">Open menu</span>
      </Button>

      {isOpen && (
        <div className="fixed left-0 top-0 z-[100] h-[100dvh] w-screen md:hidden">
          <div
            className="absolute inset-0 bg-background"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div className="relative flex h-full w-full flex-col bg-background">
            <div className="border-b border-primary/10">
              <div className="container flex h-14 items-center justify-between">
                <Link href="/" onClick={() => setIsOpen(false)}>
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
                    <span className="text-sm font-light tracking-wider text-foreground [font-feature-settings:'ss01','ss02']">
                      OLD WORLD LABS
                    </span>
                  </div>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-md border border-primary/20 bg-primary/5 text-foreground transition-colors hover:border-primary/30"
                  onClick={() => setIsOpen(false)}
                >
                  <Cross2Icon className="h-4 w-4" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
            </div>

            <div className="flex-1">
              <div className="container py-8">
                <nav className="flex flex-col">
                  {items.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "group flex items-center border-b border-primary/5 py-4 transition-all duration-300",
                        pathname === item.href
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                      style={{
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      <div className="flex w-full items-center justify-between">
                        <span className="text-base font-light">
                          {item.label}
                        </span>
                        <ArrowRightIcon className="h-4 w-4 transform opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            <div className="border-t border-primary/10">
              <div className="container py-6">
                <Link
                  href="/contact"
                  className="group mb-6 flex h-10 w-full items-center justify-center gap-2 rounded-md border border-primary/20 bg-primary/5 px-4 text-sm text-foreground transition-all hover:border-primary/30"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">Get Started</span>
                  <svg
                    className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
                <div className="flex justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 rounded-md border border-primary/20 bg-primary/5 text-foreground transition-colors hover:border-primary/30"
                    onClick={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    }
                  >
                    <SunIcon className="h-3.5 w-3.5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
