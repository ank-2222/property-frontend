
const AboutUs = () => {
  return (
    <section className="bg-[#111] text-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl text-red-500 uppercase font-semibold  ">
            About Us
          </h1>
          <div className="w-[25%] h-1 bg-accent  my-4 mb-10 rounded-full" />
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            Your trusted property partner for over{" "}
            <span className="text-red-500">12 years.</span>
          </h2>
          <p className="text-gray-300 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, 
            nisl eget consectetur sagittis, nisl nunc aliquet nunc, et egestas 
            elit lectus non nunc. Vestibulum ante ipsum primis in faucibus orci luctus et.
          </p>
          <p className="text-gray-300 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis 
            feugiat, scelerisque ligula id, venenatis odio.
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
