import React, { useState } from 'react';
import logo from '../assets/ducoe.jpg'; // Assuming you still need the logo import
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(''); 
  const [studentId, setStudentId] = useState('');
  const [twoDigitNum, setTwoDigitNum] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className='flex gap-8 justify-center bg-gray-900 items-center h-screen text-white p-4'>
      <form className='flex flex-col gap-4 w-full max-w-sm'>
        <h1 className='text-4xl font-bold'>Register</h1>

        {error && <p className='text-red-500'>{error}</p>}
        <input
          type="text"
          className='p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          className='p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <div className='flex items-center gap-2'>
          <input
            type="text"
            className='p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 w-3/4'
            placeholder='Student ID'
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
          <span className='text-white'>/</span>
          <input
            type="text"
            className='p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 w-1/4'
            placeholder='XX'
            value={twoDigitNum}
            onChange={(e) => setTwoDigitNum(e.target.value)}
            required
            maxLength={2}
          />
        </div>

        <label className="block mb-2 text-sm font-medium" htmlFor="file_input">Upload Your Student ID for review</label>
        <input 
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          id="file_input" 
          type="file" 
        />
        <p className="mt-1 text-sm text-gray-500" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

        <input
          type="password"
          className='p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          className='p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600'
          placeholder='Confirm Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type='submit'
          className='bg-blue-600 p-3 rounded hover:bg-blue-700 transition duration-300 flex items-center justify-center'
          disabled={loading}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 0116 0H4z"
                />
              </svg>
              Registering...
            </>
          ) : (
            'Register'
          )}
        </button>
        <h1>Already have an account? <a href="#" className='hover:text-blue-400'>Login here</a></h1>
      </form>
    </div>
  );
}

export default Register;