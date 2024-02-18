import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const imageUrl = require("../../public/bunner-puppies.jpeg").default;

export default function Home() {
  return (
    <main>
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D")' }}>mf</div>
    </main>
  );
}
