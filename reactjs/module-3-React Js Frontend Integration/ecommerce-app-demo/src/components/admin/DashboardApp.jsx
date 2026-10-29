import React from 'react'

export default function DashboardApp() {
  return (
   <main className="mx-auto max-w-[1600px] p-4 sm:p-6 xl:p-8">
  <section
    id="overview"
    className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
  >
    <div>
      <p className="text-sm font-medium text-slate-500">
        Tuesday, October 27, 2026
      </p>
      <h2 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
        Good afternoon, Brijesh 👋
      </h2>
      <p className="mt-2 text-sm text-slate-500">
        Here’s what’s happening with your store today.
      </p>
    </div>
    <div className="flex gap-2">
      <button
        id="exportButton"
        className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50"
      >
        ↓ Export
      </button>
      <button
        id="addProductButton"
        className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700"
      >
        ＋ Add product
      </button>
    </div>
  </section>
  <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-xl">
          ₹
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
          ↑ 12.8%
        </span>
      </div>
      <p className="mt-5 text-sm font-medium text-slate-500">Total revenue</p>
      <p className="mt-1 text-2xl font-extrabold">₹1,84,560</p>
      <p className="mt-2 text-xs text-slate-400">Compared with last month</p>
    </article>
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-xl">
          🧾
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
          ↑ 8.2%
        </span>
      </div>
      <p className="mt-5 text-sm font-medium text-slate-500">Total orders</p>
      <p className="mt-1 text-2xl font-extrabold">1,248</p>
      <p className="mt-2 text-xs text-slate-400">Orders received this month</p>
    </article>
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-50 text-xl">
          👥
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
          ↑ 4.6%
        </span>
      </div>
      <p className="mt-5 text-sm font-medium text-slate-500">
        Active customers
      </p>
      <p className="mt-1 text-2xl font-extrabold">864</p>
      <p className="mt-2 text-xs text-slate-400">
        Customers who ordered recently
      </p>
    </article>
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-xl">
          📦
        </div>
        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700">
          Needs attention
        </span>
      </div>
      <p className="mt-5 text-sm font-medium text-slate-500">
        Low-stock products
      </p>
      <p className="mt-1 text-2xl font-extrabold" id="lowStockCount">
        08
      </p>
      <p className="mt-2 text-xs text-slate-400">Items below reorder level</p>
    </article>
  </section>
  <section className="mt-6 grid gap-6 xl:grid-cols-3">
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:col-span-2">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-extrabold">Sales overview</h3>
          <p className="mt-1 text-sm text-slate-500">
            Revenue performance for the last 7 days
          </p>
        </div>
        <select
          id="chartRange"
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none"
        >
          <option value={7}>Last 7 days</option>
          <option value={30}>Last 30 days</option>
        </select>
      </div>
      <div className="mt-6 flex h-56 items-end gap-3 border-b border-l border-slate-100 px-3 pb-0 pt-4 sm:gap-5">
        <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
          <div
            className="w-full max-w-10 rounded-t-lg bg-emerald-200 transition hover:bg-emerald-400"
            style={{ height: "42%" }}
          />
          <span className="pb-2 text-[11px] text-slate-400">Mon</span>
        </div>
        <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
          <div
            className="w-full max-w-10 rounded-t-lg bg-emerald-300 transition hover:bg-emerald-400"
            style={{ height: "64%" }}
          />
          <span className="pb-2 text-[11px] text-slate-400">Tue</span>
        </div>
        <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
          <div
            className="w-full max-w-10 rounded-t-lg bg-emerald-200 transition hover:bg-emerald-400"
            style={{ height: "52%" }}
          />
          <span className="pb-2 text-[11px] text-slate-400">Wed</span>
        </div>
        <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
          <div
            className="w-full max-w-10 rounded-t-lg bg-emerald-400 transition hover:bg-emerald-500"
            style={{ height: "80%" }}
          />
          <span className="pb-2 text-[11px] text-slate-400">Thu</span>
        </div>
        <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
          <div
            className="w-full max-w-10 rounded-t-lg bg-emerald-300 transition hover:bg-emerald-400"
            style={{ height: "61%" }}
          />
          <span className="pb-2 text-[11px] text-slate-400">Fri</span>
        </div>
        <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
          <div
            className="w-full max-w-10 rounded-t-lg bg-emerald-500 transition hover:bg-emerald-600"
            style={{ height: "92%" }}
          />
          <span className="pb-2 text-[11px] text-slate-400">Sat</span>
        </div>
        <div className="flex h-full flex-1 flex-col items-center justify-end gap-2">
          <div
            className="w-full max-w-10 rounded-t-lg bg-emerald-300 transition hover:bg-emerald-400"
            style={{ height: "70%" }}
          />
          <span className="pb-2 text-[11px] text-slate-400">Sun</span>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <span className="h-2.5 w-2.5 rounded-sm bg-emerald-500" /> Revenue{" "}
        <span className="ml-auto font-bold text-slate-800">
          ₹42,860 this week
        </span>
      </div>
    </article>
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-extrabold">Order status</h3>
          <p className="mt-1 text-sm text-slate-500">Current order breakdown</p>
        </div>
        <button
          className="text-sm font-bold text-emerald-700"
          data-goto="Orders"
        >
          View all
        </button>
      </div>
      <div
        className="mx-auto my-6 grid h-40 w-40 place-items-center rounded-full"
        style={{
          background:
            "conic-gradient(#059669 0 55%, #f59e0b 55% 76%, #3b82f6 76% 90%, #e2e8f0 90% 100%)"
        }}
      >
        <div className="grid h-28 w-28 place-items-center rounded-full bg-white text-center">
          <div>
            <p className="text-2xl font-extrabold">248</p>
            <p className="text-xs text-slate-400">Total orders</p>
          </div>
        </div>
      </div>
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
          <span className="text-slate-600">Delivered</span>
          <strong className="ml-auto">136</strong>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
          <span className="text-slate-600">Processing</span>
          <strong className="ml-auto">52</strong>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
          <span className="text-slate-600">Out for delivery</span>
          <strong className="ml-auto">34</strong>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="text-slate-600">Cancelled</span>
          <strong className="ml-auto">26</strong>
        </div>
      </div>
    </article>
  </section>
  <section className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-5">
      <div>
        <h3 className="font-extrabold">Recent orders</h3>
        <p className="mt-1 text-sm text-slate-500">
          Track and manage your latest orders
        </p>
      </div>
      <button
        data-goto="Orders"
        className="text-sm font-bold text-emerald-700 hover:text-emerald-900"
      >
        See all orders →
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-400">
          <tr>
            <th className="px-5 py-3 font-bold">Order ID</th>
            <th className="px-5 py-3 font-bold">Customer</th>
            <th className="px-5 py-3 font-bold">Date</th>
            <th className="px-5 py-3 font-bold">Amount</th>
            <th className="px-5 py-3 font-bold">Status</th>
            <th className="px-5 py-3 font-bold">Action</th>
          </tr>
        </thead>
        <tbody id="ordersTable" className="divide-y divide-slate-100">
          <tr>
            <td className="px-5 py-4 font-bold text-emerald-700">#CK10248</td>
            <td className="px-5 py-4">
              <div className="font-semibold">Aarav Shah</div>
              <div className="text-xs text-slate-400">aarav@example.com</div>
            </td>
            <td className="px-5 py-4 text-slate-500">27 Oct 2026</td>
            <td className="px-5 py-4 font-bold">₹1,240</td>
            <td className="px-5 py-4">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                Delivered
              </span>
            </td>
            <td className="px-5 py-4">
              <button className="order-detail rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold hover:bg-slate-50">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-5 py-4 font-bold text-emerald-700">#CK10247</td>
            <td className="px-5 py-4">
              <div className="font-semibold">Diya Patel</div>
              <div className="text-xs text-slate-400">diya@example.com</div>
            </td>
            <td className="px-5 py-4 text-slate-500">27 Oct 2026</td>
            <td className="px-5 py-4 font-bold">₹865</td>
            <td className="px-5 py-4">
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
                Processing
              </span>
            </td>
            <td className="px-5 py-4">
              <button className="order-detail rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold hover:bg-slate-50">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-5 py-4 font-bold text-emerald-700">#CK10246</td>
            <td className="px-5 py-4">
              <div className="font-semibold">Rohan Mehta</div>
              <div className="text-xs text-slate-400">rohan@example.com</div>
            </td>
            <td className="px-5 py-4 text-slate-500">26 Oct 2026</td>
            <td className="px-5 py-4 font-bold">₹2,110</td>
            <td className="px-5 py-4">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                Out for delivery
              </span>
            </td>
            <td className="px-5 py-4">
              <button className="order-detail rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold hover:bg-slate-50">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-5 py-4 font-bold text-emerald-700">#CK10245</td>
            <td className="px-5 py-4">
              <div className="font-semibold">Anaya Joshi</div>
              <div className="text-xs text-slate-400">anaya@example.com</div>
            </td>
            <td className="px-5 py-4 text-slate-500">26 Oct 2026</td>
            <td className="px-5 py-4 font-bold">₹540</td>
            <td className="px-5 py-4">
              <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-700">
                Cancelled
              </span>
            </td>
            <td className="px-5 py-4">
              <button className="order-detail rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold hover:bg-slate-50">
                Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <section className="mt-6 grid gap-6 lg:grid-cols-2">
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-extrabold">Top categories</h3>
          <p className="mt-1 text-sm text-slate-500">Sales mix by category</p>
        </div>
        <button
          data-goto="Categories"
          className="text-sm font-bold text-emerald-700"
        >
          Manage
        </button>
      </div>
      <div className="mt-5 space-y-4">
        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-semibold">Fruits &amp; Vegetables</span>
            <span className="text-slate-500">34%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100">
            <div className="h-2 w-[34%] rounded-full bg-emerald-500" />
          </div>
        </div>
        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-semibold">Dairy, Bread &amp; Eggs</span>
            <span className="text-slate-500">26%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100">
            <div className="h-2 w-[26%] rounded-full bg-amber-400" />
          </div>
        </div>
        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-semibold">Snacks &amp; Munchies</span>
            <span className="text-slate-500">22%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100">
            <div className="h-2 w-[22%] rounded-full bg-blue-500" />
          </div>
        </div>
        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-semibold">Personal Care</span>
            <span className="text-slate-500">18%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100">
            <div className="h-2 w-[18%] rounded-full bg-violet-500" />
          </div>
        </div>
      </div>
    </article>
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-extrabold">Inventory alerts</h3>
          <p className="mt-1 text-sm text-slate-500">
            Products that need restocking
          </p>
        </div>
        <button
          data-goto="Inventory"
          className="text-sm font-bold text-emerald-700"
        >
          View inventory
        </button>
      </div>
      <div className="mt-4 divide-y divide-slate-100">
        <div className="flex items-center gap-3 py-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-50">
            🥛
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold">
              Amul Gold Full Cream Milk
            </p>
            <p className="text-xs text-slate-400">Dairy, Bread &amp; Eggs</p>
          </div>
          <span className="rounded-lg bg-rose-50 px-2.5 py-1.5 text-xs font-bold text-rose-700">
            4 left
          </span>
        </div>
        <div className="flex items-center gap-3 py-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange-50">
            🍪
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold">Chocolate biscuits</p>
            <p className="text-xs text-slate-400">Bakery &amp; Biscuits</p>
          </div>
          <span className="rounded-lg bg-amber-50 px-2.5 py-1.5 text-xs font-bold text-amber-700">
            7 left
          </span>
        </div>
        <div className="flex items-center gap-3 py-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-green-50">
            🍎
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold">Fresh apples</p>
            <p className="text-xs text-slate-400">Fruits &amp; Vegetables</p>
          </div>
          <span className="rounded-lg bg-rose-50 px-2.5 py-1.5 text-xs font-bold text-rose-700">
            3 left
          </span>
        </div>
      </div>
    </article>
  </section>
  <footer className="mt-8 flex flex-col gap-2 border-t border-slate-200 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
    <p>© 2026 ClickIT Admin. All rights reserved.</p>
    <p>
      Built for your store operations <span className="text-rose-500">♥</span>
    </p>
  </footer>

<>
  <dialog
    id="productDialog"
    className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-3xl p-0 shadow-2xl backdrop:bg-slate-950/50"
  >
    <form id="productForm" method="dialog" className="p-6 sm:p-8">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-extrabold">Add a product</h2>
          <p className="mt-1 text-sm text-slate-500">
            Add a product to your demo catalogue.
          </p>
        </div>
        <button
          type="button"
          id="closeProductDialog"
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
        >
          ✕
        </button>
      </div>
      <label className="mb-2 block text-sm font-semibold">Product name</label>
      <input
        id="productName"
        required=""
        className="mb-4 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
        placeholder="e.g. Fresh toned milk"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold">Price (₹)</label>
          <input
            id="productPrice"
            type="number"
            min={1}
            required=""
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
            placeholder={50}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Stock quantity
          </label>
          <input
            id="productStock"
            type="number"
            min={0}
            required=""
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
            placeholder={25}
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          id="cancelProduct"
          className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-700"
        >
          Save product
        </button>
      </div>
    </form>
  </dialog>
  <div
    id="toast"
    className="fixed bottom-5 right-5 z-50 hidden max-w-sm rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-xl"
    role="status"
  />
</>


</main>

  )
}
