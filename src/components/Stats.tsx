import { Users, ShoppingBag, Award, MessageSquare } from "lucide-react"

function Stats() {
  return (
    <div><div className="bg-gradient-to-r from-indigo-500/90 to-blue-500 bg-blue-500/90 py-16 text-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold mb-2">20K+</div>
          <div className="text-white/80 flex items-center justify-center">
            <Users size={18} className="mr-2" />
            Happy Customers
          </div>
        </div>
        
        <div>
          <div className="text-4xl font-bold mb-2">500+</div>
          <div className="text-white/80 flex items-center justify-center">
            <ShoppingBag size={18} className="mr-2" />
            Products
          </div>
        </div>
        
        <div>
          <div className="text-4xl font-bold mb-2">15</div>
          <div className="text-white/80 flex items-center justify-center">
            <Award size={18} className="mr-2" />
            Industry Awards
          </div>
        </div>
        
        <div>
          <div className="text-4xl font-bold mb-2">99%</div>
          <div className="text-white/80 flex items-center justify-center">
            <MessageSquare size={18} className="mr-2" />
            Positive Reviews
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Stats