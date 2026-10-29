import React from 'react'
import HeaderApp from '../../HeaderApp'
import FooterApp from '../../FooterApp'
export default function PageNotFound() {
  return (
   <>
   <HeaderApp />
  {/* clickIt content here  */}
  <section
    id="clickIt-content"
    className="min-h-screen bg-gray-50 flex items-center justify-center"
  >
    <div className="max-w-4xl mx-auto px-4 text-center">
      {/* GIF IMAGE */}
      <div className="flex justify-center">
        <img
          src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
          alt="404 Page Not Found"
          className="w-72 md:w-96"
        />
      </div>
      {/* TEXT */}
      <h1 className="mt-8 text-5xl md:text-6xl font-bold text-gray-900">404</h1>
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        The page you’re looking for doesn’t exist or has been moved. Don’t
        worry, let’s get you back on track.
      </p>
      {/* BUTTON */}
      <div className="mt-8">
        <a
          href="index.html"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
        >
          Go to Home
        </a>
      </div>
    </div>
  </section>
  <FooterApp/>
</>

  )
}
