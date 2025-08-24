export const metadata = { title: "Legal — terms | Buzzrent" };

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div dangerouslySetInnerHTML={{ __html: `
    <header>
        <!-- Placeholder for navigation component -->
        <div id="nav-placeholder"></div>
    </header>

    <main>
        <section id="terms">
            <div class="container">
                <h1>Terms of Service</h1>
                <p>This is the content area for the Terms of Service.</p>
                <!-- Add the actual terms and conditions content here -->
            </div>
        </section>
    </main>

    <footer>
        <!-- Placeholder for footer component -->
        <div id="footer-placeholder"></div>
    </footer>

    <!-- JS -->
    <script src="/assets/js/main.js"></script>
    <!-- Optional: Firebase related scripts -->
    <!-- <script src="/assets/js/firebase-init.js"></script> -->
    <!-- <script src="/assets/js/contact.js"></script> -->
` }} />
    </section>
  );
}
