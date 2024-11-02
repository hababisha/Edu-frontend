import React, { useState } from 'react';
import logo from '../assets/ducoe.jpg';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-6 sm:py-12">
      <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-8">
        <img src={logo} alt="Logo" className="w-64 h-auto rounded-xl object-contain mb-4 sm:mb-0" />
        <div className="relative py-3 sm:w-96">
          <span className="text-2xl font-light">Login to your account</span>
          <div className="mt-4 bg-white shadow-md rounded-lg text-left">
            <div className="h-2 bg-blue-400 rounded-t-md"></div>
            <div className="px-8 py-6">
              <label className="block font-semibold">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="border-2 border-blue-300 w-full h-10 px-3 py-2 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="block mt-3 font-semibold">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="border-2 border-blue-300 w-full h-10 px-3 py-2 mt-2 hover:outline-none focus:outline-none focus:ring-blue-500 focus:ring-1 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex justify-between items-baseline mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Login
                </button>
                <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>


              </div>
              <a href="#" className="text-sm text-blue-500 mt-4 hover:underline">Don't have an account? Register</a>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;