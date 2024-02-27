import { useState, useEffect } from 'react';
import { Arvo, Lato } from "next/font/google";
import Image from 'next/image';

const arvo = Arvo({
  weight: '400',
  subsets: ['latin'],
});
const lato = Lato({
  weight: '400',
  subsets: ['latin'],
});

export default function Gallery() {
    const img = [
        {
        url: "https://plus.unsplash.com/premium_photo-1708983589793-56673027592e?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          url: "https://images.unsplash.com/photo-1518378188025-22bd89516ee2?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      
          },
          {
            url: "https://media.istockphoto.com/id/1497909628/hu/fot%C3%B3/macska-%C3%A9s-kutya-egy%C3%BCtt-%C3%BClnek-a-r%C3%A9ten.jpg?s=612x612&w=0&k=20&c=X8__KYHLaa6mWIrwRl5xFDoJ2ebfB3-muIgNPHwOlJA=",
      
      
            },
            {
              url: "https://images.unsplash.com/photo-1509205477838-a534e43a849f?q=80&w=2956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
        
              },
              {
                url: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          
          
                },
                {
                  url: "https://images.unsplash.com/photo-1570824104453-508955ab713e?q=80&w=2811&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            
            
                  }
      ]
    
      const testimonialsData = [
        {
          id: 1,
          author: 'John Doe',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 2,
          author: 'Jane Smith',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 3,
          author: 'Alice Johnson',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
      ];
    
      const [currentTestimonial, setCurrentTestimonial] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          // Auto-play functionality
          setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 5000); // Change the interval (in milliseconds) for autoplay
    
        return () => clearInterval(interval);
      }, [currentTestimonial, testimonialsData.length]);
    
      const handlePrev = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
      };
    
      const handleNext = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonialsData.length);
      };
    
      const handleBulletClick = (index) => {
        setCurrentTestimonial(index);
      };
    
     
  return (
    <>
    <div className='w-[1320px] flex flex-col m-auto justify-center'>
      <h2 className={`${arvo.className} text-5xl text-[rgb(17,24,39)]`}>Gallery</h2>
    
    <div className="flex flex-col md:flex-row justify-center items-center gap-20 flex-wrap m-auto pt-5">
          {img.map((image, index) => <Image width={386} height={300} className="w-[386px] rounded-xl mb-4" key={index} src={image.url} alt="png" />)}
      </div>
      </div>
          </>
  )
}
