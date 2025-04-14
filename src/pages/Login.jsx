import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Adjust the path as needed

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    // Later: connect to backend or Firebase
  };

  return (
    <>
      <div
        className="w-screen min-h-screen bg-cover bg-center transition-opacity duration-1000 overflow-hidden fixed"
        style={{ backgroundImage: "url('/Load_page.png')" }}
      >
        
        {/* Background overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-transparent to-teal-200 opacity-70 pointer-events-none" />
        <Navbar />
        {/* Centered container for the login form */}
        <div className="flex items-center justify-center min-h-screen ">
          <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md relative z-10">
            <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
              Login to Cervify
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded-xl font-semibold hover:bg-blue-800 transition"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-sm text-center text-gray-600">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
