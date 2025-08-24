// convert-buzzrent.js
// Converts buzzrent/index.html + buzzrent/pages/*.html (+ admin) into Next.js App Router routes
// Usage: node convert-buzzrent.js

const fs = require("fs");
const path = require("path");

const SRC_DIR = path.resolve("buzzrent");
const OUT_APP = path.resolve("src/app");
const OUT_PUBLIC = path.resolve("public");
const ASSETS_SRC = path.join(SRC_DIR, "assets");
const ASSETS_DEST = path.join(OUT_PUBLIC, "assets");

function read(p) { return fs.readFileSync(p, "utf8"); }
function write(p, s) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); }
function exists(p) { return fs.existsSync(p); }

function extractBody(html) {
  const m = /<body[^>]*>([\s\S]*?)<\/body>/i.exec(html);
  if (m) return m[1];
  const m2 = /<\/head>([\s\S]*)/i.exec(html);
  return m2 ? m2[1] : html;
}
function fixAssetPaths(html) {
  // make "assets/..." → "/assets/..."
  return html.replace(/(\s(?:src|href)=["'])assets\//gi, '$1/assets/');
}

function tsxWrapper(innerHtml, title = "Buzzrent") {
  const safe = innerHtml.replace(/`/g, "\\`");
  return `export const metadata = { title: "${title} | Buzzrent" };

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div dangerouslySetInnerHTML={{ __html: \`${safe}\` }} />
    </section>
  );
}
`;
}

function ensureLayout() {
  const layoutPath = path.join(OUT_APP, "layout.tsx");
  if (exists(layoutPath)) return;
  const layout = `import "./globals.css";

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
`;
  write(layoutPath, layout);

  const globals = `/* Keep or remove Tailwind lines if unused */
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body { scroll-behavior: smooth; }
a { text-underline-offset: 2px; }
section { padding-top: 3rem; padding-bottom: 3rem; }
`;
  write(path.join(OUT_APP, "globals.css"), globals);
}

function convertRoot() {
  const idx = path.join(SRC_DIR, "index.html");
  if (!exists(idx)) return;
  const body = fixAssetPaths(extractBody(read(idx)));
  write(path.join(OUT_APP, "page.tsx"),
`export const metadata = { title: "Buzzrent — Mobile Bee Hotels" };
export default function Home() {
  return (<div dangerouslySetInnerHTML={{ __html: \`${body.replace(/`/g,"\\\\`")}\` }} />);
}`);
}

function convertPages() {
  const PAGES_DIR = path.join(SRC_DIR, "pages");
  if (!exists(PAGES_DIR)) return;
  const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith(".html"));
  files.forEach(f => {
    const name = path.parse(f).name;
    const html = read(path.join(PAGES_DIR, f));
    const body = fixAssetPaths(extractBody(html));
    let routeDir = name;
    if (name === "privacy" || name === "terms") routeDir = path.join("legal", name);
    const out = path.join(OUT_APP, routeDir, "page.tsx");
    write(out, tsxWrapper(body, name.replace(/-/g," ").replace(/\b\w/g,c=>c.toUpperCase())));
  });

  const LEGAL = path.join(PAGES_DIR, "legal");
  if (exists(LEGAL)) {
    fs.readdirSync(LEGAL).filter(f => f.endsWith(".html")).forEach(f => {
      const name = path.parse(f).name;
      const html = read(path.join(LEGAL, f));
      const body = fixAssetPaths(extractBody(html));
      write(path.join(OUT_APP, "legal", name, "page.tsx"), tsxWrapper(body, `Legal — ${name}`));
    });
  }
}

function convertAdmin() {
  const adminIdx = path.join(SRC_DIR, "admin", "index.html");
  if (!exists(adminIdx)) return;
  const body = fixAssetPaths(extractBody(read(adminIdx)));
  write(path.join(OUT_APP, "admin", "page.tsx"), tsxWrapper(body, "Admin"));
}

function copyAssets() {
  if (!exists(ASSETS_SRC)) return;
  fs.mkdirSync(ASSETS_DEST, { recursive: true });
  const copyRecursive = (src, dest) => {
    const st = fs.statSync(src);
    if (st.isDirectory()) {
      fs.mkdirSync(dest, { recursive: true });
      for (const item of fs.readdirSync(src)) {
        copyRecursive(path.join(src, item), path.join(dest, item));
      }
    } else {
      fs.copyFileSync(src, dest);
    }
  };
  copyRecursive(ASSETS_SRC, ASSETS_DEST);
}

function main() {
  if (!exists(SRC_DIR)) {
    console.error(`❌ Expected folder not found: ${SRC_DIR}`);
    process.exit(1);
  }
  ensureLayout();
  convertRoot();
  convertPages();
  convertAdmin();
  copyAssets();
  console.log("✅ Converted HTML → src/app routes. Assets copied to public/assets.");
}

main();
