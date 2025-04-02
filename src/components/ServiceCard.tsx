
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ImageOff } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  description: string;
  price: string;
  image: string;
  icon: React.ReactNode;
};

const ServiceCard = ({ title, description, price, image, icon }: ServiceCardProps) => {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        {imageError ? (
          <img 
            src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={handleImageError}
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <div className="bg-pawfect-pink p-3 rounded-full border-4 border-white shadow-md">
            {icon}
          </div>
          <div className="bg-pawfect-blue px-4 py-1 rounded-full text-pawfect-dark font-semibold">
            {price}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-pawfect-dark">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to="/booking" 
          className="inline-flex items-center text-pawfect-dark font-medium hover:text-pawfect-pink transition-colors"
        >
          Book Now <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
