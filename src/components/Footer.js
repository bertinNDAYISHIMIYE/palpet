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

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
return (
    <footer>
    <div className="flex gap-5 flex-col md:flex-row md:justify-between items-center bg-[#dae7f4] p-10">
    <Image src="/logopet.png" width="170" height="170" alt="logo"/>
    <div className="flex gap-6 cursor-pointer">
    <IconContext.Provider value={{ className: "shared-class cursor-pointer", size: 31 }}>
    <>
        <FaXTwitter />
        <FaSquareInstagram />
        <FaTiktok  />
        <FaFacebook />
    </>
</IconContext.Provider>
    </div>
    <p className="text-xl">@2024 Copyright reserved</p>
    </div>
    </footer>
);
}
