import React from 'react';
import { useParams, Link } from 'react-router-dom';

// JSON data (unchanged)
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
      <ul/>
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
      <ul>
        <li>Environmental, Social, and Governance (ESG) requirements</li>
        <li>Data privacy and cybersecurity</li>
        <li>Cross-border compliance</li>
      <ul/>
    `,
  },
];

const BlogDetail = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
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
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Image Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-72 object-cover object-center"
          />
        </div>

        {/* Title, Subtitle, Author, Date (not in a card) */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
          {article.title}
        </h1>
        <div className="text-lg text-slate-600 mb-1">{article.subtitle}</div>
        <div className="text-sm text-slate-400 mb-6">
          By <span className="font-semibold">{article.author}</span> &middot; {article.date}
        </div>

        {/* Description Card */}
        <div className="bg-slate-100 rounded-xl px-6 py-4 shadow flex items-center gap-3 mb-8">
          <span className="inline-block w-2 h-8 bg-slate-300 rounded-full"></span>
          <span className="text-lg text-slate-700 font-medium text-justify">{article.description}</span>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow p-8 md:p-12 mb-8">
          <div
            className="prose prose-slate max-w-none text-lg leading-relaxed"
            style={{ fontSize: '1.15rem' }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Back Button */}
        <div className="flex justify-end mt-8">
          <Link
            to="/blog"
                    className="inline-block px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg shadow border-2 border-slate-800 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"                  
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
