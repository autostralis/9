export const metadata = { title: "Faq | Buzzrent" };

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div dangerouslySetInnerHTML={{ __html: `

    <header>
        <!-- Placeholder for navigation component -->
        <div id="nav-placeholder"></div>
    </header>

    <main>
        <h1>Frequently Asked Questions</h1>

        <!-- FAQ content goes here -->

    </main>

    <footer>
        <!-- Placeholder for footer component -->
        <div id="footer-placeholder"></div>
    </footer>

` }} />
    </section>
  );
}
