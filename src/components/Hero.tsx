import type React from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ShoppingBag, Info } from "lucide-react"

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-purple-200 to-violet-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-emerald-200 to-teal-400 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-200 to-orange-300 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="max-w-xl mx-auto text-center lg:text-left lg:mx-0 order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-slate-100 text-slate-800 border border-slate-200">
              <span className="mr-2 text-purple-600">✨</span> Discover our new collection
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
              Shop Smarter.{" "}
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600">
                Live Better.
              </span>
            </h1>
            <p className="max-w-md mx-auto mb-8 text-lg text-slate-600 lg:mx-0">
              Explore top-rated products designed to elevate your everyday experiences with premium quality and
              thoughtful design.
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                to="/shop"
                className="inline-flex items-center px-6 py-3.5 font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 shadow-lg hover:shadow-purple-300/30 group"
              >
                <ShoppingBag size={18} className="mr-2" />
                Start Shopping
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3.5 font-medium transition-all duration-300 border rounded-full text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-400"
              >
                <Info size={18} className="mr-2" />
                Learn More
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-10 pt-6 border-t border-slate-200">
              <p className="mb-3 text-sm font-medium text-slate-500">Trusted by thousands of customers</p>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[
                    "https://randomuser.me/api/portraits/men/32.jpg",
                    "https://randomuser.me/api/portraits/women/44.jpg",
                    "https://randomuser.me/api/portraits/men/65.jpg",
                    "https://randomuser.me/api/portraits/women/76.jpg",
                    "https://randomuser.me/api/portraits/men/15.jpg",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`User ${i + 1}`}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>

                <div className="ml-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <img
                        key={i}
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" 
                        alt="star"
                        className="w-4 h-4 mr-0.5"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-slate-600">4.9/5 from 2,000+ reviews</p>
                </div>

              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-violet-100 rounded-3xl transform rotate-3 scale-105 opacity-70"></div>
            <div className="relative p-2 overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000"
                alt="Modern Products"
                className="w-full h-auto rounded-2xl object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Floating badges */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                <span className="text-sm font-semibold text-purple-600">New Arrivals</span>
              </div>
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                <span className="text-sm font-semibold text-emerald-600">Free Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
