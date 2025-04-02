
import React from 'react';
import { Link } from 'react-router-dom';
import { Bath, Scissors, Sparkles, Heart, CheckCheck, Calendar } from 'lucide-react';

const Services = () => {
  const servicePackages = [
    {
      title: 'Basic Wash',
      price: 'From $35',
      icon: <Bath className="h-8 w-8 text-pawfect-pink" />,
      description: 'Essential cleaning service that includes a bath with premium shampoo, thorough drying, and basic brushing.',
      features: [
        'Bath with premium shampoo',
        'Blow dry & brush out',
        'Ear cleaning',
        'Nail trim',
        'Fresh scent spritz',
      ],
      bestFor: 'Ideal for regular maintenance between full grooming sessions.'
    },
    {
      title: 'Full Grooming',
      price: 'From $60',
      icon: <Scissors className="h-8 w-8 text-pawfect-pink" />,
      description: 'Comprehensive grooming package that includes everything in the Basic Wash plus professional haircut styled to your preference.',
      features: [
        'Everything in Basic Wash',
        'Professional haircut',
        'Sanitary trim',
        'Paw pad trimming',
        'Face trimming',
        'Teeth brushing',
      ],
      bestFor: 'Perfect for pets needing a complete makeover or regular styling maintenance.'
    },
    {
      title: 'Luxury Spa Treatment',
      price: 'From $75',
      icon: <Sparkles className="h-8 w-8 text-pawfect-pink" />,
      description: 'Premium spa experience including massage, aromatherapy, and special treatments for the ultimate pet pampering session.',
      features: [
        'Everything in Full Grooming',
        'Aromatherapy bath',
        'Fur conditioning treatment',
        'Relaxing massage',
        'Paw balm application',
        'Blueberry facial',
        'Bandana or bow',
      ],
      bestFor: 'The ultimate pampering experience for pets who deserve extra special care.'
    }
  ];

  const additionalServices = [
    {
      title: 'Nail Trimming',
      price: '$15',
      description: 'Professional trimming to keep your pet\'s nails at a comfortable length.'
    },
    {
      title: 'Teeth Cleaning',
      price: '$20',
      description: 'Gentle cleaning to maintain your pet\'s dental hygiene and fresh breath.'
    },
    {
      title: 'De-shedding Treatment',
      price: '$25',
      description: 'Special treatment to reduce shedding and remove loose fur from the undercoat.'
    },
    {
      title: 'Flea Treatment',
      price: '$30',
      description: 'Effective flea bath and treatment to eliminate and prevent fleas.'
    },
    {
      title: 'Ear Cleaning',
      price: '$12',
      description: 'Thorough cleaning to prevent infections and maintain ear health.'
    },
    {
      title: 'Paw Balm Treatment',
      price: '$10',
      description: 'Moisturizing treatment for dry or cracked paw pads.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-pawfect-blue">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pawfect-dark">
              Our Grooming Services
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              Discover our range of professional grooming services designed to keep your pets looking and feeling their best.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white">
            <path fill="currentColor" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,96C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Our Grooming Packages</h2>
          <p className="section-subtitle">
            Choose the perfect package for your furry friend from our selection of professional grooming services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {servicePackages.map((pkg, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-pawfect-pink"
              >
                <div className="bg-pawfect-pink/10 p-6 text-center border-b border-gray-200">
                  <div className="inline-flex items-center justify-center mb-4">
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-pawfect-dark">{pkg.title}</h3>
                  <p className="text-2xl font-bold text-pawfect-dark mt-2">{pkg.price}</p>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <h4 className="font-semibold text-pawfect-dark mb-3 flex items-center">
                    <CheckCheck className="h-5 w-5 mr-2 text-pawfect-pink" /> 
                    What's Included:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-pawfect-pink mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-pawfect-gray p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-pawfect-dark mb-2 flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-pawfect-pink" /> 
                      Best For:
                    </h4>
                    <p className="text-gray-600">{pkg.bestFor}</p>
                  </div>
                  
                  <Link 
                    to="/booking" 
                    className="w-full btn-primary text-center inline-block"
                  >
                    Book This Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 px-4 bg-pawfect-gray">
        <div className="container mx-auto">
          <h2 className="section-title">Additional Services</h2>
          <p className="section-subtitle">
            Customize your pet's grooming experience with our à la carte services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-pawfect-dark">{service.title}</h3>
                  <span className="bg-pawfect-pink px-3 py-1 rounded-full font-medium text-pawfect-dark">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Got questions about our grooming services? Find answers to the most common queries below
          </p>
          
          <div className="mt-12 space-y-6">
            <div className="border border-gray-200 rounded-xl p-6 hover:border-pawfect-pink transition-colors">
              <h3 className="text-xl font-semibold text-pawfect-dark mb-3">How long does a grooming session take?</h3>
              <p className="text-gray-600">
                Most grooming sessions take between 1.5 to 3 hours, depending on your pet's size, coat condition, and the services requested. We prioritize quality over speed to ensure the best experience for your pet.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6 hover:border-pawfect-pink transition-colors">
              <h3 className="text-xl font-semibold text-pawfect-dark mb-3">How often should I have my pet groomed?</h3>
              <p className="text-gray-600">
                We recommend grooming every 4-6 weeks for most breeds. However, the frequency can vary based on your pet's coat type, lifestyle, and specific needs. Our groomers can help you determine the ideal schedule for your pet.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6 hover:border-pawfect-pink transition-colors">
              <h3 className="text-xl font-semibold text-pawfect-dark mb-3">Do you groom cats as well as dogs?</h3>
              <p className="text-gray-600">
                Yes, we provide grooming services for both cats and dogs. Our groomers are trained to handle the specific needs of each pet type, using techniques and products that are appropriate for their coat and temperament.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6 hover:border-pawfect-pink transition-colors">
              <h3 className="text-xl font-semibold text-pawfect-dark mb-3">What if my pet has special needs or is anxious?</h3>
              <p className="text-gray-600">
                We welcome pets with special needs and those who experience anxiety. Please inform us about your pet's requirements when booking, and our patient, experienced groomers will take extra care to ensure your pet feels comfortable throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-pawfect-blue text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6 text-pawfect-dark">Ready to Schedule a Grooming Appointment?</h2>
          <p className="text-xl mb-8 text-gray-700">
            Book now to give your pet the grooming experience they deserve. Our team is ready to pamper your furry friend!
          </p>
          <Link to="/booking" className="btn-primary inline-flex items-center">
            <Calendar className="mr-2 h-5 w-5" /> Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
