/* eslint-disable @typescript-eslint/no-explicit-any */
import PropertyCard from "@/components/Properties/PropertyCard";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { useGetAllProperties } from "@/feature/Property/useGetAllProperties";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Filters from "@/components/Properties/Filters";
import { Filter, OctagonAlertIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const Properties: React.FC = () => {
  const [searchParams] = useSearchParams();
  const queryLocation = searchParams.get("location") || "";
  const listing_type = searchParams.get("listing_type") || "";

  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    location: queryLocation,
    city: "",
    area: "",
    minPrice: undefined,
    maxPrice: undefined,
    minSize: undefined,
    maxSize: undefined,
    bedrooms: undefined,
    bathrooms: undefined,
    furnished: undefined,
    property_type: "",
    listing_type: listing_type,
    sortBy: "price",
    sortOrder: "asc" as "asc" | "desc",
  });

  const { data: properties, isPending } = useGetAllProperties(filters);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [tempFilters, setTempFilters] = useState(filters);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Navbar />

      <div className="p-4 pt-40 max-w-[1200px] mx-auto space-y-6 flex justify-center items-start relative gap-x-4">
        {/* Desktop Filters Sidebar */}
        <div className="hidden lg:block sticky top-0 ">
          <Filters
            filters={tempFilters}
            setFilters={setTempFilters}
            handleFilter={setFilters}
          />
        </div>

        {/* Mobile Filter Drawer */}

        {/* Properties List */}
        <section className="w-full lg:w-2/3">
          <div className="max-w-[1200px] mx-auto mb-10  flex justify-between items-center ">
            <div>
              <h1 className="text-3xl font-bold">
                {queryLocation
                  ? `Showing results for "${queryLocation}"`
                  : "Find Your Dream Home"}
              </h1>
              <p>
                <span className="text-primary font-semibold text-lg">
                  Properties
                </span>{" "}
                for Sale or Rent
              </p>
            </div>

            <div>
              <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <DrawerTrigger asChild>
                  <Button className="fixed bottom-6 left-6 w-[100px] text-white text-md shadow-lg z-50 lg:hidden">
                    Filter <Filter size={20} className="ml-1" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="p-4">
                  <Filters
                    filters={tempFilters}
                    setFilters={setTempFilters}
                    handleFilter={setFilters}
                    handleDrawerClose={() => setIsDrawerOpen(false)}
                  />
                </DrawerContent>
              </Drawer>
            </div>
          </div>

          {isPending ? (
            <div className="flex flex-col space-y-2 w-full">
              <Skeleton className="w-full h-60 bg-gray-400" />
              <Skeleton className="w-full h-60 bg-gray-400" />
              <Skeleton className="w-full h-60 bg-gray-400" />
              <Skeleton className="w-full h-60 bg-gray-400" />
            </div>
          ) : (
            <section className="w-full">
              {/* No Properties Found */}
              {properties?.properties.length === 0 && (
                <div className="bg-gray-200 text-primary p-4 flex justify-center items-center flex-col rounded-md py-10">
                  <p className="text-center text-2xl font-semibold">
                    No Properties Found
                  </p>
                  <p className="text-center text-text mb-5">
                    Explore other filters
                  </p>
                  <OctagonAlertIcon size={40} />
                </div>
              )}

              {/* Property Cards */}
              <div className="flex flex-col space-y-6">
                {properties?.properties.map((property: any) => (
                  <PropertyCard key={property._id} property={property} />
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-center items-center space-y-6 flex-col">
                {properties?.properties.length !== 0 && (
                  <div className="flex justify-center mt-20">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          {filters.page !== 1 && (
                            <PaginationPrevious
                              onClick={() =>
                                setFilters((prev) => ({
                                  ...prev,
                                  page: Math.max(prev.page - 1, 1),
                                }))
                              }
                            />
                          )}
                        </PaginationItem>

                        <PaginationItem>
                          <span className="px-4 py-2 border border-primary rounded-md">
                            {filters.page}
                          </span>
                        </PaginationItem>

                        <PaginationItem>
                          {properties?.properties.length === filters.limit && (
                            <PaginationNext
                              onClick={() =>
                                setFilters((prev) => ({
                                  ...prev,
                                  page: prev.page + 1,
                                }))
                              }
                            />
                          )}
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
                {properties?.properties.length !== 0 && (
                  <p className="text-xs">Pages</p>
                )}
              </div>
            </section>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Properties;
