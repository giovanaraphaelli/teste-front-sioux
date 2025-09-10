import Image from "next/image";
import { Button } from "./ui/button";

export default function Banner() {
  return (
    <header
      className="relative overflow-hidden bg-cover bg-center h-[31.25rem] m-2 rounded-xl"
      role="banner"
      aria-label="Banner institucional"
    >
      <Image
        src="/banner.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        tabIndex={-1}
        priority
      />

      <div className="relative z-10 flex flex-col items-center justify-end sm:justify-center h-full text-white px-4 py-8">
        <h1 className="text-xl sm:text-3xl font-semibold uppercase text-center">
          Tecnologia para seu negócio
        </h1>
        <p className="mt-2 text-regular sm:text-xl max-w-xl text-center font-light ">
          Integramos produtos digitais com dados e automação para levar sua
          operação ao próximo nível.
        </p>
        <div className="mt-4 flex gap-4 flex-col sm:flex-row w-full justify-center">
          <Button
            className="cursor-pointer"
            aria-label="Solicitar proposta para soluções digitais"
          >
            Solicitar proposta
          </Button>
          <Button
            className="cursor-pointer"
            aria-label="Ver soluções digitais disponíveis"
          >
            Ver soluções
          </Button>
        </div>
      </div>
    </header>
  );
}
