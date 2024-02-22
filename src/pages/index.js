import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 
  return (
    <main>
    <Banner />
    <Services />
    <Gallery />
    </main>
  );
}
