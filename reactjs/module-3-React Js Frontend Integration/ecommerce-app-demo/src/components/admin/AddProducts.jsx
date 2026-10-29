
import React, { useEffect, useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebarApp from './AdminSidebarApp';

export default function AddProducts() {
  const initialFormData = {
    productName: '',
    slug: '',
    category: '',
    price: '',
    stock: '',
    description: '',
    status: 'Active',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [productImage, setProductImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState([]);

  // Load categories from localStorage
  useEffect(() => {
    const savedCategories = JSON.parse(
      localStorage.getItem('clickitCategories') || '[]'
    );

    setCategories(
      savedCategories.filter(
        (category) => category.status === 'Active'
      )
    );
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'productName' && {
        slug: value
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, ''),
      }),
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));

    setMessage('');
  };

  // Handle product image
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

    setProductImage(file);
    setPreview(URL.createObjectURL(file));

    setErrors((prev) => ({
      ...prev,
      image: '',
    }));
  };

  // Submit product
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.productName.trim()) {
      newErrors.productName = 'Product name is required.';
    }

    if (!formData.slug.trim()) {
      newErrors.slug = 'Product slug is required.';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category.';
    }

    if (
      formData.price === '' ||
      !Number.isFinite(Number(formData.price)) ||
      Number(formData.price) < 0
    ) {
      newErrors.price = 'Enter a valid product price.';
    }

    if (
      formData.stock === '' ||
      !Number.isInteger(Number(formData.stock)) ||
      Number(formData.stock) < 0
    ) {
      newErrors.stock = 'Enter a valid stock quantity.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const product = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
      image: preview,
      imageName: productImage?.name || '',
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    // Demo: Save products in browser localStorage
    const existingProducts = JSON.parse(
      localStorage.getItem('clickitProducts') || '[]'
    );

    existingProducts.push(product);

    localStorage.setItem(
      'clickitProducts',
      JSON.stringify(existingProducts)
    );

    setMessage('Product added successfully!');

    setFormData(initialFormData);
    setProductImage(null);
    setPreview('');
    setErrors({});

    e.target.reset();
  };

  // Reset form
  const handleReset = () => {
    setFormData(initialFormData);
    setProductImage(null);
    setPreview('');
    setErrors({});
    setMessage('');
  };

  const inputClass =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50';

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
                Dashboard / Products / Add Product
              </p>

              <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Add Product
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Create and manage products for your ClickIT store.
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
              className="mb-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-700"
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 lg:grid-cols-3">

              {/* Main Form */}
              <div className="space-y-6 lg:col-span-2">

                {/* Product Information */}
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                  <div className="mb-6 border-b border-slate-100 pb-4">
                    <h2 className="text-lg font-bold">
                      Product Information
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Enter the basic details of your product.
                    </p>
                  </div>

                  <div className="space-y-5">

                    {/* Product Name */}
                    <div>
                      <label
                        htmlFor="productName"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Product Name <span className="text-rose-500">*</span>
                      </label>

                      <input
                        id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        placeholder="e.g. Fresh Red Apples"
                        className={inputClass}
                      />

                      {errors.productName && (
                        <p className="mt-1 text-xs text-rose-600">
                          {errors.productName}
                        </p>
                      )}
                    </div>

                    {/* Product Slug */}
                    <div>
                      <label
                        htmlFor="slug"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Product Slug <span className="text-rose-500">*</span>
                      </label>

                      <input
                        id="slug"
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        placeholder="fresh-red-apples"
                        className={inputClass}
                      />

                      <p className="mt-2 text-xs text-slate-400">
                        URL-friendly identifier generated from the product name.
                      </p>

                      {errors.slug && (
                        <p className="mt-1 text-xs text-rose-600">
                          {errors.slug}
                        </p>
                      )}
                    </div>

                    {/* Category */}
                    <div>
                      <label
                        htmlFor="category"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Product Category <span className="text-rose-500">*</span>
                      </label>

                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select Category</option>

                        {categories.map((category) => (
                          <option
                            key={category.id}
                            value={category.categoryName}
                          >
                            {category.categoryName}
                          </option>
                        ))}
                      </select>

                      {errors.category && (
                        <p className="mt-1 text-xs text-rose-600">
                          {errors.category}
                        </p>
                      )}
                    </div>

                    {/* Price and Stock */}
                    <div className="grid gap-5 sm:grid-cols-2">

                      <div>
                        <label
                          htmlFor="price"
                          className="mb-2 block text-sm font-semibold"
                        >
                          Product Price (₹) <span className="text-rose-500">*</span>
                        </label>

                        <input
                          id="price"
                          name="price"
                          type="number"
                          min="0"
                          step="0.01"
                          value={formData.price}
                          onChange={handleChange}
                          placeholder="e.g. 199.00"
                          className={inputClass}
                        />

                        {errors.price && (
                          <p className="mt-1 text-xs text-rose-600">
                            {errors.price}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="stock"
                          className="mb-2 block text-sm font-semibold"
                        >
                          Stock Quantity <span className="text-rose-500">*</span>
                        </label>

                        <input
                          id="stock"
                          name="stock"
                          type="number"
                          min="0"
                          step="1"
                          value={formData.stock}
                          onChange={handleChange}
                          placeholder="e.g. 100"
                          className={inputClass}
                        />

                        {errors.stock && (
                          <p className="mt-1 text-xs text-rose-600">
                            {errors.stock}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label
                        htmlFor="description"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Product Description
                      </label>

                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                        maxLength={1000}
                        placeholder="Write a description about this product..."
                        className={`${inputClass} resize-y`}
                      />

                      <p className="mt-1 text-right text-xs text-slate-400">
                        {formData.description.length}/1000 characters
                      </p>
                    </div>

                  </div>
                </section>

                {/* Product Image */}
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                  <div className="mb-5">
                    <h2 className="text-lg font-bold">
                      Product Image
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Upload a product image.
                    </p>
                  </div>

                  <label
                    htmlFor="productImage"
                    className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-8 text-center transition hover:border-emerald-400 hover:bg-emerald-50/50"
                  >
                    {preview ? (
                      <img
                        src={preview}
                        alt="Product preview"
                        className="mb-4 h-40 w-40 rounded-xl border border-slate-200 bg-white object-cover"
                      />
                    ) : (
                      <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-2xl">
                        📷
                      </div>
                    )}

                    <span className="text-sm font-bold text-slate-700">
                      {preview
                        ? 'Choose another image'
                        : 'Click to upload product image'}
                    </span>

                    <span className="mt-2 text-xs text-slate-400">
                      PNG, JPG, or WEBP · Maximum 2 MB
                    </span>

                    <input
                      id="productImage"
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

              {/* Sidebar Settings */}
              <div className="space-y-6">

                {/* Publish Settings */}
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h2 className="text-lg font-bold">
                    Publish Settings
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Control product visibility.
                  </p>

                  <div className="mt-5">
                    <label
                      htmlFor="status"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Product Status
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
                        ? 'This product is marked as active.'
                        : 'This product is marked as inactive.'}
                    </p>
                  </div>
                </section>

                {/* Product Preview */}
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h2 className="font-bold">
                    Product Preview
                  </h2>

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
                        {formData.productName || 'Product Name'}
                      </p>

                      <p className="mt-1 break-words text-xs text-slate-500">
                        {formData.category || 'Product Category'}
                      </p>

                      <p className="mt-2 text-lg font-extrabold text-emerald-600">
                        ₹{formData.price || '0.00'}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Stock: {formData.stock || '0'}
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

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                  >
                    + Save Product
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
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
