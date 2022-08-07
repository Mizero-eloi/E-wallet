import React from "react";

function Button({ onToggleModal, label }) {
  return (
    <button
      className=" mb-5 px-3 py-2 text-white rounded-md bg-gray-900"
      onClick={onToggleModal}
    >
      {label}
    </button>
  );
}

export default Button;
