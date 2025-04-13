
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-indigo-500 mb-4">
              SHOP<span className="text-indigo-500">WAVE</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Your one-stop destination for quality products with the best shopping experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-500" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-500" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-500" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-indigo-500">Home</Link></li>
              <li><Link to="/shop" className="text-gray-600 hover:text-indigo-500">Shop</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-indigo-500">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-indigo-500">Contact</Link></li>
            </ul>
          </div>
          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-indigo-500">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-500">Return Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-500">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-500">Terms & Conditions</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-indigo-500 mt-1" />
                <span className="text-gray-600">123 Shopping Street, Retail City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-indigo-500" />
                <span className="text-gray-600">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-indigo-500" />
                <span className="text-gray-600">contact@shopwave.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ShopWave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;