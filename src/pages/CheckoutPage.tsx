import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useCartStore } from "@/store/useCartStore";
import { toast } from "@/hooks/use-toast";
import { CreditCard, ShieldCheck } from "lucide-react";

const CheckoutPage: React.FC = () => {
  const { items, total, clearCart } = useCartStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    const requiredFields = [
      "firstName", "lastName", "email", "address",
      "city", "state", "zipCode", "country",
      "cardName", "cardNumber", "cardExpiry", "cardCvv"
    ];

    requiredFields.forEach(field => {
      if (!formData[field as keyof typeof formData].trim()) {
        newErrors[field] = "This field is required";
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.cardNumber && !/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
      newErrors.cardNumber = "Please enter a valid 16-digit card number";
    }

    if (formData.cardExpiry && !/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) {
      newErrors.cardExpiry = "Please use MM/YY format";
    }

    if (formData.cardCvv && !/^\d{3,4}$/.test(formData.cardCvv)) {
      newErrors.cardCvv = "CVV must be 3 or 4 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add some items to your cart before checking out.",
        variant: "destructive",
      });
      navigate("/shop");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. Your order has been confirmed.",
      });
      clearCart();
      navigate("/");
      setIsSubmitting(false);
    }, 1500);
  };

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value.replace(/[^\d]/g, ""));

    setFormData({
      ...formData,
      cardNumber: formattedValue,
    });

    if (errors.cardNumber) {
      setErrors({
        ...errors,
        cardNumber: "",
      });
    }
  };

  const shippingCost = total >= 50 ? 0 : 5;
  const finalTotal = total + shippingCost;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-1">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.firstName ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-1">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.lastName ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-gray-700 mb-1">Street Address *</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.address ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-gray-700 mb-1">City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.city ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-gray-700 mb-1">State/Province *</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.state ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.state && (
                      <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="zipCode" className="block text-gray-700 mb-1">ZIP/Postal Code *</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.zipCode ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.zipCode && (
                      <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-gray-700 mb-1">Country *</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Payment Information</h2>

                <div className="flex items-center mb-6">
                  <CreditCard size={20} className="text-gray-500 mr-2" />
                  <span className="text-gray-500">Secure Payment Processing</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="cardName" className="block text-gray-700 mb-1">Name on Card *</label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.cardName ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.cardName && (
                      <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="cardNumber" className="block text-gray-700 mb-1">Card Number *</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleCardNumberChange}
                      maxLength={19}
                      placeholder="XXXX XXXX XXXX XXXX"
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.cardNumber ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.cardNumber && (
                      <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cardExpiry" className="block text-gray-700 mb-1">Expiration Date (MM/YY) *</label>
                    <input
                      type="text"
                      id="cardExpiry"
                      name="cardExpiry"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      maxLength={5}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.cardExpiry ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.cardExpiry && (
                      <p className="text-red-500 text-sm mt-1">{errors.cardExpiry}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cardCvv" className="block text-gray-700 mb-1">CVV *</label>
                    <input
                      type="text"
                      id="cardCvv"
                      name="cardCvv"
                      value={formData.cardCvv}
                      onChange={handleChange}
                      maxLength={4}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.cardCvv ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.cardCvv && (
                      <p className="text-red-500 text-sm mt-1">{errors.cardCvv}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center mt-6 text-sm text-gray-600">
                  <ShieldCheck size={18} className="text-green-500 mr-2" />
                  <span>Your payment information is secured with SSL encryption</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-md font-medium text-white cursor-pointer bg-indigo-500 hover:bg-blue-600 transition-colors ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
              >
                {isSubmitting ? "Processing..." : `Place Order • $${finalTotal.toFixed(2)}`}
              </button>
            </form>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded mr-3"
                      />
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                      </div>
                    </div>
                    <div className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-blue-ring-indigo-500 text-xl">
                      ${finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-600">
                <p className="mb-2">
                  By placing your order, you agree to our <a href="#" className="text-blue-ring-indigo-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-ring-indigo-500 hover:underline">Privacy Policy</a>.
                </p>
                <p>
                  Your personal data will be used to process your order and support your experience throughout this website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;