import { Home, Building, ClipboardList } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Residential",
    description:
      "Prime and Super-Prime UAE properties for sale, expert buying and selling advice, and branded residences project marketing.",
    icon: <Home size={32} className="text-primary" />,
    image: "/assets/herobg2.jpg",
  },
  {
    id: 2,
    title: "Commercial",
    description:
      "Tailored investment, agency, transaction, and management services for investors, developers, owners, and occupiers.",
    icon: <Building size={32} className="text-primary" />,
    image: "/assets/herobg4.jpg",
  },
  {
    id: 3,
    title: "Advisory & Consultancy",
    description:
      "Comprehensive asset management, valuations, and consultancy services across various real estate sectors.",
    icon: <ClipboardList size={32} className="text-primary" />,
    image: "/assets/herobg3.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-background px-4 md:px-12 lg:px-20 xl:px-32">
      {/* Title & Subtitle */}
      <div className="text-left pb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-text">
          Our Services – Expert Real Estate Solutions in UAE 
        </h2>
        <p className="text-lg text-gray-400 mt-3">
          Discover our specialized services in UAE real estate, from residential to commercial investments.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-3">
                {service.icon}
                <h3 className="text-xl font-semibold text-text">{service.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
