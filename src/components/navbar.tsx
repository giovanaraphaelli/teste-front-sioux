"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-background">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Página inicial">
          <Image
            src="/logo.png"
            alt="Logoipsum"
            width={160}
            height={29}
            priority
          />
        </Link>

        {/* Menu Desktop */}
        <NavigationMenu
          className="hidden md:flex"
          role="navigation"
          aria-label="Menu principal"
        >
          <NavigationMenuList className="flex space-x-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#sobre" className="hover:text-secondary">
                  Sobre
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#produtos" className="hover:text-secondary">
                  Produtos
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#contato" className="hover:text-secondary">
                  Contato
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Abrir menu de navegação"
              >
                <Menu className="h-8 w-8" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav
                className="flex flex-col gap-4 ml-4"
                aria-label="Menu principal"
              >
                <Link
                  href="#sobre"
                  className="text-accent text-xl hover:text-secondary"
                >
                  Sobre
                </Link>
                <Link
                  href="#produtos"
                  className="text-accent text-xl hover:text-secondary"
                >
                  Produtos
                </Link>
                <Link
                  href="#contato"
                  className="text-accent text-xl hover:text-secondary"
                >
                  Contato
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
