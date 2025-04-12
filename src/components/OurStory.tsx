function OurStory() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <h2 className="section-title mb-6">Our Story</h2>
                    <p className="text-gray-600 mb-4">
                        Founded in 2015, ShopWave was born from a simple vision: to create an online shopping experience that combines quality products, fair prices, and exceptional customer service.
                    </p>
                    <p className="text-gray-600 mb-4">
                        What started as a small operation has grown into a trusted e-commerce platform serving thousands of customers worldwide. Our commitment to quality and customer satisfaction remains at the heart of everything we do.
                    </p>
                    <p className="text-gray-600">
                        Today, ShopWave continues to grow and evolve, but our mission remains the same: to provide our customers with the best possible shopping experience, from browsing to delivery.
                    </p>
                </div>

                <div className="md:w-1/2">
                    <div className="relative">
                        <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-500 rounded-full absolute -left-4 -top-4 opacity-20"></div>
                        <img
                            src="https://images.unsplash.com/photo-1556742208-999815fca738?q=80&w=1000"
                            alt="Our Story"
                            className="rounded-lg shadow-xl relative z-10 w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStory
