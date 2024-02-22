import React from 'react'

export default function Services() {
    const serviceImg = [
        {
        url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
        serviceTitle: "Professional pet grooming services",
        serviceDesc: "Our experienced groomers offer full grooming services tailored to your pet's needs"
        },
        {
          url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
        serviceTitle: "Pet Boarding Daycare",
        serviceDesc: "We provide a clean and safe environment for your pet while you're away, including playtime and socializzzation."
      
          },
          {
            url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
        serviceTitle: "Veterinary Care",
        serviceDesc: "Our skilled vetrinarians provide comprehensive medical care to ensure your pet's health and well-being"
      
      
            }
      ]
  return (
    <div className="bg-[#dae7f4] py-10 mb-5">
    <p className="md:w-[1010px] text-2xl text-center m-auto p-10">Looking for adorable pets in Hungary? Look no further than Cute Pets! 
      Our pet store offers a wide range of furry friends for you to bring home and love. 
      From playful puppies to cuddly kittens, we have the perfect companion for you. 
      Visit us today and find your new best friend at Cute Pets in Hungary.
      </p>
      <h2 className="m-6 md:mx-[70px] text-2xl font-bold">Our Services</h2>
      <div className="flex flex-col md:flex-row justify-center gap-20 m-6">

        {serviceImg.map((img, index) => <div key={index} className="relative md:w-[500px] h-[500px] bg-cover bg-center rounded transition-transform duration-300 transform hover:scale-105" style={{ backgroundImage: `url(${img.url})` }}>
          <div className="absolute bottom-0 bg-neutral-800 bg-opacity-45 md:w-[500px] h-[200px] p-5">
            <h2 className="text-2xl text-slate-50 p-4">{img.serviceTitle}</h2>
            <p className="text-slate-50 p-2">{img.serviceDesc}</p>
          </div>
        </div>)}
      </div>
      </div>
  )
}
