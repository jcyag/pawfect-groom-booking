
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, Bath, Sparkles, Coins, Shield, Clock, Calendar } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  const services = [
    {
      title: 'Basic Wash',
      description: 'Essential cleaning service including bath, brush, and blow dry for your pet.',
      price: 'From $35',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: <Bath className="h-6 w-6 text-pawfect-dark" />
    },
    {
      title: 'Full Grooming',
      description: 'Complete package with bath, haircut, nail trim, ear cleaning, and more.',
      price: 'From $60',
      image: 'https://images.unsplash.com/photo-1559670085-b757b2f91869?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: <Scissors className="h-6 w-6 text-pawfect-dark" />
    },
    {
      title: 'Special Treatment',
      description: 'Luxury spa treatments for your pet, including aromatherapy and massage.',
      price: 'From $45',
      image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: <Sparkles className="h-6 w-6 text-pawfect-dark" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'My dog Max always comes back looking and smelling amazing! The staff is so caring and professional.',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      petType: 'Golden Retriever'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Our cat Luna used to hate grooming, but she actually enjoys going to Pawfect now. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      petType: 'Persian Cat'
    },
    {
      name: 'Emily Davis',
      rating: 4,
      comment: 'Professional service and they're so patient with my anxious poodle. Worth every penny!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      petType: 'Toy Poodle'
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-10 w-10 text-pawfect-pink" />,
      title: 'Certified Groomers',
      description: 'Our team consists of certified professional groomers with years of experience.'
    },
    {
      icon: <Coins className="h-10 w-10 text-pawfect-pink" />,
      title: 'Affordable Pricing',
      description: 'Quality grooming services at competitive prices with package deals available.'
    },
    {
      icon: <Clock className="h-10 w-10 text-pawfect-pink" />,
      title: 'Quick Service',
      description: 'Efficient grooming without compromising on quality to save your time.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pawfect-pink to-pawfect-blue opacity-30"></div>
        <div className="relative h-[80vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1587559070757-f72a388edbba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
          
          <div className="container mx-auto px-4 relative z-20 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-float">
                Pawfect Grooming for Your Furry Friends
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                Professional pet grooming services to keep your pets looking and feeling their best. Book your appointment today!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/booking" className="btn-primary bg-pawfect-pink text-pawfect-dark">
                  Book Appointment
                </Link>
                <Link to="/services" className="btn-secondary bg-white text-pawfect-dark">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-pawfect-gray">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a wide range of grooming services to keep your pets clean, healthy, and happy
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary inline-flex items-center">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-16 px-4 bg-pawfect-blue">
        <div className="container mx-auto max-w-screen-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-pawfect-dark">Ready to Book an Appointment?</h2>
              <p className="text-lg mb-6 text-gray-700">
                Scheduling your pet's grooming session is quick and easy. Choose a date and time that works for you, and we'll take care of the rest.
              </p>
              <Link to="/booking" className="btn-primary inline-flex items-center">
                <Calendar className="mr-2 h-5 w-5" /> Book Now
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-pawfect-pink absolute -top-5 -left-5 w-24 h-24 z-0 animate-float"></div>
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Happy dog after grooming" 
                className="rounded-2xl shadow-lg relative z-10 object-cover h-full"
              />
              <div className="aspect-square rounded-full bg-pawfect-peach absolute -bottom-5 -right-5 w-20 h-20 z-0 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            At Pawfect, we pride ourselves on providing the highest quality grooming services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-pawfect-gray transition-colors">
                <div className="inline-flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-pawfect-dark">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-pawfect-peach">
        <div className="container mx-auto px-4">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied customers and their pets
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-pawfect-pink text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-pawfect-dark">
            Ready to Give Your Pet the Pawfect Treatment?
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Book an appointment today and let us pamper your furry friend with our professional grooming services.
          </p>
          <Link to="/booking" className="btn-secondary inline-flex items-center">
            Book Your Appointment <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
