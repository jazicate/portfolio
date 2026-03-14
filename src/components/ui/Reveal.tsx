import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;
};

function Reveal({ children, delay = 0, className, immediate = false }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32, scale: 0.985, filter: "blur(4px)" }}
      animate={immediate ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : undefined}
      whileInView={immediate ? undefined : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={immediate ? undefined : { once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
