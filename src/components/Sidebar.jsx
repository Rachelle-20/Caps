import React from 'react';
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Updated logo.png";
import { CiHome, CiCreditCard2, CiLogout } from "react-icons/ci";

function Sidebar({ sidebarOpen, toggleSidebar, activePage, setActivePage }) {
  const navigate = useNavigate();

  const menuItems = [
<<<<<<< HEAD
    { name: 'Dashboard', icon: CiHome, path: '/TDashboard' },
    
=======
    { name: 'Dashboard', icon: CiHome, path: '/SDashboard' },
    { name: 'Evaluations', icon: CiCreditCard2, path: '/SEvaluations' }, 
>>>>>>> e51828008bc8668f65bce628aaa04ad6a13fe116
  ];

  const closeSidebar = () => {
    if (sidebarOpen && window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); 
    navigate("/login");
  };

  return (
    <div
<<<<<<< HEAD
      className={`fixed inset-0 z-40 transition-transform transform w-56 bg-[#1F3463] border-r border-gray-700 ${
=======
      className={`fixed inset-0 z-40 transition-transform transform w-56 bg-[#1F3463] dark:bg-gray-800 dark:border-gray-900 border-r border-gray-700 ${
>>>>>>> e51828008bc8668f65bce628aaa04ad6a13fe116
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      <nav className="flex flex-col h-full p-4 space-y-2 text-white">
        <div className="flex items-center justify-center pb-6 pt-5 gap-2">
          <img className="h-20 w-20" src={Logo} alt="Updated logo" />
        </div>

<<<<<<< HEAD
        <div className="flex flex-col gap-2 flex-grow">
=======
        <ul className="flex flex-col gap-2 flex-grow">
>>>>>>> e51828008bc8668f65bce628aaa04ad6a13fe116
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`list-none flex text-sm items-center gap-2 cursor-pointer p-2 rounded-lg transition-colors duration-200 ${
                activePage === item.name ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-500'
              }`}
              onClick={() => {
<<<<<<< HEAD
                setActivePage(item.path);
=======
                setActivePage(item.name);
                navigate(item.path);
>>>>>>> e51828008bc8668f65bce628aaa04ad6a13fe116
                closeSidebar();
              }}
            >
              <item.icon className="w-5 h-5" />
<<<<<<< HEAD
              <a>{item.name}</a>
            </li>
          ))}
        </div>

        <div className="flex">
=======
              <span>{item.name}</span>
            </li>
          ))}
        </ul>

        <div>
>>>>>>> e51828008bc8668f65bce628aaa04ad6a13fe116
          <li 
            className="list-none flex items-center gap-2 p-2 rounded-lg text-sm hover:bg-red-600 transition-colors duration-200 cursor-pointer"
            onClick={handleLogout}
          >
            <CiLogout className="w-6 h-6" />
<<<<<<< HEAD
            <a>Logout</a>
=======
            <span>Logout</span>
>>>>>>> e51828008bc8668f65bce628aaa04ad6a13fe116
          </li>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
