import React from 'react';
import Welcome from '../assets/welcome.png';

function Content() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols gap-5">
      <article className="flex flex-wrap items-center bg-gray-200 justify-center rounded-xl p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="text-center sm:text-left w-full sm:w-auto">
          <h1 className="text-2xl sm:text-3xl pb-2 text-gray-900 dark:text-gray-100">
            Welcome, Rachelle Fualo!
          </h1>
        </div>
        <div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-4">
          <img className="w-[80px] sm:w-[100px] h-auto object-contain" src={Welcome} alt="Welcome" />
        </div>
      </article>
    </div>
  );
}

export default Content;
