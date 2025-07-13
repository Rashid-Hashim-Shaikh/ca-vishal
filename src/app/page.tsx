import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Mission />
      <About />
      <Services />
      <Contact />
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </main>
  );
}
