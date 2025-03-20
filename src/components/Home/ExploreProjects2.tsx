"use client";
import { useState } from "react";
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

type Project = {
  id: number;
  name: string;
  location: string;
  image: string;
  beds: number;
  price: string;
  size: string;
  bathrooms: number;
  parking: number;
  furnished: string;
  amenities: string[];
  yearBuilt: number;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Burj Khalifa Residences",
    location: "Downtown Dubai, UAE",
    image: "/assets/herobg.jpg",
    beds: 3,
    price: "AED 7,500,000",
    size: "180 sqm",
    bathrooms: 3,
    parking: 2,
    furnished: "Yes",
    amenities: ["Swimming Pool", "Gym", "24/7 Security", "Balcony"],
    yearBuilt: 2020,
  },
  {
    id: 2,
    name: "Palm Jumeirah Sky Villas",
    location: "Palm Jumeirah, Dubai",
    image: "/assets/herobg2.jpg",
    beds: 5,
    price: "AED 15,200,000",
    size: "350 sqm",
    bathrooms: 5,
    parking: 3,
    furnished: "Yes",
    amenities: [
      "Private Beach",
      "Infinity Pool",
      "Home Theater",
      "24/7 Security",
    ],
    yearBuilt: 2018,
  },
  {
    id: 3,
    name: "Emaar Beachfront Apartments",
    location: "Dubai Harbour, UAE",
    image: "/assets/herobg3.jpg",
    beds: 2,
    price: "AED 3,800,000",
    size: "120 sqm",
    bathrooms: 2,
    parking: 1,
    furnished: "No",
    amenities: ["Gym", "Swimming Pool", "Balcony", "Covered Parking"],
    yearBuilt: 2021,
  },
  {
    id: 4,
    name: "Al Raha Beach Mansions",
    location: "Abu Dhabi, UAE",
    image: "/assets/herobg4.jpg",
    beds: 4,
    price: "AED 10,500,000",
    size: "300 sqm",
    bathrooms: 4,
    parking: 2,
    furnished: "Yes",
    amenities: ["Beach Access", "Private Garden", "Gym", "24/7 Security"],
    yearBuilt: 2017,
  },
  {
    id: 5,
    name: "Jumeirah Golf Estates Villas",
    location: "Jumeirah, Dubai",
    image: "/assets/herobg5.jpg",
    beds: 6,
    price: "AED 18,900,000",
    size: "450 sqm",
    bathrooms: 6,
    parking: 4,
    furnished: "Yes",
    amenities: [
      "Golf Course View",
      "Swimming Pool",
      "Home Theater",
      "Smart Home System",
    ],
    yearBuilt: 2019,
  },
  {
    id: 6,
    name: "Dubai Creek Harbour Residences",
    location: "Dubai Creek, UAE",
    image: "/assets/herobg7.jpg",
    beds: 2,
    price: "AED 4,200,000",
    size: "130 sqm",
    bathrooms: 2,
    parking: 1,
    furnished: "No",
    amenities: ["Waterfront View", "Gym", "Swimming Pool", "Kids Play Area"],
    yearBuilt: 2022,
  },
];

const ExploreProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 max-w-[400px] h-[450px]"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-medium text-text h-[45px] leading-5">
                {project.name}
              </h3>
              <div className="flex items-center text-gray-400 text-sm mt-1">
                <MapPin size={16} className="mr-1 text-primary" />
                {project.location}
              </div>
              <div className="flex justify-between items-center mt-1">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <BedDouble size={16} className="text-primary" />
                  <span>{project.beds} Beds</span>
                </div>
                <p className="text-md font-bold text-primary">
                  {project.price}
                </p>
              </div>

              <Dialog>
  <DialogTrigger asChild>
    <button
      className="w-full mt-4 bg-dbackground text-white font-semibold py-2 rounded-md hover:bg-dbackground/90 transition flex justify-center items-center gap-x-1"
      onClick={() => setSelectedProject(project)}
    >
      More Details <ArrowUpRight size={20} />
    </button>
  </DialogTrigger>

  {selectedProject && (
    <DialogContent className="max-w-lg max-h-[90vh] bg-white p-6 rounded-xl shadow-xl overflow-y-auto ">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-left text-gray-800">
          {selectedProject.name}
        </DialogTitle>
        <DialogDescription className="text-gray-600 flex items-center gap-2">
          <Home size={16} className="text-gray-500" />
          {selectedProject.location}
        </DialogDescription>
      </DialogHeader>

      <img
        src={selectedProject.image}
        alt={selectedProject.name}
        className="w-full h-52 object-cover rounded-lg mt-4"
      />

      <div className="grid grid-cols-2 gap-2 mt-2 text-gray-700 text-sm">
        <div className="flex items-center gap-2">
          <Ruler size={16} className="text-gray-500" />
          <p>
            <strong>Size:</strong> {selectedProject.size}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Bed size={16} className="text-gray-500" />
          <p>
            <strong>Bedrooms:</strong> {selectedProject.beds}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Bath size={16} className="text-gray-500" />
          <p>
            <strong>Bathrooms:</strong> {selectedProject.bathrooms}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Car size={16} className="text-gray-500" />
          <p>
            <strong>Parking:</strong> {selectedProject.parking}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-gray-500" />
          <p>
            <strong>Year Built:</strong> {selectedProject.yearBuilt}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle size={16} className="text-gray-500" />
          <p>
            <strong>Furnished:</strong> {selectedProject.furnished}
          </p>
        </div>
      </div>

      <div>
        <p className="text-gray-800 font-semibold">Amenities:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedProject.amenities.map((amenity: string, index: number) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
            >
              {amenity}
            </span>
          ))}
        </div>
      </div>

      <ReadMoreText
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad voluptate impedit voluptatum praesentium quidem, rerum debitis suscipit dolor et numquam eligendi saepe nobis asperiores accusantium, alias, exercitationem laborum fugit assumenda?"
      />

      <div className="mt-2 text-lg font-semibold text-primary">
        Price: {selectedProject.price}
      </div>
      <Button className="bg-primary text-white flex justify-center items-center gap-x-2">Whatsapp Us
<FaWhatsapp  size={16} />

      </Button>
    </DialogContent>
  )}
</Dialog>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreProjects;
