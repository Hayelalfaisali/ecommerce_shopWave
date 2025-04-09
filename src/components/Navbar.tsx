
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/90 backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-bold text-shop-indigo">
            SHOP<span className="text-shop-blue">WAVE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-shop-blue font-medium">Home</Link>
              <Link to="/shop" className="text-gray-700 hover:text-shop-blue font-medium">Shop</Link>
              <Link to="/blog" className="text-gray-700 hover:text-shop-blue font-medium">Blog</Link>
              <Link to="/about" className="text-gray-700 hover:text-shop-blue font-medium">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-shop-blue font-medium">Contact</Link>
            </div>
          </div>

          {/* Search and Cart Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="text-gray-700 hover:text-shop-blue"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link to="/cart" className="text-gray-700 hover:text-shop-blue relative">
              <ShoppingCart size={20} />
            0
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="text-gray-700 hover:text-shop-blue relative">
              <ShoppingCart size={20} />
         0
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-shop-blue font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="text-gray-700 hover:text-shop-blue font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-shop-blue font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-shop-blue font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-shop-blue font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
