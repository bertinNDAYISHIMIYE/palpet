import React from 'react'
import { Arvo, Lato } from "next/font/google";

const arvo = Arvo({
  weight: '400',
  subsets: ['latin'],
});
const lato = Lato({
  weight: '400',
  subsets: ['latin'],
});
export default function Services() {
    const serviceImg = [
        {
        url: "https://media.istockphoto.com/id/1424319978/hu/fot%C3%B3/aranyos-west-highland-feh%C3%A9r-terrier-f%C3%BCrd%C5%91-ut%C3%A1n-kutya-egy-t%C3%B6r%C3%BClk%C3%B6z%C5%91be-csomagolt-medenc%C3%A9ben.jpg?s=612x612&w=0&k=20&c=938S5cTAmb2CapHUeQE7m4CM0uZBvSxv8lt3eA_CYx4=",
        serviceTitle: "Professional pet grooming services",
        serviceDesc: "Our experienced groomers offer full grooming services tailored to your pet's needs"
        },
        {
          url: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBldCUyMGJvYXJkaW5nfGVufDB8fDB8fHww",
        serviceTitle: "Pet Boarding Daycare",
        serviceDesc: "We provide a clean and safe environment for your pet while you're away, including playtime and socializzzation."
      
          },
          {
            url: "https://media.istockphoto.com/id/676515066/photo/good-health-is-important.webp?b=1&s=170667a&w=0&k=20&c=bshZTOrr89BG010OifMPez9WMgY2wfDgGedyAxJkdj0=",
        serviceTitle: "Veterinary Care",
        serviceDesc: "Our skilled vetrinarians provide comprehensive medical care to ensure your pet's health and well-being"
      
      
            }
      ]
  return (
    <div className="bg-[#f0f7fd] py-10 mb-5 px-2">
    <p className={`${lato.className} lg:w-[1010px] text-2xl leading-9 text-center m-auto p-10 text-[rgb(17,24,39)]`}>Looking for adorable pets in Hungary? Look no further than Cute Pets! 
      Our pet store offers a wide range of furry friends for you to bring home and love. 
      From playful puppies to cuddly kittens, we have the perfect companion for you. 
      Visit us today and find your new best friend at Cute Pets in Hungary.
      </p>
      <div className="flex flex-col justify-start">
      <h2 className={`${arvo.className} lg:ml-64 md:ml-48 text-5xl text-[rgb(17,24,39)]`}>Our Services</h2>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-20 m-6'>

        {serviceImg.map((img, index) => <div key={index} className="relative w-[385px] h-[615px] bg-cover bg-center rounded-2xl transition-transform duration-300 transform hover:scale-105" style={{ backgroundImage: `url(${img.url})` }}>
          <div className="absolute bottom-0 bg-[#131517] rounded-b-2xl bg-opacity-45 md:w-[100%] h-[200px] p-5">
            <h2 className={`${lato.className} text-slate-50 pb-2 text-4xl `}>{img.serviceTitle}</h2>
            <p className={`${lato.className} text-slate-50 text-lg`}>{img.serviceDesc}</p>
          </div>
        </div>)}
      </div>
      </div>
      </div>
  )
}
