
import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebarApp from './AdminSidebarApp';

export default function AddCategory() {
  const [formData, setFormData] = useState({
    categoryName: '',
    slug: '',
    description: '',
    status: 'Active',
  });

  const [categoryImage, setCategoryImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'categoryName' && {
        slug: value
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, ''),
      }),
    }));

    setErrors((prev) => ({ ...prev, [name]: '' }));
    setMessage('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrors((prev) => ({
        ...prev,
        image: 'Please select a valid image.',
      }));
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        image: 'Image size must be less than 2 MB.',
      }));
      return;
    }

    setCategoryImage(file);
    setPreview(URL.createObjectURL(file));
    setErrors((prev) => ({ ...prev, image: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.categoryName.trim()) {
      newErrors.categoryName = 'Category name is required.';
    }

    if (!formData.slug.trim()) {
      newErrors.slug = 'Category slug is required.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const category = {
      ...formData,
      image: categoryImage?.name || '',
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    // Demo: save category records in browser localStorage.
    const existingCategories = JSON.parse(
      localStorage.getItem('clickitCategories') || '[]'
    );

    existingCategories.push(category);

    localStorage.setItem(
      'clickitCategories',
      JSON.stringify(existingCategories)
    );

    setMessage('Category added successfully!');

    setFormData({
      categoryName: '',
      slug: '',
      description: '',
      status: 'Active',
    });

    setCategoryImage(null);
    setPreview('');
    setErrors({});

    e.target.reset();
  };

  const inputClass =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <AdminSidebarApp />

      <div className="min-h-screen lg:pl-72">
        <AdminHeader />

        <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
          {/* Page heading */}
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-slate-500">
                Dashboard / Categories / Add Category
              </p>

              <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Add Category
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Create and organize product categories for your ClickIT store.
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

          {message && (
            <div
              role="status"
              className="mb-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-700"
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Main form */}
              <div className="space-y-6 lg:col-span-2">
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                  <div className="mb-6 border-b border-slate-100 pb-4">
                    <h2 className="text-lg font-bold">
                      Category Information
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Enter the basic details of your category.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="categoryName"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Category Name <span className="text-rose-500">*</span>
                      </label>

                      <input
                        id="categoryName"
                        name="categoryName"
                        value={formData.categoryName}
                        onChange={handleChange}
                        placeholder="e.g. Fruits & Vegetables"
                        className={inputClass}
                      />

                      {errors.categoryName && (
                        <p className="mt-1 text-xs text-rose-600">
                          {errors.categoryName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="slug"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Category Slug <span className="text-rose-500">*</span>
                      </label>

                      <input
                        id="slug"
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        placeholder="fruits-vegetables"
                        className={inputClass}
                      />

                      <p className="mt-2 text-xs text-slate-400">
                        URL-friendly identifier generated from the category name.
                      </p>

                      {errors.slug && (
                        <p className="mt-1 text-xs text-rose-600">
                          {errors.slug}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="description"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Description
                      </label>

                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                        maxLength={500}
                        placeholder="Write a short description about this category..."
                        className={`${inputClass} resize-y`}
                      />

                      <p className="mt-1 text-right text-xs text-slate-400">
                        {formData.description.length}/500 characters
                      </p>
                    </div>
                  </div>
                </section>

                {/* Image upload */}
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                  <div className="mb-5">
                    <h2 className="text-lg font-bold">Category Image</h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Upload a square image for the category.
                    </p>
                  </div>

                  <label
                    htmlFor="categoryImage"
                    className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-8 text-center transition hover:border-emerald-400 hover:bg-emerald-50/50"
                  >
                    {preview ? (
                      <img
                        src={preview}
                        alt="Category preview"
                        className="mb-4 h-32 w-32 rounded-xl border border-slate-200 bg-white object-cover"
                      />
                    ) : (
                      <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-2xl">
                        📷
                      </div>
                    )}

                    <span className="text-sm font-bold text-slate-700">
                      {preview ? 'Choose another image' : 'Click to upload image'}
                    </span>

                    <span className="mt-2 text-xs text-slate-400">
                      PNG, JPG, or WEBP · Maximum 2 MB
                    </span>

                    <input
                      id="categoryImage"
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      onChange={handleImageChange}
                      className="sr-only"
                    />
                  </label>

                  {errors.image && (
                    <p className="mt-2 text-xs text-rose-600">
                      {errors.image}
                    </p>
                  )}
                </section>
              </div>

              {/* Sidebar settings */}
              <div className="space-y-6">
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h2 className="text-lg font-bold">Publish Settings</h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Control category visibility.
                  </p>

                  <div className="mt-5">
                    <label
                      htmlFor="status"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Category Status
                    </label>

                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>

                  <div className="mt-5 rounded-xl bg-slate-50 p-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          formData.status === 'Active'
                            ? 'bg-emerald-500'
                            : 'bg-slate-400'
                        }`}
                      />
                      <span className="text-sm font-semibold">
                        {formData.status}
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {formData.status === 'Active'
                        ? 'This category is marked as active.'
                        : 'This category is marked as inactive.'}
                    </p>
                  </div>
                </section>

                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h2 className="font-bold">Category Preview</h2>

                  <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                    {preview ? (
                      <img
                        src={preview}
                        alt=""
                        className="h-36 w-full object-cover"
                      />
                    ) : (
                      <div className="grid h-36 place-items-center bg-emerald-50 text-4xl">
                        🛒
                      </div>
                    )}

                    <div className="p-4">
                      <p className="break-words font-bold">
                        {formData.categoryName || 'Category Name'}
                      </p>

                      <p className="mt-1 break-words text-xs text-slate-500">
                        {formData.slug || 'category-slug'}
                      </p>

                      <span
                        className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                          formData.status === 'Active'
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {formData.status}
                      </span>
                    </div>
                  </div>
                </section>

                <div className="flex flex-col gap-3">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                  >
                    + Save Category
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        categoryName: '',
                        slug: '',
                        description: '',
                        status: 'Active',
                      });
                      setCategoryImage(null);
                      setPreview('');
                      setErrors({});
                      setMessage('');
                    }}
                    className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50"
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
