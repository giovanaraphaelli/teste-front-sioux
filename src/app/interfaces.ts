import { IconName } from "lucide-react/dynamic";

export interface MenuItem {
  name: string;
  url: string;
}

interface Menus {
  header: MenuItem[];
  footer: MenuItem[];
}

interface Cta {
  name: string;
  url: string;
}

export interface Hero {
  title: string;
  description: string;
  image: string;
  ctas: Cta[];
}

export interface Solution {
  title: string;
  description: string;
  icon: IconName;
  ctas: Cta;
}

export interface HomeContent {
  menus: Menus;
  hero: Hero;
  solutions: Solution[];
}
