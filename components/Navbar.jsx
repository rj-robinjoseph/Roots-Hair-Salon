'use client';
import Image from 'next/image';


const Navbar = () => (
  <>
  <nav className="w-full h-24 bg-slate-500 flex justify-between items-center">
        <Image
          src="/logo.webp"
          alt="#"
          width="250"
          height="40"
          className="mx-8"
        />
        <div className="w-[500px] flex flex-column justify-between items-center mx-16">
          <a href="#about" className="">
            Home
          </a>
          <a href="#contact" className="">
            Services
          </a>
          <a href="#about" className="">
            About Us
          </a>
          <a href="#contact" className="">
            Contact Us
          </a>
          <a
            href="tel:+8075776696"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Call to Book
          </a>
        </div>
  </nav>
  
</>
);

export default Navbar;
