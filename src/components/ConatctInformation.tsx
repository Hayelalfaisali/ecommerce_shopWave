import { MapPin, Phone, Mail, Clock } from 'lucide-react'

function ConatctInformation() {
    return (
        <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>

                <div className="space-y-6">
                    <div className="flex">
                        <MapPin size={20} className="text-shop-blue mr-4 mt-1" />
                        <div>
                            <h3 className="font-medium text-gray-900">Address</h3>
                            <p className="text-gray-600 mt-1">
                                123 Shopping Street<br />
                                Retail City, 10001<br />
                                United States
                            </p>
                        </div>
                    </div>

                    <div className="flex">
                        <Phone size={20} className="text-shop-blue mr-4 mt-1" />
                        <div>
                            <h3 className="font-medium text-gray-900">Phone</h3>
                            <p className="text-gray-600 mt-1">
                                Customer Service: (555) 123-4567<br />
                                Orders & Returns: (555) 123-4568
                            </p>
                        </div>
                    </div>

                    <div className="flex">
                        <Mail size={20} className="text-shop-blue mr-4 mt-1" />
                        <div>
                            <h3 className="font-medium text-gray-900">Email</h3>
                            <p className="text-gray-600 mt-1">
                                General Inquiries: info@shopwave.com<br />
                                Customer Support: support@shopwave.com
                            </p>
                        </div>
                    </div>

                    <div className="flex">
                        <Clock size={20} className="text-shop-blue mr-4 mt-1" />
                        <div>
                            <h3 className="font-medium text-gray-900">Business Hours</h3>
                            <p className="text-gray-600 mt-1">
                                Monday - Friday: 9:00 AM - 6:00 PM<br />
                                Saturday: 10:00 AM - 4:00 PM<br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Connect With Us</h3>
                <p className="text-gray-600 mb-4">
                    Follow us on social media for the latest products, promotions, and updates.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-shop-blue transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-shop-blue transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-shop-blue transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ConatctInformation
