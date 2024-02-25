import Image from "next/image";
import { Arvo, Lato } from "next/font/google";

const arvo = Arvo({
  weight: '400',
  subsets: ['latin'],
});
const lato = Lato({
  weight: '400',
  subsets: ['latin'],
});

export default function Navbar() {
  return (
    
    <header className="w-screen flex justify-between bg-[#dae7f4] p-8">
      <Image src="/logopet.png" width="170" height="170" alt="logo"/>
      <button className={`${lato.className} h-11 px-4 border-2 border-[rgb(84, 94,103)] md:px-5 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 text-2xl`}>Call Us</button>
    </header>
    
  );
}
