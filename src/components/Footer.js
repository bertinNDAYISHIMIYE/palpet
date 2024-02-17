import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer>
    <div className="flex justify-between bg-[#06b6d4] p-10">
      <Image src="next.svg" width="170" height="170" alt="logo"/>
      <button>Call us</button>
    </div>
    </footer>
  );
}
