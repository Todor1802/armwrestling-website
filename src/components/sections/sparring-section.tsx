import Image from "next/image";
import { PlayCircle } from "lucide-react";
import sparringData from "@/lib/placeholder-images.json";

function SparringVideoCard({
  video,
}: {
  video: { id: string; src: string; alt: string; hint: string };
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border/70 shadow-2xl shadow-black/30">
      <Image
        src={video.src}
        alt={video.alt}
        width={600}
        height={400}
        data-ai-hint={video.hint}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <PlayCircle className="h-16 w-16 text-white/70 transition-all duration-300 group-hover:h-20 group-hover:w-20 group-hover:text-primary group-hover:drop-shadow-[0_0_15px_theme(colors.primary)]" />
      </div>
    </div>
  );
}

export function SparringSection() {
  return (
    <section id="sparinzi" className="w-full py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Arena: Sparinzi
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed">
            Pogledajte snimke sa naših najintenzivnijih treninga i sparinga.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sparringData.sparring.map((video) => (
            <SparringVideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
