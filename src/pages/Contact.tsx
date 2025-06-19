import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

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
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
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
          style={{ backgroundImage: "url('https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-3xl flex flex-col justify-center items-center mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">Get in touch with our team of legal experts today.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">Get In Touch</h2>
              <p className="text-deepRoyal mb-8">
                Have questions or need legal assistance? Contact us today to schedule a consultation with one of our experienced attorneys.
              </p>
              {[{
                  icon: <MapPin className="h-6 w-6 text-deepRoyal" />,
                  title: 'Our Office',
                  lines: ['Chamber no. 246, District Court, kurukshetra'],
                },
                {
                  icon: <Phone className="h-6 w-6 text-deepRoyal" />,
                  title: 'Phone',
                  lines: ['+91 97290 79252'],
                },
                {
                  icon: <Mail className="h-6 w-6 text-deepRoyal" />,
                  title: 'Email',
                  lines: ['aggarwalhimanshu8@gmail.com'],
                },
                {
                  icon: <Clock className="h-6 w-6 text-deepRoyal" />,
                  title: 'Business Hours',
                  lines: ['Mon - Fri: 9 AM - 6 PM', 'Sat: 10 AM - 2 PM', 'Sun: Closed'],
                },
              ].map(({ icon, title, lines }, i) => (
                <div
                  key={i}
                  className="flex items-start hover:bg-slate-100 border-2 rounded-3xl border-blue-600 px-3 w-full sm:w-2/3 py-2 mt-1"
                >
                  <div className="bg-white p-3 border border-deepRoyal rounded-full mr-4">{icon}</div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-deepRoyal mb-2">{title}</h3>
                    {lines.map((line, idx) => {
                      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(line);
                      const isPhone = /^\+?\d[\d\s-]{7,}$/.test(line);
                      return (
                        <p key={idx} className="text-deepRoyal/70 break-words text-sm sm:text-base">
                          {isEmail ? (
                            <a href={`mailto:${line}`} className="hover:text-blue-300">{line}</a>
                          ) : isPhone ? (
                            <a href={`tel:${line.replace(/\s+/g, '')}`} className="hover:text-blue-300">{line}</a>
                          ): (
                            line
                          )}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="mt-8">
                <h3 className="text-lg font-serif font-bold text-navy-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {[
                    // { platform: 'facebook', url: '#', icon: <FaFacebookF /> },
                    { platform: 'Linkedin', url: 'https://www.linkedin.com/in/himanshu-a-aggarwal-%F0%9F%87%AE%F0%9F%87%B3-51157099?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', icon: <FaLinkedin /> },
                    { platform: 'Youtube', url: 'https://www.youtube.com/@KanoonKiSALAH', icon: <FaYoutube /> },
                    { platform: 'instagram', url: 'https://instagram.com/kanoon_ki_salah?igshid=YmMyMTA2M2Y=', icon: <FaInstagram /> },
                  ].map(({ platform, url, icon }) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-200/40 text-deepRoyal hover:bg-blue-200 hover:text-navy-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors mx-1"
                      aria-label={platform}
                    >
                      {/* <span className="sr-only">{platform}</span> */}
                      {/* <i className={`fab fa-${platform} text-xl`}></i> */}
                      {icon}
                    </a>
                  ))}

                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">Send Us a Message</h2>
                {submitted && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    <p>Thank you for your message! We will get back to you soon.</p>
                  </div>
                )}
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
                      maxLength={10}
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
                      className="w-full px-6 py-3 bg-blue-200/30 hover:bg-gray-300/30 hover:text-deepRoyal/20 text-deepRoyal font-medium rounded-md transition-colors transform"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        className="py-16 bg-gray-50"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">Our Location</h2>
            <p className="text-deepRoyal">Conveniently located in the heart of Kurukshetra, our office is easily accessible via public transportation.</p>
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
      </motion.section>
    </div>
  );
};

export default Contact;
