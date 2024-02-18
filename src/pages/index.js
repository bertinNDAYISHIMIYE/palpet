import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const imageUrl = require("../../public/bunner-puppies.jpeg").default;

export default function Home() {
  return (
    <main>
    <div className="bg-cover bg-center h-[665px]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D")' }}>
      <div className="bg-gray-400 flex h-[665px] bg-opacity-45">
        <div className="w-[768px] flex flex-col flex-wrap my-auto ml-64">

        <h1 className="text-7xl mb-[20px]">Discover Your Perfect Companion</h1>
        <p className="text-2xl">Explore a world of adorable pets waiting to fill your life with joy and love. Find your furry friend today!</p>
      <button className="h-14 w-40  px-6 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 text-xl mt-[40px]">Explore Now</button>
        </div>

      </div>
    </div>
    </main>
  );
}
