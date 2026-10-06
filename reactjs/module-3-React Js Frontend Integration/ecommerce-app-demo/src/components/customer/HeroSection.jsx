import React from 'react';
import { 
  FaArrowRight, 
  FaBolt, 
  FaStar, 
  FaShieldAlt, 
  FaHeadphones, 
  FaShoppingBag, 
  FaPlay 
} from 'react-icons/fa';

export default function HeroSection({ onQuickAddToCart, featuredProduct }) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 lg:py-24">
      {/* Ambient Glowing Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none"></div>

      {/* Grid Overlay Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left" data-aos="fade-right" data-aos-duration="1000">
            
            {/* Super Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-500/10 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="text-cyan-400 font-bold uppercase tracking-wider text-[11px]">New Collection 2026</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 flex items-center gap-1">Spatial Tech & Luxury Essentials</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
              Elevate Your <br />
              <span className="text-gradient">Everyday Living</span> <br />
              With Precision.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Discover masterfully crafted audio gear, titanium wearables, and luxury minimalist accessories designed for high-performance modern life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#products"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 group"
              >
                <span>Explore Drops</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#deals"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-500 font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2.5 backdrop-blur-lg group"
              >
                <FaBolt className="text-amber-400 text-sm group-hover:scale-125 transition-transform" />
                <span>Flash Deals</span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">4.9<span className="text-amber-400 text-xl font-bold">★</span></div>
                <div className="text-xs text-slate-400 mt-0.5">30k+ Reviews</div>
              </div>
              <div className="text-center lg:text-left border-x border-slate-800 px-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">50k+</div>
                <div className="text-xs text-slate-400 mt-0.5">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">99.8%</div>
                <div className="text-xs text-slate-400 mt-0.5">On-Time Dispatch</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Product Card */}
          <div className="lg:col-span-5 relative" data-aos="fade-left" data-aos-duration="1000">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-cyan-500/30 rounded-3xl blur-2xl transform scale-95 animate-pulse-glow"></div>

              {/* Main Visual Glass Card */}
              <div className="relative rounded-3xl overflow-hidden glass-panel p-4 sm:p-6 shadow-2xl border border-white/10 group">
                
                {/* Image Container with Badge */}
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-900/80">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80"
                    alt="AURA Neo Spatial Wireless Headphones"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Flagship Drop</span>
                  </div>

                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-black text-xs px-3 py-1.5 rounded-full shadow-lg">
                    SAVE $100
                  </div>
                </div>

                {/* Details Footer */}
                <div className="pt-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Audio & Beats</span>
                      <h3 className="text-xl font-bold text-white">AURA Neo Spatial Pro</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-white">$299</div>
                      <div className="text-xs text-slate-400 line-through">$399</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400">
                    Beryllium drivers, 98% active noise cancellation, and 60h studio battery life.
                  </p>

                  <button
                    onClick={() => onQuickAddToCart(featuredProduct || {
                      id: 1,
                      name: "AURA Neo Spatial Wireless Headphones",
                      price: 299,
                      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
                      categoryName: "Audio & Beats"
                    })}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 active:scale-98 transition duration-200"
                  >
                    <FaShoppingBag className="text-xs" />
                    <span>Quick Add to Cart • $299</span>
                  </button>
                </div>
              </div>

              {/* Floating Mini Pill Bottom Left */}
              <div 
                className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-card shadow-2xl border border-white/10 animate-float-slow"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-lg border border-cyan-500/30">
                  <FaHeadphones />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Spatial 360° Sound</div>
                  <div className="text-[10px] text-slate-400">Lossless 96kHz / 24-bit</div>
                </div>
              </div>

              {/* Floating Mini Pill Top Right */}
              <div 
                className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl glass-card shadow-2xl border border-white/10"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="flex text-amber-400 text-xs">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <span className="text-xs font-bold text-white">4.9 / 5</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
