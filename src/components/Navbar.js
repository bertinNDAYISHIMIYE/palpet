import Image from "next/image";
import { Arvo, Lato } from "next/font/google";
import { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";

const arvo = Arvo({
  weight: '400',
  subsets: ['latin'],
});
const lato = Lato({
  weight: '400',
  subsets: ['latin'],
});

export default function Navbar() {
  const isClient = typeof window !== 'undefined';
  const initialWidth = isClient ? window.innerWidth : 0;
  const [screenSize, setScreenSize] = useState({ width: initialWidth });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth });
    };

    if (isClient) {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isClient]);

  const logo = screenSize.width > 500 ? 'Call Us' : 'Call Us';

  return (
    <header className="w-screen flex justify-between bg-[#dae7f4] p-5">
      <Image src='/logopet.png' width="170" height="0" alt="logo" />
      <button className={`${lato.className} h-11 px-4 border-2 border-[rgb(84, 94,103)] md:px-5 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 text-2xl`}>
        <a href="tel:06205979764">{logo}</a>
      </button>
    </header>
  );
}
