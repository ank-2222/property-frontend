"use client";
import { useEffect, useState } from "react";
import {
  MapPin,
  BedDouble,
  ArrowUpRight,
  Bed,
  Bath,
  Car,
  Ruler,
  Calendar,
  Home,
  CheckCircle,
} from "lucide-react";
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
import { FaWhatsapp } from "react-icons/fa";
import { useGetAllProperties } from "@/feature/Property/useGetAllProperties";
import { Skeleton } from "../ui/skeleton";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
interface Location {
  city: string;
  area: string;
  latitude: number;
  longitude: number;
}

interface Property {
  _id: string;
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

const ExploreProjects = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );

  const [filters] = useState({
    page: 1,
    limit: 10,
    location: "",
    city: "",
    area: "",
    minPrice: undefined,
    maxPrice: undefined,
    minSize: undefined,
    maxSize: undefined,
    bedrooms: undefined,
    bathrooms: undefined,
    furnished: undefined,
    property_type: "",
    listing_type: "",
    sortBy: "price",
    sortOrder: "asc" as "asc" | "desc",
  });

  const { data: propertyData, isPending } = useGetAllProperties(filters);
  useEffect(() => {
    if (propertyData) {
      setProperties(propertyData.properties);
    }
  }, [propertyData]);

  return (
    <section className="py-20 bg-background px-4 md:px-12 lg:px-20 xl:px-32">
      <div className="text-left py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-text">
          Explore Available Property Listings in Dubai 🇦🇪
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mt-3">
          Browse a comprehensive selection of properties across Dubai.
        </p>
      </div>
      {isPending && (
        <div className="flex flex-wrap justify-start items-center gap-2 w-full ">
          <Skeleton className="w-[400px] h-[450px] bg-gray-300" />
          <Skeleton className="w-[400px] h-[450px] bg-gray-300" />
          <Skeleton className="w-[400px] h-[450px] bg-gray-300" />
          <Skeleton className="w-[400px] h-[450px] bg-gray-300" />
          <Skeleton className="w-[400px] h-[450px] bg-gray-300" />
          <Skeleton className="w-[400px] h-[450px] bg-gray-300" />
        </div>
      )}
      {properties.length === 0 ? (
        <div className="flex flex-wrap justify-start items-center gap-2 w-full ">
          <Skeleton className="w-[400px] h-[450px] bg-gray-300" />
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div
              key={property._id}
              className="bg-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 max-w-[400px] h-[450px]"
            >
              <img
                src={property.images[0] }
                alt={property.title}
                className="w-full h-[250px] object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-medium text-text h-[45px] leading-5">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  <MapPin size={16} className="mr-1 text-primary" />
                  {property.location.city}, {property.location.area}
                </div>
                <div className="flex justify-between items-center mt-1">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <BedDouble size={16} className="text-primary" />
                    <span>{property.bedrooms} Beds</span>
                  </div>
                  <p className="text-md font-bold text-primary">
                    {property.currency} {property.price.toLocaleString()}
                  </p>
                </div>

                <Dialog >
              <DialogTrigger asChild>
                <button
             className="bg-[var(--color-dbackground)] text-white px-3 py-2 text-xs sm:text-sm rounded-lg hover:bg-[var(--color-dbackground)] transition w-full sm:w-auto flex justify-center items-center gap-x-2 mt-4"
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
                      const phoneNumber = "971501166808"; // Replace with the desired phone number
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
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ExploreProjects;
