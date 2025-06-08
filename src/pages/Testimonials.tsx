import React, { useState } from 'react';
import CallToAction from '../components/CallToAction';

const testimonials = [
  {
    id: 1,
    name: 'Rajiv Mehta',
    position: 'Business Owner',
    company: 'Mehta Enterprises',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'The legal expertise provided by Aggarwal Law Firm was exceptional. They helped my business navigate complex regulations with ease and professionalism. I highly recommend their services to anyone looking for reliable legal counsel.',
    rating: 5,
    service: 'Corporate Law'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Real Estate Developer',
    company: 'Sharma Properties',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'I was impressed by their attention to detail and dedication to my case. The team at Aggarwal Law Firm goes above and beyond for their clients. They helped me resolve a complex property dispute efficiently and favorably.',
    rating: 5,
    service: 'Real Estate Law'
  },
  {
    id: 3,
    name: 'Amit Singh',
    position: 'Corporate Executive',
    company: 'Global Innovations',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'The strategic legal advice I received helped me resolve a complex dispute efficiently. Their professionalism and expertise are unmatched. I particularly appreciated how they explained complex legal concepts in easy-to-understand terms.',
    rating: 5,
    service: 'Civil Litigation'
  },
  {
    id: 4,
    name: 'Neha Gupta',
    position: 'Entrepreneur',
    company: 'TechStart Solutions',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'Aggarwal Law Firm provided exceptional guidance for my startup. Their expertise in intellectual property protection was invaluable as we launched our technology platform. They continue to be our trusted legal advisors.',
    rating: 5,
    service: 'Intellectual Property'
  },
  {
    id: 5,
    name: 'Vikram Malhotra',
    position: 'CFO',
    company: 'Pinnacle Industries',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'Their tax law expertise saved our company significant resources during a complex audit. The team was responsive, knowledgeable, and strategic in their approach. We continue to rely on them for all our corporate legal matters.',
    rating: 4,
    service: 'Tax Law'
  },
  {
    id: 6,
    name: 'Ananya Patel',
    position: 'Medical Professional',
    company: 'City Hospital',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'During a difficult divorce, the compassionate team at Aggarwal Law Firm provided not just legal expertise but emotional support. They fought for my rights while keeping my children\'s wellbeing at the forefront.',
    rating: 5,
    service: 'Family Law'
  }
];

const Testimonials = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredTestimonials = filter === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.service === filter);
  
  const services = ['All', ...new Set(testimonials.map(t => t.service))];

  return (
    <div>
      <section className="pt-32 pb-16 bg-navy-900 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/8111301/pexels-photo-8111301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl flex flex-col justify-center items-center mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Client Testimonials
            </h1>
            
            <p className="text-xl text-gray-300">
              Hear what our clients have to say about their experience working with us.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">
              At Aggarwal Law Firm, client satisfaction is our top priority. Here's what some of our clients have to say about their experience working with our team.
            </p>
          </div>
          <div className="max-w-5xl mx-auto text-center mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                {
                  icon: "Google Reviews",
                  rating: "4.8/5",
                  logo: "https://static.vecteezy.com/system/resources/previews/011/598/471/original/google-logo-icon-illustration-free-vector.jpg",
                  link: "https://www.google.com/search?q=aggarwal+law+firm+reviews",
                },
                {
                  icon: "Justdial",
                  rating: "4.7/5",
                  logo: "https://cdn.pnggallery.com/wp-content/uploads/justdial-jd-logo-04.png",
                  link: "https://www.justdial.com/",
                },
                {
                  icon: "Trustpilot",
                  rating: "4.6/5",
                  logo: "https://companieslogo.com/img/orig/TRST.L-5ada9c92.png?t=1663382464",
                  link: "https://www.trustpilot.com/",
                },{
                  icon: "LawRato",
                  rating: "4.0/5",
                  logo: "https://play-lh.googleusercontent.com/FrfTAo5rpKvRgubrkpyEtkZeI8epH6IERDroFZIrlOre-gUqHmGUgL2zmAcL4eF-kB4",
                  link: "https://lawrato.com/advocate-himanshu-aggarwal",
                },
              ].map((review, index) => (
                <a
                  key={index}
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white shadow-md rounded-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow hover:scale-[1.]"
                ><div className="flex items-center justify-center space-x-3">
                  <img
                    src={review.logo}
                    alt={review.icon}
                    className="h-10 w-[30px]"
                  />
                  {/* <h3 className="text-lg font-semibold text-navy-900 text-center">{review.icon}</h3> */}
                  <p className="text-gray-600 text-[20px]">Rating: {review.rating}</p>
                  </div>
                </a>
              ))}
            </div>


          </div>
          
          <div className="mb-10 flex justify-center flex-wrap gap-2">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setFilter(service)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === service
                    ? 'bg-blue-500 text-navy-900'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-200 transition-shadow p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-navy-900 font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`text-${i < testimonial.rating ? 'blue' : 'gray'}-500`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="text-sm text-gray-500">
                  Service: <span className="text-blue-600">{testimonial.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
              Our Success By The Numbers
            </h2>
            <p className="text-gray-600">
              Our track record speaks for itself with high client satisfaction rates and successful case outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Client Satisfaction', value: '98%' },
              { label: 'Cases Won', value: '500+' },
              { label: 'Years of Combined Experience', value: '75+' },
              { label: 'Returning Clients', value: '85%' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-8 text-center"
              >
                <div className="text-4xl font-bold text-blue-500 mb-2">{stat.value}</div>
                <div className="text-navy-900 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-navy-900 rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-serif font-bold text-white mb-6 text-center">
                Share Your Experience
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 rounded-md border border-gray-700 bg-navy-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 rounded-md border border-gray-700 bg-navy-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Service Used
                  </label>
                  <select 
                    className="w-full px-4 py-2 rounded-md border border-gray-700 bg-navy-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    {services.filter(s => s !== 'All').map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Your Testimonial
                  </label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-2 rounded-md border border-gray-700 bg-navy-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Share your experience working with us..."
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        className="text-2xl text-gray-400 hover:text-blue-500 focus:text-blue-500"
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-navy-900 font-medium rounded-md transition-colors w-full"
                  >
                    Submit Testimonial
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </div>
  );
};

export default Testimonials;