import { useQuery } from "@tanstack/react-query";
import { getAllBlogsService } from "@/service/Blog";
import { toast } from "sonner";
import { BLOGS_RETRIEVED } from "@/constants/Blog";

export const useGetAllBlogs = () => {
  const queryResult = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const data = await getAllBlogsService();

      if (!data || typeof data !== "object" || !data.message_code) {
        toast.error("Something went wrong! Please try again later.");
        throw new Error("Unexpected response structure");
      }

      if (data?.message_code !== BLOGS_RETRIEVED) {
        toast.error(data.message || "Failed to retrieve blogs");
        throw new Error(data.message || "Failed to retrieve blogs");
      }
      return data?.data;
    },
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  });

  if (queryResult.isError) {
    console.log("Get All Blogs Error:", queryResult.error.message);
    toast.error("Failed to fetch blogs");
  }

  return {data: queryResult.data, isLoading: queryResult.isPending};
};
