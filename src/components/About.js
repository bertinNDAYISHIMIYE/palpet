import { Arvo, Lato } from "next/font/google";

const arvo = Arvo({
  weight: '400',
  subsets: ['latin'],
});
const lato = Lato({
  weight: '400',
  subsets: ['latin'],
});

export default function About() {
  return (
    <div className="bg-[#dae7f4] flex flex-col lg:flex-row justify-center items-center gap-5">
      <div className="w-full object-fill bg-cover bg-center h-[775px]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
      </div>
      <div className="w-full flex flex-col items-center">
        <h2 className={`${arvo.className} text-5xl text-[rgb(17,24,39)] p-5`}>About Us</h2>
        <p className={`${lato.className} md:w-[70%] text-2xl leading-9 text-center p-5 text-[rgb(17,24,39)]`}>
        Welcome to Cute Pets, Hungary&apos;s premier destination for all your pet needs. With a passion for animals and a commitment to exceptional customer service, we strive to provide the best products and services for your beloved pets.

At Cute Pets, we understand that pets are an important part of your family.
<br /> <br />
 That&apos;s why we offer a wide range of high-quality pet supplies, including food, toys, accessories, and more. 
 Our knowledgeable staff is always ready to assist you in finding the perfect products to keep your furry friends happy and healthy. 
 Visit us today and experience the Cute Pets difference!
        </p>
      </div>
    </div>
  )
}
