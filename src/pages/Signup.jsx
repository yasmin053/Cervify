import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Adjust path if needed

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up:", { fullName, email, password });
    // Later: connect to Firebase or backend API
  };

  return (
    <>
      <div
        className="w-screen min-h-screen bg-cover bg-center transition-opacity duration-1000 overflow-hidden fixed"
        style={{ backgroundImage: "url('/Load_page.png')" }}
      >
        {/* Background overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-transparent to-teal-200 opacity-70 pointer-events-none" />
        
        {/* Fixed Navbar */}
        <Navbar />

        {/* Centered container for the signup form */}
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md relative z-10">
            <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
              Create Your Account
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-2 rounded-xl font-semibold hover:bg-purple-800 transition"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-purple-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
