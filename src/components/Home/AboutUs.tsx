const AboutUs = () => {
  // Agent data array
  const agents = [
    {
      name: "Sarah Al Mansoori",
      expertise: "Luxury Villas & Waterfront",
      areas: "Properties (Palm Jumeirah, Emirates Hills)",
      image: "/assets/dp.jpg"
    },
    {
      name: "Ahmed Hassan",
      expertise: "Premium Apartments & Penthouses",
      areas: "Properties (Downtown Dubai, Dubai Marina)",
      image: "/assets/dp.jpg"
    },
  
  ];

  return (
    <section id="ourstory" className="bg-dbackground text-ltext py-16 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* About Us Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          {/* Left Content */}
          <div className="lg:w-1/2 px-0 md:px-5 text-left md:text-justify">
            <h1 className="text-3xl text-primary uppercase font-semibold">
              Our Story
            </h1>
            <div className="w-[25%] h-1 bg-accent my-4 mb-10 rounded-full" />
            <h2 className="text-3xl lg:text-4xl font-bold mt-2">
              At <span className="text-primary">Monarch Hill</span> Real Estate,
            </h2>
            <p className="text-ltext mt-4">
              we redefine excellence in the UAE's dynamic property market. With a passion for delivering premium real estate solutions, we specialize in property consultation, sales, rentals, and investment opportunities across both residential and commercial sectors.
            </p>
            <p className="text-ltext mt-2">
              Our commitment to integrity, innovation, and client satisfaction sets us apart, ensuring seamless experiences whether you're buying, selling, or investing. At Monarch Hill, we don't just find you a property—we help you discover the perfect place to call home or grow your business.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary font-medium mt-6 hover:underline"
            >
              Our Services →
            </a>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <img
              src="/assets/about.jpg"
              alt="About Us"
              className="rounded-lg w-full max-h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl text-ltext uppercase font-semibold text-center mb-2">
            Meet Our Agents
          </h2>
          <div className="w-[100px] h-1 bg-primary mx-auto mb-10 rounded-full" />
          
          {/* Agent Cards Grid - Responsive Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {agents.map((agent, index) => (
              <div key={index} className="flex flex-col items-center group border-0 border-accent p-2 rounded-lg">
                {/* Circular Profile Image */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg hover:shadow-accent/30 transition-all duration-300">
                  <img 
                    src={agent.image} 
                    alt={agent.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Agent Details Card */}
                <div className="bg-text/60 max-w-[300px] h-[150px] mt-4 rounded-lg p-4 text-center shadow-md hover:shadow-accent/10 transition-all duration-300">
                  <h3 className="text-xl font-bold text-ltext">
                    {agent.name}
                  </h3>
                  <p className="text-primary font-medium mt-1 line-clamp-2">
                    {agent.expertise}
                  </p>
                  <p className="text-ltext text-sm mt-1 line-clamp-2">
                    {agent.areas} 
                  </p>
                </div>
                
                {/* Dotted Line Below Card */}
                <div className="w-full h-4 flex justify-center items-center mt-4">
                  <div className="w-3/4 border-b border-dashed border-ltext/30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;