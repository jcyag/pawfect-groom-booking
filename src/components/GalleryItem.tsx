
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X } from 'lucide-react';

type GalleryItemProps = {
  image: string;
  title: string;
  category: string;
  description?: string;
};

const GalleryItem = ({ image, title, category, description }: GalleryItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group">
          <div className="relative h-64 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white">
                <p className="text-pawfect-pink font-medium">{category}</p>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[90%] md:max-w-[70%] lg:max-w-[60%] p-0 overflow-hidden rounded-2xl">
        <div className="relative">
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-4 right-4 bg-black/30 rounded-full p-2 text-white hover:bg-black/50 transition-colors z-10"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-[300px] md:h-auto">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-white">
              <p className="text-pawfect-pink font-medium">{category}</p>
              <h3 className="text-2xl font-semibold text-pawfect-dark mb-4">{title}</h3>
              {description && (
                <p className="text-gray-600">{description}</p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryItem;
