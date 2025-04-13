import { create } from "zustand";
import blogPosts from "../data/blogs.json";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
}

interface BlogState {
  posts: BlogPost[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  getFilteredPosts: () => BlogPost[];
}

export const useBlogStore = create<BlogState>((set, get) => ({
  posts: blogPosts.posts,
  selectedCategory: null,
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  getFilteredPosts: () => {
    const { posts, selectedCategory } = get();
    if (!selectedCategory) return posts;
    return posts.filter((post) => post.category === selectedCategory);
  },
}));
