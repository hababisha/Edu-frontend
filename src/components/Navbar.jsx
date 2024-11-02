import React from 'react';

function Navbar() {
  return (
    <div className='h-[5.5em]  top-0 shadow-md w-full bg-gray-950 flex justify-around items-center z-10'>
      <div className='text-white'>
          Logo
      </div>
      <div className='text-white'>
          Profile
      </div>
    </div>
  );
}

export default Navbar;