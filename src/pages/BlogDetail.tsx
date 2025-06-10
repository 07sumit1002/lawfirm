import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Same JSON data as on the Blog page
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
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-80 object-cover rounded-xl mb-8"
        />
        <h1 className="text-4xl font-bold mb-2 text-slate-900">{article.title}</h1>
        <div className="text-lg text-slate-500 mb-3">{article.subtitle}</div>
        <div className="text-sm text-slate-400 mb-8">
          By {article.author} | {article.date}
        </div>
        <div
          className="prose max-w-none text-slate-800"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        <div className="mt-12">
          <Link
            to="/blog"
            className="inline-block px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900 rounded-lg shadow hover:brightness-90 transition"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
