
import React from "react";
import { useBlogStore } from "@/store/useBlogStore";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BlogCategories: React.FC = () => {
  const { posts, selectedCategory, setSelectedCategory } = useBlogStore();
  
  // Extract unique categories
  const categories = Array.from(new Set(posts.map(post => post.category)));

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-3">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "rounded-full",
            selectedCategory === null ? "bg-blue-500 text-white hover:bg-blue-500/90" : ""
          )}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </Button>
        
        {categories.map(category => (
          <Button
            key={category}
            variant="outline"
            size="sm"
            className={cn(
              "rounded-full",
              selectedCategory === category ? "bg-blue-500 text-white hover:bg-blue-500/90" : ""
            )}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;