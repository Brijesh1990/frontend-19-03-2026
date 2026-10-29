import React from 'react'
import HeaderApp from '../../HeaderApp'
import FooterApp from '../../FooterApp'
export default function OrdersApp() {
  return (
    <>
    <HeaderApp />
  {/* clickIt content here  */}
  <section
    id="clickIt-content"
    className="bg-gray-50 min-h-screen flex items-center justify-center"
  >
    <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-8">
      {/* Confirmation GIF */}
      <div className="flex justify-center">
        <img
          src="https://media.giphy.com/media/111ebonMs90YLu/giphy.gif"
          alt="Order Confirmed"
          className="w-64 md:w-80"
        />
      </div>
      {/* Confirmation Text */}
      <h1 className="text-4xl md:text-5xl font-bold text-green-600">
        Order Confirmed!
      </h1>
      <p className="text-gray-700 text-lg md:text-xl">
        Thank you for your purchase. Your order has been successfully placed and
        is being processed.
      </p>
      {/* Order Details */}
      <div className="bg-white rounded-2xl shadow p-6 text-left max-w-2xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Order Details</h2>
        <div className="flex justify-between border-b border-gray-200 pb-2">
          <span>Order Number:</span>
          <span className="font-medium">#CLKT123456</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 pb-2 pt-2">
          <span>Order Date:</span>
          <span className="font-medium">December 17, 2025</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 pb-2 pt-2">
          <span>Delivery Address:</span>
          <span className="font-medium">
            123, Tech Park, Bengaluru, Karnataka – 560103
          </span>
        </div>
        {/* Ordered Items */}
        <div className="pt-2">
          <h3 className="font-semibold text-gray-900 mb-2">Items Ordered</h3>
          {/* Item 1 */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-4">
              <img
                src="images/product1.avif"
                alt="Amul Milk"
                className="w-16 h-16 object-contain rounded-lg"
              />
              <div>
                <p className="font-medium">Amul Toned Milk - 1 L</p>
                <p className="text-gray-500 text-sm">Quantity: 1</p>
              </div>
            </div>
            <p className="font-medium">₹54</p>
          </div>
          {/* Item 2 */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-4">
              <img
                src="images/product2.avif"
                alt="Amul Gold Milk"
                className="w-16 h-16 object-contain rounded-lg"
              />
              <div>
                <p className="font-medium">Amul Gold Milk - 500 ml</p>
                <p className="text-gray-500 text-sm">Quantity: 2</p>
              </div>
            </div>
            <p className="font-medium">₹108</p>
          </div>
        </div>
        {/* Total */}
        <div className="flex justify-between border-t border-gray-200 pt-3 font-bold text-gray-900 text-lg">
          <span>Total Amount:</span>
          <span>₹162</span>
        </div>
      </div>
      {/* Print Invoice Button */}
      <button
        onclick="window.print()"
        className="mt-6 bg-green-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-green-700 transition"
      >
        Print Invoice
      </button>
    </div>
  </section>
  <FooterApp />
</>

  )
}
