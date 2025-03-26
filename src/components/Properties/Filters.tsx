/* eslint-disable @typescript-eslint/no-explicit-any */
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Filters = ({ filters, setFilters, handleFilter ,handleDrawerClose}: any) => {
  const handleReset = () => {
    setFilters({
      page: 1,
      limit: 10,
      location: "",
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
      listing_type: "",
      sortBy: "price",
      sortOrder: "asc",
    });
  };

const handleApplyButton = (filters:any) => {
    handleFilter(filters);
    handleDrawerClose();
}
    

  return (
    <Card className="sticky top-0 z-10 w-full lg:w-[350px] p-5  bg-white shadow-lg rounded-lg max-h-[90vh] overflow-y-scroll slimScrollbar   ">
      <CardHeader>
        <CardTitle className="text-xl text-primary font-semibold">Property Filters</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Location Filters */}
        <div className="space-y-3">
          <label className="text-sm font-medium ">Location Details</label>
          <Input
            name="location"
            placeholder="Enter Location"
            value={filters.location}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
          />
          <Input
            name="city"
            placeholder="Enter City"
            value={filters.city}
            onChange={(e) => setFilters({ ...filters, city: e.target.value })}
          />
          <Input
            name="area"
            placeholder="Enter Area"
            value={filters.area}
            onChange={(e) => setFilters({ ...filters, area: e.target.value })}
          />
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium mb-2">Price Range ($)</label>
          <Slider
            min={1000}
            max={100000}
            step={1000}
            defaultValue={[filters.minPrice || 1000, filters.maxPrice || 100000]}
            onValueChange={([min, max]) =>
              setFilters({ ...filters, minPrice: min, maxPrice: max })
            }
              className="bg-gray-300"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>${filters.minPrice || 1000}</span>
            <span>${filters.maxPrice || 100000}</span>
          </div>
        </div>

        {/* Size Range */}
        <div>
          <label className="block text-sm font-medium mb-2">Property Size (sqft)</label>
          <Slider
            min={500}
            max={5000}
            step={100}
            defaultValue={[filters.minSize || 500, filters.maxSize || 5000]}
            onValueChange={([min, max]) =>
              setFilters({ ...filters, minSize: min, maxSize: max })
            }
            className="bg-gray-300"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>{filters.minSize || 500} sqft</span>
            <span>{filters.maxSize || 5000} sqft</span>
          </div>
        </div>

        {/* Bedrooms & Bathrooms */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Bedrooms</label>
            <Slider
              min={1}
              max={10}
              step={1}
              defaultValue={[filters.bedrooms || 1]}
              onValueChange={([value]) =>
                setFilters({ ...filters, bedrooms: value })
              }
                className="bg-gray-300"
            />
            <span className="text-xs text-gray-600">{filters.bedrooms || 1}</span>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Bathrooms</label>
            <Slider
              min={1}
              max={10}
              step={1}
              defaultValue={[filters.bathrooms || 1]}
              onValueChange={([value]) =>
                setFilters({ ...filters, bathrooms: value })
              }
                className="bg-gray-300"
            />
            <span className="text-xs text-gray-600">{filters.bathrooms || 1}</span>
          </div>
        </div>

        {/* Property Type */}
        <div >
          <label className="block text-sm font-medium">Property Type</label>
          <Select
            value={filters.property_type}
            onValueChange={(value) =>
              setFilters({ ...filters, property_type: value })
            }
            
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Property Type" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Listing Type */}
        <div>
          <label className="block text-sm font-medium">Listing Type</label>
          <Select
            value={filters.listing_type}
            onValueChange={(value) =>
              setFilters({ ...filters, listing_type: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Listing Type" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="sale">For Sale</SelectItem>
              <SelectItem value="rent">For Rent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sorting Options */}
        {/* <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Sort By</label>
            <Select
              value={filters.sortBy}
              onValueChange={(value) =>
                setFilters({ ...filters, sortBy: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="size">Size</SelectItem>
                <SelectItem value="bedrooms">Bedrooms</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium">Order</label>
            <Select
              value={filters.sortOrder}
              onValueChange={(value) =>
                setFilters({ ...filters, sortOrder: value as "asc" | "desc" })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Order" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">Ascending</SelectItem>
                <SelectItem value="desc">Descending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div> */}

        {/* Apply & Reset Buttons */}
        <div className="flex space-x-4">
          <Button
            onClick={() => handleApplyButton(filters)}
            className="w-1/2 bg-primary text-white"
          >
            Apply
          </Button>
          <Button
            variant="outline"
            onClick={handleReset}
            className="w-1/2 border-gray-300"
          >
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Filters;
