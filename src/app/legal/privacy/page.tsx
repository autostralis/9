export const metadata = { title: "Legal — privacy | Buzzrent" };

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div dangerouslySetInnerHTML={{ __html: `

    <header>
        <!-- Placeholder for shared navigation component -->
        <div data-include="components/nav.html"></div>
    </header>

    <main>
        <section class="section">
            <div class="container">
                <h1>Privacy Policy</h1>
                <p>This is the content area for the privacy policy. Add your privacy policy text here.</p>
            </div>
        </section>
    </main>

    <footer>
        <!-- Placeholder for shared footer component -->
        <div data-include="components/footer.html"></div>
    </footer>

    <script src="../assets/js/main.js"></script>
    <!-- Optional: Include other scripts if needed for this page -->
    <script>
        // Basic include functionality (for static sites)
        function includeHTML() {
          var z, i, elmnt, file, xhttp;
          /*loop through a collection of all HTML elements:*/
          z = document.getElementsByTagName("*");
          for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            /*search for elements with a certain attribute:*/
            file = elmnt.getAttribute("data-include");
            if (file) {
              /*make an HTTP request using the attribute value as the file name:*/
              xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                  if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                  if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                  /*remove the attribute, and call this function once more:*/
                  elmnt.removeAttribute("data-include");
                  includeHTML();
                }
              }
              xhttp.open("GET", file, true);
              xhttp.send();
              /*exit the function:*/
              return;
            }
          }
        };
        includeHTML();
    </script>

` }} />
    </section>
  );
}
