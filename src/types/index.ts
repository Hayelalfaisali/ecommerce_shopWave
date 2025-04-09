
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    featured: boolean;
    imageUrl: string;
    rating: number;
    stock: number;
  }
  
  export interface Category {
    id: number;
    name: string;
    description: string;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }