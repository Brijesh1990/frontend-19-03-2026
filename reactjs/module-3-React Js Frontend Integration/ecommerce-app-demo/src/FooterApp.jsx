import React from 'react'
export default function FooterApp() {
  return (
    <>
  {/* clickIt footer here */}
  <footer className="bg-gray-50 border-t border-gray-200 relative">
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Top Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm text-gray-700">
        {/* Logo & Description */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold text-green-600">clickIT</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            clickIT delivers groceries and essentials in minutes. Fast,
            reliable, and affordable.
          </p>
        </div>
        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="about.html" className="hover:text-green-600">
                About Us
              </a>
            </li>
            <li>
              <a href="career.html" className="hover:text-green-600">
                Careers
              </a>
            </li>
            <li>
              <a href="blogs.html" className="hover:text-green-600">
                Blog
              </a>
            </li>
            <li>
              <a href="faq.html" className="hover:text-green-600">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        {/* Categories */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
          <ul className="space-y-2">
            <li>
              <a href="products.html" className="hover:text-green-600">
                Fruits &amp; Vegetables
              </a>
            </li>
            <li>
              <a href="products.html" className="hover:text-green-600">
                Dairy &amp; Bakery
              </a>
            </li>
            <li>
              <a href="products.html" className="hover:text-green-600">
                Snacks &amp; Beverages
              </a>
            </li>
            <li>
              <a href="404.html" className="hover:text-green-600">
                Personal Care
              </a>
            </li>
          </ul>
        </div>
        {/* Policies */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Policies</h3>
          <ul className="space-y-2">
            <li>
              <a href="privacy.html" className="hover:text-green-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="terms.html" className="hover:text-green-600">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="404.html" className="hover:text-green-600">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="404.html" className="hover:text-green-600">
                Security
              </a>
            </li>
          </ul>
        </div>
        {/* App & Social */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Connect With Us</h3>
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-500 hover:text-green-600">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          {/* App Buttons */}
          <div className="space-y-2">
            <button className="w-full bg-black text-white py-2 rounded-lg text-xs">
              Download on App Store
            </button>
            <button className="w-full bg-black text-white py-2 rounded-lg text-xs">
              Get it on Google Play
            </button>
          </div>
        </div>
        {/* Google Translate */}
        <div className="col-span-2 md:col-span-1 mt-6 md:mt-0">
          <h3 className="font-semibold text-gray-900 mb-3">Google Translate</h3>
          <div id="google_translate_element" />
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 mt-10 pt-6">
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">
          <p>© 2025 clickIT. All rights reserved.</p>
          <p>Made with ❤️ in India</p>
        </div>
      </div>
    </div>
    {/* Fixed WhatsApp Button */}
    <a
      href="https://wa.me/+919998003879"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-bounce z-50 hover:bg-green-700"
    >
      <i className="bi bi-whatsapp text-xl text-white" />
    </a>
  </footer>
</>

  )
}
