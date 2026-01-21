import { YouTubeResourceCard } from "@/components/ui/youtube-resource-card";

const videoData = {
  videoId: "onDfL1Rvkdw",
  title: "Tehnika i Motivacija",
  description: "Analiza treninga i pripreme za meč.",
  tips: ["Kontrola zgloba", "Eksplozivnost", "Mentalni fokus"],
};

export function KnowledgeHubSection() {
  return (
    <section id="saveti" className="w-full bg-black/20 py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Edukacija i Saveti
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed">
            Unapredite svoje znanje uz savete i analize od strane iskusnih
            takmičara.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <YouTubeResourceCard
            videoId={videoData.videoId}
            title={videoData.title}
            description={videoData.description}
            tips={videoData.tips}
          />
        </div>
      </div>
    </section>
  );
}
