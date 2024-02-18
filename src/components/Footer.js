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
    <div className="flex justify-between items-center bg-[#dae7f4] p-10">
    <Image src="next.svg" width="170" height="170" alt="logo"/>
    <p>@2024 Copyright reserved</p>
    <div className="flex gap-6">
    <IconContext.Provider value={{ className: "shared-class cursor-pointer", size: 30 }}>
    <>
        <FaXTwitter />
        <FaSquareInstagram />
        <FaTiktok  />
        <FaFacebook />
    </>
</IconContext.Provider>
    </div>
    </div>
    </footer>
);
}
