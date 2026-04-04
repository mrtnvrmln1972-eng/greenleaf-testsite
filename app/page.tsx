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

export const revalidate = 60;

export default async function Home() {
  const [homePage, servicesPage, contactPage] = await Promise.all([
    fetchPage("home"),
    fetchPage("services"),
    fetchPage("contact"),
  ]);

  const heroData = homePage ? parseHeroData(homePage) : undefined;

  // Services page is leeg — val terug op homepage content voor diensten
  const servicesContent = servicesPage?.content?.trim()
    ? servicesPage.content
    : homePage?.content ?? "";
  const diensten = parseServicesData(servicesContent);

  // Contact page is leeg — val terug op homepage content of defaults
  const contactContent = contactPage?.content?.trim()
    ? contactPage.content
    : homePage?.content ?? "";
  const contactData = parseContactData(contactContent);

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
