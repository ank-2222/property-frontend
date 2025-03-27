/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGetBlogById } from "@/feature/Blog/useGetBlogById";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogResponse } from "@/interface/Blog";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ViewBlog = () => {
  const { id } = useParams();
  const { isPending, data } = useGetBlogById(id as string);

  const [blog, setBlog] = useState<BlogResponse | null>(null);

  // Update state when API data changes
  useEffect(() => {
    if (data) {
      setBlog(data?.data);
    }
  }, [data]);

  return (
    <>
      <Navbar />

      <section className="max-w-4xl mx-auto p-6 pt-20">
        {/* Loader */}
        {isPending && (
          <div className=" my-30">
            <Skeleton className="w-full h-48 bg-gray-300 mb-4" />
            <Skeleton className="w-3/4 h-8 bg-gray-300 mb-4" />
            <Skeleton className="w-full h-20 bg-gray-300" />
          </div>
        )}

        {/* Error Handling */}
        {!isPending && !blog && (
          <p className="text-center text-red-500">Blog not found.</p>
        )}

        {/* Blog Content */}
        {!isPending && blog && (
          <>
            {" "}
            <section className="my-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/blogs">Blogs</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{blog?.title}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </section>
            {/* Blog Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-primaryDark">
              {blog.title}
            </h1>
            {/* Meta Data */}
            <p className="text-gray-500 text-sm mt-2">
              Published on {new Date(blog.created_at).toLocaleDateString()}
            </p>
            {/* Cover Image */}
            {blog.coverImage && (
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg mt-4"
              />
            )}
            {/* Content */}
            <div className="mt-6 text-lg text-gray-700 leading-relaxed">
              {blog.content}
            </div>
            {/* SEO Tags */}
            {blog.seo?.tags?.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold">Tags</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {blog.seo.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

export default ViewBlog;
