import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Mainpage from "./DashboardPages/Mainpage";
import { FiMenu } from "react-icons/fi";
import '../../App.css';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Suspense fallback={<div className="flex items-center justify-center h-screen text-xl font-semibold">Loading Dashboard...</div>}>
      <div className="relative bg-[#fdfdff] min-h-screen flex">
        <button
          className="md:hidden fixed top-4 left-4 z-50 border-2 p-2 rounded bg-white shadow-md border-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu size={24} className="text-gray-700" />
        </button>
        <div
          className={`fixed inset-y-0 left-0 w-[220px] text-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 md:relative md:flex-shrink-0`}
        >
          <Sidebar />
        </div>
        <div className={`flex-1 bg-[#fdfdff] md:ml-[220px] transition-all duration-300 ${isOpen ? "ml-[220px]" : ""}`}>
          <Mainpage />
        </div>
      </div>
    </React.Suspense>
  );
}

