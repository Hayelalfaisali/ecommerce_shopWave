
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  
  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-md">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="product-image transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </div>
        
        <div className="mt-3">
          <span className="product-category">{product.category}</span>
          <h3 className="product-title truncate">{product.name}</h3>
          
          <div className="flex items-center mt-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14}
                className={`${
                  i < Math.floor(product.rating) 
                    ? "text-yellow-400 fill-yellow-400" 
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="product-price">${product.price.toFixed(2)}</span>
            <button
              className="p-2 rounded-full bg-gray-100 hover:bg-shop-blue hover:text-white transition-colors duration-300"
              aria-label="Add to cart"
            >
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
