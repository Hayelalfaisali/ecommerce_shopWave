import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import QuantitySelector from "@/components/QuantitySelector";
import ProductCard from "@/components/ProductCard";
import { useCartStore } from "@/store/useCartStore";
import { Product } from "@/types";
import { Star, Truck, ShieldCheck, ArrowLeft } from "lucide-react";
import productsData from "@/data/products.json";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      // Find the product by ID
      const productId = parseInt(id, 10);
      const foundProduct = productsData.products.find(p => p.id === productId) || null;
      setProduct(foundProduct);
      
      // Find related products (same category)
      if (foundProduct) {
        const related = productsData.products
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
      
      setIsLoading(false);
    }
  }, [id]);
  
  const handleIncreaseQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      // Add the product to cart multiple times based on quantity
      for (let i = 0; i < quantity; i++) {
        addItem(product);
      }
    }
  };
  
  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 h-96 bg-gray-200 rounded"></div>
              <div className="md:w-1/2">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-8 w-3/4"></div>
                <div className="h-10 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="h-12 bg-gray-200 rounded mb-4"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/shop" className="btn-primary inline-flex items-center">
            <ArrowLeft size={18} className="mr-2" /> Return to Shop
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/shop" className="text-gray-600 hover:text-blue-500 inline-flex items-center">
            <ArrowLeft size={18} className="mr-1" /> Back to Shop
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="bg-gray-50 p-4 rounded-lg">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          </div>
          
          {/* Product Details */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={18}
                  className={`${
                    i < Math.floor(product.rating) 
                      ? "text-yellow-400 fill-yellow-400" 
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
            </div>
            
            <span className="text-2xl font-bold text-blue-500 mb-6 block">
              ${product.price.toFixed(2)}
            </span>
            
            <div className="mb-6">
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center text-gray-600 mb-2">
                <span className="product-category mr-2">{product.category}</span>
                <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.stock > 0 ? `In Stock (${product.stock} left)` : 'Out of Stock'}
                </span>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Quantity:</label>
              <QuantitySelector
                quantity={quantity}
                onIncrease={handleIncreaseQuantity}
                onDecrease={handleDecreaseQuantity}
                max={product.stock}
              />
            </div>
            
            <button
              onClick={handleAddToCart}
              disabled={!product.stock}
              className={`w-full py-3 rounded-md font-medium text-white ${
                product.stock 
                  ? 'bg-blue-text-blue-500 hover:bg-blue-600'
                  : 'bg-gray-400 cursor-not-allowed'
              } transition-colors mb-6`}
            >
              {product.stock ? 'Add to Cart' : 'Out of Stock'}
            </button>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-start mb-4">
                <Truck size={20} className="text-gray-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">Free Shipping</h4>
                  <p className="text-sm text-gray-600">Orders over $50 qualify for free shipping.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <ShieldCheck size={20} className="text-gray-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">30-Day Returns</h4>
                  <p className="text-sm text-gray-600">Not satisfied? Return within 30 days for a full refund.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="section-title mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductPage;