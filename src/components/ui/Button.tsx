import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "../../utils/cn.ts";

type SharedProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type AnchorProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = AnchorProps | NativeButtonProps;

const variantClasses = {
  primary:
    "bg-[var(--color-accent)] text-slate-950 shadow-[0_16px_40px_rgba(204,122,47,0.22)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)]",
  secondary:
    "border border-[var(--color-border-strong)] bg-[var(--color-card)] text-[var(--color-text)] hover:-translate-y-0.5 hover:bg-[var(--color-card-hover)]",
  ghost: "text-[var(--color-muted)] hover:text-[var(--color-text)]",
};

const baseClassName =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200";

function Button(props: ButtonProps) {
  if ("href" in props && props.href) {
    const { children, variant = "primary", className, href, ...rest } = props;
    return (
      <a href={href} className={cn(baseClassName, variantClasses[variant], className)} {...rest}>
        {children}
      </a>
    );
  }

  const { children, variant = "primary", className, type = "button", ...rest } =
    props as NativeButtonProps;

  return (
    <button
      type={type}
      className={cn(baseClassName, variantClasses[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
