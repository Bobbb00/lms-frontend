import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import heropng from "@/public/hero.png";

export default function Hero() {
  return (
    <section className="container mx-auto py-12 lg:py-20 px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-10 md:mt-20 mt-20">
      <div className="lg:w-1/2 space-y-6 text-center text-left">
        <Badge
          variant="secondary"
          className="bg-blue-950 text-primary font-bold hover:bg-blue-900 mb-4 rounded-lg px-3 py-1"
        >
          KNOWLEDGE FOR EVERYONE
        </Badge>

        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
          Master <br />
          Informatics. <br />
          <span className="text-primary">Zero Cost.</span>
        </h1>

        <p className="text-lg lg:text-xl text-muted-foreground lg:w-4/5 mx-auto lg:mx-0 leading-relaxed">
          The open-source learning platform for future software engineers,
          security researchers, and data scientists. Start your journey today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-6 px-8 rounded-lg shadow-lg shadow-blue-500/20">
            Start Learning for Free
          </Button>
          <Button
            variant="secondary"
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg py-6 px-8 rounded-lg border border-slate-700"
          >
            View Roadmaps
          </Button>
        </div>
      </div>

      <div className="lg:w-1/2 w-full mt-10 lg:mt-0 relative">
        <div className="relative rounded-xl overflow-hidden ">
          <Image
            alt="LMS Dashboard Preview"
            src={heropng} // Sementara pakai redpanda sampai ada aset asli
            className="w-full h-100 object-cover shadow-lg shadow-primary/50"
            priority
          />
        </div>
      </div>
    </section>
  );
}
