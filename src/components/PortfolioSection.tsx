import { useState } from "react";
import videoCover2 from "@/assets/video-cover-2.jpg";
import videoCover3 from "@/assets/video-cover-3.jpg";
import videoCover4 from "@/assets/video-cover-4.jpg";
import videoCover5 from "@/assets/video-cover-5.jpg";

interface PortfolioVideo {
  id: string;
  cover: string;
  driveUrl: string;
}

const portfolioVideos: PortfolioVideo[] = [
  {
    id: "1",
    cover: videoCover2,
    driveUrl: "https://www.youtube.com/embed/ZwInZqbixW4?autoplay=1",
  },
  {
    id: "2",
    cover: videoCover3,
    driveUrl: "https://www.youtube.com/embed/QziY1lk270E?autoplay=1",
  },
  {
    id: "3",
    cover: videoCover4,
    driveUrl: "https://www.youtube.com/embed/0Q4-b4ADG9A?autoplay=1",
  },
  {
    id: "4",
    cover: videoCover5,
    driveUrl: "https://www.youtube.com/embed/STKDZjmoKH4?autoplay=1",
  },
];

// Duplicate for marquee effect
const marqueeVideos = [...portfolioVideos, ...portfolioVideos];

const PortfolioSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-background overflow-hidden">
      <div className="px-8 md:px-16 lg:px-24 max-w-7xl mx-auto mb-12">
        <p className="font-poppins text-base md:text-lg text-foreground mb-4 font-semibold tracking-tight">
          Portfólio
        </p>
        <h2 className="text-3xl md:text-5xl mb-4">
          Minhas edições
        </h2>
        <p className="font-sans text-base md:text-lg text-foreground max-w-lg tracking-tight">
          Confira alguns dos meus trabalhos mais recentes em edição de vídeo profissional.
        </p>
      </div>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
            style={{ width: 'min(85vw, 380px)', height: 'min(80vh, 675px)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={activeVideo}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full border-0"
              title="Vídeo do portfólio"
            />
          </div>
        </div>
      )}

      {/* Marquee row */}
      <div className="relative w-full">
        <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] w-max px-4">
          {marqueeVideos.map((video, index) => (
            <button
              key={`${video.id}-${index}`}
              onClick={() => setActiveVideo(video.driveUrl)}
              className="group relative flex-shrink-0 w-[320px] sm:w-[400px] lg:w-[480px] aspect-video rounded-xl overflow-hidden border border-border hover:border-muted-foreground transition-colors"
            >
              <img
                src={video.cover}
                alt={`Projeto ${video.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-foreground/90 flex items-center justify-center">
                  <svg className="w-7 h-7 text-background ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {portfolioVideos.length === 0 && (
        <p className="font-mono text-sm text-muted-foreground text-center py-12 px-8">
          Adicione seus vídeos para exibi-los aqui.
        </p>
      )}
    </section>
  );
};

export default PortfolioSection;
