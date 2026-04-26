import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}