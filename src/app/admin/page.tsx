export const metadata = { title: "Admin | Buzzrent" };

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div dangerouslySetInnerHTML={{ __html: `
    <header>
        <!-- Admin header content -->
    </header>

    <main>
        <!-- Admin dashboard content -->
    </main>

    <footer>
        <!-- Admin footer content -->
    </footer>

    <script src="../assets/js/main.js"></script>
    <script src="admin.js"></script>
` }} />
    </section>
  );
}
