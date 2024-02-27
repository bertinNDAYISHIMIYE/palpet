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
    <div className="bg-[#dae7f4] flex justify-center items-center gap-5">
      <div className="w-full object-fill bg-cover bg-center h-[775px]" style={{ backgroundImage: 'url("https://media.istockphoto.com/id/519363544/hu/fot%C3%B3/szerelem-a-macska-%C3%A9s-a-kutya-k%C3%B6z%C3%B6tt.jpg?s=612x612&w=0&k=20&c=TzqP0597ScT0tPM-nA5wqvZhUKwSqVELP6C-s2Wbkmw=")' }}>
      </div>
      <div className="w-full flex flex-col items-center">
        <h2 className={`${arvo.className} text-5xl text-[rgb(17,24,39)]`}>About Us</h2>
        <p className={`${lato.className} w-[70%] text-2xl leading-9 text-center p-5 text-[rgb(17,24,39)]`}>
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
