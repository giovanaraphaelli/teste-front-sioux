import Image from "next/image";
import { Button } from "./ui/button";
import { Hero } from "@/app/interfaces";
import Link from "next/link";

export default function Banner({ title, description, image, ctas }: Hero) {
  return (
    <header
      className="relative overflow-hidden bg-cover bg-center h-[31.25rem] m-2 rounded-xl"
      role="banner"
      aria-label="Banner institucional"
    >
      <Image src={image} alt="" fill objectFit="cover" tabIndex={-1} priority />

      <div className="relative z-10 flex flex-col items-center justify-end sm:justify-center h-full text-white px-4 py-8">
        <h1 className="text-xl sm:text-3xl font-semibold uppercase text-center">
          {title}
        </h1>
        <p className="mt-2 text-regular sm:text-xl max-w-xl text-center font-light ">
          {description}
        </p>
        <div className="mt-4 flex gap-4 flex-col sm:flex-row w-full justify-center">
          {ctas.map((cta) => (
            <Button
              key={cta.name}
              className="cursor-pointer"
              aria-label={`Solicitar proposta para ${cta.name}`}
            >
              <Link href={cta.url}>{cta.name}</Link>
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}
