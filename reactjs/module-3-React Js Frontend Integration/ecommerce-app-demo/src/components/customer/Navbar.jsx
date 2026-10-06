import React, { useState, useEffect } from 'react';
import { 
  FaShoppingBag, 
  FaHeart, 
  FaSearch, 
  FaBars, 
  FaTimes, 
  FaBolt, 
  FaSparkles,
  FaShieldAlt,
  FaTruck
} from 'react-icons/fa';

export default function Navbar({ 
  cartCount, 
  wishlistCount, 
  openCart, 
  openWishlist, 
  searchTerm, 
  setSearchTerm,
  products,
  onSelectProduct
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const searchResults = searchTerm.trim() === '' 
    ? [] 
    : products.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 4);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Deals', href: '#deals', highlight: true },
    { label: 'Categories', href: '#categories' },
    { label: 'Shop', href: '#products' },
    { label: 'Spotlight', href: '#spotlight' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Ticker Bar */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-indigo-100 text-xs py-2 px-4 border-b border-indigo-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 mx-auto sm:mx-0 font-medium tracking-wide">
            <span className="flex items-center gap-1 bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded-full text-[10px] animate-pulse">
              <FaBolt className="text-[9px]" /> LIMITED DROP
            </span>
            <span>Use coupon <span className="text-amber-300 font-bold tracking-wider">LUMINA20</span> for 20% Instant Discount!</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] text-indigo-200/80">
            <span className="flex items-center gap-1.5"><FaTruck className="text-indigo-400" /> Free Global Shipping over $100</span>
            <span className="flex items-center gap-1.5"><FaShieldAlt className="text-emerald-400" /> 2-Year Official Warranty</span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 shadow-2xl py-3.5' : 'bg-slate-950/60 backdrop-blur-md border-b border-white/5 py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
              <span className="text-xl font-black tracking-tighter">L</span>
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
                LUMINA
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              </span>
              <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">
                Luxe & Tech Gear
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  link.highlight 
                    ? 'text-amber-400 hover:text-amber-300 hover:bg-amber-400/10' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop Search Input with Dropdown */}
            <div className="relative hidden md:block w-52 lg:w-64">
              <div className="relative flex items-center">
                <FaSearch className="absolute left-3.5 text-slate-400 text-xs pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search gear, watches, audio..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 text-xs bg-slate-900/90 border border-slate-700/80 rounded-full text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 text-slate-400 hover:text-white text-xs"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>

              {/* Instant Search Dropdown */}
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900/95 border border-slate-700 rounded-2xl p-2 shadow-2xl backdrop-blur-xl z-50">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 py-1.5">Matching Products</div>
                  {searchResults.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelectProduct(item);
                        setSearchTerm('');
                      }}
                      className="w-full flex items-center gap-3 p-2 hover:bg-slate-800 rounded-xl transition text-left"
                    >
                      <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded-lg" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-white truncate">{item.name}</div>
                        <div className="text-[11px] text-indigo-400 font-bold">${item.price}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2.5 rounded-full bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              aria-label="Toggle search"
            >
              <FaSearch className="text-sm" />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={openWishlist}
              className="relative p-2.5 rounded-full bg-slate-900/90 text-slate-300 hover:text-rose-400 border border-slate-800/80 hover:border-rose-500/50 transition duration-200 shadow-md group"
              aria-label="View Wishlist"
            >
              <FaHeart className="text-base group-hover:scale-110 transition-transform" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-slate-950 animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 pl-3 pr-3.5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium text-xs hover:from-indigo-500 hover:to-violet-500 transition duration-200 shadow-lg shadow-indigo-600/30 group"
              aria-label="View Shopping Cart"
            >
              <FaShoppingBag className="text-sm group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline font-semibold">Cart</span>
              <span className="w-5 h-5 rounded-full bg-white text-indigo-900 text-[11px] font-extrabold flex items-center justify-center shadow-inner">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <FaTimes className="text-base" /> : <FaBars className="text-base" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="md:hidden px-4 pt-3 pb-2 border-t border-slate-800/60 mt-3 animate-fadeIn">
            <div className="relative">
              <FaSearch className="absolute left-3.5 top-3 text-slate-400 text-xs" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-sm bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        )}

        {/* Mobile Slide-Down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-2xl px-6 py-5 mt-3 space-y-2 animate-fadeIn shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2.5 px-4 rounded-xl text-base font-medium transition ${
                  link.highlight 
                    ? 'text-amber-400 bg-amber-400/10' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
