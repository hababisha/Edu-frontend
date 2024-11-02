import React from 'react';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <Navbar />
      <div className='flex-grow flex flex-col justify-center items-center mt-[5.5em]'>
        <h1 className='text-2xl mb-6'>Hello World! Welcome to Hell!</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-2xl'> {/* Adjusted grid column settings and max width */}
          <div className='bg-gray-100 p-5 rounded-lg shadow-lg text-center text-gray-800 border-b-4 border-blue-400 transform transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col items-start'>
            <h2 className='text-xl'>Bono</h2>
            <p className='mt-2 text-left'>Door System. Request for approval.</p>
          </div>
          <div className='bg-gray-100 p-5 rounded-lg shadow-lg text-center text-gray-800 border-b-4 border-blue-400 transform transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col items-start'>
            <h2 className='text-xl'>Library</h2>
            <p className='mt-2 text-left'>Generate QR code to get into the library.</p>
          </div>
          <div className='bg-gray-100 p-5 rounded-lg shadow-lg text-center text-gray-800 border-b-4 border-blue-400 transform transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col items-start'>
            <h2 className='text-xl'>Dabo</h2>
            <p className='mt-2 text-left'>Generate QR code to get into cafeteria.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;