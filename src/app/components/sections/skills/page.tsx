import Image from "next/image";
import Figma from "@/app/assets/figma.svg";
import Canva from "@/app/assets/Canva.svg";
import SmartPhone from "@/app/assets/smartphone.svg";
import personal from "@/app/assets/gifpp.png";

export default function Skills() {
  return (
    <div className="flex mx-auto md:flex-row flex-col max-w-screen-lg sm:w-full">
      <div className="flex md:flex-row flex-col mx-4">
        <div className="flex-col">
        <h1 className="uppercase text-secundary font-bold text-3xl mb-6">
          HABILIDADES
        </h1>
        <span className="text-white ">
          Combinando criatividade e sólidas habilidades técnicas em UX/UI
          Design, minha formação garante a capacidade de conceber e desenvolver
          experiências digitais memoráveis e altamente funcionais.
        </span>
        <ul className="space-y-2 text-white list-disc list-inside ml-4 mb-5 mt-5">
          <li>Ui Design</li>
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
        <div className="md:mt-0 mt-10 items-center justify-center">
          <Image
            src={SmartPhone}
            alt="image smartphone"
            className="md:w-[60rem] w-[50%]"
          />
        </div>
      </div>
    </div>
  );
}
