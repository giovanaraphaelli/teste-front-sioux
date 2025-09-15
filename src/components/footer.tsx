import Image from "next/image";
import Link from "next/link";
import FormContato from "./form-contato";
import { MenuItem } from "@/app/interfaces";

interface NavBarProps {
  menus: MenuItem[];
}

export default function Footer({ menus }: NavBarProps) {
  return (
    <footer className="w-full bg-primary min-h-96 flex items-center">
      <div className="mx-auto flex sm:flex-row flex-col items-start sm:items-center justify-between w-7xl p-8 sm:p-6 text-primary-foreground">
        <nav
          className="flex-1 flex flex-col gap-2 py-10"
          aria-label="Rodapé - navegação principal"
        >
          <Image
            src="/assets/logo-secundario.png"
            alt="Logo da Sioux"
            width={160}
            height={29}
            className="mb-4"
          />
          <ul className="flex flex-col gap-2">
            {menus.map((item) => (
              <li key={item.name}>
                <Link href={item.url} className="hover:text-secondary">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <FormContato />
      </div>
    </footer>
  );
}
