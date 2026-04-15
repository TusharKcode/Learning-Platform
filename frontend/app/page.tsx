"use client"

import About from "@/components/sections/About";
import FAQs from "@/components/sections/FAQs";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import AboutSkeleton from "@/components/skeletons/AboutSkeleton";
import FAQskeleton from "@/components/skeletons/FAQskeleton";
import FooterSkeleton from "@/components/skeletons/FooterSkeleton";
import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import ErrorState from "@/components/common/ErrorState";
import { useEffect, useState } from "react";

export default function Home() {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setError(false)
    }, 2000)
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

  if(error){
    return(
      <ErrorState
        onRetry={() => {
          setLoading(true)
          setError(false)
        }}
      />
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
