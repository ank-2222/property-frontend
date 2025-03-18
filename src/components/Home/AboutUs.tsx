
const AboutUs = () => {
  return (
    <section className="bg-[#111] text-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 px-5 text-justify">
          <h1 className="text-3xl text-red-500 uppercase font-semibold  ">
            About Us
          </h1>
          <div className="w-[25%] h-1 bg-accent  my-4 mb-10 rounded-full" />
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
          At {" "}
            <span className="text-red-500">Monarch Hill</span> Real Estate,
          </h2>
          <p className="text-gray-300 mt-4">
         we redefine excellence in the UAE’s dynamic property market. With a passion for delivering premium real estate solutions, we specialize in property consultation, sales, rentals, and investment opportunities across both residential and commercial sectors. 
          </p>
          <p className="text-gray-300 mt-2">
          Our commitment to integrity, innovation, and client satisfaction sets us apart, ensuring seamless experiences whether you're buying, selling, or investing. At Monarch Hill, we don’t just find you a property—we help you discover the perfect place to call home or grow your business.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-red-500 font-medium mt-6 hover:underline"
          >
            Our Services →
          </a>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2">
          <img
            src="/assets/about.jpg" // Change to actual image path
            alt="About Us"
            className="rounded-lg w-full max-h-[500px] object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
