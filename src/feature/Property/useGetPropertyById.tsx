import { useQuery } from "@tanstack/react-query";
import { getPropertyByIdService } from "@/service/Property";
import { toast } from "sonner";
import { PROPERTY_RETRIEVED } from "@/constants/Property";

export const useGetPropertyById = (propertyId: string) => {
  return useQuery({
    queryKey: ["property", propertyId],
    queryFn: async () => {
      if (!propertyId) {
        throw new Error("Property ID is required");
      }

      const data = await getPropertyByIdService(propertyId);

      if (data.message_code !== PROPERTY_RETRIEVED) {
        toast.error("Something went wrong!");
        throw new Error("Unexpected response structure");
      }

      return data;
    },
    enabled: !!propertyId, // Prevents execution if propertyId is missing
  });
};
