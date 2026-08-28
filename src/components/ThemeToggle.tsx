import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
      return (
      <>
      <style>{`
            @property --theme-toggle-border-angle {
                  syntax: "<angle>";
                  inherits: false;
                  initial-value: 0deg;
            }
            @keyframes theme-toggle-border-travel {
                  to { --theme-toggle-border-angle: 360deg; }
            }
            .theme-toggle::before {
                  content: "";
                  position: absolute;
                  inset: -1px;
                  padding: 1px;
                  border-radius: inherit;
                  background: conic-gradient(
                        from var(--theme-toggle-border-angle),
                        transparent 0 55%,
                        #2a52cc 72% 88%,
                        transparent 100%
                  );
                  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                  -webkit-mask-composite: xor;
                  mask-composite: exclude;
                  opacity: 0;
                  pointer-events: none;
            }
            .theme-toggle:hover::before {
                  opacity: 1;
                  animation: theme-toggle-border-travel 1.5s linear infinite;
            }
            .theme-toggle:hover {
                  background: rgba(42, 82, 204, 0.08);
                  color: #2a52cc;
            }
            .dark .theme-toggle:hover {
                  color: #5a8eff;
                  background: rgba(90, 142, 255, 0.06);
            }
            .dark .theme-toggle::before {
                  background: conic-gradient(
                        from var(--theme-toggle-border-angle),
                        transparent 0 55%,
                        #5a8eff 72% 88%,
                        transparent 100%
                  );
            }
            .theme-toggle .theme-icon-sun {
                  display: none;
            }
            .dark .theme-toggle .theme-icon-moon {
                  display: none;
            }
            .dark .theme-toggle .theme-icon-sun {
                  display: block;
            }
            @media (prefers-reduced-motion: reduce) {
                  .theme-toggle:hover::before {
                        animation: none;
                        opacity: 0;
                  }
            }
      `}</style>
      <button
            type="button"
            role="switch"
            aria-checked="false"
            aria-label="Switch to dark mode"
            data-theme-toggle
            className="
                  theme-toggle relative inline-flex h-11 w-11 items-center justify-center
                  rounded-sm text-gray-700 dark:text-gray-300
                  focus-visible:ring-2 focus-visible:ring-[#5a8eff] focus:outline-none
                  transition-colors duration-200
                  "
      >
            <Moon className="theme-icon-moon w-5 h-5" aria-hidden="true" />
            <Sun className="theme-icon-sun w-5 h-5" aria-hidden="true" />
      </button>
      </>
      );
};

export default ThemeToggle;