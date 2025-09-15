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
import { MenuItem } from "@/app/interfaces";
interface NavBarProps {
  menus: MenuItem[];
}
export default function Navbar({ menus }: NavBarProps) {
  return (
    <header className="w-full bg-background">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Página inicial">
          <Image
            src="/assets/logo.png"
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
            {menus.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink asChild>
                  <Link href={item.url} className="hover:text-secondary">
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
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
                {menus.map((item) => (
                  <Link
                    key={item.name}
                    href={item.url}
                    className="text-accent text-xl hover:text-secondary"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
