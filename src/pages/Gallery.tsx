import React, { useState } from 'react';
import CallToAction from '../components/CallToAction';

const galleryImages = [
  {
    id: 1,
    title: 'Main Office Exterior',
    category: 'Office',
    image: 'https://images.pexels.com/photos/1531/black-and-white-city-landmark-lights.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Conference Room',
    category: 'Office',
    image: 'https://images.pexels.com/photos/260928/pexels-photo-260928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Legal Team Meeting',
    category: 'Team',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Client Consultation',
    category: 'Consultations',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    title: 'Law Library',
    category: 'Office',
    image: 'https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    title: 'Attorney Workspace',
    category: 'Office',
    image: 'https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 7,
    title: 'Team Building Event',
    category: 'Events',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 8,
    title: 'Legal Workshop',
    category: 'Events',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 9,
    title: 'Partner Meeting',
    category: 'Team',
    image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 10,
    title: 'Courtroom Preparation',
    category: 'Consultations',
    image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 11,
    title: 'Document Review',
    category: 'Work',
    image: 'https://images.pexels.com/photos/6098051/pexels-photo-6098051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 12,
    title: 'Annual Firm Dinner',
    category: 'Events',
    image: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex <= 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex >= filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  return (
    <div>
      <section className="pt-32 pb-16 bg-navy-900 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2961984/pexels-photo-2961984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl flex flex-col mx-auto justify-center items-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Gallery
            </h1>
            
            <p className="text-xl text-gray-300">
              Take a visual tour of our offices, team, and events.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
              Explore Our Gallery
            </h2>
            <p className="text-gray-600">
              Get a glimpse of our firm's facilities, team members, and activities through our photo gallery.
            </p>
          </div>
          
          <div className="mb-10 flex justify-center flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-blue-500 text-navy-900'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg shadow-md group cursor-pointer relative"
                onClick={() => openLightbox(image.id)}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={image.image} 
                    alt={image.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center px-4">
                    <h3 className="text-white font-serif font-bold text-xl mb-1">{image.title}</h3>
                    <p className="text-blue-500">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeLightbox}
          >
            &times;
          </button>
          
          <button 
            className="absolute left-4 text-white text-4xl"
            onClick={() => navigateImage('prev')}
          >
            &#8249;
          </button>
          
          <button 
            className="absolute right-4 text-white text-4xl"
            onClick={() => navigateImage('next')}
          >
            &#8250;
          </button>
          
          <div className="max-w-4xl max-h-[80vh]">
            {filteredImages.filter(img => img.id === selectedImage).map((image) => (
              <div key={image.id} className="text-center">
                <img 
                  src={image.image} 
                  alt={image.title} 
                  className="max-h-[70vh] mx-auto"
                />
                <div className="mt-4">
                  <h3 className="text-white font-serif font-bold text-xl">{image.title}</h3>
                  <p className="text-blue-500">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <CallToAction />
    </div>
  );
};

export default Gallery;