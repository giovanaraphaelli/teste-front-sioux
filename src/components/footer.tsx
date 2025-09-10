import Image from "next/image";
import Link from "next/link";
import FormContato from "./form-contato";

export default function Footer() {
  return (
    <footer className="w-full bg-primary min-h-96 flex items-center">
      <div className="mx-auto flex sm:flex-row flex-col items-start sm:items-center justify-between w-7xl p-8 sm:p-6 text-primary-foreground">
        <nav
          className="flex-1 flex flex-col gap-2 py-10"
          aria-label="Rodapé - navegação principal"
        >
          <Image
            src="/logo-secundario.png"
            alt="Logo da Sioux"
            width={160}
            height={29}
            className="mb-4"
          />
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="#sobre" className="hover:text-secondary">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#produtos" className="hover:text-secondary">
                Produtos
              </Link>
            </li>
            <li>
              <Link href="#contato" className="hover:text-secondary">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <FormContato />
      </div>
    </footer>
  );
}
