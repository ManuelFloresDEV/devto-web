import NavBar from "@/components/Navbar/Navbar";

export default function MainLayout({ children }) {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
}
