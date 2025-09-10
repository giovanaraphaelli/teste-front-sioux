"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LucideCheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail é inválido"),
});

type FormData = z.infer<typeof schema>;

export default function FormContato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    console.log(data);
    toast("Mensagem enviada com sucesso!", {
      duration: 4000,
      icon: (
        <LucideCheckCircle className="h-4 w-4 text-green-600" strokeWidth={3} />
      ),
    });
    reset();
  }

  return (
    <form
      className="flex flex-col gap-4 w-full sm:w-64"
      onSubmit={handleSubmit(onSubmit)}
      aria-labelledby="contato-titulo"
    >
      <fieldset>
        <legend
          id="contato-titulo"
          className="text-primary-foreground text-xl mb-2"
        >
          Fale conosco
        </legend>
        <div className="mb-4">
          <label htmlFor="nome" className="sr-only">
            Nome
          </label>
          <Input
            id="nome"
            placeholder="Nome"
            type="text"
            {...register("nome")}
            errorMessage={errors.nome?.message}
            aria-invalid={!!errors.nome}
            aria-describedby={errors.nome?.message}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="sr-only">
            E-mail
          </label>
          <Input
            id="email"
            placeholder="E-mail"
            type="email"
            {...register("email")}
            errorMessage={errors.email?.message}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email?.message}
          />
        </div>

        <Button type="submit" className="cursor-pointer self-start">
          Enviar mensagem
        </Button>
      </fieldset>
    </form>
  );
}
