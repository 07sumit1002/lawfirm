import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DOMPurify from "dompurify";

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

const BlogDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/blogs/slug/${slug}`);
        if (!res.ok) throw new Error("Article not found");
        const data = await res.json();
        setArticle(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <p className="text-xl">Loading article...</p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Article Not Found</h2>
        <Link to="/blog" className="text-blue-700 underline">
          Back to Blog
        </Link>
        
      </div>
    );
  }

  return (
    <>
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
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 lg:px-12">
        {/* Image Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[28rem] object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Title, Subtitle, Author, Date */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          {article.title}
        </h1>
        <div className="text-2xl text-slate-700 mb-2">{article.subtitle}</div>
        <div className="text-base text-slate-400 mb-10">
          By <span className="font-semibold">{article.author}</span> &middot; {article.date}
        </div>

        {/* Description Card */}
        <div className="bg-slate-100 rounded-xl px-10 py-8 shadow flex items-center gap-4 mb-14">
          <span className="inline-block w-2 h-12 bg-slate-300 rounded-full"></span>
          <span className="text-xl text-slate-700 font-medium text-justify">
            {article.description}
          </span>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow p-10 md:p-16 mb-16">
          <div
            className="prose prose-slate max-w-none text-xl leading-9 text-justify"
            style={{
              fontSize: "1.18rem",
              lineHeight: "2.1",
              wordBreak: "break-word",
              textWrap: "pretty",
            }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                article.content.replace(/<\/p><p>/g, "</p><p>&nbsp;</p><p>")
              ),
            }}
          />
        </div>

        {/* Back Button */}
        <div className="flex justify-end mt-12">
          <Link
            to="/blog"
            className="inline-block px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg shadow border-2 border-slate-800 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogDetail;
