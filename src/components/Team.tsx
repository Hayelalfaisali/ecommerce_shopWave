function Team() {
    return (
        <div>
            {/* Team Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        The dedicated people behind ShopWave who work tirelessly to bring you the best shopping experience.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="relative mb-4 inline-block">
                            <div className="w-full h-full bg-indigo-500 rounded-full absolute opacity-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000"
                                alt="Sarah Johnson"
                                className="w-48 h-48 object-cover rounded-full relative"
                            />
                        </div>
                        <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                        <p className="text-blue-5bg-indigo-500 mb-2">Founder & CEO</p>
                        <p className="text-gray-600 text-sm">
                            Visionary leader with a passion for creating exceptional customer experiences.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="relative mb-4 inline-block">
                            <div className="w-full h-full bg-indigo-500 rounded-full absolute opacity-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000"
                                alt="Michael Chen"
                                className="w-48 h-48 object-cover rounded-full relative"
                            />
                        </div>
                        <h3 className="text-xl font-semibold">Michael Chen</h3>
                        <p className="text-blue-5bg-indigo-500 mb-2">CTO</p>
                        <p className="text-gray-600 text-sm">
                            Tech enthusiast dedicated to creating seamless digital shopping experiences.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="relative mb-4 inline-block">
                            <div className="w-full h-full bg-indigo-500 rounded-full absolute opacity-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000"
                                alt="Emily Rodriguez"
                                className="w-48 h-48 object-cover rounded-full relative"
                            />
                        </div>
                        <h3 className="text-xl font-semibold">Emily Rodriguez</h3>
                        <p className="text-blue-5bg-indigo-500 mb-2">Product Manager</p>
                        <p className="text-gray-600 text-sm">
                            Curator with an eye for quality and trending products that customers love.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="relative mb-4 inline-block">
                            <div className="w-full h-full bg-indigo-500 rounded-full absolute opacity-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000"
                                alt="David Williams"
                                className="w-48 h-48 object-cover rounded-full relative"
                            />
                        </div>
                        <h3 className="text-xl font-semibold">David Williams</h3>
                        <p className="text-blue-5bg-indigo-500 mb-2">Customer Success</p>
                        <p className="text-gray-600 text-sm">
                            Committed to ensuring every customer has an exceptional shopping experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Team