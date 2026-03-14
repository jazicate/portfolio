import type { ReactNode } from "react";

import { cn } from "../../utils/cn.ts";
import Container from "./Container.tsx";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("py-20", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export default Section;
