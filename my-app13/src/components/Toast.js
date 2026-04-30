import React, { useEffect } from "react";

/**
 * Simple toast. Pass visible and message.
 */
export default function Toast({ visible, message, onClose, duration = 2500 }) {
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => onClose && onClose(), duration);
    return () => clearTimeout(t);
  }, [visible, duration, onClose]);

  if (!visible) return null;
  return (
    <div className="fixed right-4 top-6 bg-gray-800 text-white px-4 py-2 rounded shadow">
      {message}
    </div>
  );
}
