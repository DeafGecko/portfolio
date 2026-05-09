export default function Layout({ children }: { children: React.ReactNode }) {
      return (
            <main className="bg-slate-950 text-slate-100 min-h-screen">
                  {children}
            </main>
      );
}