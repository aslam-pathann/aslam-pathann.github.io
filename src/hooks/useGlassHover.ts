import { useCallback, useRef } from "react";
import type { MouseEvent } from "react";

/**
 * Tracks pointer position over an element and exposes it as CSS custom
 * properties (--mx, --my). Paired with the .glass-card / .glass-card-sheen
 * classes in index.css to create a soft light "sheen" that follows the
 * cursor across every glass card on the site.
 */
export function useGlassHover<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const onMouseMove = useCallback((e: MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  }, []);

  return { ref, onMouseMove };
}
