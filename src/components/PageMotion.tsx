import { motion, AnimatePresence } from "motion/react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Wrap the route Outlet with a fade-up entrance on every navigation.
 *
 * Section-level scroll reveals are handled in CSS (see `reveal-up` in
 * styles.css) rather than here: routes hydrate lazily, so touching a
 * server-rendered section from an effect races hydration.
 */
export function PageMotion({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <main data-page>{children}</main>
      </motion.div>
    </AnimatePresence>
  );
}
