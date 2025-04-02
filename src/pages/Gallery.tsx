
import React, { useState } from 'react';
import GalleryItem from '@/components/GalleryItem';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'before-after', name: 'Before & After' },
    { id: 'dogs', name: 'Dogs' },
    { id: 'cats', name: 'Cats' },
    { id: 'special-styles', name: 'Special Styles' }
  ];
  
  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1516734212186-65266f46771f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: "Fluffy's Transformation",
      category: 'before-after',
      description: "A complete makeover for Fluffy, from matted fur to a clean, stylish cut that's easier to maintain."
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: "Max's Spa Day",
      category: 'dogs',
      description: 'Max enjoying his regular grooming session with a fresh haircut and pawdicure.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: "Bella's Bath Time",
      category: 'cats',
      description: 'Bella getting the full spa treatment with our special cat-friendly bathing techniques.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: "Charlie's New Look",
      category: 'before-after',
      description: "Charlie's dramatic transformation from a shaggy coat to a sleek, stylish trim."
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Japanese Style Cut',
      category: 'special-styles',
      description: 'A specialty Asian fusion cut that gives this pup an adorable teddy bear appearance.'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: "Oliver's Lion Cut",
      category: 'cats',
      description: 'Oliver sporting a lion cut, which helps reduce shedding and matting while keeping him cool.'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: "Teddy's First Grooming",
      category: 'dogs',
      description: "Teddy's first professional grooming experience, focusing on gentle introduction to the process."
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: "Ruby's Mohawk",
      category: 'special-styles',
      description: 'Ruby rocking a fun mohawk style that showcases our creative grooming options.'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Summer Poodle Cut',
      category: 'special-styles',
      description: 'A classic poodle cut with our own special touch, perfect for the summer months.'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: "Coco's Makeover",
      category: 'before-after',
      description: 'Coco went from neglected coat to perfectly groomed in just one session.'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: "Whiskers' Bath Day",
      category: 'cats',
      description: 'Whiskers enjoying our special cat-friendly grooming services designed for maximum comfort.'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: "Rocky's Regular Cut",
      category: 'dogs',
      description: 'Rocky getting his monthly grooming with our signature style that his owners love.'
    }
  ];

  const filteredGalleryItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-pawfect-pink">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pawfect-dark">
              Our Grooming Gallery
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              Browse our collection of grooming transformations and happy furry clients
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white">
            <path fill="currentColor" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,96C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === category.id
                    ? 'bg-pawfect-pink text-pawfect-dark font-medium shadow-md'
                    : 'bg-pawfect-gray hover:bg-pawfect-pink/30 text-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGalleryItems.map((item) => (
              <GalleryItem
                key={item.id}
                image={item.image}
                title={item.title}
                category={categories.find(cat => cat.id === item.category)?.name || ''}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 px-4 bg-pawfect-gray">
        <div className="container mx-auto">
          <h2 className="section-title">Follow Us on Instagram</h2>
          <p className="section-subtitle">
            See more of our grooming work and cute pets on our Instagram page
          </p>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <a 
                key={item}
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={`https://source.unsplash.com/random/300x300?pet,dog,cat&sig=${item}`} 
                    alt={`Instagram post ${item}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-pawfect-pink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">View</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block btn-primary"
            >
              @pawfectgrooming
            </a>
          </div>
        </div>
      </section>

      {/* User Submissions CTA */}
      <section className="py-16 px-4 bg-pawfect-peach">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-6 text-pawfect-dark">
            Share Your Pet's Pawfect Moment
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Had your pet groomed with us? We'd love to see the results! Tag us in your social media posts or send us your photos to be featured in our gallery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:photos@pawfectgroom.com" 
              className="btn-primary inline-flex items-center"
            >
              Email Your Photos
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary inline-flex items-center"
            >
              Tag #PawfectGrooming
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
