import Footer from "@/Components/ui/Footer";
import Navbar from "@/Components/ui/Navbar";
import Hero from "@/Components/Hero";
import Categories from "@/Components/Categories";
import Servicios from "@/Components/Servicios";
import OfertasList from "@/Components/Ofertas";
import Testimonios from "@/Components/Testimonios";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main></main>
      <Hero/>
      <Categories/>
      <Servicios/>
      <OfertasList/>
      <Testimonios/>
      <Footer />
    </div>
  );
}
