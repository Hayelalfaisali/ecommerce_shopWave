
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import productsData from "@/data/products.json";
import { ArrowRight } from "lucide-react";

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  
  useEffect(() => {
    // Load products
    const allProducts = productsData.products;
    setProducts(allProducts);
    
    // Get featured products
    const featured = allProducts.filter(product => product.featured);
    setFeaturedProducts(featured);
    
    // Get unique categories
    const uniqueCategories = [...new Set(allProducts.map(product => product.category))];
    setCategories(uniqueCategories);
  }, []);

  return (
    <Layout>
      <Hero />
      
      <div className="container mx-auto px-4 py-8">
        {/* Featured Products Carousel */}
        {featuredProducts.length > 0 && (
          <ProductCarousel 
            products={featuredProducts}
            title="Featured Products"
          />
        )}
        
        {/* Categories Section */}
        <div className="my-16">
          <h2 className="section-title mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-85 transition-opacity z-10"></div>
                <img 
                  src={`https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1000&h=${300 + index * 50}`} 
                  alt={category} 
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-white text-xl font-bold">{category}</h3>
                  <a href={`/shop?category=${category}`} className="text-white hover:text-shop-blue flex items-center mt-2">
                    Shop Now <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* New Arrivals Section */}
        <div className="my-16">
          <h2 className="section-title mb-8">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
        {/* Promotion Banner */}
        <div className="my-16 bg-gradient-to-r from-shop-indigo/90 to-shop-blue/90 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Summer Sale - Up to 50% Off
              </h2>
              <p className="text-white/90 mb-4">
                Don't miss out on our biggest sale of the season. Limited time offer!
              </p>
              <a 
                href="/shop" 
                className="inline-block px-6 py-3 bg-white text-shop-indigo rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Shop the Sale
              </a>
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white/20 rounded-full flex items-center justify-center">
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-bold">50%</span>
                <span className="block font-medium">OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;