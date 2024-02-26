import { useState, useEffect } from 'react';
import { Arvo, Lato } from "next/font/google";

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
        url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
      
          },
          {
            url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
      
      
            },
            {
              url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
        
        
              },
              {
                url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
          
          
                },
                {
                  url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
            
            
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
    
    <div className=" flex flex-col md:flex-row justify-center items-center gap-20 flex-wrap m-auto pt-5">
          {img.map((image, index) => <img className="w-[386px] rounded-xl mb-4" key={index} src={image.url} alt="png" />)}
      </div>
      </div>
          </>
  )
}
