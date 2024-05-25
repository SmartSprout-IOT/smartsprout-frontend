import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isUserLogged = localStorage.getItem("token") !== null;
  console.log(isUserLogged);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center h-12 w-full mx-auto px-8">
        <h1 className="text-3xl font-bold text-[#04BF8A]">
          <a href="#home">SmartSprout</a>
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4">
            <a className="hover:text-[#04BF8A]" href="#home">
              Home
            </a>
          </li>
          <li className="p-4">
            <a className="hover:text-[#04BF8A]" href="#about">
              About
            </a>
          </li>
          <li className="p-4">
            <a className="hover:text-[#04BF8A]" href="#services">
              Services
            </a>
          </li>
          <li className="p-4">
            <a className="hover:text-[#04BF8A]" href="#iot">
              IoT
            </a>
          </li>
          <li className="p-4">
            <a className="hover:text-[#04BF8A]" href="#team">
              Team
            </a>
          </li>
          <li className="p-4">
            <a className="hover:text-[#04BF8A]" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        {isUserLogged ? (
          <ul className="hidden md:flex items-center">
            <li className="p-4">
              <a href="/dashboard">
                <button className="bg-[#04BF8A] w-[200px] rounded-md font-medium py-1 text-black transition duration-300 ease-out hover:bg-[#079F73]">
                  Go to Dashboard
                </button>
              </a>
            </li>
          </ul>
        ) : (
          <ul className="hidden md:flex items-center">
            <li className="p-4">
              <a href="/login">
                <button className="bg-[#00000] border-4 w-[100px] rounded-md font-medium py-1 text-black">
                  Log In
                </button>
              </a>
            </li>
            <li className="p-4">
              <a href="/signup">
                <button className="bg-[#04BF8A] w-[100px] rounded-md font-medium py-1 text-black transition duration-300 ease-out hover:bg-[#079F73]">
                  Sign Up
                </button>
              </a>
            </li>
          </ul>
        )}
        <div onClick={handleMenu} className="block md:hidden">
          {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="pt-4 uppercase font-semibold">
            <li className="p-2 flex justify-center border-b">
              <a className="hover:text-[#04BF8A]" href="#home">
                Home
              </a>
            </li>
            <li className="p-2 flex justify-center border-b">
              <a className="hover:text-[#04BF8A]" href="#about">
                About
              </a>
            </li>
            <li className="p-2 flex justify-center border-b">
              <a className="hover:text-[#04BF8A]" href="#services">
                Services
              </a>
            </li>
            <li className="p-2 flex justify-center border-b">
              <a className="hover:text-[#04BF8A]" href="#iot">
                IoT
              </a>
            </li>
            <li className="p-2 flex justify-center border-b">
              <a className="hover:text-[#04BF8A]" href="#team">
                Team
              </a>
            </li>
            <li className="p-2 flex justify-center border-b">
              <a className="hover:text-[#04BF8A]" href="#contact">
                Contact
              </a>
            </li>
            <li className="p-2 flex justify-center border-b">
              <button className="bg-[#00000] border-4 w-[80px] rounded-md font-medium py-1 text-black">
                <a href="/login">Login</a>
              </button>
            </li>
            <li className="p-2 flex justify-center">
              <button className="bg-[#04BF8A] w-[80px] rounded-md font-medium py-1 text-black transition duration-300 ease-out hover:bg-[#079F73]">
                <a href="/signup">Sign Up</a>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
