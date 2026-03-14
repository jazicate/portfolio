import type { ReactNode } from "react";

import { cn } from "../../utils/cn.ts";

type SocialLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

function SocialLink({ href, children, className }: SocialLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] transition duration-200 hover:-translate-y-0.5 hover:text-[var(--color-text)]",
        className,
      )}
    >
      {children}
    </a>
  );
}

export default SocialLink;
