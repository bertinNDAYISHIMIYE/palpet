import React, { useState } from 'react';
import { Arvo, Lato } from "next/font/google";

const arvo = Arvo({
  weight: '400',
  subsets: ['latin'],
});
const lato = Lato({
  weight: '400',
  subsets: ['latin'],
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="h-[675px] md:w-[60%] w-[80%] m-auto flex justify-between items-center flex-wrap p-5">
      <h2 className={`${arvo.className} text-5xl p-5 text-[rgb(17,24,39)]`}>Reach Out</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div className='flex md:justify-center items-center flex-col md:flex-row gap-4'>
            <div>
          <label htmlFor="name" className={`${lato.className} block text-[rgb(17,24,39)] text-base font-normal`}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-[#efefef]"
            required
          />
          </div>
          <div>

          <label htmlFor="email" className={`${lato.className} block text-[rgb(17,24,39)] text-base font-normal`}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-[#efefef]"
            required
          />
          </div>
          </div>
          
          <label htmlFor="message" className={`${lato.className} block text-[rgb(17,24,39)] text-base font-normal`}>
            Message
          </label>
          <textarea
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded-md bg-[#efefef]"
            required
          ></textarea>

        <button type="submit" className={`${lato.className} bg-slate-700 text-white py-2 px-4 hover:bg-slate-400 self-end`}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;