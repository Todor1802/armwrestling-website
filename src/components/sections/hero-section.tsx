import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="pocetna"
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-6 overflow-hidden p-4 text-center"
    >
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src="/images/hero-bg.jpg"
          data-ai-hint="arm wrestling match"
          alt="Pozadina za obaranje ruku"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <Image
          src="/logo.png"
          alt="Britke Sablje Logo"
          width={144}
          height={144}
          className="h-36 w-36 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] transition-transform hover:scale-105"
          priority
        />
        <h1 className="font-headline text-5xl font-bold tracking-tight text-white drop-shadow-lg md:text-7xl lg:text-8xl">
          BRITKE SABLJE
        </h1>
        <p className="max-w-2xl text-lg text-neutral-200 md:text-xl">
          Profesionalni klub za sportsko obaranje ruku. Beograd.
        </p>
      </div>
      <Button
        size="lg"
        className="relative z-10 rounded-full px-8 text-lg font-semibold shadow-lg shadow-primary/30 transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/50"
      >
        Zakaži probni trening
      </Button>
    </section>
  );
}
