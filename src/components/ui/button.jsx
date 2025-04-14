import React from "react";

export const Button = ({ children, className, size, variant, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition";
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-300 text-gray-700 hover:bg-gray-400",
    ghost: "bg-transparent text-blue-500 hover:bg-blue-100",
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${
        variantClasses[variant] || variantClasses.primary
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
