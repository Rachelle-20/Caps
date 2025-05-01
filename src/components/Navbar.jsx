import React from 'react';
import { FaBars } from 'react-icons/fa';
import ProfileIcon from "../assets/profile-icon.jpg";
import DarkModeToggle from '../components/DarkmodeToggle';

function Navbar({ toggleSidebar, title, darkMode, handleDarkModeToggle }) {
  return (
<<<<<<< HEAD
    <div className="bg-white dark:bg-gray-900 h-16 border-b dark:border-gray-700 flex items-center justify-between px-4">
=======
    <div className="bg-white dark:bg-gray-800 h-16 order-b shadow-md dark:border-gray-900 flex items-center justify-between px-4">
>>>>>>> e51828008bc8668f65bce628aaa04ad6a13fe116
      <div className="flex items-center">
        <button
          className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
          onClick={toggleSidebar}
        >
<<<<<<< HEAD
          <FaBars className="h-4 w-4" />
        </button>
=======
          <FaBars className="h-4 w-4" />   
       </button>
>>>>>>> e51828008bc8668f65bce628aaa04ad6a13fe116
        {/* <h1 className="text-xl font-medium text-center sm:text-left ml-4 md:ml-0 hidden sm:block dark:text-gray-200">{title}</h1> */}
      </div>
      <div className="flex items-center gap-5 mr-2">
        <DarkModeToggle darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle} />
        <div className="flex items-center gap-2">
          <img
            src={ProfileIcon}
            alt="Profile"
            className="w-6 h-6 sm:w-6 sm:h-6 object-cover rounded-full border border-gray-300 dark:border-gray-600"
          />
<<<<<<< HEAD
          <span className="text-gray-500 dark:text-gray-200 font-normal text-sm hidden sm:block">Instructor</span>
=======
          <span className="text-gray-500 dark:textgray-200 font-normal text-sm hidden sm:block">Student</span>
>>>>>>> e51828008bc8668f65bce628aaa04ad6a13fe116
        </div>
      </div>
    </div>
  );
}

export default Navbar;
