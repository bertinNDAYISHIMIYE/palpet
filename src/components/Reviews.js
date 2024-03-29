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

export default function Reviews() {
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


<div className="md:w-[880px] flex justify-center md:h-[500px] m-auto p-5 md:p-40">
<div className="arrows">
    <button className="text-5xl mr-3" onClick={handlePrev}>&#8249;</button>
</div>

<div className="testimonial">
    <p className={`${lato.className} mb-5 md:text-3xl p-5`}>{testimonialsData[currentTestimonial].description}</p>
    <p className={`${lato.className} font-medium p-5`}>{testimonialsData[currentTestimonial].author}</p>
</div>

<div className="arrows">
    <button className="text-5xl ml-3" onClick={handleNext}>&#8250;</button>
</div>

<div className="bullets">
    {testimonialsData.map((testimonial, index) => (
        <span
            key={testimonial.id}
            className={`bullet ${index === currentTestimonial ? 'active' : ''}`}
            onClick={() => handleBulletClick(index)}
        ></span>
    ))}
</div>
</div>
  )}