import React from 'react'

export default function AdminLoginApp() {
  return (
 <div className="min-h-screen text-slate-900">  
   <main className="grid min-h-screen lg:grid-cols-2">
  <section className="relative hidden overflow-hidden bg-emerald-700 p-12 text-white lg:flex lg:flex-col lg:justify-between">
    <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-lime-300/20" />
    <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-emerald-300/20" />
    <a href="#" className="relative z-10 text-3xl font-black tracking-tight">
      click<span className="text-lime-300">IT</span>
      <span className="ml-3 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-normal">
        ADMIN
      </span>
    </a>
    <div className="relative z-10 max-w-lg">
      <div className="mb-6 inline-flex rounded-2xl bg-white/15 p-4 text-4xl">
        🛒
      </div>
      <h1 className="text-5xl font-extrabold leading-tight">
        Everything your store needs, in one place.
      </h1>
      <p className="mt-5 max-w-md text-lg leading-8 text-emerald-50">
        Manage products, orders, customers and delivery operations from your
        ClickIT control center.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 text-sm">
        <span className="rounded-full border border-white/30 px-4 py-2">
          ✓ Live order overview
        </span>
        <span className="rounded-full border border-white/30 px-4 py-2">
          ✓ Inventory control
        </span>
        <span className="rounded-full border border-white/30 px-4 py-2">
          ✓ Sales insights
        </span>
      </div>
    </div>
    <p className="relative z-10 text-sm text-emerald-100">
      © 2026 ClickIT. Admin workspace.
    </p>
  </section>
  <section className="flex items-center justify-center px-5 py-10 sm:px-10">
    <div className="w-full max-w-md">
      <a
        href="#"
        className="mb-10 inline-block text-3xl font-black tracking-tight text-amber-500 lg:hidden"
      >
        click<span className="text-emerald-600">IT</span>
      </a>
      <div className="mb-8">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
          Admin portal
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Welcome back
        </h2>
        <p className="mt-3 text-slate-500">
          Sign in to manage your grocery store.
        </p>
      </div>
      <form
        id="loginForm"
        className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8"
      >
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            required=""
            autoComplete="username"
            placeholder="admin@clickit.com"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-slate-700"
            >
              Password
            </label>
            <button
              type="button"
              id="togglePassword"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900"
            >
              Show password
            </button>
          </div>
          <input
            id="password"
            type="password"
            required=""
            autoComplete="current-password"
            placeholder="Enter your password"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          />
        </div>
        <div className="flex items-center justify-between gap-3 text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 accent-emerald-600"
            />{" "}
            Remember me
          </label>
          <a
            href="#"
            id="forgotLink"
            className="font-semibold text-emerald-700 hover:underline"
          >
            Forgot password?
          </a>
        </div>
        <p
          id="message"
          className="hidden rounded-xl px-4 py-3 text-sm"
          role="status"
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-emerald-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
        >
          Sign in to dashboard <span className="ml-1">→</span>
        </button>
        <p className="text-center text-xs leading-5 text-slate-400">
          Demo UI only. Connect a secure backend for real authentication.
        </p>
      </form>
      <p className="mt-6 text-center text-sm text-slate-500">
        Need help?{" "}
        <a
          href="mailto:support@clickit.com"
          className="font-semibold text-emerald-700 hover:underline"
        >
          Contact support
        </a>
      </p>
    </div>
  </section>
</main>
</div>

  )
}
