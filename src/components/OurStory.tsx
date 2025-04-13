import { useEffect, useRef } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

function OurStory() {
    const imgRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("scale-100", "opacity-100")
                        entry.target.classList.remove("scale-95", "opacity-0")
                    }
                })
            },
            { threshold: 0.1 },
        )

        if (imgRef.current) {
            observer.observe(imgRef.current)
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current)
            }
        }
    }, [])

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-70"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-amber-100 to-amber-50 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-70"></div>

            <div className="container relative mx-auto px-4">
                <div className="flex flex-col lg:flex-row  gap-16">
                    <div className="lg:w-1/2 order-1 lg:order-1">
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-2">
                                Our Journey
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                The <span className="text-purple-600">ShopWave</span> Story
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full"></div>
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p className="text-lg">
                                    Founded in 2015, ShopWave was born from a simple vision: to create an online shopping experience that
                                    combines quality products, fair prices, and exceptional customer service.
                                </p>

                                <p>
                                    What started as a small operation has grown into a trusted e-commerce platform serving thousands of
                                    customers worldwide. Our commitment to quality and customer satisfaction remains at the heart of
                                    everything we do.
                                </p>

                                <p>
                                    Today, ShopWave continues to grow and evolve, but our mission remains the same: to provide our
                                    customers with the best possible shopping experience, from browsing to delivery.
                                </p>
                            </div>
                            <div className="pt-4 flex flex-wrap gap-4">
                                <Button className="bg-purple-600 cursor-pointer text-white hover:bg-purple-700">
                                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>

                        </div>
                    </div>
                    <div className="lg:w-1/2 order-2 lg:order-2">
                        <div className="relative">
                            <div className="absolute -left-6 -top-6 w-72 h-72 border-2 border-purple-200 rounded-lg rotate-3"></div>
                            <div className="absolute -right-6 -bottom-6 w-72 h-72 border-2 border-amber-200 rounded-lg -rotate-3"></div>
                            <div
                                ref={imgRef}
                                className="relative z-10 rounded-lg overflow-hidden shadow-2xl transition-all duration-700 ease-out scale-95 opacity-0"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1556742208-999815fca738?q=80&w=1000"
                                    alt="Our Story"
                                    className="w-full h-[80vh] object-cover rounded-lg hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                                <div className="absolute top-6 right-6  bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                    <span className="font-bold text-purple-800">Since 2015</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurStory
