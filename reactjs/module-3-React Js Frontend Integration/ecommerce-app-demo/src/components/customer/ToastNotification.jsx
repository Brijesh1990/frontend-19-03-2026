import React from 'react';
import { FaCheckCircle, FaHeart, FaShoppingBag, FaTimes, FaTag } from 'react-icons/fa';

export default function ToastNotification({ toasts, removeToast }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let Icon = FaCheckCircle;
        let iconBg = "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
        if (toast.type === "wishlist") {
          Icon = FaHeart;
          iconBg = "bg-rose-500/20 text-rose-400 border-rose-500/30";
        } else if (toast.type === "cart") {
          Icon = FaShoppingBag;
          iconBg = "bg-indigo-500/20 text-indigo-400 border-indigo-500/30";
        } else if (toast.type === "discount") {
          Icon = FaTag;
          iconBg = "bg-amber-500/20 text-amber-400 border-amber-500/30";
        }

        return (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-center justify-between gap-3 p-4 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-xl animate-bounce-short transition-all duration-300 hover:border-slate-500"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl border ${iconBg}`}>
                <Icon className="text-lg" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white tracking-wide">{toast.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{toast.message}</p>
              </div>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
              aria-label="Close notification"
            >
              <FaTimes className="text-xs" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
