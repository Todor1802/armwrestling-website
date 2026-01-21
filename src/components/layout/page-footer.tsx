"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";

function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <Input type="text" placeholder="Vaše Ime" className="bg-neutral-900/50"/>
      <Input type="tel" placeholder="Broj Telefona" className="bg-neutral-900/50"/>
      <Textarea placeholder="Vaš cilj (npr. 'Želim da postanem jači')" className="bg-neutral-900/50"/>
      <Button type="submit" size="lg" className="w-full">
        Pošalji Upit
      </Button>
    </form>
  );
}

export function PageFooter() {
  return (
    <footer id="kontakt" className="w-full border-t border-border/20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/20 via-transparent to-transparent py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Brzi Kontakt
            </h2>
            <p className="text-muted-foreground">
              Spremni da testirate svoju snagu? Popunite formu i zakažite svoj
              prvi trening. Čekamo vas.
            </p>
            <ContactForm />
             <div className="mt-8 flex flex-col space-y-4 text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Žagubica, Srbija</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:britkesabljearmwrestling@gmail.com" className="hover:text-primary">
                  britkesabljearmwrestling@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex h-full min-h-[300px] items-center justify-center text-center lg:min-h-full">
             <div className="absolute inset-0 rounded-xl border-2 border-dashed border-border/30"></div>
             <h2 className="font-headline text-7xl font-extrabold tracking-wider text-white/50 drop-shadow-lg md:text-8xl lg:text-9xl">
                PRIDRUŽI SE
            </h2>
          </div>
        </div>
         <div className="mt-16 border-t border-border/20 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Britke Sablje. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}
