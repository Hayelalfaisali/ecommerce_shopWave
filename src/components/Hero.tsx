
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-500 mb-4">
              Discover the Latest 
              <span className="text-blue-bg-blue-500"> Trendy Products</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Find the perfect items that match your style and needs with our carefully curated collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/shop" 
                className="btn-primary flex items-center justify-center gap-2"
              >
                Shop Now <ArrowRight size={18} />
              </Link>
              <Link 
                to="/about" 
                className="btn-secondary flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-500 rounded-full absolute -right-4 -top-4 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000" 
                alt="Shopping Hero" 
                className="rounded-lg shadow-xl relative z-10 max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
