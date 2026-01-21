import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="pocetna"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-6 p-4 text-center"
    >
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          BRITKE SABLJE
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          Profesionalni klub za sportsko obaranje ruku. Beograd.
        </p>
      </div>
      <Button
        size="lg"
        className="rounded-full px-8 text-lg font-semibold transition-transform hover:-translate-y-1"
      >
        Zakaži probni trening
      </Button>
    </section>
  );
}
