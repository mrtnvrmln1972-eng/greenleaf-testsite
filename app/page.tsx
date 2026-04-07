import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Galerij from "@/components/Galerij";
import Diensten from "@/components/Diensten";
import Projecten from "@/components/Projecten";
import Reviews from "@/components/Reviews";
import Tuinstijlen from "@/components/Tuinstijlen";
import Waarom from "@/components/Waarom";
import Werkgebied from "@/components/Werkgebied";
import Conversie from "@/components/Conversie";
import Footer from "@/components/Footer";

export const revalidate = 60;

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <Galerij />
      <Diensten />
      <Projecten />
      <Reviews />
      <Tuinstijlen />
      <Waarom />
      <Werkgebied />
      <Conversie />
      <Footer />
    </main>
  );
}
