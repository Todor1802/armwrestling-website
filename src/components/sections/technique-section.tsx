import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";

const techniques = [
  {
    title: "Kuka (Hook)",
    description: "Fokus na snagu ručnog zgloba i unutrašnju rotaciju.",
  },
  {
    title: "Top Roll",
    description: "Tehnika poluge i otvaranja protivničkih prstiju.",
  },
  {
    title: "Pres (Press)",
    description: "Maksimalni pritisak tricepsom i ramenom.",
  },
];

export function TechniqueSection() {
  return (
    <section id="tehnike" className="w-full py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Tehnička Priprema
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed">
            Savladajte ključne tehnike obaranja ruke uz naše stručne trenere.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {techniques.map((tech) => (
            <TiltCard key={tech.title}>
              <Card className="flex h-full min-h-[200px] flex-col justify-center border-border/70 bg-card/80 p-6 shadow-2xl shadow-black/30">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">
                    {tech.title}
                  </CardTitle>
                  <CardDescription className="text-base text-foreground/80">
                    {tech.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
