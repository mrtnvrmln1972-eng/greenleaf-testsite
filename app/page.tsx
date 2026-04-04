import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Diensten from "@/components/Diensten";
import Galerij from "@/components/Galerij";
import Projecten from "@/components/Projecten";
import Reviews from "@/components/Reviews";
import Waarom from "@/components/Waarom";
import Werkgebied from "@/components/Werkgebied";
import Conversie from "@/components/Conversie";
import Footer from "@/components/Footer";

export const revalidate = 60;

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Intro />
      <Diensten />
      <Galerij />
      <Projecten />
      <Reviews />
      <Waarom />
      <Werkgebied />
      <Conversie />
      <Footer />
    </main>
  );
}
