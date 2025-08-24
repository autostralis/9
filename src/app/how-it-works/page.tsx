export const metadata = { title: "How It Works | Buzzrent" };

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div dangerouslySetInnerHTML={{ __html: `

    <header>
        <!-- Placeholder for Navigation Component -->
        <!-- Ideally, include using server-side includes or templating -->
        <div id="nav-placeholder"></div>
    </header>

    <main>
        <section id="how-it-works">
            <div class="container">
                <h1>How It Works</h1>
                <p>Understanding how Buzzrent's mobile bee hotels facilitate optimal crop pollination is simple. Follow our four-step process to enhance your yields and minimize risk.</p>

                <!-- Step 1 -->
                <div class="how-step">
                    <div class="step-icon">
                        <!-- Icon Placeholder -->
                        <img src="/assets/img/icons/plan.svg" alt="Plan Icon">
                    </div>
                    <div class="step-content">
                        <h2>Step 1: Plan</h2>
                        <p>Work with our pollination experts to determine the ideal number of hives, placement locations within your fields, and the optimal timing based on your crop's bloom window and specific pollination needs.</p>
                    </div>
                </div>

                <!-- Step 2 -->
                <div class="how-step">
                    <div class="step-icon">
                        <!-- Icon Placeholder -->
                        <img src="/assets/img/icons/deploy.svg" alt="Deploy Icon">
                    </div>
                    <div class="step-content">
                        <h2>Step 2: Deploy</h2>
                        <p>Buzzrent handles the logistics of transporting and deploying the mobile bee hotels directly to your designated locations. Our specialized equipment ensures safe and efficient placement.</p>
                    </div>
                </div>

                <!-- Step 3 -->
                <div class="how-step">
                    <div class="step-icon">
                        <!-- Icon Placeholder -->
                        <img src="/assets/img/icons/pollinate.svg" alt="Pollinate Icon">
                    </div>
                    <div class="step-content">
                        <h2>Step 3: Pollinate</h2>
                        <p>Our healthy and active bee colonies will actively pollinate your crops during their bloom period. Buzzrent conducts regular inspections to ensure hive health and effectiveness.</p>
                    </div>
                </div>

                <!-- Step 4 -->
                <div class="how-step">
                    <div class="step-icon">
                        <!-- Icon Placeholder -->
                        <img src="/assets/img/icons/harvest.svg" alt="Harvest Icon">
                    </div>
                    <div class="step-content">
                        <h2>Step 4: Harvest</h2>
                        <p>Experience the benefits of improved pollination with increased yields and crop quality. Buzzrent will then efficiently remove the mobile bee hotels from your property at the end of the pollination season.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Placeholder for Site-wide CTA Component -->
        <div id="cta-placeholder"></div>
    </main>

    <footer>
        <!-- Placeholder for Footer Component -->
        <!-- Ideally, include using server-side includes or templating -->
        <div id="footer-placeholder"></div>
    </footer>

    <!-- JS -->
    <script src="/assets/js/main.js"></script>
    <!-- Optional: If using Firebase -->
    <!-- <script src="/assets/js/firebase-init.js"></script> -->

` }} />
    </section>
  );
}
