
import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
  bio: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
};

const TeamMember = ({ name, role, image, bio, instagram, facebook, linkedin }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="text-white">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-pawfect-pink font-medium">{role}</p>
            <div className="flex space-x-3 mt-3">
              {instagram && (
                <a 
                  href={instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-pawfect-pink transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {facebook && (
                <a 
                  href={facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-pawfect-pink transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {linkedin && (
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-pawfect-pink transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-pawfect-dark">{name}</h3>
        <p className="text-pawfect-pink font-medium mb-3">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
