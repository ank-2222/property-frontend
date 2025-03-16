import { MapPin, BedDouble,  ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Burj Khalifa Residences",
    location: "Downtown Dubai, UAE",
    image: "/assets/herobg.jpg",
    beds: 3,
    price: "AED 7,500,000",
  },
  {
    id: 2,
    name: "Palm Jumeirah Sky Villas",
    location: "Palm Jumeirah, Dubai",
    image: "/assets/herobg2.jpg",

    beds: 5,
    price: "AED 15,200,000",
  },
  {
    id: 3,
    name: "Emaar Beachfront Apartments",
    location: "Dubai Harbour, UAE",
    image: "/assets/herobg3.jpg",

    beds: 2,
    price: "AED 3,800,000",
  },
  {
    id: 4,
    name: "Al Raha Beach Mansions",
    location: "Abu Dhabi, UAE",
    image: "/assets/herobg4.jpg",

    beds: 4,
    price: "AED 10,500,000",
  },
  {
    id: 5,
    name: "Jumeirah Golf Estates Villas",
    location: "Jumeirah, Dubai",
    image: "/assets/herobg5.jpg",

    beds: 6,
    price: "AED 18,900,000",
  },
  {
    id: 6,
    name: "Dubai Creek Harbour Residences",
    location: "Dubai Creek, UAE",
    image: "/assets/herobg7.jpg",

    beds: 2,
    price: "AED 4,200,000",
  },
];

const ExploreProjects = () => {
  return (
    <section className="py-16 mt-30 bg-background px-4 md:px-12 lg:px-20 xl:px-32">
      {/* Title & Subtitle */}
      <div className="text-left py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-text">
          Explore New Luxury Projects in UAE 🇦🇪
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mt-3">
          Discover high-end properties in Dubai & Abu Dhabi’s prime locations.
        </p>
      </div>

      {/* Project Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 max-w-[400px] h-[450px] "
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-medium text-text h-[45px] leading-5 ">{project.name}</h3>
              <div className="flex items-center text-gray-400 text-sm mt-1">
                <MapPin size={16} className="mr-1 text-primary" />
                {project.location}
              </div>
              <div className="flex justify-between items-center mt-1">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <BedDouble size={16} className="text-primary" />
                  <span>{project.beds} Beds</span>
                </div>
                <p className="text-md font-bold text-primary">{project.price}</p>
              </div>
              <button className="w-full mt-4 bg-dbackground text-white font-semibold py-2 rounded-md hover:bg-dbackground/90 transition flex justify-center items-center gap-x-1">
                Contact Now <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreProjects;
