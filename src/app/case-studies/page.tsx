export const metadata = { title: "Case Studies | Buzzrent" };

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div dangerouslySetInnerHTML={{ __html: `

    <header>
        <!-- Placeholder for navigation component -->
        <!-- Include: components/nav.html -->
        <div class="nav-placeholder">
            <p>Navigation will go here</p>
        </div>
    </header>

    <main>
        <section id="case-studies">
            <div class="container">
                <h1>Case Studies</h1>
                <p>Details about our pilot programs and farmer stories will go here.</p>
                <!-- Placeholder for case study content -->
            </div>
        </section>
    </main>

    <footer>
        <!-- Placeholder for footer component -->
        <!-- Include: components/footer.html -->
        <div class="footer-placeholder">
            <p>Footer will go here</p>
        </div>
    </footer>

    <!-- JS -->
    <script src="/assets/js/main.js"></script>
` }} />
    </section>
  );
}
