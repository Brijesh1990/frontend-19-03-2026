import React from 'react'

export default function ContainerApp() {
return (

<>
<div className="min-h-screen bg-slate-950 px-6 py-16">
  {/* Header */}
  <div className="mx-auto mb-14 max-w-3xl text-center">
    <span className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400">
      React + Tailwind CSS
    </span>

    <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
      Build Beautiful Interfaces
      <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        Faster with Tailwind CSS
      </span>
    </h1>

    <p className="text-lg leading-8 text-slate-400">
      Create modern, responsive, and eye-catching user interfaces directly
      inside your React components using utility-first CSS.
    </p>
  </div>

  {/* Cards */}
  <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">

    {/* Card 1 */}
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/10">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-3xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
        ⚡
      </div>

      <h2 className="mb-4 text-2xl font-bold text-white">
        Lightning Fast Development
      </h2>

      <p className="mb-6 leading-7 text-slate-400">
        Tailwind CSS allows you to build complete interfaces without writing
        hundreds of custom CSS classes. Use utility classes to design your
        components quickly and efficiently.
      </p>

      <a
        href="#"
        className="font-semibold text-cyan-400 transition hover:text-cyan-300"
      >
        Learn more →
      </a>
    </div>

    {/* Card 2 */}
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-purple-400/40 hover:bg-purple-400/10">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-400/10 text-3xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
        🎨
      </div>

      <h2 className="mb-4 text-2xl font-bold text-white">
        Beautiful Custom Designs
      </h2>

      <p className="mb-6 leading-7 text-slate-400">
        Create stunning layouts using colors, spacing, typography, shadows,
        gradients, animations, borders, and responsive utilities without
        leaving your JSX.
      </p>

      <a
        href="#"
        className="font-semibold text-purple-400 transition hover:text-purple-300"
      >
        Explore design →
      </a>
    </div>

    {/* Card 3 */}
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-emerald-400/10">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-3xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
        📱
      </div>

      <h2 className="mb-4 text-2xl font-bold text-white">
        Fully Responsive
      </h2>

      <p className="mb-6 leading-7 text-slate-400">
        Design interfaces that look great on mobile phones, tablets, laptops,
        and large desktop screens with Tailwind's responsive breakpoint
        utilities.
      </p>

      <a
        href="#"
        className="font-semibold text-emerald-400 transition hover:text-emerald-300"
      >
        Build responsive UI →
      </a>
    </div>

    {/* Card 4 */}
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-orange-400/40 hover:bg-orange-400/10">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-400/10 text-3xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
        ✨
      </div>

      <h2 className="mb-4 text-2xl font-bold text-white">
        Powerful Animations
      </h2>

      <p className="mb-6 leading-7 text-slate-400">
        Add movement and interaction to your website using hover effects,
        transitions, transforms, animations, and custom utility classes.
      </p>

      <a
        href="#"
        className="font-semibold text-orange-400 transition hover:text-orange-300"
      >
        Add animations →
      </a>
    </div>

    {/* Card 5 */}
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-pink-400/40 hover:bg-pink-400/10">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-400/10 text-3xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
        🧩
      </div>

      <h2 className="mb-4 text-2xl font-bold text-white">
        Reusable Components
      </h2>

      <p className="mb-6 leading-7 text-slate-400">
        Combine React components with Tailwind utilities to create reusable
        buttons, cards, navigation bars, forms, modals, dashboards, and more.
      </p>

      <a
        href="#"
        className="font-semibold text-pink-400 transition hover:text-pink-300"
      >
        Create components →
      </a>
    </div>

    {/* Card 6 */}
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-blue-400/10">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/10 text-3xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
        🚀
      </div>

      <h2 className="mb-4 text-2xl font-bold text-white">
        Production Ready
      </h2>

      <p className="mb-6 leading-7 text-slate-400">
        Build modern websites and applications with a consistent design
        system. Tailwind makes it easy to maintain styles as your project
        grows.
      </p>

      <a
        href="#"
        className="font-semibold text-blue-400 transition hover:text-blue-300"
      >
        Start building →
      </a>
    </div>

  </div>

  {/* Bottom CTA */}
  <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-10 text-center">
    <h2 className="mb-4 text-3xl font-bold text-white">
      Ready to build something amazing?
    </h2>

    <p className="mx-auto mb-7 max-w-2xl leading-7 text-slate-400">
      Start combining React's component architecture with Tailwind CSS's
      utility-first workflow and create interfaces that are fast, responsive,
      maintainable, and visually impressive.
    </p>

    <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:from-cyan-400 hover:to-blue-500">
      Start Learning →
    </button>
  </div>
</div>
</>
)
}
