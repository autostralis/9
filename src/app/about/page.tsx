export const metadata = { title: "About | Buzzrent" };

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div dangerouslySetInnerHTML={{ __html: `

    <!-- Header Component Placeholder -->
    <header id="site-header">
        <!-- Content from components/nav.html goes here -->
        <p>Header Placeholder</p>
    </header>

    <main>
        <section id="about-us">
            <h1>About Buzzrent</h1>
            <!-- Content about Company, Team, Partners goes here -->
            <p>Content for the About Us page.</p>
        </section>
    </main>

    <!-- Footer Component Placeholder -->
    <footer id="site-footer">
        <!-- Content from components/footer.html goes here -->
        <p>Footer Placeholder</p>
    </footer>

    <!-- JS -->
    <script src="/assets/js/main.js"></script>
    <!-- <script src="/assets/js/firebase-init.js"></script> -->

` }} />
    </section>
  );
}
