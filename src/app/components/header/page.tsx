"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/logo.svg";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";




export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  const closeMenuIfLargeScreen = () => {
    if (window.innerWidth > 640) {
      setIsOpen(false);
    }
  }

 

  useEffect(() => {
    closeMenuIfLargeScreen();
    window.addEventListener("resize", closeMenuIfLargeScreen);

    return () => {
      window.removeEventListener("resize", closeMenuIfLargeScreen);
    }
  }, [])

  return (
    <div className="flex w-full justify-center">
      <div className="mx-auto max-w-screen-lg sm:w-full sm:flex hidden fixed bg-bgPrimary z-[999]  h-16">
        <div className="flex items-center lg:w-full w-full justify-between mx-2">
          <Image src={Logo} alt="logo" className="w-[38px]" />

          <nav className="flex items-center justify-between gap-8">
            <Link href="/#about" className="hover:text-secundary">
              Sobre
            </Link>
            <Link href="#" className="hover:text-secundary">
              Projetos
            </Link>
            <Link href="#" className="hover:text-secundary">
              Contatos
            </Link>
          </nav>
          <Link
            href="#"
            className=" bg-secundary px-4 py-1 font-semibold hover:bg-white hover:text-secundary  items-center text-center justify-center my-3 rounded-md"
          >
            contate-nos
          </Link>
        </div>
      </div>

      <div className="flex sm:hidden justify-between w-full mx-3 items-center fixed bg-bgPrimary z-[999] h-16">
        <Image src={Logo} alt="logo" className="w-[38px]" />
        <button
          className="text-5xl z-[10] text-secundary"
          onClick={handleClick}
        >
          {isOpen ? <IoCloseOutline /> : <IoMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="top-0 left-0 w-full h-full bg-opacity-50 flex items-center justify-center z-[999] fixed bg-bgPrimary">
          <div className="p-[10rem] w-full h-[100vh] shadow-lg transform translate-x-0 transition-transform fixed bg-bgPrimary">
            <button
              className="text-5xl z-[10] text-secundary fixed top-[0.4rem] right-[-0.1rem]"
              onClick={handleClick}
            >
              <IoCloseOutline />
            </button>
            <nav className="flex text-center items-center w-full justify-center gap-12 flex-col">
              <Link
                href="about"
                className="hover:text-secundary font-semibold text-xl"
                onClick={handleClick}
              >
                Sobre
              </Link>
              <Link
                href="about"
                className="hover:text-secundary font-semibold text-xl"
                onClick={handleClick}
              >
                Projetos
              </Link>
              <Link
                href="#"
                className="hover:text-secundary font-semibold text-xl"
                onClick={handleClick}
              >
                Contatos
              </Link>

              <Link
                href="#"
                className=" bg-secundary px-4 py-1 font-semibold hover:bg-white hover:text-secundary w-[250px] items-center justify-center rounded-md text-xl my-3"
              >
                contate-nos
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
