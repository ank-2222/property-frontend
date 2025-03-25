import React from "react";
import { MapPin, Ruler, Bed, Bath, Car } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface Location {
  city: string;
  area: string;
  latitude: number;
  longitude: number;
}

export interface Property {
  title: string;
  description: string;
  price: number;
  currency: string;
  location: Location;
  size_sqm: number;
  bedrooms: number;
  bathrooms: number;
  parking_spaces: number;
  amenities: string[];
  images: string[];
  property_type: string;
  furnished: boolean;
  year_built: number;
  listing_type: "For Sale" | "For Rent";
}

export interface PropertyResponse extends Property {
  _id: string;
  created_at: string;
  updated_at: string;
}

interface PropertyCardProps {
  property: PropertyResponse;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    const pricePerSqm = property.price / property.size_sqm;
  
    return (
      <div
        className="bg-[var(--color-background)] border border-gray-200 rounded-xl overflow-hidden shadow-lg mx-auto transition hover:shadow-xl flex flex-col sm:flex-row max-w-full sm:max-w-4xl"
      >
        {/* Image Section */}
        <div className="relative w-full sm:w-1/3 h-[200px] sm:h-[350px]">
          <img
            src={"/assets/herobg.jpg"}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute top-3 left-3 bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-xs font-semibold"
          >
            FEATURED
          </div>
          <div
            className="absolute bottom-3 left-3 bg-black/60 text-white px-2 py-1 rounded-full text-xs"
          >
            {property.images.length} Images
          </div>
        </div>
  
        {/* Content Section */}
        <div className="w-full sm:w-2/3 p-4 sm:p-6 flex flex-col justify-between">
          {/* Title and Price */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-text)]">{property.title}</h2>
            <p className="text-[var(--color-primary)] font-semibold text-base sm:text-lg">
              {property.currency} {property.price.toLocaleString()}
            </p>
          </div>
  
          {/* Location */}
          <div className="flex justify-between items-center text-gray-600 text-xs sm:text-sm mb-2">

          <div className="flex items-center text-gray-600 text-xs sm:text-sm mb-2">
            <MapPin size={16} className="mr-2 text-[var(--color-primary)]" />
            <span>{property.location.area}, {property.location.city}</span>
          </div>
  
          {/* Property Details */}
          <div className="flex justify-between text-xs sm:text-sm text-gray-700 mb-2">
            <span>{property.currency} {pricePerSqm.toFixed(2)}/sqm</span>
          </div>
          </div>
  
          {/* Features with Tooltips */}
          <TooltipProvider>
            <div className="grid grid-cols-4 sm:flex sm:gap-6 text-xs sm:text-sm text-gray-700 ">
              <Tooltip>
                <TooltipTrigger className="flex items-center">
                  <Bed size={18} className="mr-1 text-[var(--color-primary)]" />
                  <span>{property.bedrooms}</span>
                </TooltipTrigger>
                <TooltipContent className="text-white font-semibold">Bedroom</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger className="flex items-center">
                  <Bath size={18} className="mr-1 text-[var(--color-primary)]" />
                  <span>{property.bathrooms}</span>
                </TooltipTrigger>
                <TooltipContent className="text-white font-semibold">Bathroom</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger className="flex items-center">
                  <Car size={18} className="mr-1 text-[var(--color-primary)]" />
                  <span>{property.parking_spaces}</span>
                </TooltipTrigger>
                <TooltipContent className="text-white font-semibold">Parking</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger className="flex items-center">
                  <Ruler size={18} className="mr-1 text-[var(--color-primary)]" />
                  <span>{property.size_sqm} m²</span>
                </TooltipTrigger>
                <TooltipContent className="text-white font-semibold">Area Size</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
  
          {/* Amenities */}
          <div className="flex flex-wrap gap-2 mb-1 text-xs">
            {property.amenities.slice(0, 5).map((amenity, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 font-medium rounded">
                {amenity}
              </span>
            ))}
            {property.amenities.length > 5 && (
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded">
                +{property.amenities.length - 5} more
              </span>
            )}
          </div>
  
          {/* Description */}
          <p className="text-[var(--color-text)] text-xs sm:text-sm line-clamp-3">{property.description}</p>
  
          {/* Property Type and Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-0">
            <div className="flex space-x-2 mb-2 sm:mb-0">
              <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">
                {property.property_type}
              </span>
              <span className="bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-xs">
                {property.listing_type}
              </span>
            </div>
            <div className="flex space-x-2">
              <button className="border border-[var(--color-primary)] text-[var(--color-primary)] px-3 py-2 text-xs sm:text-sm rounded-lg hover:bg-[var(--color-secondary)] transition">
                View Number
              </button>
              <button className="bg-[var(--color-primary)] text-white px-3 py-2 text-xs sm:text-sm rounded-lg hover:bg-[var(--color-accent)] transition">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PropertyCard;
  
