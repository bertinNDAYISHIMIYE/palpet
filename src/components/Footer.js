import Image from "next/image";
import { Inter } from "next/font/google";
import { 
    FaXTwitter,
    FaSquareInstagram,
    FaTiktok,
    FaFacebook
} 
    from "react-icons/fa6";
import { IconContext } from "react-icons";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
return (
    <footer>
    <div className="flex gap-5 flex-col md:flex-row md:justify-between items-center bg-[#dae7f4] p-10">
    <Image src="/logopet.png" width="170" height="170" alt="logo"/>
    <div className="flex gap-6 cursor-pointer">
    <IconContext.Provider value={{ className: "shared-class cursor-pointer", size: 32 }}>
    <>
        <a href="https://www.x.com/" target="_blank"><FaXTwitter /></a>
        <a href="https://www.instagram.com/n_bertin_" target="_blank"><FaSquareInstagram /></a>
        <a href="https://www.tiktok.com/" target="_blank"><FaTiktok  /></a>
        <a href="https://www.facebook.com" target="_blank"><FaFacebook /></a>
    </>
</IconContext.Provider>
    </div>
    <p className="md:text-2xl text-xl">@2024 Copyright reserved</p>
    </div>
    </footer>
);
}
