export const metadata = { title: "Impact | Buzzrent" };

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div dangerouslySetInnerHTML={{ __html: `

    <header>
        <!-- Placeholder for navigation component -->
        <!-- In a static build, you would paste the content of components/nav.html here -->
        <div class="placeholder-nav">
            [Navigation Placeholder]
        </div>
    </header>

    <main>
        <section id="impact-content">
            <h1>Our Impact: Bee Welfare, Transparency, and Safety</h1>
            <p>Details about Buzzrent's commitment to the health and well-being of our bees, the transparency of our operations, and the safety protocols we follow.</p>
            <!-- Content related to Bee Welfare Policy, Colony-days Delivered Metric, Insurance Note -->
        </section>
    </main>

    <footer>
        <!-- Placeholder for footer component -->
        <!-- In a static build, you would paste the content of components/footer.html here -->
        <div class="placeholder-footer">
            [Footer Placeholder]
        </div>
    </footer>

    <script src="/assets/js/main.js"></script>
` }} />
    </section>
  );
}
