
const blogs = [
    {
      id: 1,
      title: "Investing in Dubai: Why Now is the Best Time to Buy Property",
      description: 
        "Dubai’s real estate market is booming, with foreign investors flocking to purchase luxury apartments and waterfront villas. With tax-free income, high ROI, and world-class infrastructure, investing in Dubai has never been more attractive. Discover the key areas to consider and expert tips to maximize your returns.",
      image: "/assets/herobg.jpg",
    },
    {
      id: 2,
      title: "Luxury Living: The Best Waterfront Properties in Dubai",
      description: 
        "From the iconic Palm Jumeirah to the futuristic Dubai Marina, waterfront living in Dubai offers a blend of exclusivity, luxury, and breathtaking views. Explore the top communities that offer premium beachside apartments, private villas, and stunning penthouses designed for high-end living.",
      image: "/assets/herobg2.jpg",
    },
    {
      id: 3,
      title: "Dubai’s Smart Cities: The Future of Real Estate",
      description: 
        "Dubai is leading the way in smart city development, integrating AI, IoT, and sustainable architecture into its real estate sector. Find out how upcoming smart districts like Dubai Creek Harbour and Sustainable City are redefining modern living with energy-efficient homes, AI-powered security, and automated amenities.",
      image: "/assets/herobg3.jpg",
    },
  ];

const Blog = () => {
  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primaryDark">
        Latest <span className="text-primary">Blogs</span>
      </h2>
      <p className="text-center text-text mt-2">
        Stay updated with the latest insights.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{blog.title}</h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">{blog.description}</p>
              <button className="mt-3 text-primary font-semibold">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
