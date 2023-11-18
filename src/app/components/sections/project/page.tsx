"use client";

import Image from "next/image";
import Figma from "@/app/assets/figma.svg";
import Canva from "@/app/assets/Canva.svg";
import personal from "@/app/assets/gifpp.png";
import Card1 from "@/app/assets/Card 1.png";
import Card2 from "@/app/assets/Card 2.png";
import Card3 from "@/app/assets/Card 3.png";
import Card4 from "@/app/assets/Card 4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";

export default function Project() {
  const data = [
    { id: 1, image: Card1 },
    { id: 2, image: Card2 },
    { id: 3, image: Card3 },
    { id: 4, image: Card4 },
  ];

  return (
    <div className=" container flex mx-auto flex-col max-w-screen-lg sm:w-full">
      <div className="flex flex-col mx-4">
        <div className="flex flex-col">
          <div className="flex items-center flex-col justify-center">
            <svg width="100%" height="60">
              <text
                x="50%"
                y="44"
                textAnchor="middle"
                className="uppercase text-secundary font-bold text-5xl mb-6"
              >
                Formação
              </text>
            </svg>

            <span className="text-white md:w-[33rem] w-full text-center">
              Minha formação garante a capacidade de conceber e desenvolver
              experiências digitais memoráveis e altamente funcionais.
            </span>
          </div>
        </div>
        <div className="mt-20 mb-20 flex-col mx-4">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            // slidesPerView={1}
            autoplay={{ delay: 8500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="m-0 mySwiper"
            effect={"coverflow"}
            // grabCursor={true}
            slidesPerView={"auto"}
            // pagination={{
            //   clickable: true,
            // }}
            coverflowEffect={{
              rotate: 50,
              stretch: -40,
              depth: 150,
              modifier: 4,
              // slideShadows: true,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <Image src={item.image} alt="image smartphone" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center flex-col justify-center md:mb-20 mb-6">
            <svg width="100%">
              <text
                x="50%"
                y="90%"
                textAnchor="middle"
                className="uppercase text-secundary font-bold md:text-[10rem] text-[5rem]"
              >
                design
              </text>
            </svg>
          </div>
      </div>
    </div>
  );
}
