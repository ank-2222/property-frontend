import { Briefcase, Building2, ShieldCheck } from "lucide-react";

const AboutUs2 = () => {
  return (
    <section className="py-16 bg-background px-4 md:px-12 lg:px-20 xl:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-text">
            About Us – Your Gateway to Luxury Living in UAE 🇦🇪
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            With years of expertise in the UAE’s real estate market, we specialize in connecting discerning buyers with exclusive properties across Dubai and Abu Dhabi.
          </p>

          {/* Highlights */}
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-4 justify-start">
              <Briefcase size={28} className="text-primary" />
              <p className="text-text text-lg">
                <strong>10+ Years of Expertise</strong> in UAE's property market.
              </p>
            </div>
            <div className="flex items-start gap-4 justify-start">
              <Building2 size={28} className="text-primary" />
              <p className="text-text text-lg">
                <strong>Luxury Properties</strong> in prime locations.
              </p>
            </div>
            <div className="flex items-start gap-4 justify-start">
              <ShieldCheck size={28} className="text-primary" />
              <p className="text-text text-lg">
                <strong>Trusted by Investors</strong> for seamless transactions.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full h-[400px]">
          <img
            src="/assets/herobg.webp"
            alt="Luxury UAE Property"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
