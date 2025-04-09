
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import QuantitySelector from "@/components/QuantitySelector";
import { useCartStore } from "@/store/useCartStore";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, total } = useCartStore();

  const handleQuantityIncrease = (id: number, currentQuantity: number) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const handleQuantityDecrease = (id: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="mb-6">
            <ShoppingBag size={64} className="mx-auto text-gray-300" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link 
            to="/shop" 
            className="btn-primary inline-flex items-center"
          >
            Continue Shopping
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 text-gray-700 font-medium">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>
              
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-t border-gray-100 items-center"
                >
                  {/* Product Info */}
                  <div className="col-span-1 md:col-span-6 flex items-center space-x-4">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded"
                    />
                    
                    <div>
                      <Link 
                        to={`/product/${item.id}`} 
                        className="font-medium text-gray-800 hover:text-shop-blue"
                      >
                        {item.name}
                      </Link>
                      <div className="text-sm text-gray-500 mt-1">{item.category}</div>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="md:col-span-2 text-left md:text-center">
                    <div className="md:hidden text-sm text-gray-500 mb-1">Price:</div>
                    <div className="font-medium">${item.price.toFixed(2)}</div>
                  </div>
                  
                  {/* Quantity */}
                  <div className="md:col-span-2 flex md:justify-center">
                    <div className="md:hidden text-sm text-gray-500 mb-1 mr-4 mt-2">Quantity:</div>
                    <QuantitySelector
                      quantity={item.quantity}
                      onIncrease={() => handleQuantityIncrease(item.id, item.quantity)}
                      onDecrease={() => handleQuantityDecrease(item.id, item.quantity)}
                    />
                  </div>
                  
                  {/* Total & Remove Button */}
                  <div className="md:col-span-2 flex justify-between md:justify-end items-center">
                    <div>
                      <div className="md:hidden text-sm text-gray-500 mb-1">Total:</div>
                      <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                    
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors ml-4"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-between">
              <Link 
                to="/shop" 
                className="text-shop-blue hover:underline inline-flex items-center"
              >
                Continue Shopping
              </Link>
              
              <button 
                onClick={clearCart} 
                className="text-red-500 hover:text-red-600"
              >
                Clear Cart
              </button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {total >= 50 ? 'Free' : '$5.00'}
                  </span>
                </div>
                
                {total < 50 && (
                  <div className="text-sm text-gray-500">
                    Spend ${(50 - total).toFixed(2)} more to qualify for free shipping.
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-shop-blue text-xl">
                      ${(total >= 50 ? total : total + 5).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <Link
                to="/checkout"
                className="btn-primary w-full py-3 flex items-center justify-center"
              >
                Proceed to Checkout <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;