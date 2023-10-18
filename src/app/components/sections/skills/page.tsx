"use client";

import Image from "next/image";
import Figma from "@/app/assets/figma.svg";
import Canva from "@/app/assets/Canva.svg";
import SmartPhone from "@/app/assets/smartphone.svg";
import personal from "@/app/assets/gifpp.png";
import Mockup1 from "@/app/assets/Mockup1.svg";
import Mockup2 from "@/app/assets/Mockup2.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { useRef } from "react";

export default function Skills() {
  const data = [
    { id: 1, image: Mockup1 },
    { id: 2, image: Mockup2 },
  ];

  return (
    <div className=" container flex mx-auto flex-col max-w-screen-lg sm:w-full">
      <div className="flex flex-col mx-4">
        <div className="flex-col">
          <h1 className="uppercase text-secundary font-bold text-3xl mb-6">
            HABILIDADES
          </h1>
          <span className="text-white w-[50]">
            Combinando criatividade e sólidas habilidades técnicas em UX/UI
            Design, minha formação garante a capacidade de conceber e
            desenvolver experiências digitais memoráveis e altamente funcionais.
          </span>
          <ul className="space-y-2 text-white list-disc list-inside ml-4 mb-5 mt-5">
            <li>UI Design</li>
            <li>Visual design</li>
            <li>Usability</li>
            <li>Prototyping</li>
            <li>User Research </li>
            <li>Wireframing</li>
          </ul>
          <div className="flex gap-4">
            <Image src={Figma} alt="logo figma" className="w-16" />
            <Image src={Canva} alt="logo figma" className="w-16" />
            <Image src={personal} alt="logo figma" className="w-20" />
          </div>
        </div>
      </div>
      <div className="md:mt-0 mt-10 flex-col mx-4 mb-5">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{ delay: 8500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="m-0"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Image src={item.image} alt="image smartphone" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
