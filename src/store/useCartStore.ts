
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '@/types';
import { toast } from '@/hooks/use-toast';

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  
  // Actions
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const calculateItemCount = (items: CartItem[]): number => {
  return items.reduce((count, item) => count + item.quantity, 0);
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      itemCount: 0,
      
      addItem: (product: Product) => {
        const { items } = get();
        const existingItemIndex = items.findIndex(item => item.id === product.id);
        
        if (existingItemIndex >= 0) {
          const updatedItems = [...items];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + 1
          };
          
          set({
            items: updatedItems,
            total: calculateTotal(updatedItems),
            itemCount: calculateItemCount(updatedItems)
          });
        } else {
          const newItem: CartItem = {
            ...product,
            quantity: 1
          };
          
          const updatedItems = [...items, newItem];
          
          set({
            items: updatedItems,
            total: calculateTotal(updatedItems),
            itemCount: calculateItemCount(updatedItems)
          });
        }
        
        toast({
          title: "Added to cart",
          description: `${product.name} has been added to your cart.`
        });
      },
      
      removeItem: (id: number) => {
        const { items } = get();
        const updatedItems = items.filter(item => item.id !== id);
        
        set({
          items: updatedItems,
          total: calculateTotal(updatedItems),
          itemCount: calculateItemCount(updatedItems)
        });
        
        toast({
          title: "Removed from cart",
          description: "Item has been removed from your cart."
        });
      },
      
      updateQuantity: (id: number, quantity: number) => {
        const { items } = get();
        
        if (quantity <= 0) {
          const filteredItems = items.filter(item => item.id !== id);
          set({
            items: filteredItems,
            total: calculateTotal(filteredItems),
            itemCount: calculateItemCount(filteredItems)
          });
          return;
        }
        
        const updatedItems = items.map(item => 
          item.id === id ? { ...item, quantity } : item
        );
        
        set({
          items: updatedItems,
          total: calculateTotal(updatedItems),
          itemCount: calculateItemCount(updatedItems)
        });
      },
      
      clearCart: () => {
        set({
          items: [],
          total: 0,
          itemCount: 0
        });
        
        toast({
          title: "Cart cleared",
          description: "All items have been removed from your cart."
        });
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);