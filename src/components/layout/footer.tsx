import Link from "next/link";

export function Footer() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative border-t border-primary/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-secondary/[0.02] to-accent/[0.02]" />

      <div className="container relative py-8">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Old World Labs © 2024. All Rights Reserved.
          </p>
          <nav className="flex items-center gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-primary/50 opacity-0 transition-all duration-300 group-hover:opacity-50" />
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
