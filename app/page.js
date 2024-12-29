import About from "@/components/About";
import Feuture from "@/components/Feuture";
import Footer from "@/components/Footer";
import FooterCard from "@/components/FooterCard";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-primary-light">
    <Navbar/>
  <Hero/>
  <Feuture/>
  <About/>
  <Pricing/>
  
  
  <Footer/>
  
 
    </div>
    
  );
}
