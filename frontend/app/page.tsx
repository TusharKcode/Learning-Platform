import About from "@/components/sections/About";
import FAQs from "@/components/sections/FAQs";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <FAQs/>
      <Footer/>
    </main>
  );
}
