/* eslint-disable @typescript-eslint/no-explicit-any */
import PropertyCard from "@/components/Properties/PropertyCard";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { useGetAllProperties } from "@/feature/Property/useGetAllProperties";
import React, { useEffect } from "react";

const Properties: React.FC = () => {
  const { data: properties, isPending } = useGetAllProperties({
    page: 1,
    limit: 10,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isPending) {
    return <div className="text-center mt-10">Loading properties...</div>;
  }

  if (!properties || properties.length === 0) {
    return <div className="text-center mt-10">No properties found.</div>;
  }
 
  return (
    <>
    <Navbar/>
    <div className="p-6 space-y-6">
      <div className="flex flex-col space-y-6">
        {properties?.properties.map((property: any) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Properties;