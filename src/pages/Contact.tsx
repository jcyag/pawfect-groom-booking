
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    
    // In a real app, you would send this data to your server
    toast({
      title: "Message Sent!",
      description: "We've received your message and will get back to you soon.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-pawfect-pink" />,
      title: 'Phone',
      details: [
        { label: 'Main:', value: '(123) 456-7890' },
        { label: 'Emergency:', value: '(123) 456-7891' }
      ],
      action: {
        label: 'Call Us',
        href: 'tel:1234567890'
      }
    },
    {
      icon: <Mail className="h-6 w-6 text-pawfect-pink" />,
      title: 'Email',
      details: [
        { label: 'Info:', value: 'info@pawfectgroom.com' },
        { label: 'Bookings:', value: 'bookings@pawfectgroom.com' }
      ],
      action: {
        label: 'Email Us',
        href: 'mailto:info@pawfectgroom.com'
      }
    },
    {
      icon: <MapPin className="h-6 w-6 text-pawfect-pink" />,
      title: 'Location',
      details: [
        { label: 'Address:', value: '123 Pet Avenue' },
        { label: '', value: 'Furry City, PC 12345' }
      ],
      action: {
        label: 'Get Directions',
        href: 'https://maps.google.com'
      }
    },
    {
      icon: <Clock className="h-6 w-6 text-pawfect-pink" />,
      title: 'Business Hours',
      details: [
        { label: 'Mon-Fri:', value: '9AM - 7PM' },
        { label: 'Sat:', value: '9AM - 5PM' },
        { label: 'Sun:', value: 'Closed' }
      ]
    }
  ];

  const faqs = [
    {
      question: 'Do you offer mobile grooming services?',
      answer: 'Currently, we do not offer mobile grooming services. All our grooming services are provided at our salon location.'
    },
    {
      question: 'How far in advance should I book an appointment?',
      answer: 'We recommend booking at least 1-2 weeks in advance, especially for weekend appointments which tend to fill up quickly.'
    },
    {
      question: 'Do you groom all breeds of dogs and cats?',
      answer: 'Yes, our experienced groomers are trained to work with all breeds of dogs and cats, adapting our techniques to suit each pet's specific needs.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-pawfect-blue">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pawfect-dark">
              Contact Us
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              Reach out to our friendly team for any questions or to schedule an appointment
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white">
            <path fill="currentColor" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,96C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-pawfect-gray p-6 rounded-2xl">
                <div className="inline-flex items-center justify-center p-3 bg-white rounded-full mb-4 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-pawfect-dark">{item.title}</h3>
                <ul className="space-y-2 mb-6">
                  {item.details.map((detail, i) => (
                    <li key={i} className="text-gray-600">
                      {detail.label && <span className="font-medium">{detail.label} </span>}
                      {detail.value}
                    </li>
                  ))}
                </ul>
                {item.action && (
                  <a 
                    href={item.action.href} 
                    target={item.action.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="text-pawfect-dark font-medium hover:text-pawfect-pink transition-colors"
                  >
                    {item.action.label} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto">
          <div className="bg-pawfect-gray p-4 rounded-2xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2168863854296!2d-73.99906288429502!3d40.75882007932683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMxLjgiTiA3M8KwNTknNDkuMCJX!5e0!3m2!1sen!2sus!4v1628098095843!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Pawfect Grooming Location"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-pawfect-gray">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-pawfect-pink">
                <h2 className="text-2xl font-semibold mb-4 text-pawfect-dark">Get in Touch</h2>
                <p className="text-gray-700 mb-6">
                  Have questions or feedback? Fill out the form and our team will get back to you as soon as possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-pawfect-dark mr-3" />
                    <span className="text-gray-700">(123) 456-7890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-pawfect-dark mr-3" />
                    <span className="text-gray-700">info@pawfectgroom.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-pawfect-dark mr-3 mt-0.5" />
                    <span className="text-gray-700">123 Pet Avenue<br />Furry City, PC 12345</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="font-semibold text-pawfect-dark mb-3">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pawfect-dark"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pawfect-dark"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-pawfect-dark"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-pawfect-dark mb-2 font-medium">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pawfect-pink"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-pawfect-dark mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pawfect-pink"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-pawfect-dark mb-2 font-medium">Phone (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pawfect-pink"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-pawfect-dark mb-2 font-medium">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pawfect-pink"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="appointment">Appointment Question</option>
                      <option value="services">Services Information</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-pawfect-dark mb-2 font-medium">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pawfect-pink"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary inline-flex items-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-pawfect-gray p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3 text-pawfect-dark flex items-start">
                  <MessageSquare className="h-6 w-6 text-pawfect-pink mr-2 flex-shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-600 ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-lg text-gray-600">
              Don't see your question here? <a href="#contact-form" className="text-pawfect-pink font-medium hover:underline">Contact us</a> and we'll be happy to help!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
