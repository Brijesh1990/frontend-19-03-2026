import React, { useState } from 'react';
import { 
  FaShoppingBag, 
  FaHeart, 
  FaEye, 
  FaStar, 
  FaFilter, 
  FaSortAmountDown, 
  FaCheck,
  FaSearch 
} from 'react-icons/fa';

export default function ProductGrid({ 
  products, 
  onAddToCart, 
  onToggleWishlist, 
  onQuickView, 
  wishlistIds, 
  activeCategory, 
  setActiveCategory,
  searchTerm,
  setSearchTerm
}) {
  const [sortBy, setSortBy] = useState('featured');
  const [selectedColors, setSelectedColors] = useState({});

  const categories = [
    { id: 'all', name: 'All Drops' },
    { id: 'audio', name: 'Audio & Beats' },
    { id: 'wearables', name: 'Smart Wearables' },
    { id: 'fashion', name: 'Luxury Fashion' },
    { id: 'lifestyle', name: 'Lifestyle Gear' },
  ];

  const handleColorChange = (productId, color) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: color }));
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchSearch = searchTerm.trim() === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.categoryName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return a.id - b.id; // default featured
  });

  return (
    <section id="products" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10" data-aos="fade-up">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
              <FaShoppingBag /> Premium Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="text-gradient">Products</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Engineered with premium materials and acoustic fidelity. Every piece is backed by our 2-year warranty.
            </p>
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
              <FaSortAmountDown /> Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-900 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-700/80 focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              <option value="featured">Featured & Best Selling</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white border-transparent shadow-lg shadow-indigo-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Filter / Search status */}
        {searchTerm && (
          <div className="mb-6 flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <span>Showing results for &ldquo;<strong className="text-white">{searchTerm}</strong>&rdquo; ({sortedProducts.length} items found)</span>
            <button 
              onClick={() => setSearchTerm('')} 
              className="text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Products Grid */}
        {sortedProducts.length === 0 ? (
          <div className="py-20 text-center glass-panel rounded-3xl p-10 border border-slate-800">
            <FaSearch className="mx-auto text-4xl text-slate-600 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No products matched your selection</h3>
            <p className="text-slate-400 text-xs mb-6">Try resetting filters or searching with another keyword.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchTerm(''); }}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {sortedProducts.map((product, index) => {
              const isWishlisted = wishlistIds.includes(product.id);
              const activeColor = selectedColors[product.id] || product.colors[0];

              return (
                <div
                  key={product.id}
                  className="rounded-3xl glass-card overflow-hidden border border-slate-800/80 hover:border-slate-600/80 transition-all duration-300 group flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10"
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 100}
                >
                  {/* Image container */}
                  <div>
                    <div className="relative h-72 overflow-hidden bg-slate-900">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      />
                      
                      {/* Badge Top Left */}
                      {product.badge && (
                        <div className={`absolute top-3 left-3 ${product.badgeColor} text-white font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md`}>
                          {product.badge}
                        </div>
                      )}

                      {/* Wishlist Button Top Right */}
                      <button
                        onClick={() => onToggleWishlist(product)}
                        className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition duration-200 ${
                          isWishlisted 
                            ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30' 
                            : 'bg-slate-950/70 text-slate-300 hover:text-rose-400 hover:bg-slate-900'
                        }`}
                        aria-label="Wishlist"
                      >
                        <FaHeart className={`text-xs ${isWishlisted ? 'scale-110' : ''}`} />
                      </button>

                      {/* Quick View Button Hover Overlay */}
                      <button
                        onClick={() => onQuickView(product)}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[85%] py-2.5 rounded-xl bg-slate-950/90 hover:bg-slate-900 text-white text-xs font-bold backdrop-blur-md border border-white/10 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl"
                      >
                        <FaEye className="text-xs" />
                        <span>Quick Preview</span>
                      </button>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-3">
                      {/* Category & Rating */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="uppercase font-bold tracking-wider text-cyan-400 text-[11px]">
                          {product.categoryName}
                        </span>
                        <div className="flex items-center gap-1 text-amber-400 font-bold text-xs">
                          <FaStar className="text-[11px]" />
                          <span>{product.rating}</span>
                          <span className="text-slate-500 font-normal">({product.reviewsCount})</span>
                        </div>
                      </div>

                      {/* Product Name */}
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition line-clamp-1">
                        {product.name}
                      </h3>

                      {/* Color Swatches */}
                      <div className="flex items-center gap-1.5 py-0.5">
                        <span className="text-[10px] text-slate-400 font-medium mr-1">Colors:</span>
                        {product.colors.map((color, cIdx) => (
                          <button
                            key={cIdx}
                            onClick={() => handleColorChange(product.id, color)}
                            className={`w-4 h-4 rounded-full border transition-all ${
                              activeColor === color 
                                ? 'ring-2 ring-indigo-400 scale-110 border-white' 
                                : 'border-slate-700 hover:scale-105'
                            }`}
                            style={{ backgroundColor: color }}
                            aria-label={`Select color ${color}`}
                          />
                        ))}
                      </div>

                      {/* Price Section */}
                      <div className="flex items-baseline gap-2 pt-1">
                        <span className="text-xl font-black text-white">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-slate-500 line-through">${product.originalPrice}</span>
                        )}
                        <span className="text-[11px] font-bold text-emerald-400 ml-auto bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          {product.discount}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => onAddToCart({ ...product, selectedColor: activeColor })}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 active:scale-95 transition-all duration-200"
                    >
                      <FaShoppingBag className="text-xs" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
