import Link from "next/link";
import { footerLinks, navLinks, siteConfig } from "@/content/placeholders";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Logo className="h-7 w-auto" />
          <div className="text-center text-sm text-muted sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="mt-1">{siteConfig.tagline}</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted sm:justify-end">
          {navLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-foreground">
                {link.label}
              </Link>
            ))}
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
