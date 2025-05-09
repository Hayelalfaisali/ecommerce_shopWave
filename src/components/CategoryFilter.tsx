
import React from "react";
import { Category } from "@/types";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Categories</h3>
      <div className="space-y-2">
        <button
          className={`block w-full cursor-pointer text-left py-2 px-3 rounded-md transition-colors ${
            selectedCategory === "all"
              ? "bg-indigo-500 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
          onClick={() => onSelectCategory("all")}
        >
          All Products
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            className={`block w-full text-left cursor-pointer py-2 px-3 rounded-md transition-colors ${
              selectedCategory === category.name
                ? "bg-indigo-500 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            onClick={() => onSelectCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
