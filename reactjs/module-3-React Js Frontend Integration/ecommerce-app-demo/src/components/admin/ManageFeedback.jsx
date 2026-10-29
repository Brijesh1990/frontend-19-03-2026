
import React, { useMemo, useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebarApp from './AdminSidebarApp';

const initialFeedback = [
  {
    id: 'FB-1001',
    customer: 'Rahul Sharma',
    email: 'rahul@example.com',
    product: 'Fresh Red Apples',
    rating: 5,
    comment:
      'Excellent quality apples! Very fresh and delivered on time. Highly recommended.',
    date: '2026-10-25',
    status: 'Reviewed',
  },
  {
    id: 'FB-1002',
    customer: 'Priya Patel',
    email: 'priya@example.com',
    product: 'Organic Milk',
    rating: 4,
    comment:
      'Good product quality. Packaging could be improved a little.',
    date: '2026-10-26',
    status: 'Pending',
  },
  {
    id: 'FB-1003',
    customer: 'Amit Verma',
    email: 'amit@example.com',
    product: 'Fresh Vegetables',
    rating: 2,
    comment:
      'Some vegetables were not fresh. Please improve the quality.',
    date: '2026-10-27',
    status: 'Pending',
  },
  {
    id: 'FB-1004',
    customer: 'Sneha Gupta',
    email: 'sneha@example.com',
    product: 'Premium Rice',
    rating: 5,
    comment:
      'Amazing quality rice. Great taste and excellent value for money.',
    date: '2026-10-28',
    status: 'Reviewed',
  },
  {
    id: 'FB-1005',
    customer: 'Vikas Singh',
    email: 'vikas@example.com',
    product: 'Cooking Oil',
    rating: 1,
    comment:
      'Received a damaged package. Not satisfied with the delivery experience.',
    date: '2026-10-29',
    status: 'Pending',
  },
];

const ratingStyles = {
  1: 'bg-rose-50 text-rose-700',
  2: 'bg-orange-50 text-orange-700',
  3: 'bg-amber-50 text-amber-700',
  4: 'bg-blue-50 text-blue-700',
  5: 'bg-emerald-50 text-emerald-700',
};

const statusStyles = {
  Reviewed: 'bg-emerald-50 text-emerald-700',
  Pending: 'bg-amber-50 text-amber-700',
};

const formatDate = (date) =>
  new Date(date + 'T00:00:00').toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

const getInitials = (name) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

function RatingStars({ rating }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={
            star <= rating
              ? 'text-amber-400'
              : 'text-slate-200'
          }
        >
          ★
        </span>
      ))}

      <span className="ml-1 text-xs font-semibold text-slate-500">
        {rating}.0
      </span>
    </div>
  );
}

function RatingBadge({ rating }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
        ratingStyles[rating] || 'bg-slate-100 text-slate-600'
      }`}
    >
      {rating} / 5
    </span>
  );
}

function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
        statusStyles[status] || 'bg-slate-100 text-slate-600'
      }`}
    >
      {status}
    </span>
  );
}

export default function ManageFeedback() {
  const [feedback, setFeedback] = useState(initialFeedback);
  const [search, setSearch] = useState('');
  const [ratingFilter, setRatingFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [message, setMessage] = useState('');

  // Feedback statistics
  const totalFeedback = feedback.length;

  const averageRating =
    totalFeedback > 0
      ? (
          feedback.reduce((sum, item) => sum + item.rating, 0) /
          totalFeedback
        ).toFixed(1)
      : '0.0';

  const positiveFeedback = feedback.filter(
    (item) => item.rating >= 4
  ).length;

  const negativeFeedback = feedback.filter(
    (item) => item.rating <= 2
  ).length;

  // Search and filter feedback
  const filteredFeedback = useMemo(() => {
    return feedback.filter((item) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        item.id.toLowerCase().includes(searchText) ||
        item.customer.toLowerCase().includes(searchText) ||
        item.email.toLowerCase().includes(searchText) ||
        item.product.toLowerCase().includes(searchText) ||
        item.comment.toLowerCase().includes(searchText);

      const matchesRating =
        ratingFilter === 'All' ||
        item.rating === Number(ratingFilter);

      const matchesStatus =
        statusFilter === 'All' ||
        item.status === statusFilter;

      return matchesSearch && matchesRating && matchesStatus;
    });
  }, [feedback, search, ratingFilter, statusFilter]);

  // Update feedback status
  const handleStatusChange = (feedbackId, newStatus) => {
    const updatedFeedback = feedback.map((item) =>
      item.id === feedbackId
        ? { ...item, status: newStatus }
        : item
    );

    setFeedback(updatedFeedback);

    setSelectedFeedback((prev) =>
      prev?.id === feedbackId
        ? { ...prev, status: newStatus }
        : prev
    );

    localStorage.setItem(
      'clickitFeedback',
      JSON.stringify(updatedFeedback)
    );

    setMessage(
      `Feedback ${feedbackId} marked as ${newStatus}.`
    );
  };

  // Delete feedback
  const handleDelete = (feedbackId) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this feedback?'
    );

    if (!confirmed) return;

    const updatedFeedback = feedback.filter(
      (item) => item.id !== feedbackId
    );

    setFeedback(updatedFeedback);

    setSelectedFeedback(null);

    localStorage.setItem(
      'clickitFeedback',
      JSON.stringify(updatedFeedback)
    );

    setMessage(`Feedback ${feedbackId} deleted successfully.`);
  };

  // Reset filters
  const handleResetFilters = () => {
    setSearch('');
    setRatingFilter('All');
    setStatusFilter('All');
    setMessage('');
  };

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
                Dashboard / Feedback / Manage Feedback
              </p>

              <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Manage Feedback
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Review customer feedback and improve your store experience.
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
              <span>{message}</span>

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

            {/* Total Feedback */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Total Feedback
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold">
                    {totalFeedback}
                  </h3>
                </div>

                <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-2xl">
                  💬
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                All customer reviews
              </p>
            </div>

            {/* Average Rating */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Average Rating
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold">
                    {averageRating}
                    <span className="ml-1 text-amber-400">★</span>
                  </h3>
                </div>

                <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-50 text-2xl">
                  ⭐
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                Overall customer satisfaction
              </p>
            </div>

            {/* Positive Feedback */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Positive Feedback
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold">
                    {positiveFeedback}
                  </h3>
                </div>

                <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-50 text-2xl">
                  😊
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                Ratings of 4 or 5 stars
              </p>
            </div>

            {/* Negative Feedback */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Negative Feedback
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold">
                    {negativeFeedback}
                  </h3>
                </div>

                <div className="grid h-12 w-12 place-items-center rounded-xl bg-rose-50 text-2xl">
                  😞
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                Ratings of 1 or 2 stars
              </p>
            </div>

          </div>

          {/* Feedback Table */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            {/* Table Header */}
            <div className="border-b border-slate-100 p-5 sm:p-6">
              <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">

                <div>
                  <h2 className="text-lg font-bold">
                    Customer Feedback
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    View and manage customer reviews.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold hover:bg-slate-50"
                >
                  Reset Filters
                </button>

              </div>

              {/* Search and Filters */}
              <div className="mt-5 grid gap-3 md:grid-cols-3">

                {/* Search */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    🔍
                  </span>

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search customer, product..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-50"
                  />
                </div>

                {/* Rating Filter */}
                <select
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500"
                >
                  <option value="All">All Ratings</option>
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>

                {/* Status Filter */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500"
                >
                  <option value="All">All Feedback Status</option>
                  <option value="Reviewed">Reviewed</option>
                  <option value="Pending">Pending</option>
                </select>

              </div>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] text-left">

                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Feedback ID
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Customer
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Product
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Rating
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Comment
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Date
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">

                  {filteredFeedback.map((item) => (
                    <tr
                      key={item.id}
                      className="transition hover:bg-slate-50/70"
                    >

                      {/* Feedback ID */}
                      <td className="px-6 py-5">
                        <span className="font-bold text-emerald-600">
                          #{item.id}
                        </span>
                      </td>

                      {/* Customer */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">

                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                            {getInitials(item.customer)}
                          </div>

                          <div>
                            <p className="text-sm font-semibold">
                              {item.customer}
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                              {item.email}
                            </p>
                          </div>

                        </div>
                      </td>

                      {/* Product */}
                      <td className="px-6 py-5">
                        <span className="text-sm font-medium text-slate-600">
                          {item.product}
                        </span>
                      </td>

                      {/* Rating */}
                      <td className="px-6 py-5">
                        <div className="space-y-2">
                          <RatingStars rating={item.rating} />

                          <RatingBadge rating={item.rating} />
                        </div>
                      </td>

                      {/* Comment */}
                      <td className="max-w-xs px-6 py-5">
                        <p className="line-clamp-2 text-sm leading-5 text-slate-500">
                          {item.comment}
                        </p>
                      </td>

                      {/* Date */}
                      <td className="px-6 py-5">
                        <span className="whitespace-nowrap text-sm text-slate-500">
                          {formatDate(item.date)}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="px-6 py-5">
                        <StatusBadge status={item.status} />
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">

                          <button
                            type="button"
                            onClick={() => setSelectedFeedback(item)}
                            title="View Feedback"
                            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                          >
                            👁️
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(item.id)
                            }
                            title="Delete Feedback"
                            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600"
                          >
                            🗑️
                          </button>

                        </div>
                      </td>

                    </tr>
                  ))}

                  {/* Empty State */}
                  {filteredFeedback.length === 0 && (
                    <tr>
                      <td
                        colSpan={8}
                        className="px-6 py-16 text-center"
                      >
                        <div className="text-4xl">💬</div>

                        <h3 className="mt-4 font-bold">
                          No Feedback Found
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
                  {filteredFeedback.length}
                </span>{' '}
                of{' '}
                <span className="font-bold text-slate-800">
                  {feedback.length}
                </span>{' '}
                feedback entries
              </p>

              <p className="text-xs text-slate-400">
                Customer reviews and ratings
              </p>
            </div>

          </section>
        </main>
      </div>

      {/* Feedback Details Modal */}
      {selectedFeedback && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
          onClick={() => setSelectedFeedback(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="feedback-modal-title"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:p-6">
              <div>
                <h2
                  id="feedback-modal-title"
                  className="text-xl font-extrabold"
                >
                  Feedback Details
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  #{selectedFeedback.id}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedFeedback(null)}
                className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-lg hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 p-5 sm:p-6">

              {/* Customer Information */}
              <div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
                  Customer Information
                </h3>

                <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                    {getInitials(selectedFeedback.customer)}
                  </div>

                  <div>
                    <p className="font-bold">
                      {selectedFeedback.customer}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {selectedFeedback.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Information */}
              <div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
                  Product Information
                </h3>

                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="font-bold">
                    {selectedFeedback.product}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Feedback Date: {formatDate(selectedFeedback.date)}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
                  Customer Rating
                </h3>

                <div className="rounded-xl border border-slate-200 p-4">
                  <RatingStars rating={selectedFeedback.rating} />

                  <div className="mt-3">
                    <RatingBadge rating={selectedFeedback.rating} />
                  </div>
                </div>
              </div>

              {/* Comment */}
              <div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
                  Customer Comment
                </h3>

                <div className="rounded-xl bg-slate-50 p-5">
                  <p className="text-sm leading-7 text-slate-600">
                    {selectedFeedback.comment}
                  </p>
                </div>
              </div>

              {/* Feedback Status */}
              <div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
                  Feedback Status
                </h3>

                <select
                  value={selectedFeedback.status}
                  onChange={(e) =>
                    handleStatusChange(
                      selectedFeedback.id,
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
                >
                  <option value="Pending">Pending</option>
                  <option value="Reviewed">Reviewed</option>
                </select>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="flex flex-col-reverse justify-between gap-3 border-t border-slate-100 p-5 sm:flex-row sm:items-center sm:p-6">

              <button
                type="button"
                onClick={() =>
                  handleDelete(selectedFeedback.id)
                }
                className="rounded-xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-bold text-rose-600 transition hover:bg-rose-100"
              >
                🗑️ Delete Feedback
              </button>

              <button
                type="button"
                onClick={() => setSelectedFeedback(null)}
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
