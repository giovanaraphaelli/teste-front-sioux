import { DynamicIcon } from "lucide-react/dynamic";

import { Solution } from "@/app/interfaces";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Card({ title, description, icon, ctas }: Solution) {
  return (
    <article
      className="flex flex-col gap-2 justify-start w-96"
      aria-labelledby={`card-title-${title}`}
    >
      <DynamicIcon name={icon} color="#ff4d00" size={96} />
      <h2
        id={`card-title-${title}`}
        className="text-lg sm:text-xl font-semibold"
      >
        {title}
      </h2>
      <p className="text-regular text-muted-foreground w-80">{description}</p>
      <div className="mt-4">
        <Button variant="secondary" className="cursor-pointer">
          <Link href={ctas.url}>{ctas.name}</Link>
        </Button>
      </div>
    </article>
  );
}
