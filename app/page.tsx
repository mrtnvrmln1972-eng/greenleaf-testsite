import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <ContactCTA />
      <Footer />
    </main>
  );
}
