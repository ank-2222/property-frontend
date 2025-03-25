import { useQuery } from "@tanstack/react-query";
import { getAllPropertiesService } from "@/service/Property";
import { toast } from "sonner";
import { PROPERTIES_RETRIEVED } from "@/constants/Property";

interface PropertyFilters {
  page?: number;
  limit?: number;
  location?: string;
  city?: string;
  area?: string;
  minPrice?: number;
  maxPrice?: number;
  minSize?: number;
  maxSize?: number;
  bedrooms?: number;
  bathrooms?: number;
  furnished?: boolean;
  property_type?: string;
  listing_type?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export const useGetAllProperties = (filters: PropertyFilters) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["properties", filters], // Dynamic cache key for different queries
    queryFn: async () => {
      const data = await getAllPropertiesService(filters);

      if (data.message_code !== PROPERTIES_RETRIEVED) {
        toast.error("Something went wrong!");
        throw new Error("Unexpected response structure");
      }

      return data.data;
    },
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  });

  return { data, isPending, isError };
};
