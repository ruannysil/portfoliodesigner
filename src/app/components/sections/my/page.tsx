import Image from "next/image";
import Abstract from "@/app/assets/testeee.svg";
import Linkedin from "@/app/assets/LinkedIn.svg";
import Instagram from "@/app/assets/Instagram.svg";
import Dribble from "@/app/assets/Dribble svg.png";
import Link from "next/link";

export default function My() {
  return (
    <div className="flex mx-auto max-w-screen-lg sm:w-full">
      <div className="flex md:flex-row flex-col mx-4">
        <div className="flex flex-col mt-20 h-fit">
          <span>Olá,</span>
          <h1 className="uppercase text-3xl font-bold w-60 mt-4">
            eu sou aline oliveira
          </h1>
          <h2 className="uppercase text-secundary text-2xl font-bold mb-5">
            ux/ui designer
          </h2>
          <span className="text-sm w-full">
            Meu nome é Aline Oliveira e sou designer de UX/UI. Desde sempre, fui
            apaixonada por desenho e tecnologia, e essa paixão me levou a seguir
            a carreira de designer. Estou constantemente em busca de novos
            métodos e continuo aprimorando minhas habilidades técnicas e
            interpessoais para contribuir positivamente em equipes e futuros
            projetos.
          </span>
          <Link
            href="#"
            className="bg-secundary p-2 items-center justify-center text-center mt-4 mb-4 md:w-full w-60 font-bold text-xl rounded-md hover:bg-white hover:text-secundary"
          >
            Baixar cv
          </Link>
          <div className="flex items-center gap-2">
            <h3>Follow me on:</h3>
            <Link href="https://www.linkedin.com/in/aline-oliveira-machado-6b1a06205/">
              <Image src={Linkedin} alt="logo linkedin" />
            </Link>
            <Link href="https://dribbble.com/alineoliveira98">
              <Image src={Dribble} alt="logo dribble" />
            </Link>
            <Link href="https://www.instagram.com/aline_machado98/">
              <Image src={Instagram} alt="image instagram" />
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <Image src={Abstract} alt="logo" className="w-[236rem]" />
        </div>
      </div>
    </div>
  );
}
