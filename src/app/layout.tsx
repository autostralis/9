import "./globals.css";

export const metadata = {
  title: "Buzzrent — Mobile Bee Hotels for Pollination",
  description: "We bring truck-mounted beehives to your farm during bloom. Boost yields and fruit quality across India.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/base.css" />
        <link rel="stylesheet" href="/assets/css/layout.css" />
        <link rel="stylesheet" href="/assets/css/components.css" />
        <link rel="icon" href="/assets/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen bg-[#0b1117] text-[#e6edf3]">
        <header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-extrabold tracking-tight">Buzzrent</a>
            <div className="hidden sm:flex gap-4 text-sm">
              <a href="/how-it-works">How</a>
              <a href="/crops">Crops</a>
              <a href="/pricing">Pricing</a>
              <a href="/impact">Impact</a>
              <a href="/contact" className="px-3 py-1.5 rounded-full bg-yellow-400 text-black font-semibold">Book a pilot</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/70 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Buzzrent</span>
            <div className="flex gap-4">
              <a href="/legal/privacy">Privacy</a>
              <a href="/legal/terms">Terms</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
