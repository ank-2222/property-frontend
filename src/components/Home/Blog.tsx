import { useGetAllBlogs } from "@/feature/Blog/useGetAllBlogs";
import { BlogResponse } from "@/interface/Blog";
import { Skeleton } from "../ui/skeleton";
import { Link, useNavigate } from "react-router-dom";

const Blog = () => {
  const { isLoading, data: blogs = [] } = useGetAllBlogs();
  const navigate = useNavigate();

  // Filter only published blogs
  const publishedBlogs = blogs.filter((blog: BlogResponse) => blog.status === "published");

  // Show only the first 6 published blogs
  const displayedBlogs = publishedBlogs.slice(0, 6);

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primaryDark">
        Latest <span className="text-primary">Blogs</span>
      </h2>
      <p className="text-center text-text mt-2">
        Stay updated with the latest insights.
      </p>

      {isLoading ? (
        <div className="flex justify-center items-center w-full gap-x-2">
          <Skeleton className="w-full flex-1 h-80 my-5 bg-gray-400" />
          <Skeleton className="w-full flex-1 h-80 my-5 bg-gray-400" />
          <Skeleton className="w-full flex-1 h-80 my-5 bg-gray-400" />
        </div>
      ) : (
        <>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedBlogs.map((blog: BlogResponse) => (
              <div
                key={blog._id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-[250px] object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {blog.content}
                  </p>
                  <Link to={`/blogs/${blog._id}`} className="mt-5 text-primary font-semibold">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Show "View All Blogs" button if more than 6 published blogs exist */}
          {publishedBlogs?.length > 6 && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => navigate("/blogs")}
                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primaryDark transition-all duration-300"
              >
                View All Blogs
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Blog;
