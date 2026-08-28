import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { href: '#works-section', label: 'Work' },
    { href: '#techstack-section', label: 'Stack' },
    { href: '#experience-section', label: 'Experience' },
    { href: '#contact-section', label: 'Contact' },
  ];

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={toggleMenu}
        className="
          inline-flex h-11 w-11 items-center justify-center rounded-sm
          text-gray-700 dark:text-gray-300 
          hover:text-gray-900 dark:hover:text-white 
          hover:bg-gray-100 dark:hover:bg-zinc-800
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5a8eff]
          transition-colors
        "
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div
          className="
            absolute top-full left-0 w-full 
            bg-[#dfe2e3] dark:bg-zinc-900 
            border-b border-gray-200 dark:border-zinc-700 
            shadow-lg
            md:hidden
          "
        >
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex flex-col items-start px-4 py-4 space-y-3">
            {navLinks.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex min-h-11 items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <span
                  key={link.label}
                  aria-disabled="true"
                  title={`${link.label} section coming soon`}
                  className="text-sm font-medium text-[#565d66] dark:text-gray-400 cursor-not-allowed"
                >
                  {link.label}<span className="sr-only"> (section coming soon)</span>
                </span>
              ),
            )}
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileMenu;