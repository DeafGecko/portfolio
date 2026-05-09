import type { Variants } from "framer-motion";

export const sectionVariants: Variants = {
      hidden: {
            opacity: 0,
            y: 40,
      },
      show: {
            opacity: 1,
            y: 0,
            transition: {
                  duration: 0.6,
                  ease: "easeOut",
            },
      },
};