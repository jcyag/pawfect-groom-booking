
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, Heart, ShieldCheck } from 'lucide-react';
import TeamMember from '@/components/TeamMember';

const About = () => {
  const teamMembers = [
    {
      name: 'Emma Wilson',
      role: 'Head Groomer & Founder',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Emma has over 10 years of experience in pet grooming. Her gentle approach and genuine love for animals make her a favorite among our regular clients.',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Marcus Thompson',
      role: 'Senior Groomer',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'With a background in veterinary assistance, Marcus brings a wealth of knowledge about pet health and behavior to his grooming techniques.',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    },
    {
      name: 'Sophia Chen',
      role: 'Grooming Specialist',
      image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Sophia specializes in working with anxious pets. Her calm demeanor and patience help even the most nervous animals feel comfortable during grooming.',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'James Rodriguez',
      role: 'Stylist & Groomer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'James is known for his creative grooming styles and attention to detail. He takes pride in making each pet look their absolute best.',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com'
    }
  ];

  const valuesData = [
    {
      icon: <Heart className="h-12 w-12 text-pawfect-pink" />,
      title: 'Compassionate Care',
      description: "We treat every pet with the same love and attention we give to our own. Your pets' comfort and happiness are our top priorities."
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-pawfect-pink" />,
      title: 'Safety First',
      description: 'We follow strict safety protocols and use only pet-friendly, premium products to ensure the wellbeing of your furry friends.'
    },
    {
      icon: <Award className="h-12 w-12 text-pawfect-pink" />,
      title: 'Professional Excellence',
      description: 'Our team of certified groomers continually updates their skills to provide the highest quality grooming services.'
    }
  ];

  const milestones = [
    {
      year: '2015',
      title: 'The Journey Begins',
      description: 'Pawfect Grooming was founded by Emma Wilson with a small shop and a big dream to provide exceptional pet grooming services.'
    },
    {
      year: '2017',
      title: 'Growing Community',
      description: 'Within two years, our client base had grown significantly thanks to word-of-mouth and our dedication to quality care.'
    },
    {
      year: '2019',
      title: 'Award Recognition',
      description: 'Pawfect was recognized as the "Best Pet Grooming Service" in the local community awards.'
    },
    {
      year: '2021',
      title: 'Expanded Services',
      description: 'We introduced new premium grooming packages and specialized treatments to better serve our diverse pet clients.'
    },
    {
      year: '2023',
      title: 'Today',
      description: 'Now with a team of expert groomers, we continue to provide outstanding grooming services with the same passion and attention to detail.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-pawfect-blue">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pawfect-dark">
              About Pawfect
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              We're passionate about pets and dedicated to providing the best grooming experience possible
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white">
            <path fill="currentColor" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,96C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="aspect-square rounded-full bg-pawfect-pink absolute -top-5 -left-5 w-24 h-24 z-0 animate-float"></div>
              <img 
                src="https://images.unsplash.com/photo-1516734212186-65266f46771f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Pet grooming salon" 
                className="rounded-2xl shadow-lg relative z-10"
              />
              <div className="aspect-square rounded-full bg-pawfect-blue absolute -bottom-5 -right-5 w-20 h-20 z-0 animate-float"></div>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-pawfect-dark">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Pawfect Grooming was born out of a deep love for animals and a recognition of the need for compassionate, high-quality pet grooming services in our community. What started as a small operation has grown into a trusted name in pet care.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, Emma Wilson, has always had a special connection with animals. After working in various pet care facilities, she noticed that many grooming services prioritized speed over quality and comfort. This inspired her to create a different kind of grooming experience — one where pets' needs come first.
              </p>
              <p className="text-gray-600">
                Today, Pawfect continues to operate with the same core values: treating every pet with kindness, respect, and individual attention. We've grown our team with like-minded professionals who share our passion for animal welfare and grooming excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-pawfect-gray">
        <div className="container mx-auto">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            These core principles guide everything we do at Pawfect
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {valuesData.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md text-center">
                <div className="inline-flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-pawfect-dark">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title">Our Journey</h2>
          <div className="mt-12 relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-pawfect-pink transform md:translate-x-px"></div>
            
            {/* Timeline Items */}
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className="md:w-1/2 p-4 flex justify-center md:justify-end items-start">
                  <div className={`text-center md:text-right ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} md:pr-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-8 md:pr-0' : ''}`}>
                    <div className="bg-pawfect-pink text-pawfect-dark font-bold px-4 py-1 rounded-full inline-block mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-pawfect-dark">{milestone.title}</h3>
                    <p className="text-gray-600 mt-2">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-4 w-4 h-4 rounded-full bg-pawfect-pink border-4 border-white transform -translate-x-1.5 md:-translate-x-2 z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-pawfect-peach">
        <div className="container mx-auto">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Our talented team of pet lovers is dedicated to providing the best care for your furry friends
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-pawfect-pink text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6 text-pawfect-dark">
            Experience the Pawfect Difference
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Book an appointment with our caring team and see why pets and their owners love Pawfect Grooming.
          </p>
          <Link to="/booking" className="btn-secondary inline-flex items-center">
            <Calendar className="mr-2 h-5 w-5" /> Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
