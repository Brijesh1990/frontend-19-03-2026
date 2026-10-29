import React, { useEffect, useMemo, useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebarApp from './AdminSidebarApp';

const initialCustomers = [
  {
    id: 1001,
    name: 'Aarav Shah',
    email: 'aarav@example.com',
    phone: '9876543210',
    city: 'Rajkot',
    orders: 24,
    spent: 12450,
    status: 'Active',
    joined: '2026-09-12',
  },
  {
    id: 1002,
    name: 'Diya Patel',
    email: 'diya@example.com',
    phone: '9876543211',
    city: 'Ahmedabad',
    orders: 18,
    spent: 8950,
    status: 'Active',
    joined: '2026-09-18',
  },
  {
    id: 1003,
    name: 'Rohan Mehta',
    email: 'rohan@example.com',
    phone: '9876543212',
    city: 'Surat',
    orders: 12,
    spent: 6420,
    status: 'Inactive',
    joined: '2026-08-22',
  },
  {
    id: 1004,
    name: 'Anaya Joshi',
    email: 'anaya@example.com',
    phone: '9876543213',
    city: 'Vadodara',
    orders: 31,
    spent: 18750,
    status: 'Active',
    joined: '2026-08-10',
  },
  {
    id: 1005,
    name: 'Vivaan Desai',
    email: 'vivaan@example.com',
    phone: '9876543214',
    city: 'Rajkot',
    orders: 5,
    spent: 2150,
    status: 'Blocked',
    joined: '2026-07-30',
  },
  {
    id: 1006,
    name: 'Kiara Trivedi',
    email: 'kiara@example.com',
    phone: '9876543215',
    city: 'Gandhinagar',
    orders: 15,
    spent: 7300,
    status: 'Active',
    joined: '2026-10-01',
  },
  {
    id: 1007,
    name: 'Ishaan Pandya',
    email: 'ishaan@example.com',
    phone: '9876543216',
    city: 'Jamnagar',
    orders: 9,
    spent: 4820,
    status: 'Inactive',
    joined: '2026-09-05',
  },
  {
    id: 1008,
    name: 'Myra Shah',
    email: 'myra@example.com',
    phone: '9876543217',
    city: 'Bhavnagar',
    orders: 22,
    spent: 11500,
    status: 'Active',
    joined: '2026-10-05',
  },
];

const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);

const statusStyles = {
  Active: 'bg-emerald-50 text-emerald-700',
  Inactive: 'bg-amber-50 text-amber-700',
  Blocked: 'bg-rose-50 text-rose-700',
};

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  city: '',
  status: 'Active',
};

export default function ManageCustomers() {
  const [customers, setCustomers] = useState(() => {
    try {
      const saved = localStorage.getItem('clickitCustomers');
      return saved ? JSON.parse(saved) : initialCustomers;
    } catch {
      return initialCustomers;
    }
  });

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [toast, setToast] = useState('');

  useEffect(() => {
    localStorage.setItem('clickitCustomers', JSON.stringify(customers));
  }, [customers]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(''), 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  const stats = useMemo(() => ({
    total: customers.length,
    active: customers.filter((c) => c.status === 'Active').length,
    inactive: customers.filter((c) => c.status === 'Inactive').length,
    blocked: customers.filter((c) => c.status === 'Blocked').length,
  }), [customers]);

  const filteredCustomers = useMemo(() => {
    const query = search.toLowerCase().trim();

    return customers
      .filter((customer) => {
        const matchesSearch = [
          customer.name,
          customer.email,
          customer.phone,
          customer.city,
          String(customer.id),
        ].some((value) =>
          String(value).toLowerCase().includes(query)
        );

        const matchesStatus =
          statusFilter === 'All' ||
          customer.status === statusFilter;

        return matchesSearch && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        }

        if (sortBy === 'orders') {
          return b.orders - a.orders;
        }

        return new Date(b.joined) - new Date(a.joined);
      });
  }, [customers, search, statusFilter, sortBy]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCustomers.length / pageSize)
  );

  const currentPage = Math.min(page, totalPages);

  const visibleCustomers = filteredCustomers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const openAddForm = () => {
    setEditingId(null);
    setForm(emptyForm);
    setErrors({});
    setShowForm(true);
  };

  const openEditForm = (customer) => {
    setEditingId(customer.id);
    setForm({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      city: customer.city,
      status: customer.status,
    });
    setErrors({});
    setSelectedCustomer(null);
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Customer name is required.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = 'Enter a valid 10-digit mobile number.';
    }

    if (!form.city.trim()) {
      newErrors.city = 'City is required.';
    }

    const duplicateEmail = customers.some(
      (customer) =>
        customer.email.toLowerCase() === form.email.toLowerCase() &&
        customer.id !== editingId
    );

    if (duplicateEmail) {
      newErrors.email = 'This email already exists.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length) return;

    if (editingId !== null) {
      setCustomers((prev) =>
        prev.map((customer) =>
          customer.id === editingId
            ? { ...customer, ...form }
            : customer
        )
      );
      setToast('Customer updated successfully.');
    } else {
      const newCustomer = {
        ...form,
        id: Date.now(),
        orders: 0,
        spent: 0,
        joined: new Date().toISOString().slice(0, 10),
      };

      setCustomers((prev) => [newCustomer, ...prev]);
      setPage(1);
      setToast('Customer added successfully.');
    }

    setShowForm(false);
    setForm(emptyForm);
    setEditingId(null);
  };

  const deleteCustomer = (id) => {
    const customer = customers.find((c) => c.id === id);

    if (!customer) return;

    if (
      !window.confirm(
        `Delete customer "${customer.name}"? This cannot be undone.`
      )
    ) {
      return;
    }

    setCustomers((prev) => prev.filter((c) => c.id !== id));
    setSelectedCustomer(null);
    setToast('Customer deleted successfully.');
  };

  const changeStatus = (customer) => {
    const nextStatus =
      customer.status === 'Blocked' ? 'Active' : 'Blocked';

    setCustomers((prev) =>
      prev.map((c) =>
        c.id === customer.id ? { ...c, status: nextStatus } : c
      )
    );

    setSelectedCustomer(null);
    setToast(`${customer.name} is now ${nextStatus.toLowerCase()}.`);
  };

  const exportCSV = () => {
    const columns = [
      'id', 'name', 'email', 'phone',
      'city', 'orders', 'spent', 'status', 'joined',
    ];

    const rows = [
      columns,
      ...filteredCustomers.map((customer) =>
        columns.map((column) => customer[column] ?? '')
      ),
    ];

    const csv = rows
      .map((row) =>
        row.map((value) =>
          `"${String(value).replace(/"/g, '""')}"`
        ).join(',')
      )
      .join('\n');

    const blob = new Blob(['\uFEFF' + csv], {
      type: 'text/csv;charset=utf-8;',
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'clickit-customers.csv';
    link.click();
    URL.revokeObjectURL(url);

    setToast('Customer list exported to CSV.');
  };

  const inputClass =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <AdminSidebarApp />

      <div className="min-h-screen lg:pl-72">
        <AdminHeader />

        <main className="mx-auto max-w-[1600px] p-4 sm:p-6 xl:p-8">
          {/* Heading */}
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-slate-500">
                Dashboard / Customers
              </p>

              <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                Manage Customers
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                View customer information and manage customer accounts.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={exportCSV}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold hover:bg-slate-100"
              >
                ↓ Export CSV
              </button>

              <button
                onClick={openAddForm}
                className="rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white hover:bg-emerald-700"
              >
                + Add Customer
              </button>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: 'Total Customers',
                value: stats.total,
                icon: '👥',
                color: 'bg-blue-50',
              },
              {
                label: 'Active Customers',
                value: stats.active,
                icon: '✓',
                color: 'bg-emerald-50',
              },
              {
                label: 'Inactive Customers',
                value: stats.inactive,
                icon: '◷',
                color: 'bg-amber-50',
              },
              {
                label: 'Blocked Customers',
                value: stats.blocked,
                icon: '⊘',
                color: 'bg-rose-50',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>

                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl text-lg ${stat.color}`}
                  >
                    {stat.icon}
                  </span>
                </div>

                <p className="mt-4 text-3xl font-extrabold">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Customers table */}
          <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-slate-100 p-5 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <h2 className="text-lg font-extrabold">
                  Customer Directory
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {filteredCustomers.length} customer(s) found
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <input
                  type="search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search customers..."
                  className={inputClass}
                />

                <select
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(e.target.value);
                    setPage(1);
                  }}
                  className={inputClass}
                >
                  <option value="All">All statuses</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Blocked">Blocked</option>
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={inputClass}
                >
                  <option value="newest">Newest joined</option>
                  <option value="name">Name A–Z</option>
                  <option value="orders">Most orders</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-5 py-4">Customer</th>
                    <th className="px-5 py-4">Phone</th>
                    <th className="px-5 py-4">Location</th>
                    <th className="px-5 py-4">Orders</th>
                    <th className="px-5 py-4">Total Spent</th>
                    <th className="px-5 py-4">Status</th>
                    <th className="px-5 py-4">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {visibleCustomers.map((customer) => (
                    <tr
                      key={customer.id}
                      className="transition hover:bg-slate-50"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                            {customer.name
                              .split(' ')
                              .map((part) => part[0])
                              .slice(0, 2)
                              .join('')
                              .toUpperCase()}
                          </div>

                          <div>
                            <p className="font-bold">{customer.name}</p>
                            <p className="mt-1 text-xs text-slate-400">
                              {customer.email}
                            </p>
                            <p className="mt-1 text-xs text-slate-400">
                              ID: #{customer.id}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4 text-slate-600">
                        {customer.phone}
                      </td>

                      <td className="px-5 py-4 text-slate-600">
                        {customer.city}
                      </td>

                      <td className="px-5 py-4 font-semibold">
                        {customer.orders}
                      </td>

                      <td className="px-5 py-4 font-bold">
                        {formatCurrency(customer.spent)}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`rounded-full px-3 py-1.5 text-xs font-bold ${statusStyles[customer.status]}`}
                        >
                          {customer.status}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            title="View customer"
                            onClick={() => setSelectedCustomer(customer)}
                            className="rounded-lg border border-slate-200 px-3 py-2 font-semibold hover:bg-slate-100"
                          >
                            View
                          </button>

                          <button
                            title="Edit customer"
                            onClick={() => openEditForm(customer)}
                            className="rounded-lg border border-emerald-200 px-3 py-2 font-semibold text-emerald-700 hover:bg-emerald-50"
                          >
                            Edit
                          </button>

                          <button
                            title="Delete customer"
                            onClick={() => deleteCustomer(customer.id)}
                            className="rounded-lg border border-rose-200 px-3 py-2 font-semibold text-rose-600 hover:bg-rose-50"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {visibleCustomers.length === 0 && (
                    <tr>
                      <td
                        colSpan="7"
                        className="px-5 py-14 text-center"
                      >
                        <div className="text-3xl">🔎</div>
                        <p className="mt-3 font-bold">
                          No customers found
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          Try another search or change the status filter.
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col gap-4 border-t border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span>Rows per page</span>

                <select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                    setPage(1);
                  }}
                  className="rounded-lg border border-slate-200 bg-white px-2 py-2"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>

                <span>
                  {filteredCustomers.length === 0
                    ? '0 results'
                    : `${(currentPage - 1) * pageSize + 1}–${Math.min(
                        currentPage * pageSize,
                        filteredCustomers.length
                      )} of ${filteredCustomers.length}`}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40"
                >
                  ← Previous
                </button>

                <span className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700">
                  {currentPage} / {totalPages}
                </span>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setPage((p) => Math.min(totalPages, p + 1))
                  }
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next →
                </button>
              </div>
            </div>
          </section>

          <footer className="mt-8 border-t border-slate-200 py-5 text-xs text-slate-400">
            © 2026 ClickIT Admin. All rights reserved.
          </footer>
        </main>
      </div>

      {/* Add / Edit Customer Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/50 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="customerFormTitle"
            className="my-auto w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h2
                  id="customerFormTitle"
                  className="text-xl font-extrabold"
                >
                  {editingId ? 'Edit Customer' : 'Add New Customer'}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Enter the customer details below.
                </p>
              </div>

              <button
                onClick={() => setShowForm(false)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                aria-label="Close form"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                {
                  name: 'name',
                  label: 'Full Name',
                  placeholder: 'Enter customer name',
                  type: 'text',
                },
                {
                  name: 'email',
                  label: 'Email Address',
                  placeholder: 'customer@example.com',
                  type: 'email',
                },
                {
                  name: 'phone',
                  label: 'Mobile Number',
                  placeholder: '10-digit mobile number',
                  type: 'tel',
                },
                {
                  name: 'city',
                  label: 'City',
                  placeholder: 'Enter city',
                  type: 'text',
                },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="mb-2 block text-sm font-semibold"
                  >
                    {field.label}
                  </label>

                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={handleFormChange}
                    placeholder={field.placeholder}
                    className={inputClass}
                  />

                  {errors[field.name] && (
                    <p className="mt-1 text-xs text-rose-600">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label
                  htmlFor="customerStatus"
                  className="mb-2 block text-sm font-semibold"
                >
                  Account Status
                </label>

                <select
                  id="customerStatus"
                  name="status"
                  value={form.status}
                  onChange={handleFormChange}
                  className={inputClass}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Blocked">Blocked</option>
                </select>
              </div>

              <div className="flex flex-col-reverse gap-3 pt-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700"
                >
                  {editingId ? 'Update Customer' : 'Save Customer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Customer Details Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/50 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="customerDetailsTitle"
            className="my-auto w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2
                  id="customerDetailsTitle"
                  className="text-xl font-extrabold"
                >
                  Customer Details
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Customer ID: #{selectedCustomer.id}
                </p>
              </div>

              <button
                onClick={() => setSelectedCustomer(null)}
                className="rounded-lg p-2 hover:bg-slate-100"
                aria-label="Close customer details"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 flex items-center gap-4 rounded-2xl bg-emerald-50 p-4">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-xl font-extrabold text-emerald-700">
                {selectedCustomer.name
                  .split(' ')
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join('')
                  .toUpperCase()}
              </div>

              <div className="min-w-0">
                <p className="break-words text-lg font-extrabold">
                  {selectedCustomer.name}
                </p>
                <p className="break-words text-sm text-slate-500">
                  {selectedCustomer.email}
                </p>
                <span
                  className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-bold ${statusStyles[selectedCustomer.status]}`}
                >
                  {selectedCustomer.status}
                </span>
              </div>
            </div>

            <div className="mt-5 divide-y divide-slate-100">
              {[
                ['Mobile Number', selectedCustomer.phone],
                ['City', selectedCustomer.city],
                ['Joined Date', selectedCustomer.joined],
                ['Total Orders', selectedCustomer.orders],
                ['Total Spent', formatCurrency(selectedCustomer.spent)],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 py-3 text-sm"
                >
                  <span className="text-slate-500">{label}</span>
                  <span className="break-words text-right font-bold">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => openEditForm(selectedCustomer)}
                className="flex-1 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white hover:bg-emerald-700"
              >
                Edit Customer
              </button>

              <button
                onClick={() => changeStatus(selectedCustomer)}
                className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold hover:bg-slate-50"
              >
                {selectedCustomer.status === 'Blocked'
                  ? 'Unblock Customer'
                  : 'Block Customer'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast notification */}
      {toast && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-[60] max-w-[calc(100%-2.5rem)] rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-xl"
        >
          ✓ {toast}
        </div>
      )}
    </div>
  );
}
