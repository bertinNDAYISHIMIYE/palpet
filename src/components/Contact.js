import React, { useState } from 'react';
import { Arvo, Lato } from "next/font/google";
import { firestore } from '../lib/firebase'

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
  const [messageSent, setMessageSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Store the form data in Firebase Firestore
      await firestore.collection('contacts').add({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(),
      });

      // Reset the form after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      setMessageSent(true)
       setTimeout(() => {
        setMessageSent(false)
       }, 3000);
 

      console.log('Form submitted successfully.');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="h-[675px] lg:w-[1320px] m-auto flex justify-between items-center">
      <div className='w-[50%] flex flex-col  items-center'>
      <h2 className={`${arvo.className} text-5xl p-5 text-[rgb(17,24,39)]`}>Contact Us</h2>
      <p className={`${lato.className}  text-2xl leading-9 decoration-[rgb(17,24,39)]`}>Thank you for considering PalPet for all your pet needs! We value your feedback, questions, and suggestions.
         Our team is here to assist you in any way possible.
          Please feel free to reach out</p>
      </div>

      <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
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
        <div className='flex flex-col gap-2'>
        {messageSent && <p className={`${lato.className} w-full bg-lime-500 text-white text-center py-2 px-4 hover:bg-slate-400 self-end`}>
          Thank you for reaching out!
        </p>}
        <button type="submit" className={`${lato.className} bg-slate-700 text-white py-2 px-4 hover:bg-slate-400 self-end`}>
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
