import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Britke Sablje - Profesionalni klub za sportsko obaranje ruku",
  description:
    "Pridružite se Britkim Sabljama, profesionalnom klubu za sportsko obaranje ruku u Beogradu. Zakažite probni trening i postanite deo tima.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Russo+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
