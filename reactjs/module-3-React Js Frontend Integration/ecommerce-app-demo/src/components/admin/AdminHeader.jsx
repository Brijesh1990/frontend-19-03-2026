import React from 'react'

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between gap-4 border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 xl:px-8">
  <div className="flex min-w-0 items-center gap-3">
    <button
      id="openSidebar"
      className="rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50 lg:hidden"
      aria-label="Open sidebar"
    >
      ☰
    </button>
    <div className="min-w-0">
      <p className="truncate text-xs font-semibold text-slate-400">
        Workspace / <span id="breadcrumb">Overview</span>
      </p>
      <h1 id="pageTitle" className="truncate text-lg font-extrabold sm:text-xl">
        Overview
      </h1>
    </div>
  </div>
  <div className="flex items-center gap-2 sm:gap-4">
    <label className="relative hidden md:block">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
        ⌕
      </span>
      <input
        id="globalSearch"
        type="search"
        placeholder="Search orders, products..."
        className="w-52 rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 xl:w-72"
      />
    </label>
    <button
      id="notificationButton"
      className="relative rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50"
      aria-label="Notifications"
    >
      ♧
      <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
    </button>
    <div className="flex items-center gap-2 border-l border-slate-200 pl-3 sm:pl-4">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 font-extrabold text-emerald-700">
        BK
      </div>
      <div className="hidden sm:block">
        <p className="text-sm font-bold">Brijesh Kumar</p>
        <p className="text-xs text-slate-400">Administrator</p>
      </div>
      <button
        id="profileMenu"
        className="hidden text-slate-400 sm:block"
        aria-label="Profile menu"
      >
        ⌄
      </button>
    </div>
  </div>
</header>

  )
}
