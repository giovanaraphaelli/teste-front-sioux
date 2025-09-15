"use client";

import Image from "next/image";
import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <Image
        src="/assets/logo.png"
        alt="Logoipsum"
        width={160}
        height={29}
        priority
      />
      <h1 className="text-3xl font-bold text-primary">Ops! Algo deu errado.</h1>
      <p>Não foi possível carregar a página.</p>
      <button
        className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary cursor-pointer"
        onClick={() => reset()}
      >
        Tentar novamente
      </button>
    </div>
  );
}
