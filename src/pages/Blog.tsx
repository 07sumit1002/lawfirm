import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';

interface BlogArticle {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  author: string;
  content: string;
}

const Blog = () => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('https://lawfirm-fawn.vercel.app:3001/api/blogs');
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const visibleArticles = articles.slice(0, 4); // show top 3 or modify as needed

  return (
    <>
      {/* Banner Section */}
      <section className="relative pt-40 pb-28 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 opacity-95"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Blog & Media Insights
            </h1>
            <p className="text-xl lg:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              Stay updated with expert legal insights, thought leadership, and highlights from across the firm.
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-3xl">
                <p className="text-lg text-white leading-relaxed italic">
                  "Explore our latest articles, announcements, and features showcasing our legal perspectives and achievements."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Articles Heading */}
      <section className="bg-white pt-16 pb-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-semibold text-slate-800 mb-8">Our Articles</h2>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="bg-white pb-16 px-4">
        <div className="container mx-auto flex flex-col gap-12">
          {loading ? (
            <p className="text-center text-gray-500 text-lg">Loading articles...</p>
          ) : (
            visibleArticles.map(({ _id, title, subtitle, description, image, slug, date, author }) => (
              <div
                key={_id}
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
                    <h3 className="text-3xl font-bold text-slate-800 mb-2">{title}</h3>
                    <div className="text-base text-slate-500 mb-3">{subtitle}</div>
                    <div className="text-sm text-slate-400 mb-4">
                      {author && <span>By {author}</span>} {date && <span> | {date}</span>}
                    </div>
                    <p className="text-lg text-slate-700 mb-6 text-justify">{description}</p>
                  </div>
                  <div>
                    <Link
                      to={`/blog/${slug}`}
                      className="inline-block px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg shadow border-2 border-slate-800 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />
    </>
  );
};

export default Blog;
