import React from 'react'
import { Link } from 'react-router-dom'
export default function HeaderApp() {
  return (
    <>
  {/* clickIt header here */}
  <section id="clickIt-header" className="sticky top-0 z-10 bg-white shadow">
    {/* HEADER BAR */}
    <div className="flex items-center justify-between p-4 md:grid md:grid-cols-4">
      {/* LOGO */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="text-5xl font-extrabold animate-bounce">
          <Link to="/">
            <span className="text-yellow-500">Click</span>
            <span className="text-green-500">IT</span>
          </Link>
        </h1>
        {/* MOBILE TOGGLER */}
        <button
          id="menu-btn"
          className="md:hidden text-3xl"
          onclick="document.getElementById('mobile-menu').classList.toggle('hidden')"
        >
          ☰
        </button>
      </div>
      {/* DELIVERY (DESKTOP) */}
      <div className="hidden md:flex items-center">
        <button
          type="button"
          command="show-modal"
          commandfor="dialog2"
          className="text-xl font-medium"
        >
          Delivery in 8 minutes
        </button>
      </div>
      {/* SEARCH (DESKTOP) */}
      <div className="hidden md:flex">
        <input
          type="text"
          placeholder="Search products here..."
          className="border-2 border-gray-300 rounded-3xl w-full p-2"
        />
      </div>
      {/* LOGIN & CART (DESKTOP) */}
      <div className="hidden md:flex gap-4 items-center ms-20">
        <button
          type="button"
          command="show-modal"
          commandfor="dialog1"
          className="text-xl font-bold"
        >
          Login
        </button>
        <button
          type="button"
          className="p-3 bg-gray-400 rounded-2xl text-white font-bold"
        >
          <span className="bi bi-cart3" /> My Cart
        </button>
      </div>
    </div>
    {/* MOBILE MENU */}
    <div
      id="mobile-menu"
      className="hidden md:hidden border-t border-gray-200 p-4 space-y-4"
    >
      {/* DELIVERY */}
      <button
        type="button"
        command="show-modal"
        commandfor="dialog2"
        className="block text-lg font-medium"
      >
        Delivery in 8 minutes
      </button>
      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search products here..."
        className="border-2 border-gray-300 rounded-3xl w-full p-2"
      />
      {/* LOGIN */}
      <button
        type="button"
        command="show-modal"
        commandfor="dialog1"
        className="block text-lg font-bold"
      >
        Login
      </button>
      {/* CART */}
      <button
        type="button"
        className="w-full p-3 bg-gray-400 rounded-2xl text-white font-bold"
      >
        <span className="bi bi-cart3" /> My Cart
      </button>
    </div>
  </section>
</>

  )
}
