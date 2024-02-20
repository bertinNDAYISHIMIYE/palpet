import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });
const imageUrl = require("../../public/bunner-puppies.jpeg").default;
const serviceImg = [
  {
  url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
  serviceTitle: "Professional pet grooming services",
  serviceDesc: "Our experienced groomers offer full grooming services tailored to your pet's needs"
  },
  {
    url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
  serviceTitle: "Pet Boarding Daycare",
  serviceDesc: "We provide a clean and safe environment for your pet while you're away, including playtime and socializzzation."

    },
    {
      url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
  serviceTitle: "Veterinary Care",
  serviceDesc: "Our skilled vetrinarians provide comprehensive medical care to ensure your pet's health and well-being"


      }
]

export default function Home() {
  return (
    <main>
    <Banner />
      <div className="bg-[##f0f7fd]">
    <p className="w-[1010px] text-2xl text-center m-auto p-10">Looking for adorable pets in Hungary? Look no further than Cute Pets! 
      Our pet store offers a wide range of furry friends for you to bring home and love. 
      From playful puppies to cuddly kittens, we have the perfect companion for you. 
      Visit us today and find your new best friend at Cute Pets in Hungary.
      </p>
      <h2>Our Services</h2>
      <div className="flex justify-center gap-20">

        {serviceImg.map((img, index) => <div key={index} className="relative w-[500px] h-[500px] bg-cover bg-center rounded transition-transform duration-300 transform hover:scale-105" style={{ backgroundImage: `url(${img.url})` }}>
          <div className="absolute bottom-0 bg-neutral-800 w-[500px] h-[200px]">
            <h2>{img.serviceTitle}</h2>
            <p>{img.serviceDesc}</p>
          </div>
        </div>)}
      </div>
      </div>
    </main>
  );
}
