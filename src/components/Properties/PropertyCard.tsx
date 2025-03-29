import React, { useState } from "react";
import {
  MapPin,
  Ruler,
  Bed,
  Bath,
  Car,
  ArrowUpRight,
  Calendar,
  Home,
  CheckCircle,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaWhatsapp } from "react-icons/fa";
import "react-slideshow-image/dist/styles.css";
import { Fade, Slide } from "react-slideshow-image";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import ReadMoreText from "../ui/read-more-text";
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
const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  
};
const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const pricePerSqm = property.price / property.size_sqm;
 const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  return (
    <div className="bg-[var(--color-background)] border border-gray-200 rounded-xl overflow-hidden shadow-lg mx-auto transition hover:shadow-xl flex flex-col sm:flex-row w-full max-w-lg sm:max-w-4xl">
      {/* Image Section */}
      <div className="relative w-full sm:w-1/3 h-[200px] sm:h-[350px]">
        {/* <img
          src={"/assets/herobg.jpg"}
          alt={property.title}
          className="w-full h-full object-cover"
        /> */}
        <div className="slide-container">
          <Slide
            autoplay={true}
            duration={5000}
            transitionDuration={500}
            arrows={false}
            infinite
            pauseOnHover={true}
            canSwipe={true}
            easing="cubic"
          >
            {property?.images?.map((slideImage, index) => (
              <div key={index}>
                <div
                  className="bg-center bg-cover w-full  h-[200px] sm:h-[350px] "
                  style={{ ...divStyle, backgroundImage: `url(${slideImage})` }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
        {/* <div className="absolute top-3 left-3 bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-xs font-semibold">
          FEATURED
        </div> */}
        <div className="absolute bottom-3 left-3 bg-black/60 text-white px-2 py-1 rounded-full text-xs">
          {property.images.length} Images
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full sm:w-2/3 p-4 sm:p-6 flex flex-col justify-between">
        {/* Title and Price */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-[var(--color-text)]">
            {property.title}
          </h2>
          <p className="text-[var(--color-primary)] font-semibold text-base sm:text-lg">
            {property.currency} {property.price.toLocaleString()}
          </p>
        </div>

        {/* Location */}
        <div className="flex flex-wrap justify-between items-center text-gray-600 text-xs sm:text-sm my-2 md:my-0">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2 text-[var(--color-primary)]" />
            <span>
              {property.location.area}, {property.location.city}
            </span>
          </div>
          <div className="text-xs sm:text-sm">
            {property.currency} {pricePerSqm.toFixed(2)}/sqm
          </div>
        </div>

        {/* Features with Tooltips */}
        <TooltipProvider>
          <div className="flex justify-start items-start flex-wrap gap-x-3 gap-y-2 md:gap-y-0 md:gap-3  text-xs sm:text-sm text-gray-700">
            <Tooltip>
              <TooltipTrigger className="flex items-center">
                <Bed size={18} className="mr-1 text-[var(--color-primary)]" />
                <span>Bedrooms: {property.bedrooms}</span>
              </TooltipTrigger>
              <TooltipContent className="text-white font-semibold">
                Bedroom
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="flex items-center">
                <Bath size={18} className="mr-1 text-[var(--color-primary)]" />
                <span>Bathrooms: {property.bathrooms}</span>
              </TooltipTrigger>
              <TooltipContent className="text-white font-semibold">
                Bathroom
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="flex items-center">
                <Car size={18} className="mr-1 text-[var(--color-primary)]" />
                <span>Parking: {property.parking_spaces}</span>
              </TooltipTrigger>
              <TooltipContent className="text-white font-semibold">
                Parking
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="flex items-center">
                <Ruler size={18} className="mr-1 text-[var(--color-primary)]" />
                <span>Area: {property.size_sqm} m²</span>
              </TooltipTrigger>
              <TooltipContent className="text-white font-semibold">
                Area Size
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 my-2 text-xs">
          {property.amenities.slice(0, 5).map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 font-medium rounded"
            >
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
        <p className="text-[var(--color-text)] text-xs sm:text-sm line-clamp-3">
          {property.description}
        </p>

        {/* Property Type and Actions */}
        <div className="flex flex-col sm:flex-row justify-start md:justify-between md:items-center mt-4 sm:mt-0">
          {/* Property Type */}
          <div className="flex space-x-2 mb-2 sm:mb-0">
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">
              {property.property_type}
            </span>
            <span className="bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-xs">
              {property.listing_type}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-2">
            {/* <button className="border border-[var(--color-primary)] text-[var(--color-primary)] px-3 py-2 text-xs sm:text-sm rounded-lg hover:bg-[var(--color-secondary)] transition w-full sm:w-auto">
              View Number
            </button> */}

            <Dialog >
              <DialogTrigger asChild>
                <button
             className="bg-[var(--color-primary)] text-white px-3 py-2 text-xs sm:text-sm rounded-lg hover:bg-[var(--color-accent)] transition w-full sm:w-auto flex justify-center items-center gap-x-2"
                  onClick={() => setSelectedProperty(property)}
                >
                  More Details <ArrowUpRight size={20} />
                </button>
              </DialogTrigger>

              {selectedProperty && (
                <DialogContent className=" max-h-[90vh] bg-white md:p-6 rounded-xl shadow-xl overflow-y-auto overflow-x-hidden  w-[95vw] p-0 ">
                  <div className=" w-[95%] my-5 mx-auto">

                  <DialogHeader>
                    <DialogTitle className="text-xl md:text-2xl font-bold text-left text-gray-800">
                      {selectedProperty.title}
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 flex items-center gap-2">
                      <Home size={16} className="text-gray-500" />
                      {selectedProperty.location.city},{" "}
                      {selectedProperty.location.area}
                    </DialogDescription>
                  </DialogHeader>

                  {/* <img
                        src={selectedProperty.images[0] || "/placeholder.jpg"}
                        alt={selectedProperty.title}
                        className="w-full h-52 object-cover rounded-lg mt-4"
                      /> */}
                  <div className="slide-container w-[350px] mx-auto   my-8">
                    <Fade
                      autoplay={true}
                      duration={3000}
                      transitionDuration={500}
                      arrows={false}
                      infinite
                      canSwipe={true}
                      easing="cubic"
                      indicators={true}
                      
                    >
                      {property?.images?.map((slideImage, index) => (
                        <div key={index} className="w-full h-full">
                          <div
                            className="w-full h-[200px] bg-cover bg-center rounded-lg mt-"
                            style={{
                              backgroundImage: `url(${slideImage})`,
                            }}
                          >
                            {/* <span style={spanStyle}>{slideImage.caption}</span> */}
                          </div>
                        </div>
                      ))}
                    </Fade>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-gray-700 text-sm">
                    <div className="flex items-center gap-2">
                      <Ruler size={16} className="text-gray-500" />
                      <p>
                        <strong>Size:</strong> {selectedProperty.size_sqm} sqm
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed size={16} className="text-gray-500" />
                      <p>
                        <strong>Bedrooms:</strong> {selectedProperty.bedrooms}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath size={16} className="text-gray-500" />
                      <p>
                        <strong>Bathrooms:</strong> {selectedProperty.bathrooms}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car size={16} className="text-gray-500" />
                      <p>
                        <strong>Parking:</strong>{" "}
                        {selectedProperty.parking_spaces}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-gray-500" />
                      <p>
                        <strong>Year Built:</strong>{" "}
                        {selectedProperty.year_built}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-gray-500" />
                      <p>
                        <strong>Furnished:</strong>{" "}
                        {selectedProperty.furnished ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>

                  <div className="my-4">
                    <p className="text-gray-800 font-semibold">Amenities:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProperty.amenities.map(
                        (amenity: string, index: number) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                          >
                            {amenity}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <ReadMoreText text={selectedProperty.description} />

                  <div className="mt-2 text-lg font-semibold text-primary">
                    Price: {selectedProperty.currency}{" "}
                    {selectedProperty.price.toLocaleString()}
                  </div>
                  <Button
                    className="bg-primary text-white flex justify-center items-center gap-x-2 w-full mt-4"
                    onClick={() => {
                      const phoneNumber = "+971501166808"; // Replace with the desired phone number
                      const message = encodeURIComponent(
                        `Hello, I'm interested in ${property.title}. Please provide more details.`
                      );
                      window.open(
                        `https://wa.me/${phoneNumber}?text=${message}`,
                        "_blank"
                      );
                    }}
                  >
                    Whatsapp Us
                    <FaWhatsapp size={16} />
                  </Button>
                  </div>
                </DialogContent>
              )}
            </Dialog>

            <button
              className="bg-[var(--color-primary)] text-white px-3 py-2 text-xs sm:text-sm rounded-lg hover:bg-[var(--color-accent)] transition w-full sm:w-auto flex justify-center items-center gap-x-2"
              onClick={() => {
                const phoneNumber = "+971501166808"; // Replace with the desired phone number
                const message = encodeURIComponent(
                  `Hello, I'm interested in ${property.title}. Please provide more details.`
                );
                window.open(
                  `https://wa.me/${phoneNumber}?text=${message}`,
                  "_blank"
                );
              }}
            >
              <FaWhatsapp /> Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
