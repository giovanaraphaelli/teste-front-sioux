import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <Image
        src="/assets/logo.png"
        alt="Logoipsum"
        width={160}
        height={29}
        priority
      />
      <h1 className="text-3xl font-bold">Página não encontrada!</h1>
      <p>A página que você está tentando acessar não existe.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary cursor-pointer"
      >
        Voltar para o início
      </Link>
    </div>
  );
}
