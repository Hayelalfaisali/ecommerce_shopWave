import React from "react";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import ConatctInformation from "@/components/ConatctInformation";

const ContactPage: React.FC = () => {

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Have questions or feedback? We'd love to hear from you.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <ContactForm />
          {/* Contact Information */}
          <ConatctInformation />
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;