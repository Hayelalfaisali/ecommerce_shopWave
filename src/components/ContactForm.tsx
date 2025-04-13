import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      const [errors, setErrors] = useState<Record<string, string>>({});
      const [isSubmitting, setIsSubmitting] = useState(false);
      
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      ) => {
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
        
        const requiredFields = ["name", "email", "subject", "message"];
        
        requiredFields.forEach(field => {
          if (!formData[field as keyof typeof formData].trim()) {
            newErrors[field] = "This field is required";
          }
        });
        
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
      
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
          return;
        }
        
        setIsSubmitting(true);
        
        setTimeout(() => {
          toast({
            title: "Message sent!",
            description: "Thank you for contacting us. We'll get back to you soon.",
          });
          
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          
          setIsSubmitting(false);
        }, 1500);
      };
  return (
    <div className="md:w-2/3">
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-shop-blue ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">Your Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-shop-blue ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 mb-1">Subject *</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-shop-blue ${
              errors.subject ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select a subject</option>
            <option value="Order Inquiry">Order Inquiry</option>
            <option value="Product Question">Product Question</option>
            <option value="Return/Refund">Return/Refund</option>
            <option value="Shipping Question">Shipping Question</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 mb-1">Your Message *</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-shop-blue ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn-primary py-3 cursor-pointer px-6 flex items-center justify-center gap-2 ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send size={16} />
        </button>
      </form>
    </div>
  </div>
  )
}

export default ContactForm
