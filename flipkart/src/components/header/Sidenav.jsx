// import React from 'react'
// import CustomButtons from './CustomButtons'

// export default function Sidenav() {
//   return (
//     // <div className='absolute left-0 top-0 z-[1035] h-full w-60 l  bg-white'>
//       <CustomButtons />
//     // </div>
//   )
// }
import React, { useState } from 'react';
import "./Siidenav.css";
import CustomButtons from './CustomButtons';

function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='xl:hidden'>
      {/* Overlay that covers the entire screen */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-700 opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`sidebar  ${isOpen ? 'open' : ''} z-50`}>
        {/* Content */}
        <div className="content">
          <CustomButtons />
        </div>
      </div>

      {/* Button to toggle the sidebar */}
      <button
        className="fixed top-0 left-0 p-4  text-white z-50 "
        onClick={toggleSidebar}
      >
        ☰
      </button>
    </div>
  );
}

export default Sidenav;
