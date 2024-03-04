import React from 'react'
import { Arvo, Lato } from "next/font/google";
import Link from 'next/link';

const arvo = Arvo({
  weight: '400',
  subsets: ['latin'],
});
const lato = Lato({
  weight: '400',
  subsets: ['latin'],
});

export default function Banner() {
  return (
    <>
    <div className="bg-cover bg-center h-[775px]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D")' }}>
      <div className="bg-gray-400 flex h-[775px] bg-opacity-45">
        <div className="w-[768px] flex flex-col flex-wrap my-auto ml-4 lg:ml-64 md:p-5">

        <h1 className={`${arvo.className} text-6xl md:text-7xl mb-[20px] text-[rgb(17,24,39 leading-[80px]`}>Discover Your Perfect Companion</h1>
        <p className={`${lato.className} text-2xl leading-9 decoration-[rgb(17,24,39)]`}>Explore a world of adorable pets waiting to fill your life with joy and love. Find your furry friend today!</p>
        <a href="#gallery"><button className={`${lato.className} h-14 w-40 md:w-44 px-4 py-3 border-2 border-[rgb(84,94,103)] text-[rgb(255,255,255)] transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 text-xl mt-[40px]`}>
        Explore Now
      </button>
      </a>
        </div>

      </div>
    </div>
    </>
  )
}
