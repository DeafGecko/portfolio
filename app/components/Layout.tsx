import AmbientBackground from "./AmbientBackground";
import CursorGlow from "./CursorGlow";
import ScrollProgress from "./ScrollProgress";

export default function Layout({ children }: { children: React.ReactNode }) {
      return (
            <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
                  <AmbientBackground />
                  <CursorGlow />
                  <ScrollProgress />
                  {children}
            </div>
      );
}