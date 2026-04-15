"use client"

import About from "@/components/sections/About";
import FAQs from "@/components/sections/FAQs";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import AboutSkeleton from "@/components/skeletons/AboutSkeleton";
import FAQskeleton from "@/components/skeletons/FAQskeleton";
import FooterSkeleton from "@/components/skeletons/FooterSkeleton";
import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import { useEffect, useState } from "react";

export default function Home() {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  if(loading){
    return(
      <>
        <HeroSkeleton/>
        <AboutSkeleton/>
        <FAQskeleton/>
        <FooterSkeleton/>
      </>
    )
  }

  return (
    <main>
      <Hero/>
      <About/>
      <FAQs/>
      <Footer/>
    </main>
  );
}
