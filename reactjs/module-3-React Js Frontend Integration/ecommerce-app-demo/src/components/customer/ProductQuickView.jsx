import React, { useState } from 'react';
import { 
  FaTimes, 
  FaStar, 
  FaShoppingBag, 
  FaHeart, 
  FaCheck, 
  FaTruck, 
  FaShieldAlt, 
  FaMinus, 
  FaPlus 
} from 'react-icons/fa';

export default function ProductQuickView({ 
  product, 
  onClose, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted 
}) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.gallery ? product.gallery[0] : product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : null);
  const [quantity, setQuantity] = useState(1);

  const galleryImages = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  const handleAdd = () => {
    onAddToCart({
      ...product,
      quantity,
      selectedColor,
      image: activeImage
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark Blur Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl transition-opacity animate-fadeIn"
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-slate-900/95 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto animate-scaleUp"
        data-aos="zoom-in"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition"
          aria-label="Close Preview"
        >
          <FaTimes className="text-sm" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left: Gallery */}
          <div className="p-6 bg-slate-950/60 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
            {/* Main Preview */}
            <div className="relative h-72 sm:h-84 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 mb-4">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className={`absolute top-3 left-3 ${product.badgeColor || 'bg-indigo-600'} text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md`}>
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail Carousel */}
            {galleryImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition ${
                      activeImage === img ? 'border-cyan-400 scale-105 shadow-md' : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info & Purchase Controls */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-cyan-400">
                  {product.categoryName}
                </span>
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  <FaStar />
                  <span>{product.rating}</span>
                  <span className="text-slate-400 font-normal">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-black text-white leading-snug">
                {product.name}
              </h2>

              {/* Price & Savings */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-white">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-500 line-through">${product.originalPrice}</span>
                )}
                {product.discount && (
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                    Save {product.discount}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {product.description}
              </p>

              {/* Key Features Checklist */}
              {product.features && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Key Specifications:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <FaCheck className="text-cyan-400 text-[10px] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="pt-2">
                  <label className="text-xs font-bold text-slate-300 mb-2 block">
                    Choose Finish:
                  </label>
                  <div className="flex items-center gap-2.5">
                    {product.colors.map((c, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedColor(c)}
                        className={`w-7 h-7 rounded-full border-2 transition-transform ${
                          selectedColor === c ? 'ring-2 ring-indigo-400 scale-110 border-white' : 'border-slate-700'
                        }`}
                        style={{ backgroundColor: c }}
                        aria-label={`Color ${c}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="pt-1">
                <label className="text-xs font-bold text-slate-300 mb-2 block">
                  Quantity:
                </label>
                <div className="inline-flex items-center rounded-xl bg-slate-950 border border-slate-700 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-slate-400 hover:text-white transition"
                    aria-label="Decrease quantity"
                  >
                    <FaMinus className="text-[10px]" />
                  </button>
                  <span className="px-4 text-sm font-bold text-white min-w-[36px] text-center font-mono">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-slate-400 hover:text-white transition"
                    aria-label="Increase quantity"
                  >
                    <FaPlus className="text-[10px]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 space-y-3 border-t border-slate-800">
              <div className="flex gap-3">
                <button
                  onClick={handleAdd}
                  className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition duration-200"
                >
                  <FaShoppingBag className="text-sm" />
                  <span>Add To Cart • ${(product.price * quantity).toFixed(2)}</span>
                </button>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`p-3.5 rounded-xl border transition ${
                    isWishlisted 
                      ? 'bg-rose-500/20 text-rose-400 border-rose-500/50' 
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-rose-400'
                  }`}
                  aria-label="Toggle Wishlist"
                >
                  <FaHeart className="text-base" />
                </button>
              </div>

              {/* Guarantees */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span className="flex items-center gap-1.5"><FaTruck className="text-cyan-400" /> Free 2-Day Express</span>
                <span className="flex items-center gap-1.5"><FaShieldAlt className="text-emerald-400" /> 2-Year Full Coverage</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
