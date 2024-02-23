import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 
  return (
    <main>
    <Banner />
    <Services />
    <Gallery />
   <About />
   <>
   <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
   </>
    </main>
  );
}
