import Blog from "@/components/Home/Blog";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const projects = [
  {
    id: 1,
    name: "Palm Jebel Ali by Nakheel",
    completion: "2025",
    description:
      "Nakheel is reviving the Palm Jebel Ali project, set to be twice the size of Palm Jumeirah. Featuring hotels, resorts, and luxurious villas for thousands of residents.",
    location: "Dubai",
    price: "Luxury",
    image: "/assets/herobg.jpg",
  },
  {
    id: 2,
    name: "Marriott Residences by Signature Developers",
    completion: "2025",
    description:
      "Located in Jumeirah Lake Towers, Marriott Residences offers luxury living with modern amenities and renowned hospitality.",
    location: "JLT, Dubai",
    price: "Premium",
    image: "/assets/herobg2.jpg",
  },
  {
    id: 3,
    name: "Mercer House by Ellington Properties",
    completion: "2025",
    description:
      "Ellington Properties brings design-centric residences to JLT, featuring high-quality finishes and elegant interiors.",
    location: "JLT, Dubai",
    price: "Luxury",
    image: "/assets/herobg3.jpg",
  },
  {
    id: 4,
    name: "Equiti Garden by BNH Real Estate Developer",
    completion: "Q4 2025",
    description:
      "Located in Al Furjan, Equiti Garden offers affordable luxury apartments starting from AED 969,769 with modern amenities.",
    location: "Al Furjan, Dubai",
    price: "Affordable",
    image: "/assets/herobg4.jpg",
  },
  {
    id: 5,
    name: "Sports View Residence by Al Helal Al Zahaby",
    completion: "Q4 2025",
    description:
      "Affordable apartments in International City Phase 2 & 3, starting from AED 549,000, offering essential amenities.",
    location: "International City, Dubai",
    price: "Budget",
    image: "/assets/herobg5.jpg",
  },
];

function Project() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 py-10 pt-30 px-6">
  
      {/* Header */}
      <div className="max-w-6xl mx-auto text-left ">
        <h1 className="text-4xl font-bold text-primaryDark">Ongoing Real Estate Projects in UAE</h1>
        <p className="text-lg text-gray-600 mt-2">
          Explore the latest luxury, affordable, and smart living spaces in Dubai.
        </p>
      </div>

      {/* Projects List */}
      <div className="max-w-6xl mx-auto mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
              <p className="text-sm text-gray-500">Completion: {project.completion}</p>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="bg-primary text-white px-3 py-1 text-sm rounded-md">
                  {project.price}
                </span>
                <a
                  href="#"
                  className="text-primaryDark flex items-center gap-1 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View More <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-10">
        <p className="text-gray-500">
          Looking for more projects? 
          <Link to="/contact" className="text-primary hover:underline">
          {" "}Contact us
          
          </Link> for expert real estate guidance.
        </p>
      </div>
    </div>
    <Blog/>
    <Footer/>
    </>
  );
}

export default Project;
