import React from 'react';
import { FaArrowRight, FaLayerGroup } from 'react-icons/fa';
import { categoriesData } from './data/productsData';

export default function CategorySection({ onSelectCategory }) {
  return (
    <section id="categories" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <FaLayerGroup /> Curated Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Explore By <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Handcrafted capsules engineered with aerospace-grade durability and minimalist aesthetics.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((cat, index) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative rounded-3xl overflow-hidden h-96 cursor-pointer border border-slate-800 hover:border-indigo-500/50 transition-all duration-500 shadow-xl"
              data-aos="zoom-in-up"
              data-aos-delay={index * 120}
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              {/* Top Tag */}
              <div className="absolute top-4 left-4">
                <span className="bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-cyan-400 border border-cyan-500/30">
                  {cat.tag}
                </span>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-slate-400 font-medium">{cat.itemCount}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {cat.desc}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-indigo-400 group-hover:text-cyan-300 transition">
                  <span>Explore Capsule</span>
                  <FaArrowRight className="text-[10px] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
