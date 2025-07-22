import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="box-border flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
