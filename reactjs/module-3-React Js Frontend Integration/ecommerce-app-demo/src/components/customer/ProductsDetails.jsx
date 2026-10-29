import React from 'react'
import HeaderApp from '../../HeaderApp'
import FooterApp from '../../FooterApp'
import product23 from '../../assets/customer/images/product17.avif'
export default function ProductsDetails() {
  return (
  <>
  <HeaderApp />
  {/* clickIt content here  */}
  <section id="clickIt-content" className="bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">
        Home / Dairy &amp; Bakery / Milk
      </p>
      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT: Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="bg-white rounded-2xl shadow p-6 flex justify-center">
            <img
              src={product23}
              alt="Amul Toned Milk"
              className="h-80 object-contain"
            />
          </div>
          {/* Thumbnails */}
          <div className="flex gap-4 justify-center">
            <img
              src={product23}
              className="w-20 h-20 object-contain bg-white rounded-xl p-2 border cursor-pointer"
            />
            <img
              src={product23}
              className="w-20 h-20 object-contain bg-white rounded-xl p-2 border cursor-pointer"
            />
            <img
              src={product23}
              className="w-20 h-20 object-contain bg-white rounded-xl p-2 border cursor-pointer"
            />
          </div>
        </div>
        {/* RIGHT: Product Info */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold text-gray-900">Amul Toned Milk</h1>
          <p className="text-gray-600">
            Fresh &amp; pure toned milk from Amul, ideal for daily consumption.
          </p>
          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="bg-green-600 text-white text-sm px-2 py-1 rounded-lg">
              ★ 4.5
            </span>
            <span className="text-sm text-gray-500">(2,340 ratings)</span>
          </div>
          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-gray-900">₹54</span>
            <span className="text-gray-500 line-through">₹58</span>
            <span className="text-green-600 font-medium">7% OFF</span>
          </div>
          <p className="text-sm text-gray-500">Inclusive of all taxes</p>
          {/* Quantity */}
          <div>
            <p className="font-medium mb-2">Quantity</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 border rounded-xl">500 ml</button>
              <button className="px-4 py-2 border rounded-xl bg-green-100 text-green-700">
                1 L
              </button>
            </div>
          </div>
          {/* Delivery */}
          <div className="bg-green-50 p-4 rounded-xl">
            <p className="font-medium text-green-700">
              🚀 Delivery in 10 minutes
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Freshly sourced from nearby store
            </p>
          </div>
          {/* Add to Cart */}
          <a href="cart.html">
            <button className="w-full bg-green-600 text-white py-4 rounded-2xl text-lg font-semibold hover:bg-green-700 transition">
              Add to Cart
            </button>
          </a>
          {/* Highlights */}
          <div className="bg-white rounded-2xl shadow p-6 space-y-2">
            <h2 className="text-xl font-semibold">Highlights</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Pasteurised &amp; homogenised milk</li>
              <li>Rich source of calcium &amp; protein</li>
              <li>No preservatives added</li>
              <li>Ideal for tea, coffee &amp; daily use</li>
            </ul>
          </div>
        </div>
      </div>
      {/* PRODUCT DETAILS */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Description */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-3">Product Description</h2>
          <p className="text-gray-600 leading-relaxed">
            Amul Toned Milk is processed and packed hygienically to ensure
            freshness and quality. It contains balanced fat and nutrients
            suitable for everyday consumption by the whole family.
          </p>
        </div>
        {/* Nutrition */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-3">
            Nutritional Information (per 100ml)
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>Energy: 58 kcal</li>
            <li>Protein: 3.2 g</li>
            <li>Fat: 3 g</li>
            <li>Carbohydrates: 4.8 g</li>
            <li>Calcium: 120 mg</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <FooterApp />
</>

  )
}
