import React from 'react';

function Login() {
  return (
    <div className='bg-gray-950 text-white h-screen flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold mb-6'>Login</h1>
      <form className='bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col gap-6 w-80'>
        <input
          type="text"
          className='bg-transparent border-2 border-gray-600 text-white p-3 rounded-md focus:outline-none focus:border-blue-400'
          placeholder='Username'
        />
        <input
          type="password"
          className='bg-transparent border-2 border-gray-600 text-white p-3 rounded-md focus:outline-none focus:border-blue-400'
          placeholder='Password'
        />
        <button className='bg-blue-600 hover:bg-blue-700 transition duration-200 p-3 rounded-md text-white font-semibold'>
          Login
        </button>
      </form>
      <p className='mt-4 text-gray-400'>
        Don't have an account? 
        <a href="/register" className='text-blue-400 hover:underline ml-1'>Register</a>
      </p>
    </div>
  );
}

export default Login;