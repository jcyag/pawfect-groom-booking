import React from 'react';
import BookingForm from '@/components/BookingForm';
import { CalendarDays, Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Booking = () => {
  const bookingSteps = [
    {
      icon: <CalendarDays className="h-10 w-10 text-pawfect-pink" />,
      title: 'Choose a Date',
      description: "Select a convenient date for your pet's grooming appointment."
    },
    {
      icon: <Clock className="h-10 w-10 text-pawfect-pink" />,
      title: 'Pick a Time',
      description: 'Choose from our available time slots that work with your schedule.'
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-pawfect-pink" />,
      title: 'Confirm Details',
      description: "Fill in your pet's details and any special instructions."
    },
    {
      icon: <Calendar className="h-10 w-10 text-pawfect-pink" />,
      title: 'Receive Confirmation',
      description: 'Get an instant confirmation of your booking via email or SMS.'
    }
  ];

  const faqs = [
    {
      question: 'What should I do to prepare my pet for grooming?',
      answer: 'We recommend giving your pet some exercise before the appointment to help them relax. If possible, brush your pet before bringing them in to remove loose fur and tangles, especially for long-haired breeds.'
    },
    {
      question: 'Can I stay with my pet during grooming?',
      answer: "While we understand your concern, we generally don't recommend owners staying during the grooming process as it can make pets more anxious or distracted. However, we're happy to discuss special arrangements for pets with severe anxiety."
    },
    {
      question: 'What if I need to cancel or reschedule?',
      answer: "We appreciate at least 24 hours' notice for cancellations or rescheduling. This allows us to offer the slot to another client. Repeated no-shows may incur a booking fee for future appointments."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-pawfect-peach">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pawfect-dark">
              Book Your Grooming Appointment
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              Schedule a grooming session for your furry friend in just a few simple steps.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white">
            <path fill="currentColor" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,96C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Booking Steps Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Booking an appointment for your pet is quick and easy with our simple process
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {bookingSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-flex items-center justify-center mb-4">
                  <div className="absolute inset-0 bg-pawfect-pink/20 rounded-full transform scale-125"></div>
                  {step.icon}
                  {index < bookingSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-pawfect-pink/30 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-pawfect-dark">Step {index + 1}: {step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 px-4 bg-pawfect-gray">
        <div className="container mx-auto max-w-5xl">
          <BookingForm />
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title">Booking Policies</h2>
          <div className="mt-8 space-y-8">
            <div className="bg-pawfect-blue/20 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3 text-pawfect-dark">Cancellation Policy</h3>
              <p className="text-gray-700">
                We understand that plans can change. We kindly ask for at least 24 hours' notice for cancellations or rescheduling. This allows us to offer the appointment slot to other clients. Repeated no-shows may result in a booking deposit for future appointments.
              </p>
            </div>
            
            <div className="bg-pawfect-pink/20 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3 text-pawfect-dark">Late Arrival</h3>
              <p className="text-gray-700">
                If you're running late, please let us know as soon as possible. We'll do our best to accommodate you, but arrivals more than 15 minutes late may need to be rescheduled to ensure we can provide the full service your pet deserves.
              </p>
            </div>
            
            <div className="bg-pawfect-peach/30 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3 text-pawfect-dark">Vaccination Requirements</h3>
              <p className="text-gray-700">
                For the safety of all pets and staff, we require proof of current rabies vaccination for all pets. Additional vaccinations may be recommended based on your pet's specific needs and local regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-pawfect-blue/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-pawfect-dark flex items-start">
                  <AlertCircle className="h-6 w-6 text-pawfect-pink mr-2 flex-shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-600 ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
