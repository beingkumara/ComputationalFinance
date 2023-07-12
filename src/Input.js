import React from "react";

function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="number"
      className="input-field"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
