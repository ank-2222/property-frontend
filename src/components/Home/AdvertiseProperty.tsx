import React, { useState } from "react";

const AdvertiseProperty = () => {
  const [property, setProperty] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
    images: [] as File[],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Property Data:", property);
  };

  return (
    <div id="advertise" className="container mx-auto p-6 max-w-3xl bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Advertise Your <span className="text-[#ff3b3b]">Property</span>
      </h2>
      <div className="w-16 h-1 bg-[#ff5959] mx-auto my-4 rounded-full" />
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Property Title */}
        <div>
          <label className="block text-gray-700 font-medium">Property Title</label>
          <input
            type="text"
            name="title"
            value={property.title}
            onChange={handleInputChange}
            placeholder="Enter property title"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#ff3b3b]"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={property.location}
            onChange={handleInputChange}
            placeholder="Enter location"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#ff3b3b]"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-medium">Bedrooms</label>
          <input
            type="number"
            name="No. of Bedrooms"
            value={property.price}
            onChange={handleInputChange}
            placeholder="Enter price"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#ff3b3b]"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Owner name</label>
          <input
            name="name"
            value={property.description}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#ff3b3b] "
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Contact Number</label>
          <input
            name="contact"
            value={property.description}
            onChange={handleInputChange}
            placeholder="contact number"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#ff3b3b] "
            required
          />
        </div>

       
        {/* Submit Button */}
        <button type="submit" className="w-full bg-[#ff3b3b] text-white py-2 rounded-md hover:bg-red-600">
          Submit 
        </button>
      </form>
    </div>
  );
};

export default AdvertiseProperty;
