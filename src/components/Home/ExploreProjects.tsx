import { Carousel } from "../ui/carousel";
import { Button } from "../ui/button";

const slides = [
  {
    title: "Luxury Beachfront Villas",
    button: "View Details",
    src: "/assets/discover1.jpg",
  },
  {
    title: "Modern City Apartments",
    button: "Explore Now",
    src: "/assets/discover2.jpg",
  },
  {
    title: "Elegant Suburban Homes",
    button: "See More",
    src: "/assets/discover3.jpg",
  },
  {
    title: "Commercial Office Spaces",
    button: "Discover",
    src: "/assets/discover4.jpg",
  },
];

function ExploreProject() {
  return (
    <div className="w-full  py-10 mt-0 lg:mt-40 relative bg-[url('/assets/hero2.jpg')] bg-accent bg-cover bg-center bg-no-repeat flex items-center justify-center">
      {/* Dark Overlay */}
      <div className="bg-black w-full h-full absolute top-0 left-0 opacity-40" />

      {/* Content Section */}
      <section className="relative z-10 text-center mx-2">
        <div className="mx-auto p-4">
          <h2 className="text-3xl lg:text-4xl text-white font-bold">
            Discover Our <span className="text-[#f30606]">New Projects</span>
          </h2>
          <p className="text-white text-md lg:text-lg mt-2 max-w-[900px]  lg:mx-auto">
            Explore the largest selection of home listings, backed by the most accurate and trustworthy information—right at your fingertips.
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="w-16 h-1 bg-[#ff5959] mx-auto my-4 rounded-full" />

        {/* Carousel Section */}
        <div className="container mx-auto mt-10">
          <div className="w-[600px] h-[400px] lg:h-[600px] 3xl:h-[1000px] 3xl:w-[1000px] mx-auto overflow-x-hidden">
            <Carousel slides={slides} />
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-2 lg:mt-6">
          <Button className="bg-[#ff3b3b] text-white p-6 text-lg font-semibold hover:bg-white hover:text-[#ff3b3b] transition ">
            View All Projects
          </Button>
        </div>
      </section>
    </div>
  );
}

export default ExploreProject;
