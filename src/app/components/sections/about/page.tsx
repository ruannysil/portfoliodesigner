import Image from "next/image";
import Profile from "@/app/assets/profile.svg";

export default function About() {
  return (
    <div className="flex mx-auto max-w-screen-lg sm:w-full">
      <div className="flex md:flex-row flex-col  mx-4">
        <div className="flex flex-col lg:flex-row justify-between mt-20 mb-20">
          <div className="flex mb-10">
            <div className="md:w-[35rem] w-[30%] border-secundary border-dashed flex rounded-lg border-spacing-5 border-2 items-center justify-center"></div>
            <Image src={Profile} alt="foto de perfil aline" className="z-10 md:w-[70%] w-[60%] h-[95%] md:right-40 right-7  relative items-center ss lg:mt-2" />
          </div>
          <div className="flex flex-col w-full">
            <h1 className="uppercase text-secundary font-bold text-3xl mb-6">
              Sobre mim
            </h1>
            <span>
              Iniciei minha jornada profissional realizando trabalhos como
              freelancer na área de design gráfico. Durante essa experiência,
              desenvolvi uma profunda paixão pelo design de interface e
              experiência do usuário. Acredito que essa área é incrivelmente
              fascinante, pois nos permite criar experiências que impactam
              positivamente a vida das pessoas, tornando-a mais significativa e
              eficiente. Estou estudando a língua inglesa para expandir ainda
              mais minhas oportunidades e me comunicar de forma eficaz em um
              contexto global. Tenho trabalhado em projetos pessoais,
              colaborativos e também como freelancer. Meu compromisso é oferecer
              soluções de design eficazes e criativas para atender às
              necessidades dos meus clientes. Possuo habilidades em ferramentas
              como Canva, Figma e estou em processo de aprimoramento no
              Photoshop.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
