import React from 'react'
import HeaderApp from '../../HeaderApp'
import FooterApp from '../../FooterApp'
export default function ContactApp() {
  return (
   <>
   <HeaderApp />
  {/* clickIt content here  */}
  <section id="clickIt-content" className="bg-gray-50">
    {/* HEADER */}
    <div className="max-w-7xl mx-auto px-4 py-14 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Contact Us
      </h1>
      <p className="mt-4 text-gray-600 text-lg">
        We’d love to hear from you. Reach out anytime.
      </p>
    </div>
    {/* CONTENT */}
    <div className="max-w-7xl mx-auto px-4 pb-16 grid lg:grid-cols-2 gap-10">
      {/* LEFT: CONTACT INFO */}
      <div className="space-y-8">
        {/* Address Card */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold text-gray-900">Our Office</h2>
          <p className="mt-3 text-gray-600">
            ClickIt Technologies Pvt. Ltd.
            <br />
            3rd Floor, Tech Park Tower,
            <br />
            Bengaluru, Karnataka – 560103
            <br />
            India
          </p>
          <div className="mt-4 space-y-2 text-gray-700">
            <p>
              <strong>Email:</strong> support@clickit.com
            </p>
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>Working Hours:</strong> Mon – Sat, 9 AM – 9 PM
            </p>
          </div>
        </div>
        {/* Google Map */}
        <div className="bg-white rounded-2xl shadow overflow-hidden h-[300px]">
          <iframe
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Bengaluru%20Karnataka&output=embed"
          ></iframe>
        </div>
      </div>
      {/* RIGHT: CONTACT FORM */}
      <div className="bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-gray-900">
          Send Us a Message
        </h2>
        <form className="mt-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required=""
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-green-500"
              placeholder="Enter your name"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required=""
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-green-500"
              placeholder="example@email.com"
            />
          </div>
          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-green-500"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select className="w-full p-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-green-500">
              <option>General Inquiry</option>
              <option>Order Issue</option>
              <option>Career</option>
              <option>Partnership</option>
            </select>
          </div>
          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              required=""
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-green-500"
              placeholder="Write your message..."
              defaultValue={""}
            />
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
  <FooterApp />
</>

  )
}
