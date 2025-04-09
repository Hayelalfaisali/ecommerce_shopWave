
import React from "react";
import { Plus, Minus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  max = 99,
}) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md w-fit">
      <button
        onClick={onDecrease}
        className="px-2 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      
      <span className="px-4 py-1 text-center min-w-[40px]">{quantity}</span>
      
      <button
        onClick={onIncrease}
        className="px-2 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;
