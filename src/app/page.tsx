import Banner from "@/components/banner";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { HomeContent } from "./interfaces";

export default async function Home() {
  const res = await fetch("https://sioux-test-dev-api.vercel.app/home.json");
  const homeData: HomeContent = await res.json();

  return (
    <div>
      <Navbar menus={homeData.menus.header} />
      <Banner
        title={homeData.hero.title}
        description={homeData.hero.description}
        image={homeData.hero.image}
        ctas={homeData.hero.ctas}
      />

      <main
        className="min-h-96 max-w-7xl mx-auto flex gap-10 sm:gap-4 p-8 items-center justify-center flex-wrap"
        role="main"
        aria-label="Conteúdo principal"
      >
        <section
          className="flex gap-10 sm:gap-4 flex-wrap items-center justify-center w-full"
          aria-label="Soluções Sioux"
        >
          {homeData.solutions.map((solution) => (
            <Card
              key={solution.title}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              ctas={solution.ctas}
            />
          ))}
        </section>
      </main>
      <Footer menus={homeData.menus.footer} />
    </div>
  );
}
