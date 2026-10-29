
import React, { useMemo, useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebarApp from './AdminSidebarApp';

const initialOrders = [
  {
    id: 'ORD-1001',
    customer: 'Rahul Sharma',
    email: 'rahul@example.com',
    products: [
      { name: 'Fresh Red Apples', qty: 2, price: 240 },
      { name: 'Organic Bananas', qty: 1, price: 80 },
    ],
    total: 320,
    paymentMethod: 'UPI',
    paymentStatus: 'Paid',
    status: 'Delivered',
    date: '2026-10-25',
  },
  {
    id: 'ORD-1002',
    customer: 'Priya Patel',
    email: 'priya@example.com',
    products: [
      { name: 'Organic Milk', qty: 3, price: 180 },
    ],
    total: 180,
    paymentMethod: 'Card',
    paymentStatus: 'Paid',
    status: 'Processing',
    date: '2026-10-26',
  },
  {
    id: 'ORD-1003',
    customer: 'Amit Verma',
    email: 'amit@example.com',
    products: [
      { name: 'Fresh Vegetables', qty: 2, price: 350 },
    ],
    total: 350,
    paymentMethod: 'COD',
    paymentStatus: 'Pending',
    status: 'Pending',
    date: '2026-10-27',
  },
  {
    id: 'ORD-1004',
    customer: 'Sneha Gupta',
    email: 'sneha@example.com',
    products: [
      { name: 'Premium Rice', qty: 1, price: 650 },
      { name: 'Wheat Flour', qty: 2, price: 180 },
    ],
    total: 1010,
    paymentMethod: 'UPI',
    paymentStatus: 'Paid',
    status: 'Shipped',
    date: '2026-10-28',
  },
  {
    id: 'ORD-1005',
    customer: 'Vikas Singh',
    email: 'vikas@example.com',
    products: [
      { name: 'Cooking Oil', qty: 2, price: 450 },
    ],
    total: 900,
    paymentMethod: 'Card',
    paymentStatus: 'Refunded',
    status: 'Cancelled',
    date: '2026-10-29',
  },
];

const statusStyles = {
  Pending: 'bg-amber-50 text-amber-700',
  Processing: 'bg-blue-50 text-blue-700',
  Shipped: 'bg-purple-50 text-purple-700',
  Delivered: 'bg-emerald-50 text-emerald-700',
  Cancelled: 'bg-rose-50 text-rose-700',
};

const paymentStyles = {
  Paid: 'bg-emerald-50 text-emerald-700',
  Pending: 'bg-amber-50 text-amber-700',
  Refunded: 'bg-rose-50 text-rose-700',
};

const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  }).format(amount);

export default function ManageOrders() {
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [paymentFilter, setPaymentFilter] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [message, setMessage] = useState('');

  // Filter orders
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        order.id.toLowerCase().includes(searchText) ||
        order.customer.toLowerCase().includes(searchText) ||
        order.email.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === 'All' || order.status === statusFilter;

      const matchesPayment =
        paymentFilter === 'All' ||
        order.paymentStatus === paymentFilter;

      return matchesSearch && matchesStatus && matchesPayment;
    });
  }, [orders, search, statusFilter, paymentFilter]);

  // Order statistics
  const totalOrders = orders.length;

  const totalRevenue = orders
    .filter((order) => order.paymentStatus === 'Paid')
    .reduce((sum, order) => sum + order.total, 0);

  const pendingOrders = orders.filter(
    (order) => order.status === 'Pending'
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.status === 'Delivered'
  ).length;

  // Update order status
  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? { ...order, status: newStatus }
          : order
      )
    );

    setSelectedOrder((prev) =>
      prev?.id === orderId
        ? { ...prev, status: newStatus }
        : prev
    );

    setMessage(`Order ${orderId} updated to ${newStatus}.`);

    // Demo: save changes in localStorage
    const updatedOrders = orders.map((order) =>
      order.id === orderId
        ? { ...order, status: newStatus }
        : order
    );

    localStorage.setItem(
      'clickitOrders',
      JSON.stringify(updatedOrders)
    );
  };

  // Status badge
  const StatusBadge = ({ status }) => (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
        statusStyles[status] || 'bg-slate-100 text-slate-600'
      }`}
    >
      {status}
    </span>
  );

  // Payment badge
  const PaymentBadge = ({ status }) => (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
        paymentStyles[status] || 'bg-slate-100 text-slate-600'
      }`}
    >
      {status}
    </span>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <AdminSidebarApp />

      <div className="min-h-screen lg:pl-72">
        <AdminHeader />

        <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">

          {/* Page Heading */}
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-slate-500">
                Dashboard / Orders / Manage Orders
              </p>

              <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Manage Orders
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Track, manage, and update customer orders.
              </p>
            </div>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold hover:bg-slate-100"
            >
              ← Back
            </button>
          </div>

          {/* Success Message */}
          {message && (
            <div
              role="status"
              className="mb-5 flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-700"
            >
              {message}

              <button
                type="button"
                onClick={() => setMessage('')}
                className="font-bold"
              >
                ✕
              </button>
            </div>
          )}

          {/* Statistics Cards */}
          <div className="mb-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Total Orders
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold">
                    {totalOrders}
                  </h3>
                </div>

                <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-2xl">
                  📦
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                All customer orders
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Total Revenue
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold">
                    {formatCurrency(totalRevenue)}
                  </h3>
                </div>

                <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-50 text-2xl">
                  💰
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                Paid orders only
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Pending Orders
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold">
                    {pendingOrders}
                  </h3>
                </div>

                <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-50 text-2xl">
                  ⏳
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                Awaiting processing
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Delivered Orders
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold">
                    {deliveredOrders}
                  </h3>
                </div>

                <div className="grid h-12 w-12 place-items-center rounded-xl bg-purple-50 text-2xl">
                  🚚
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                Successfully delivered
              </p>
            </div>

          </div>

          {/* Orders Table */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            {/* Table Header */}
            <div className="border-b border-slate-100 p-5 sm:p-6">
              <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">

                <div>
                  <h2 className="text-lg font-bold">
                    All Orders
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    View and manage all customer orders.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSearch('');
                    setStatusFilter('All');
                    setPaymentFilter('All');
                    setMessage('');
                  }}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold hover:bg-slate-50"
                >
                  Reset Filters
                </button>

              </div>

              {/* Search and Filters */}
              <div className="mt-5 grid gap-3 md:grid-cols-3">

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    🔍
                  </span>

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search order ID, customer..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-50"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500"
                >
                  <option value="All">All Order Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>

                <select
                  value={paymentFilter}
                  onChange={(e) => setPaymentFilter(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500"
                >
                  <option value="All">All Payment Status</option>
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                  <option value="Refunded">Refunded</option>
                </select>

              </div>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] text-left">

                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Order ID
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Customer
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Products
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Total
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Payment
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Order Status
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Date
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">

                  {filteredOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="transition hover:bg-slate-50/70"
                    >

                      {/* Order ID */}
                      <td className="px-6 py-5">
                        <span className="font-bold text-emerald-600">
                          #{order.id}
                        </span>
                      </td>

                      {/* Customer */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">

                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                            {order.customer
                              .split(' ')
                              .map((name) => name[0])
                              .join('')
                              .slice(0, 2)}
                          </div>

                          <div>
                            <p className="text-sm font-semibold">
                              {order.customer}
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                              {order.email}
                            </p>
                          </div>

                        </div>
                      </td>

                      {/* Products */}
                      <td className="px-6 py-5">
                        <div className="space-y-1">
                          {order.products.map((product, index) => (
                            <p
                              key={index}
                              className="text-sm text-slate-600"
                            >
                              {product.name} × {product.qty}
                            </p>
                          ))}
                        </div>
                      </td>

                      {/* Total */}
                      <td className="px-6 py-5">
                        <span className="text-sm font-bold">
                          {formatCurrency(order.total)}
                        </span>
                      </td>

                      {/* Payment */}
                      <td className="px-6 py-5">
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-slate-500">
                            {order.paymentMethod}
                          </p>

                          <PaymentBadge status={order.paymentStatus} />
                        </div>
                      </td>

                      {/* Order Status */}
                      <td className="px-6 py-5">
                        <div className="space-y-2">
                          <StatusBadge status={order.status} />

                          <select
                            value={order.status}
                            onChange={(e) =>
                              handleStatusChange(
                                order.id,
                                e.target.value
                              )
                            }
                            className="block w-full rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs outline-none focus:border-emerald-500"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Processing">Processing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </div>
                      </td>

                      {/* Date */}
                      <td className="px-6 py-5">
                        <span className="whitespace-nowrap text-sm text-slate-500">
                          {new Date(
                            order.date + 'T00:00:00'
                          ).toLocaleDateString('en-IN', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5">
                        <button
                          type="button"
                          onClick={() => setSelectedOrder(order)}
                          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                        >
                          View Details
                        </button>
                      </td>

                    </tr>
                  ))}

                  {/* Empty State */}
                  {filteredOrders.length === 0 && (
                    <tr>
                      <td
                        colSpan={8}
                        className="px-6 py-16 text-center"
                      >
                        <div className="text-4xl">📦</div>

                        <h3 className="mt-4 font-bold">
                          No Orders Found
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                          Try changing your search or filters.
                        </p>
                      </td>
                    </tr>
                  )}

                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="flex flex-col justify-between gap-3 border-t border-slate-100 bg-white px-6 py-4 sm:flex-row sm:items-center">
              <p className="text-sm text-slate-500">
                Showing{' '}
                <span className="font-bold text-slate-800">
                  {filteredOrders.length}
                </span>{' '}
                of{' '}
                <span className="font-bold text-slate-800">
                  {orders.length}
                </span>{' '}
                orders
              </p>

              <p className="text-xs text-slate-400">
                Click View Details to see complete order information.
              </p>
            </div>

          </section>
        </main>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
          onClick={() => setSelectedOrder(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-modal-title"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:p-6">
              <div>
                <h2
                  id="order-modal-title"
                  className="text-xl font-extrabold"
                >
                  Order Details
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  #{selectedOrder.id}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-lg hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 p-5 sm:p-6">

              {/* Customer Details */}
              <div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
                  Customer Information
                </h3>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-bold">
                    {selectedOrder.customer}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {selectedOrder.email}
                  </p>
                </div>
              </div>

              {/* Product Details */}
              <div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
                  Ordered Products
                </h3>

                <div className="overflow-hidden rounded-xl border border-slate-200">
                  {selectedOrder.products.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-4 border-b border-slate-100 p-4 last:border-0"
                    >
                      <div>
                        <p className="text-sm font-semibold">
                          {product.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          Quantity: {product.qty}
                        </p>
                      </div>

                      <p className="whitespace-nowrap text-sm font-bold">
                        {formatCurrency(
                          product.price * product.qty
                        )}
                      </p>
                    </div>
                  ))}

                  <div className="flex justify-between bg-slate-50 p-4">
                    <span className="font-bold">
                      Total Amount
                    </span>

                    <span className="font-extrabold text-emerald-600">
                      {formatCurrency(selectedOrder.total)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
                  Payment Information
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 p-4">
                    <p className="text-xs text-slate-400">
                      Payment Method
                    </p>

                    <p className="mt-2 font-bold">
                      {selectedOrder.paymentMethod}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-4">
                    <p className="text-xs text-slate-400">
                      Payment Status
                    </p>

                    <div className="mt-2">
                      <PaymentBadge
                        status={selectedOrder.paymentStatus}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Status */}
              <div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
                  Update Order Status
                </h3>

                <select
                  value={selectedOrder.status}
                  onChange={(e) =>
                    handleStatusChange(
                      selectedOrder.id,
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="flex justify-end border-t border-slate-100 p-5 sm:p-6">
              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
