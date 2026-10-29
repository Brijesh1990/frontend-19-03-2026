import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSidebarApp() {
return (
<>
<div
id="sidebarOverlay"
className="fixed inset-0 z-30 hidden bg-slate-950/40 lg:hidden"
/>
<aside
id="sidebar"
className="sidebar-scroll fixed inset-y-0 left-0 z-40 flex w-72 -translate-x-full flex-col overflow-y-auto border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0"
>
<div className="flex h-[76px] items-center justify-between border-b border-slate-100 px-6">
<Link
to="/admin-login/dashboard"
className="text-3xl font-black tracking-tight text-amber-500"
>
click<span className="text-emerald-600">IT</span>
</Link>
<button
id="closeSidebar"
className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
aria-label="Close sidebar"
>
✕
</button>
</div>
<div className="px-4 pt-6">
<p className="px-3 pb-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
Workspace
</p>
<nav className="space-y-1">
<a
href="#overview"
data-page="Overview"
className="nav-link active flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 hover:bg-slate-50"
>
<span className="nav-icon grid h-9 w-9 place-items-center rounded-lg bg-slate-100">
▦
</span>
Overview
</a>
<Link to="/admin-login/managecustomers"
data-page="Orders"
className="nav-link flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 hover:bg-slate-50"
>
<span className="nav-icon grid h-9 w-9 place-items-center rounded-lg bg-slate-100">
🧾
</span>
Manage customers
<span className="ml-auto rounded-full bg-rose-100 px-2 py-0.5 text-xs font-bold text-rose-700">
12
</span>
</Link> 
<Link to="/admin-login/addcategory"
data-page="Products"
className="nav-link flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 hover:bg-slate-50"
>
<span className="nav-icon grid h-9 w-9 place-items-center rounded-lg bg-slate-100">
📦
</span>
Add Category
</Link>
<Link to="/admin-login/addproducts"
data-page="Categories"
className="nav-link flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 hover:bg-slate-50"
>
<span className="nav-icon grid h-9 w-9 place-items-center rounded-lg bg-slate-100">
▤
</span>
Add Products
</Link>
</nav>
<p className="px-3 pb-3 pt-8 text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
Manage
</p>
<nav className="space-y-1">
<Link to="/admin-login/manage-orders"
data-page="Delivery"
className="nav-link flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 hover:bg-slate-50"
>
<span className="nav-icon grid h-9 w-9 place-items-center rounded-lg bg-slate-100">
🛵
</span>
Manage Orders
</Link>
<Link to="/admin-login/manage-feedback"
data-page="Reports"
className="nav-link flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 hover:bg-slate-50"
>
<span className="nav-icon grid h-9 w-9 place-items-center rounded-lg bg-slate-100">
▥
</span>
Manage Feedback
</Link>

</nav>
</div>
<div className="mt-auto p-4">
<div className="rounded-2xl bg-emerald-50 p-4">


<Link to="mailto:support@clickit.com"
className="mt-3 inline-block text-xs font-bold text-emerald-700 hover:underline"
>
Contact support →
</Link>
</div>
<button
id="logoutButton"
className="mt-4 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-500 hover:bg-rose-50 hover:text-rose-700"
>
<span className="text-lg">↪</span> Log out
</button>
</div>
</aside>
</>

)
}
