import React from 'react';
import CallToAction from '../components/CallToAction';

const Blog = () => {
  const cards = [
    {
      id: 1,
      title: 'Understanding Legal Frameworks',
      text: 'Explore how legal systems shape business decisions and protect rights.',
      image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      title: 'Corporate Law Trends 2025',
      text: 'Stay ahead with insights on emerging corporate law changes and their impacts.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      title: 'Contract Negotiation Tips',
      text: 'Learn best practices for negotiating contracts to safeguard your interests.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      title: 'Intellectual Property Basics',
      text: 'Protect your ideas and innovations with strong intellectual property strategies.',
      image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      title: 'Emerging Data Privacy Laws',
      text: 'A look into how evolving data regulations affect businesses worldwide.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 6,
      title: 'Effective Legal Research',
      text: 'Tips and tools for conducting efficient and thorough legal research.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80'
    },
  ];

  return (
    <>
      {/* Banner Section */}
      <section className="relative pt-40 pb-28 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 opacity-95"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center space-y-8 transform transition-all duration-1000 translate-y-0 opacity-100">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-full text-sm font-bold shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-book-open w-5 h-5 animate-pulse group-hover:animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </svg>
              <span className="tracking-wide">From Our Insights Desk</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-star w-4 h-4 animate-spin group-hover:animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
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
      <section className="bg-white pt-16 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-semibold text-slate-800 mb-8">Our Articles</h2>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="bg-white pb-16 px-4">
        <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ id, title, text, image }) => (
            <div
              key={id}
              className="rounded-lg shadow-md overflow-hidden bg-slate-50 hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover rounded-t-lg"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-600 text-sm">{text}</p>
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
