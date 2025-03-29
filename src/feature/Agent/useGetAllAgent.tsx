import { useQuery } from "@tanstack/react-query";
import { getAgentsService } from "@/service/Agent";
// import { toast } from "sonner";
import { AGENTS_RETRIEVED } from "@/constants/Agent";

export const useGetAllAgent = () => {
  const queryResult = useQuery({
    queryKey: ["agents"],
    queryFn: async () => {
      const data = await getAgentsService();

      if (!data || typeof data !== "object" || !data.message_code) {
        // toast.error("Something went wrong! Please try again later.");
        throw new Error("Unexpected response structure");
      }

      if (data?.message_code !== AGENTS_RETRIEVED) {
        // toast.error(data.message || "Failed to retrieve agents");
        throw new Error(data.message || "Failed to retrieve agents");
      }

      return data?.data;
    },
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  });

  if (queryResult.isError) {
    console.log("Get All Agents Error:", queryResult.error.message);
    // toast.error("Failed to fetch agents");
  }

  return { data: queryResult.data, isPending: queryResult.isPending };
};
