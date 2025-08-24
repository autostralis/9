export const metadata = { title: "Blog | Buzzrent" };

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div dangerouslySetInnerHTML={{ __html: `
    <header>
        <!-- Placeholder for navigation component -->
        <div data-component="nav">
            <!-- Navigation content goes here -->
        </div>
    </header>

    <main>
        <section>
            <h1>Blog</h1>
            <p>Latest articles on pollination science, best practices, and Buzzrent updates.</p>
            <!-- Blog posts will be listed here -->
        </section>
    </main>

    <footer>
        <!-- Placeholder for footer component -->
        <div data-component="footer">
            <!-- Footer content goes here -->
        </div>
    </footer>

    <script src="/assets/js/main.js"></script>
` }} />
    </section>
  );
}
