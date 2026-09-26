import React from "react";

export default function FooterApp() {
  return (
    <footer className="bg-slate-950 text-slate-300">

      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">

          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Stay Updated 🚀
            </h2>

            <p className="mt-2 max-w-xl text-slate-400">
              Subscribe to our newsletter and get the latest updates,
              tutorials, tips, and resources directly in your inbox.
            </p>
          </div>

          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-l-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
            />

            <button className="rounded-r-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-400">
              Subscribe
            </button>
          </div>

        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">

        {/* Company */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-xl font-bold text-white">
              T
            </div>

            <span className="text-2xl font-bold text-white">
              Tailwind<span className="text-cyan-400">App</span>
            </span>
          </div>

          <p className="max-w-sm leading-7 text-slate-400">
            Build beautiful, responsive, and modern web applications
            using React and Tailwind CSS. Create faster, design better,
            and ship amazing experiences.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-cyan-500 hover:text-white"
            >
              f
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-cyan-500 hover:text-white"
            >
              𝕏
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-cyan-500 hover:text-white"
            >
              in
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-cyan-500 hover:text-white"
            >
              ▶
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="transition hover:text-cyan-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:text-cyan-400"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:text-cyan-400"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:text-cyan-400"
              >
                Gallery
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:text-cyan-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Services
          </h3>

          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="transition hover:text-cyan-400"
              >
                Web Development
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:text-cyan-400"
              >
                UI/UX Design
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:text-cyan-400"
              >
                React Development
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:text-cyan-400"
              >
                Tailwind CSS
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:text-cyan-400"
              >
                Website Maintenance
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Contact Us
          </h3>

          <ul className="space-y-5">

            <li className="flex gap-3">
              <span className="text-xl">📍</span>

              <div>
                <p className="font-medium text-white">
                  Address
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  123 Web Street,
                  <br />
                  Ahmedabad, Gujarat, India
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <span className="text-xl">📧</span>

              <div>
                <p className="font-medium text-white">
                  Email
                </p>

                <a
                  href="mailto:hello@example.com"
                  className="mt-1 block text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  hello@example.com
                </a>
              </div>
            </li>

            <li className="flex gap-3">
              <span className="text-xl">📞</span>

              <div>
                <p className="font-medium text-white">
                  Phone
                </p>

                <a
                  href="tel:+919876543210"
                  className="mt-1 block text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  +91 98765 43210
                </a>
              </div>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">

          <p className="text-slate-500">
            © 2026 TailwindApp. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition hover:text-cyan-400"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-cyan-400"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="transition hover:text-cyan-400"
            >
              Cookies
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}
