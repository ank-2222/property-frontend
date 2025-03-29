import { Carousel } from "../ui/carousel";

const slides = [
  {
    title: "Expo Golf Villas 5",
    button: "View Details",
    link:"https://properties.emaar.com/en/properties/expo-golf-villas-phase-v",
    src: "/assets/expogolf.webp",
  },
  {
    title: "Azizi Venice",
    button: "Explore Now",
    link:"https://www.azizivenice.com/en",
    src: "/assets/azizi.webp",
  }
];

function ExploreProject() {
  return (
    <div className="w-full overflow-x-hidden py-10 mt-0 lg:mt-40 relative bg-[url('/assets/hero2.webp')] bg-accent bg-cover bg-center bg-no-repeat flex items-center justify-center">
      {/* Dark Overlay */}
      <div className="bg-black w-full h-full absolute top-0 left-0 opacity-40" />

      {/* Content Section */}
      <section className="relative z-10 text-center mx-2">
        <div className="mx-auto p-4">
          <h2 className="text-3xl lg:text-4xl text-white font-bold">
            Discover <span className="text-dbackground">New Projects</span>
          </h2>
          <p className="text-white text-md lg:text-lg mt-2 max-w-[900px]  lg:mx-auto">
          Explore the latest off-plan developments in the market, complete with details on their features and expected completion dates.
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="w-16 h-1 bg-primary mx-auto my-4 rounded-full" />

        {/* Carousel Section */}
        <div className="container mx-auto mt-10">
          <div className="my-10">
            <Carousel slides={slides} />
          </div>
        </div>

        {/* Call-to-Action Button */}
        {/* <div className="mt-2 lg:mt-6">
          <Link to="/project" className="bg-[#ff3b3b] text-white p-6 text-lg font-semibold hover:bg-white hover:text-[#ff3b3b] transition ">
            View All Projects
          </Link>
        </div> */}
      </section>
    </div>
  );
}

export default ExploreProject;
