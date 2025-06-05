import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Rajiv Mehta',
    position: 'Business Owner',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'The legal expertise provided by Aggarwal Law Firm was exceptional. They helped my business navigate complex regulations with ease and professionalism.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Real Estate Developer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'I was impressed by their attention to detail and dedication to my case. The team at Aggarwal Law Firm goes above and beyond for their clients.'
  },
  {
    id: 3,
    name: 'Amit Singh',
    position: 'Corporate Executive',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'The strategic legal advice I received helped me resolve a complex dispute efficiently. Their professionalism and expertise are unmatched.'
  },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative max-w-4xl  mx-auto">
      <div className="overflow-hidden ">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="min-w-full px-4"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-blue-500">★</span>
                  ))}
                </div>
                
                <blockquote className="text-lg text-blue-600 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <h4 className="text-blue-700 font-bold font-serif">{testimonial.name}</h4>
                  <p className="text-blue-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-blue-500' : 'bg-blue-200'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;