
import React, { useState } from 'react';
import { Calendar, Check, Clock, PawPrint, Scissors, User } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    phone: '',
    petName: '',
    petType: 'dog',
    service: 'basic-wash',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    
    // In a real app, you would send this data to your server
    toast({
      title: "Appointment Booked!",
      description: `Your appointment for ${formData.petName} has been scheduled for ${formData.date} at ${formData.time}.`,
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      ownerName: '',
      email: '',
      phone: '',
      petName: '',
      petType: 'dog',
      service: 'basic-wash',
      date: '',
      time: '',
      notes: ''
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-semibold mb-6 text-center text-pawfect-dark">Book Your Appointment</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Owner Information */}
          <div>
            <label className="block text-pawfect-dark mb-2 font-medium">
              <div className="flex items-center gap-2 mb-1">
                <User className="h-4 w-4" />
                <span>Your Name</span>
              </div>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pawfect-pink"
                required
              />
            </label>
          </div>
          
          <div>
            <label className="block text-pawfect-dark mb-2 font-medium">
              <div className="flex items-center gap-2 mb-1">
                <User className="h-4 w-4" />
                <span>Email</span>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pawfect-pink"
                required
              />
            </label>
          </div>
          
          <div>
            <label className="block text-pawfect-dark mb-2 font-medium">
              <div className="flex items-center gap-2 mb-1">
                <User className="h-4 w-4" />
                <span>Phone Number</span>
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pawfect-pink"
                required
              />
            </label>
          </div>
          
          {/* Pet Information */}
          <div>
            <label className="block text-pawfect-dark mb-2 font-medium">
              <div className="flex items-center gap-2 mb-1">
                <PawPrint className="h-4 w-4" />
                <span>Pet's Name</span>
              </div>
              <input
                type="text"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pawfect-pink"
                required
              />
            </label>
          </div>
          
          <div>
            <label className="block text-pawfect-dark mb-2 font-medium">
              <div className="flex items-center gap-2 mb-1">
                <PawPrint className="h-4 w-4" />
                <span>Pet Type</span>
              </div>
              <select
                name="petType"
                value={formData.petType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pawfect-pink"
                required
              >
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          
          <div>
            <label className="block text-pawfect-dark mb-2 font-medium">
              <div className="flex items-center gap-2 mb-1">
                <Scissors className="h-4 w-4" />
                <span>Service</span>
              </div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pawfect-pink"
                required
              >
                <option value="basic-wash">Basic Wash</option>
                <option value="full-grooming">Full Grooming</option>
                <option value="nail-trim">Nail Trimming</option>
                <option value="ear-cleaning">Ear Cleaning</option>
                <option value="teeth-cleaning">Teeth Cleaning</option>
                <option value="special-treatment">Special Treatment</option>
              </select>
            </label>
          </div>
          
          {/* Appointment Details */}
          <div>
            <label className="block text-pawfect-dark mb-2 font-medium">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="h-4 w-4" />
                <span>Date</span>
              </div>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pawfect-pink"
                required
              />
            </label>
          </div>
          
          <div>
            <label className="block text-pawfect-dark mb-2 font-medium">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="h-4 w-4" />
                <span>Time</span>
              </div>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pawfect-pink"
                required
              >
                <option value="">Select a time</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
                <option value="18:00">6:00 PM</option>
              </select>
            </label>
          </div>
        </div>
        
        {/* Additional Notes */}
        <div>
          <label className="block text-pawfect-dark mb-2 font-medium">
            <div className="flex items-center gap-2 mb-1">
              <Check className="h-4 w-4" />
              <span>Special Instructions</span>
            </div>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pawfect-pink"
              placeholder="Any special needs or requests for your pet?"
            ></textarea>
          </label>
        </div>
        
        <div className="text-center">
          <button
            type="submit"
            className="btn-primary inline-flex items-center justify-center gap-2 w-full md:w-auto"
          >
            <Calendar className="h-5 w-5" />
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
