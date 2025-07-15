const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-teal-400 mb-4">alx</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging
              options. From cozy apartments and trendy lofts to luxurious retreats in exotic locales, ALX connects you
              with the perfect place to stay for any trip.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Apartments in Dubai
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hotels in New York
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Villa in Spain
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Unique in Indonesia
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Brand
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cancel booking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Refunds Process
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>Some hotel requires you to cancel more than 24 hours before check-in. Details here.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Partners
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
