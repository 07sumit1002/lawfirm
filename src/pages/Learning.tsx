import React from "react";
import CallToAction from "../components/CallToAction";

/* ════════════ DATA TYPES ════════════ */
interface Video {
  id: string;
  title: string;
  url: string; // original YouTube link (watch?v=...)
}

/*
  ──────────────────────────────────────────────────────────────────────────
  Local video catalogue. If you decide to fetch from a backend later, simply
  remove this constant and hydrate state from your API instead.
  ──────────────────────────────────────────────────────────────────────────
*/
const videoData: Video[] = [
  {
    id: "hLKbhPmCpKM",
    title: "How to get Free Advocate & Legal help",
    url: "https://www.youtube.com/watch?v=hLKbhPmCpKM",
  },
  {
    id: "kUh2YiK2c8Y",
    title: "Sexual Harassment at work places",
    url: "https://www.youtube.com/watch?v=kUh2YiK2c8Y",
  },
  {
    id: "xjsDVg20Lms",
    title: "Right to Information Act",
    url: "https://www.youtube.com/watch?v=xjsDVg20Lms",
  },
];

/*
  Utility to transform a YouTube watch URL or ID into a cookie‑less embed link.
*/
const toEmbedUrl = (idOrUrl: string) => {
  if (idOrUrl.length === 11 && !idOrUrl.includes("http")) return `https://www.youtube-nocookie.com/embed/${idOrUrl}`;
  const videoIdMatch = idOrUrl.match(/[?&]v=([^&]+)/);
  const id = videoIdMatch ? videoIdMatch[1] : idOrUrl;
  return `https://www.youtube-nocookie.com/embed/${id}`;
};

const Learn: React.FC = () => {
  const videos = videoData;

  if (!videos.length) {
    return (
      <div className="p-10 text-center text-red-600 font-montserrat">
        No videos found.
      </div>
    );
  }

  return (
    <div className="font-montserrat">
      {/* Hero / Parallax Header */}
      <div
        className="h-[400px] bg-fixed bg-center bg-cover flex flex-col items-center justify-center relative"
        style={{ backgroundImage: "url('https://wallpaperaccess.com/full/702861.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative z-10 text-4xl md:text-5xl text-white font-bold tracking-wide mb-4">
          Learn With Us
        </h1>
        <a
          href="https://www.youtube.com/@KanoonKiSALAH"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-block px-5 py-2 rounded-lg bg-[#EC9706] text-white font-medium hover:bg-[#e18c00] transition-colors"
        >
          Visit Our Channel
        </a>
      </div>

      {/* Video Grid */}
      <div className="max-w-6xl mx-auto p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => {
          const embedSrc = toEmbedUrl(video.id);
          return (
            <article
              key={video.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 flex flex-col overflow-hidden"
            >
              <div className="aspect-video w-full">
                <iframe
                  src={embedSrc}
                  title={video.title}
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-[#2B526E] mb-2 flex-1">
                  {video.title}
                </h2>

                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-center py-2 px-4 rounded-lg bg-gray-100 text-deepRoyal font-medium hover:bg-gray-200/60 transition-colors"
                >
                  Watch on YouTube
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* CTA Section */}
      <CallToAction />
    </div>
  );
};

export default Learn;
