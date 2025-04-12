
import React from "react";
import Layout from "@/components/Layout";
import { useBlogStore } from "@/store/useBlogStore";
import BlogCard from "@/components/BlogCard";
import BlogCategories from "@/components/BlogCategories";
import { Separator } from "@/components/ui/separator";

const BlogPage: React.FC = () => {
  const { getFilteredPosts } = useBlogStore();
  const filteredPosts = getFilteredPosts();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Our Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights about e-commerce
            and our products.
          </p>
        </div>
        
        <Separator className="my-6" />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BlogCategories />
            </div>
          </div>
          
          <div className="lg:col-span-3">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No blog posts found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;