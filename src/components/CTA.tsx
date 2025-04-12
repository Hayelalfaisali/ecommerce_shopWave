import { Link } from 'react-router-dom'

function CTA() {
    return (
        <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Explore our wide range of quality products and discover why thousands of customers trust ShopWave for their shopping needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/shop" className="btn-primary">
                    Browse Products
                </Link>
                <Link to="/contact" className="btn-secondary">
                    Contact Us
                </Link>
            </div>
        </div>
    )
}

export default CTA
