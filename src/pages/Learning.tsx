import React, { useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";

/* ----------  COURSE DATA  ---------- */
interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  link: string;
  author?: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Business Law Essentials",
    subtitle: "Master the foundations of corporate legal systems.",
    description:
      "This course provides a comprehensive overview of legal structures that influence businesses, from contracts and compliance to intellectual‑property rights.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
    slug: "business-law-essentials",
    date: "Starts July 1 2025",
    author: "Prof. Jane Doe",
    link: "https://example.com/courses/business-law-essentials",
  },
  {
    id: 2,
    title: "Corporate Law Trends 2025",
    subtitle: "Navigate the evolving corporate legal landscape.",
    description:
      "Stay up‑to‑date with ESG norms, global compliance, and key legal changes shaping corporations in 2025.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    slug: "corporate-law-trends-2025",
    date: "Starts July 15 2025",
    author: "John Smith, LLM",
    link: "https://example.com/courses/corporate-law-trends-2025",
  },
];

/* ----------  VIDEO DATA  ---------- */
interface Video {
  id: string; // YouTube video ID
  title: string;
  url: string;
}

const videos: Video[] = [
  {
    id: "xxnqZtZ81GQ",
    title: "Intro to Legal Learning",
    url: "https://www.youtube.com/watch?v=xxnqZtZ81GQ",
  },
  {
    id: "k7eTXXbc6bI",
    title: "Understanding Contracts",
    url: "https://www.youtube.com/watch?v=k7eTXXbc6bI",
  },
  {
    id: "gTuJmd4Deho",
    title: "IP Basics for Start‑ups",
    url: "https://www.youtube.com/watch?v=gTuJmd4Deho",
  },
];

/* ----------  MAIN PAGE  ---------- */
const Learn: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  return (
    <>
      {/* ========= HERO ========= */}
      <section className="relative pt-40 pb-28 bg-[#2B526E]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B526E] via-slate-900 to-[#2B526E] opacity-90" />
        <div className="relative z-10 container mx-auto px-4 text-center space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight font-[Montserrat]">
            Explore&nbsp;Our&nbsp;Courses
          </h1>
          <p className="text-xl lg:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed center">
            Gain practical legal knowledge from leading experts.
          </p>
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-3xl">
              <p className="text-lg text-white leading-relaxed italic">
                "From foundational knowledge to advanced insights—learn at your
                pace, your way."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========= VIDEO GALLERY ========= */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-slate-800 text-center mb-10">
            Video&nbsp;Library
          </h2>

          {/* Video grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl shadow-lg focus:outline-none"
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-16 h-16 fill-[#EC9706]"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========= COURSES ========= */}
      <section className="bg-white pt-8 pb-16 px-4">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-5xl font-semibold text-slate-800">Our&nbsp;Courses</h2>
        </div>

        <div className="container mx-auto flex flex-col gap-12">
          {courses.map(
            ({ id, title, subtitle, description, image, slug, date, author, link }) => (
              <div
                key={id}
                className="flex flex-col lg:flex-row items-center bg-slate-50 rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full lg:w-2/5 h-72 object-cover"
                  loading="lazy"
                />
                <div className="flex-1 p-8 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-2">
                      {title}
                    </h3>
                    <div className="text-base text-slate-500 mb-3">{subtitle}</div>
                    <div className="text-sm text-slate-400 mb-4">
                      {author && <span>By {author}</span>} {date && <span>&nbsp;|&nbsp;{date}</span>}
                    </div>
                    <p className="text-lg text-slate-700 mb-6 text-justify">
                      {description}
                    </p>
                  </div>
                  <div>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-[#2B526E] text-white font-semibold rounded-lg shadow border-2 border-[#2B526E] transition-transform hover:scale-105 hover:shadow-lg"
                    >
                      Enroll&nbsp;Now
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* ========= CTA ========= */}
      <CallToAction />
    </>
  );
};

export default Learn;
