import Image from "next/image";
import Abstract from "@/app/assets/abstract lenses.svg";
import Linkedin from "@/app/assets/linkedin logo.svg";
import Instagram from "@/app/assets/instagram logo.svg";
import Behance from "@/app/assets/behance.svg";
import Link from "next/link";

export default function My() {
  return (
    <div className=" flex mx-auto max-w-screen-lg sm:w-full ">
      <div className="flex md:flex-row flex-col justify-between mx-4">
        <div className="flex flex-col mt-20">
          <span>Olá,</span>
          <h1 className="uppercase text-3xl font-bold w-60">
            eu sou aline oliveira
          </h1>
          <h2 className="uppercase text-secundary text-2xl font-bold">
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
            className="bg-secundary p-2 items-center justify-center text-center mt-4 mb-4 md:w-full w-60"
          >
            Baixar cv
          </Link>
          <div className="flex items-center gap-2">
            <h3>Follow me on:</h3>
            <Link href="#">
                <Image src={Linkedin} alt="image linkedin" />
            </Link>
            <Link href="#">
                <Image src={Instagram} alt="image linkedin" />
            </Link>
            <Link href="#">
                <Image src={Behance} alt="image linkedin" />
            </Link>
          </div>
        </div>
        <Image src={Abstract} alt="logo" className="w-[100%] h-[62%]" />
      </div>
    </div>
  );
}
