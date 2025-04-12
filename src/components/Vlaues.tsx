import { Award, Heart, TrendingUp } from 'lucide-react'

function Vlaues() {
    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        These core principles guide our business and shape every decision we make.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex justify-center mb-4">
                            <div className="bg-blue-500/10 p-3 rounded-full">
                                <Award size={28} className="text-blue-500" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-3">Quality</h3>
                        <p className="text-gray-600 text-center">
                            We are committed to offering only the highest quality products that meet our rigorous standards.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex justify-center mb-4">
                            <div className="bg-blue-500/10 p-3 rounded-full">
                                <Heart size={28} className="text-blue-500" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-3">Customer First</h3>
                        <p className="text-gray-600 text-center">
                            Our customers are at the heart of everything we do. Your satisfaction is our top priority.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex justify-center mb-4">
                            <div className="bg-blue-500/10 p-3 rounded-full">
                                <TrendingUp size={28} className="text-blue-500" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-3">Continuous Improvement</h3>
                        <p className="text-gray-600 text-center">
                            We constantly strive to improve our products, services, and the overall shopping experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}

export default Vlaues