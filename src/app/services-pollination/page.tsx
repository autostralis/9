export const metadata = { title: "Services Pollination | Buzzrent" };

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div dangerouslySetInnerHTML={{ __html: `

    <header>
        <!-- Placeholder for navigation component -->
        <div data-component="nav"></div>
    </header>

    <main>
        <section>
            <h1>Mobile Bee Hotels for Pollination</h1>
            <h2>What's Included and SLAs</h2>
            <!-- Content related to what's included and SLAs goes here -->
        </section>

        <section>
            <h2>Safety and No-Spray Protocol</h2>
            <p>Download our safety and no-spray protocol PDF.</p>
            <a href="/assets/docs/safety-protocol.pdf" download>Download PDF</a> <!-- Replace with your actual PDF path -->
            <!-- Content related to safety and no-spray protocol goes here -->
        </section>
    </main>

    <footer>
        <!-- Placeholder for footer component -->
        <div data-component="footer"></div>
    </footer>

    <!-- Add your JS links here -->
    <script src="/assets/js/main.js"></script>
    <script src="/assets/js/firebase-init.js"></script>
` }} />
    </section>
  );
}
