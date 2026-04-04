import {
  fetchPage,
  parseHeroData,
  parseServicesData,
  parseContactData,
} from "@/lib/wordpress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export const revalidate = 60; // ISR: herlaad content elke 60 seconden

export default async function Home() {
  // Fetch alle pagina's parallel
  const [homePage, servicesPage, contactPage] = await Promise.all([
    fetchPage("home"),
    fetchPage("services"),
    fetchPage("contact"),
  ]);

  const heroData = homePage ? parseHeroData(homePage.content) : undefined;
  const diensten = servicesPage ? parseServicesData(servicesPage.content) : undefined;
  const contactData = contactPage ? parseContactData(contactPage.content) : undefined;

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero data={heroData} />
      <Services diensten={diensten} />
      <ContactCTA data={contactData} />
      <Footer />
    </main>
  );
}
