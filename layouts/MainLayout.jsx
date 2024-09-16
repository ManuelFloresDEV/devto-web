import NavBar from "@/components/Navbar/Navbar";

export default function MainLayout({ children, search, setSearch }) {
  return (
    <main>
      <NavBar search={search} setSearch={setSearch} />
      {children}
    </main>
  );
}
