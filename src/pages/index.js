import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import { useMemo } from "react";
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const Map = useMemo(() => dynamic(
    () => import('@/components/Map'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

 
  return (
    <main>
    <Banner />
    <Services />
    <Gallery />
   <About />
   <Map position={[47.5019232,19.0827007]} zoom={20}/>
    </main>
  );
}
