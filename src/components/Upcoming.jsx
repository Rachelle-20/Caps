import React from 'react';
import { useOutletContext } from 'react-router-dom';
import ResponsiveCalendar from '../components/Calendar';
import Stats from '../components/Stats'; // Import Stats

function Upcoming() {
  const { isDarkMode } = useOutletContext();

  return (
<<<<<<< HEAD
    <div className="pt-1">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Left column for Stats */}
        <div className="lg:col-span-1 border shadow-md rounded-xl p-2 dark:bg-gray-800 dark:border-gray-700 bg-white border-gray-200">
=======
    <div className="pt-3">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Left column for Stats */}
        <div className="lg:col-span-1 bg-gray-200 border shadow-md rounded-xl p-2 dark:bg-gray-800 dark:border-gray-700 bg-white border-gray-200">
>>>>>>> e51828008bc8668f65bce628aaa04ad6a13fe116
          <Stats />
        </div>

        {/* Right column for Calendar */}
<<<<<<< HEAD
        <div className="lg:col-span-2 border shadow-md rounded-xl p-2 dark:bg-gray-800 dark:border-gray-700 bg-white border-gray-200">
=======
        <div className="lg:col-span-2 bg-gray-200 border shadow-md rounded-xl p-2 dark:bg-gray-800 dark:border-gray-700 bg-white border-gray-200">
>>>>>>> e51828008bc8668f65bce628aaa04ad6a13fe116
          <ResponsiveCalendar isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
