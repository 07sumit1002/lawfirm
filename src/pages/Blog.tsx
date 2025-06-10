import React from 'react';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';

// JSON data placed directly in the file
const articles = [
  {
    id: 1,
    title: 'Understanding Legal Frameworks',
    subtitle: 'How legal systems shape business decisions and protect rights.',
    description:
      'Explore the impact of legal frameworks on modern business, compliance, and individual rights. This article delves into the foundations and current trends shaping the legal landscape.',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
    slug: 'understanding-legal-frameworks',
    date: '2025-06-10',
    author: 'Jane Doe',
    content: `
      <p>Legal frameworks are the backbone of modern society. They ensure order, protect rights, and provide mechanisms for resolving disputes.</p>
      <h2>Why Legal Frameworks Matter</h2>
      <p>Without a solid legal foundation, businesses and individuals would face uncertainty and risk. Laws provide predictability and structure, enabling growth and innovation.</p>
      <ul>
        <li>Contract enforcement</li>
        <li>Dispute resolution</li>
        <li>Protection of intellectual property</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: 'Corporate Law Trends 2025',
    subtitle: 'Emerging changes and their impact on businesses.',
    description:
      'Stay ahead with insights on the latest corporate law changes, regulatory updates, and what they mean for your organization in 2025 and beyond.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    slug: 'corporate-law-trends-2025',
    date: '2025-05-30',
    author: 'John Smith',
    content: `
      <p>Corporate law is evolving rapidly. In 2025, businesses must adapt to new regulations and compliance standards.</p>
      <h2>Key Trends</h2>
      <ol>
        <li>Environmental, Social, and Governance (ESG) requirements</li>
        <li>Data privacy and cybersecurity</li>
        <li>Cross-border compliance</li>
      </ol>
    `,
  },
];

const Blog = () => {
  // Show only 1 or 2 articles
  const visibleArticles = articles.slice(0, 2);

  return (
    <>
      {/* Banner Section */}
      <section className="relative pt-40 pb-28 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 opacity-95"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full text-sm font-bold shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
              <span className="tracking-wide">From Our Insights Desk</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Blog &{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
                Media Insights
              </span>
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
          {visibleArticles.map(({ id, title, subtitle, description, image, slug, date, author }) => (
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
                  <h3 className="text-3xl font-bold text-slate-800 mb-2">{title}</h3>
                  <div className="text-base text-slate-500 mb-3">{subtitle}</div>
                  <div className="text-sm text-slate-400 mb-4">
                    {author && <span>By {author}</span>} {date && <span> | {date}</span>}
                  </div>
                  <p className="text-lg text-slate-700 mb-6">{description}</p>
                </div>
                <div>
                  <Link
                    to={`/blog/${slug}`}
                    className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900 font-semibold rounded-lg shadow hover:brightness-90 transition"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />
    </>
  );
};

export default Blog;
