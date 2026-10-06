import React, { useState, useEffect } from 'react';
import { FaBolt, FaClock, FaFire, FaShoppingBag, FaStar } from 'react-icons/fa';

export default function DealsSection({ onAddToCart, onQuickView, products }) {
  // 12 hour countdown state
  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 43,
    seconds: 28,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dealProducts = products.filter(p => p.id === 2 || p.id === 3 || p.id === 5);

  return (
    <section id="deals" className="py-20 relative bg-slate-950 border-y border-slate-800/80">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Countdown Box */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12" data-aos="fade-up">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <FaBolt className="text-amber-400" /> Limited Time Event
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Flash Deals & <span className="text-gradient-amber">Limited Drops</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-lg">
              Special promotional prices available only for the current release window. Once sold out, prices return to standard retail.
            </p>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-3 p-3 rounded-2xl glass-card border border-amber-500/20 shadow-xl self-start lg:self-auto">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs px-2">
              <FaClock className="text-base animate-spin text-amber-400" style={{ animationDuration: '6s' }} />
              <span className="hidden sm:inline">DEAL ENDS IN:</span>
            </div>
            <div className="flex items-center gap-1.5 text-center">
              <div className="bg-slate-900 px-3 py-2 rounded-xl border border-slate-800 min-w-[50px]">
                <span className="text-xl sm:text-2xl font-black text-white font-mono">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="block text-[9px] text-slate-500 uppercase font-semibold">Hours</span>
              </div>
              <span className="text-slate-500 font-bold">:</span>
              <div className="bg-slate-900 px-3 py-2 rounded-xl border border-slate-800 min-w-[50px]">
                <span className="text-xl sm:text-2xl font-black text-white font-mono">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="block text-[9px] text-slate-500 uppercase font-semibold">Mins</span>
              </div>
              <span className="text-slate-500 font-bold">:</span>
              <div className="bg-slate-900 px-3 py-2 rounded-xl border border-slate-800 min-w-[50px]">
                <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="block text-[9px] text-slate-500 uppercase font-semibold">Secs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Deals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {dealProducts.map((item, index) => {
            const stockPercent = item.id === 2 ? 80 : item.id === 3 ? 65 : 88;
            return (
              <div
                key={item.id}
                className="rounded-3xl glass-card overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-300 group flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-64 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-rose-600 text-white font-black text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <FaFire className="text-xs" /> {item.discount}
                    </div>
                    <button
                      onClick={() => onQuickView(item)}
                      className="absolute bottom-3 right-3 bg-slate-950/80 hover:bg-slate-900 text-white text-xs px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      Quick View
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                        {item.categoryName}
                      </span>
                      <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                        <FaStar /> {item.rating}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition line-clamp-1">
                      {item.name}
                    </h3>

                    {/* Pricing */}
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl font-black text-white">${item.price}</span>
                      <span className="text-sm text-slate-500 line-through">${item.originalPrice}</span>
                      <span className="text-xs font-bold text-emerald-400">Save ${item.originalPrice - item.price}</span>
                    </div>

                    {/* Stock Progress Bar */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Claimed: <strong className="text-white">{stockPercent}%</strong></span>
                        <span className="text-amber-400 font-semibold">Only {item.stockLeft} left</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full"
                          style={{ width: `${stockPercent}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onAddToCart(item)}
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-indigo-600 text-slate-200 hover:text-white border border-slate-700 hover:border-indigo-500 font-bold text-xs flex items-center justify-center gap-2 transition duration-200 shadow-md group-hover:shadow-indigo-500/20"
                  >
                    <FaShoppingBag className="text-xs" />
                    <span>Claim Deal Now</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
