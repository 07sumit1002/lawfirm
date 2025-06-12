import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Rajiv Mehta',
    quote: 'The legal expertise provided by Aggarwal Legal Firm was exceptional.',
    rating: 4
  },
  {
    id: 2,
    name: 'Priya Sharma',
    quote: 'I was impressed by their attention to detail and dedication to my case.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Singh',
    quote: 'The strategic legal advice helped me resolve a complex dispute efficiently.',
    rating: 4
  },
  {
    id: 4,
    name: 'Sohan Lal',
    quote: 'One of the most reputed lawyer in KKR. Dealt my case very nicely.',
    rating: 5
  },
  {
    id: 5,
    name: 'Kirisna Kese',
    quote: 'He is very humble in nature. Nicely dealt my case. Thanks sir.',
    rating: 5
  },
  {
    id: 6,
    name: 'Sonia Garg',
    quote: 'बहुत ही अच्छे वकील साहब है! मेरे केस को बहुत अच्छे से डील कर रहे है |',
    rating: 5
  },
  {
    id: 7,
    name: 'Anil Singh',
    quote: 'I am from Himachal. Sir dealt my case very effectively.',
    rating: 5
  },
  {
    id: 8,
    name: 'Amit Rohilla',
    quote: 'I contacted sir after seeing him on Google. Very nice dealing.',
    rating: 5
  },
  {
    id: 9,
    name: 'Meenu Sharma',
    quote: 'Great and nice advocate. Thanks sir for helping me.',
    rating: 5
  },
  {
    id: 10,
    name: 'Subhan Malik',
    quote: 'Nice advocate. Contacted sir through Google.',
    rating: 5
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
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full px-4">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? 'text-deepRoyal' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>

                <blockquote className="text-lg text-deepRoyal italic mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <h4 className="text-deepRoyal font-bold font-serif">{testimonial.name}</h4>
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
