export const metadata = { title: "Crops | Buzzrent" };

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div dangerouslySetInnerHTML={{ __html: `

    <header>
        <!-- Placeholder for navigation component -->
        <div id="nav-placeholder">
            <!-- Content from components/nav.html will be loaded here -->
            <p>Loading navigation...</p>
        </div>
    </header>

    <main>
        <section id="crops-intro">
            <div class="container">
                <h1>Crops We Serve</h1>
                <p>Learn about the crops that benefit most from Buzzrent's mobile bee hotels, including recommended hive densities and timing for peak pollination.</p>
            </div>
        </section>

        <section id="crop-list">
            <div class="container">
                <!-- Grid of crop cards will go here -->
                <p>Crop information will be displayed here.</p>
                <div class="crop-grid">
                    <!-- Example Crop Card Placeholder -->
                    <div class="crop-card">
                        <h3>Almonds</h3>
                        <img src="/assets/img/crops/almonds.jpg" alt="Almond pollination" loading="lazy">
                        <p>Bloom Window: February - March</p>
                        <p>Hives/Acre: 8-10</p>
                        <p>Expected Uplift: 20-30%</p>
                        <p>Key States: California</p>
                    </div>
                    <!-- More crop cards... -->
                </div>
            </div>
        </section>

        <section id="pilot-regions">
            <div class="container">
                <h2>Pilot Regions</h2>
                <p>We are currently running pilot programs in the following regions. Contact us to discuss potential pollination services in your area.</p>
                <!-- Pilot region information or map will go here -->
                <p>Pilot region details...</p>
            </div>
        </section>
    </main>

    <footer>
        <!-- Placeholder for footer component -->
        <div id="footer-placeholder">
            <!-- Content from components/footer.html will be loaded here -->
            <p>Loading footer...</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="/assets/js/main.js"></script>
    <!-- Add specific scripts for this page if needed -->

` }} />
    </section>
  );
}
