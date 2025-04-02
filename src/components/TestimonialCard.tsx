
import React from 'react';
import { Star } from 'lucide-react';

type TestimonialCardProps = {
  name: string;
  rating: number;
  comment: string;
  image: string;
  petType: string;
};

const TestimonialCard = ({ name, rating, comment, image, petType }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4 mb-4">
        <img 
          src={image} 
          alt={`${name}'s pet`} 
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-pawfect-dark">{name}</h4>
          <p className="text-gray-500 text-sm">{petType}</p>
          <div className="flex mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">"{comment}"</p>
    </div>
  );
};

export default TestimonialCard;
