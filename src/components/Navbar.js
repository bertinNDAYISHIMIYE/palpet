import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <main>
    <header className="flex justify-between bg-[#dae7f4] p-8">
      <Image src="next.svg" width="170" height="170" alt="logo"/>
      <button className="h-10 px-5 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Call Us</button>
    </header>
    </main>
  );
}
