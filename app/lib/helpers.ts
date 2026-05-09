// src/lib/helpers.ts

// Combine class names (useful for conditional Tailwind)
export function cn(...classes: (string | undefined | false)[]) {
      return classes.filter(Boolean).join(" ");
}

// Smooth scroll to section
export function scrollToId(id: string) {
      const el = document.getElementById(id);
      if (!el) return;

      el.scrollIntoView({
            behavior: "smooth",
            block: "start",
      });
}

// Format text (optional utility)
export function capitalize(text: string) {
      return text.charAt(0).toUpperCase() + text.slice(1);
}

// Delay (useful for animations/testing)
export function wait(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
}