export const metadata = { title: "Pricing | Buzzrent" };

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div dangerouslySetInnerHTML={{ __html: `
    <header>
        <!-- Header Component Placeholder -->
        <div class="component-placeholder">
            <h2>Header Navigation</h2>
            <p>Include your header/navigation component here.</p>
        </div>
    </header>

    <main>
        <h1>Pricing</h1>

        <section id="pricing-details">
            <h2>Our Pricing Plans</h2>
            <p>Details about per-hive, per-acre, and per-truck pricing will go here.</p>
            <!-- Pricing cards or table will be placed here -->
        </section>

        <section id="request-quote">
            <h2>Request a Custom Quote</h2>
            <p>Information or a link to the contact form for custom quotes.</p>
        </section>
    </main>

    <footer>
        <!-- Footer Component Placeholder -->
        <div class="component-placeholder">
            <h2>Footer</h2>
            <p>Include your footer component here.</p>
        </div>
    </footer>

    <script src="/assets/js/main.js"></script>
` }} />
    </section>
  );
}
