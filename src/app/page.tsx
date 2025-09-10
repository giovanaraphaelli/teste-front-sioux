import Banner from "@/components/banner";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />

      <main
        className="min-h-96 max-w-7xl mx-auto flex gap-10 sm:gap-4 p-8 items-center justify-center flex-wrap"
        role="main"
        aria-label="Conteúdo principal"
      >
        <section
          className="flex gap-10 sm:gap-4 flex-wrap items-center justify-center w-full"
          aria-label="Soluções Sioux"
        >
          <Card
            title="Plataforma de Conteúdo"
            description="CMS headless pronto para SEO com componentes blocados, preview ao vivo e publishing seguro."
            icon={
              <Image
                src="icon1.svg"
                alt="Ícone Plataforma de Conteúdo"
                width={94}
                height={94}
                className="w-[72px] h-[72px] md:w-[94px] md:h-[94px]"
                aria-hidden="true"
              />
            }
            button={
              <Button variant="secondary" className="cursor-pointer">
                Conhecer a plataforma
              </Button>
            }
          />
          <Card
            title="Busca Semântica"
            description="Relevância inteligente com embeddings e filtros facetados para catálogos e portais de dados."
            icon={
              <Image
                src="icon2.svg"
                alt="Ícone Busca Semântica"
                width={94}
                height={94}
                className="w-[72px] h-[72px] md:w-[94px] md:h-[94px]"
                aria-hidden="true"
              />
            }
            button={
              <Button variant="secondary" className="cursor-pointer">
                Ver demo
              </Button>
            }
          />
          <Card
            title="Integração de Pagamentos"
            description="Checkout com assinaturas, faturas e reconciliação automática para SaaS e cursos."
            icon={
              <Image
                src="icon3.svg"
                alt="Ícone Integração de Pagamentos"
                width={94}
                height={94}
                className="w-[72px] h-[72px] md:w-[94px] md:h-[94px]"
                aria-hidden="true"
              />
            }
            button={
              <Button variant="secondary" className="cursor-pointer">
                Começar agora
              </Button>
            }
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
