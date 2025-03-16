import { useState } from "react";

const categories = [
  {
    name: "Apartments",
    options: [
      "Apartments for Rent in Dubai",
      "Apartments for Rent in Downtown Dubai",
      "Apartments for Rent in Dubai Marina",
      "Apartments for Rent in Jumeirah Village Circle (JVC)",
      "Apartments for Rent in Business Bay",
      "Apartments for Rent in Dubai Creek Harbour (The Lagoons)",
      "Apartments For Rent In Deira",
      "Studio Apartments For Rent in Dubai",
      "Apartments For Rent in Dubai Monthly",
      "Apartments For Rent in Dubai Silicon Oasis",
      "Apartments For Rent in Jumeirah Lake Towers (JLT)",
      "Apartments For Rent in Bur Dubai",
      "Apartments For Rent in International City",
    ],
  },
  {
    name: "Villas",
    options: [
      "Luxury Villas in Dubai",
      "Beachfront Villas in Dubai",
      "Villas for Rent in Palm Jumeirah",
      "Villas for Rent in Dubai Hills Estate",
      "Villas for Rent in Arabian Ranches",
    ],
  },
  {
    name: "Townhouses",
    options: [
      "Townhouses for Rent in Dubai",
      "Townhouses in Jumeirah Village Circle",
      "Townhouses in Arabian Ranches",
      "Townhouses in Dubai Hills",
    ],
  },
  {
    name: "Hotel Apartments",
    options: [
      "Luxury Hotel Apartments in Dubai",
      "Short-term Hotel Apartments in Downtown",
      "Hotel Apartments in Business Bay",
      "Hotel Apartments in Palm Jumeirah",
    ],
  },
];

const ExploreProperties = () => {
  const [activeCategory, setActiveCategory] = useState("Apartments");

  return (
    <div className="container mx-auto p-6 mt-20">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center text-text">
        Explore <span className="text-primary">Properties</span>
      </h2>
      <div className="w-16 h-1 bg-accent mx-auto my-4 rounded-full" />

      {/* Category Toggle Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition ${
              activeCategory === category.name
                ? "bg-primary text-white"
                : "bg-muted text-text hover:bg-gray-300"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Dynamic List of Properties */}
      <div className="mt-6 bg-background shadow-md p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-text">{activeCategory}</h3>
        <ul className="mt-3 space-y-2">
          {categories
            .find((c) => c.name === activeCategory)
            ?.options.map((option, index) => (
              <li
                key={index}
                className="text-gray-600 hover:text-primary cursor-pointer"
              >
                {option}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ExploreProperties;
