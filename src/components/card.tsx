interface PropsCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  button: React.ReactNode;
}

export default function Card({ title, description, icon, button }: PropsCard) {
  return (
    <article
      className="flex flex-col gap-2 justify-start w-96"
      aria-labelledby={`card-title-${title}`}
    >
      <span aria-hidden="true">{icon}</span>
      <h2
        id={`card-title-${title}`}
        className="text-lg sm:text-xl font-semibold"
      >
        {title}
      </h2>
      <p className="text-regular text-muted-foreground w-80">{description}</p>
      <div className="mt-4">{button}</div>
    </article>
  );
}
