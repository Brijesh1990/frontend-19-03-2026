import React from 'react'
import HeaderApp from '../../HeaderApp'
import FooterApp from '../../FooterApp'
export default function CartApp() {
  return (
  <>
  <HeaderApp />
  {/* clickIt content here  */}
  <section id="clickIt-content" className="bg-gray-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {/* Cart Item */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center gap-6">
            <img
              src="images/product1.avif"
              alt="Amul Toned Milk"
              className="w-32 h-32 object-contain rounded-xl"
            />
            <div className="flex-1 space-y-2">
              <h2 className="text-xl font-semibold text-gray-900">
                Amul Toned Milk - 1 L
              </h2>
              <p className="text-gray-600">
                Fresh &amp; pure milk, ideal for daily consumption
              </p>
              <p className="text-green-600 font-medium">
                Delivery in 10 minutes
              </p>
              {/* Quantity */}
              <div className="flex items-center gap-2 mt-2">
                <button className="px-3 py-1 bg-gray-200 rounded-lg">-</button>
                <span className="px-3 py-1 border rounded-lg">1</span>
                <button className="px-3 py-1 bg-gray-200 rounded-lg">+</button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-gray-900">₹54</p>
              <button className="mt-2 text-red-600 hover:underline text-sm">
                Remove
              </button>
            </div>
          </div>
          {/* Another Cart Item */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center gap-6">
            <img
              src="images/product2.avif"
              alt="Amul Gold Milk"
              className="w-32 h-32 object-contain rounded-xl"
            />
            <div className="flex-1 space-y-2">
              <h2 className="text-xl font-semibold text-gray-900">
                Amul Gold Milk - 500 ml
              </h2>
              <p className="text-gray-600">
                Premium milk for your family’s health
              </p>
              <p className="text-green-600 font-medium">
                Delivery in 10 minutes
              </p>
              {/* Quantity */}
              <div className="flex items-center gap-2 mt-2">
                <button className="px-3 py-1 bg-gray-200 rounded-lg">-</button>
                <span className="px-3 py-1 border rounded-lg">2</span>
                <button className="px-3 py-1 bg-gray-200 rounded-lg">+</button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-gray-900">₹108</p>
              <button className="mt-2 text-red-600 hover:underline text-sm">
                Remove
              </button>
            </div>
          </div>
        </div>
        {/* RIGHT: Summary & Checkout */}
        <div className="space-y-6">
          {/* Price Summary */}
          <div className="bg-white p-6 rounded-2xl shadow space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Price Details
            </h2>
            <div className="flex justify-between text-gray-600">
              <span>Subtotal (3 items)</span>
              <span>₹162</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Charges</span>
              <span>₹10</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between text-gray-900 font-bold text-xl">
              <span>Total Amount</span>
              <span>₹172</span>
            </div>
          </div>
          {/* Payment Method */}
          <div className="bg-white p-6 rounded-2xl shadow space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Payment Method
            </h2>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  className="form-radio text-green-600"
                />
                <span>Cash on Delivery (COD)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  className="form-radio text-green-600"
                />
                <span>Online Payment</span>
              </label>
            </div>
          </div>
          {/* Checkout Button */}
          <a href="orders.html">
            <button className="w-full bg-green-600 text-white py-4 rounded-2xl text-lg font-semibold hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
  <FooterApp />
</>

  )
}
