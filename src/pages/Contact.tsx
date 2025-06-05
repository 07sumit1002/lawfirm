import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send the data to the server here
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }
  };

  return (
    <div>
      <section className="pt-32 pb-16 bg-navy-900 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl flex flex-col justify-center items-center mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Contact Us
            </h1>
            
            <p className="text-xl text-gray-300">
              Get in touch with our team of legal experts today.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div >
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                Get In Touch
              </h2>
              
              <p className="text-gray-600 mb-8">
                Have questions or need legal assistance? Contact us today to schedule a consultation with one of our experienced attorneys.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start border-2  hover:bg-slate-100 rounded-2xl border-blue-600 px-3 w-2/3 py-2">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-navy-900" />
                  </div>
                  <div className="">
                    <h3 className="text-lg font-serif font-bold  text-navy-900 mb-2">Our Office</h3>
                    <p className="text-gray-600">123 Legal Avenue, New Delhi, India - 110001</p>
                  </div>
                </div>
                
                <div className="flex items-start  hover:bg-slate-100 border-2 rounded-3xl border-blue-600 px-3 w-2/3 py-2">
                  <div className="bg-blue-500 p-3  rounded-full mr-4">
                    <Phone className="h-6 w-6 text-navy-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-navy-900 mb-2">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 98765 43211</p>
                  </div>
                </div>
                
                <div className="flex items-start  hover:bg-slate-100 border-2 rounded-3xl border-blue-600 px-3 w-2/3 py-2">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-navy-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-navy-900 mb-2">Email</h3>
                    <p className="text-gray-600">info@aggarwallaw.com</p>
                    <p className="text-gray-600">contact@aggarwallaw.com</p>
                  </div>
                </div>
                
                <div className="flex items-start hover:bg-slate-100 border-2 rounded-3xl border-blue-600 px-3 w-2/3 py-2">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-navy-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-navy-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-serif font-bold text-navy-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
                    <a
                      key={platform}
                      href={`#${platform}`}
                      className="bg-navy-900 text-white hover:bg-blue-500 hover:text-navy-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    >
                      <span className="sr-only">{platform}</span>
                      <i className={`fab fa-${platform}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">
                  Send Us a Message
                </h2>
                
                {submitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    <p>Thank you for your message! We will get back to you soon.</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a service</option>
                      <option value="Family Law">Family Law</option>
                      <option value="Criminal Defense">Criminal Defense</option>
                      <option value="Corporate Law">Corporate Law</option>
                      <option value="Real Estate Law">Real Estate Law</option>
                      <option value="Civil Litigation">Civil Litigation</option>
                      <option value="Intellectual Property">Intellectual Property</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Your Message *
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5} 
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-navy-900 font-medium rounded-md transition-colors transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
              Our Location
            </h2>
            <p className="text-gray-600">
              Conveniently located in the heart of Kurukshetra, our office is easily accessible via public transportation.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md h-96">
            <iframe
    className="w-full h-full border-0"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.838448648001!2d76.8679528!3d29.9690056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU4JzA4LjQiTiA3NsKwNTInMDQuNiJF!5e0!3m2!1sen!2sin!4v1717146351234!5m2!1sen!2sin"
  ></iframe>
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">Google Maps Embed Would Go Here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;