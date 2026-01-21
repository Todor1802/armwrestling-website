import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface YouTubeResourceCardProps {
  videoId: string;
  title: string;
  description: string;
  tips: string[];
}

export function YouTubeResourceCard({
  videoId,
  title,
  description,
  tips,
}: YouTubeResourceCardProps) {
  return (
    <Card className="overflow-hidden border-border/70 bg-card/80 shadow-2xl shadow-black/30">
      <div className="aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        ></iframe>
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-foreground/80">{description}</p>
        <div>
          <h4 className="mb-2 font-semibold text-foreground">Ključni saveti:</h4>
          <ul className="space-y-2">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
