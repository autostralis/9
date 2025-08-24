export const metadata = { title: "Buzzrent — Mobile Bee Hotels" };
export default function Home() {
  return (<div dangerouslySetInnerHTML={{ __html: `

    <!-- Header Component Placeholder -->
    <header>
        <!-- Insert content of components/nav.html here -->
        <div id="nav"></div>
    </header>

    <main>
        <section id="hero">
            <h1>Boost Your Yields with Beehive Rentals</h1>
            <button>Learn More</button>
            <button>Get a Quote</button>
        </section>

        <!-- Why Buzzrent Section -->
        <section id="why">
        </section>

        <!-- How It Works Section -->
        <section id="how">
        </section>

        <!-- Crops Section -->
        <section id="crops">
        </section>

        <!-- Pricing Section -->
        <section id="pricing">
        </section>

        <!-- Impact Section -->
        <section id="impact">
        </section>

        <!-- Contact Section -->
        <section id="contact">
        </section>

        <!-- Removed #stories and #faq as they were not part of the requested sections -->
        <!-- #stories Section -->
        <section id="stories">
            <h2>#stories Section</h2>
            <p>3 short testimonials</p>
        <!-- #faq Section -->
        <section id="faq">
            <h2>#faq Section</h2>
            <p>Accordions</p>
        </section>

        <!-- #contact Section -->
        <section id="contact">
            <h2>#contact Section</h2>
            <p>Lead form (name, mobile, email, state, crop, notes), address, WhatsApp</p>
        </section>

    </main>

    <!-- Footer Component Placeholder -->
    <footer>
        <!-- Insert content of components/footer.html here -->
        <div id="footer"></div>
    </footer>

    <!-- JavaScript -->
    <script src="/assets/js/firebase-init.js"></script>
    <script src="/assets/js/contact.js"></script>
    <script src="/assets/js/main.js"></script>
` }} />);
}