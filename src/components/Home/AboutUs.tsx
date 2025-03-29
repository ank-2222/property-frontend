import { useGetAllAgent } from "@/feature/Agent/useGetAllAgent";
import { AgentResponse } from "@/interface/Agent";
import { Skeleton } from "../ui/skeleton";
import { useState } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const { data: agents, isPending } = useGetAllAgent();
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      id="ourstory"
      className="bg-dbackground text-ltext py-16 px-4 lg:px-20"
    >
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
              Monarch Hill is a premier real estate agency in Dubai, dedicated
              to offering exceptional services and exclusive luxury properties.
              With a commitment to quality and customer satisfaction, we
              specialize in high-end residential, commercial, and investment
              opportunities across the city’s most sought-after locations.
            </p>
            <p className="text-ltext mt-2">
              Our experienced team ensures personalized attention and seamless
              experiences for every client, helping them discover the perfect
              property to suit their lifestyle and investment goals. At Monarch
              Hill, we redefine luxury and excellence in real estate.
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
              src="/assets/about.webp"
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
          {isPending ? (
            <div>
              <Skeleton className="w-full h-100 rounded-lg mb-4" />
            </div>
          ) : (
            <motion.div 
              className="flex justify-center items-start flex-wrap w-full mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {(showAll ? agents : agents.slice(0, 3)).map((agent: AgentResponse) => (
                <motion.div
                  key={agent._id}
                  className="flex flex-col items-center group border-0 border-accent p-2 rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Circular Profile Image */}
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg hover:shadow-accent/30 transition-all duration-300">
                    <img
                      src={agent.profile_pic}
                      alt={agent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Agent Details Card */}
                  <div className="bg-text/60 w-[300px] h-[150px] mt-4 rounded-lg p-4 text-center shadow-md hover:shadow-accent/10 transition-all duration-300">
                    <h3 className="text-xl font-bold text-ltext">
                      {agent.name}
                    </h3>
                    <p className="text-primary font-medium mt-1 line-clamp-2">
                      {agent.expertise[0]}
                    </p>
                    <p className="text-ltext text-sm mt-1 line-clamp-2">
                      <span className="font-semibold">Area:</span> {agent.area}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Show More Button */}
          {agents?.length > 3 && (
            <div className="text-center mt-6">
              <motion.button
                onClick={() => setShowAll(!showAll)}
                className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-accent transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAll ? "Show Less" : "Show More"}
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;