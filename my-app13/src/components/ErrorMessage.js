import React from "react";

export default function ErrorMessage({ message = "Something went wrong." }) {
  return (
    <div className="bg-red-800 text-red-100 p-3 rounded">
      <strong>Error:</strong> {message}
    </div>
  );
}
