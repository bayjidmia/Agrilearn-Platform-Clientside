import { Link, Menu } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-green-700 text-white transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="p-4 font-bold text-lg border-b border-green-600">
          🌿 {isOpen && "KrishiLearn"}
        </div>

        <nav className="flex flex-col gap-2 p-3">
          <Link to="/dashboard" className="hover:bg-green-600 p-2 rounded">
            📊 {isOpen && "Dashboard"}
          </Link>
          <Link
            to="/dashboard/courses"
            className="hover:bg-green-600 p-2 rounded"
          >
            📚 {isOpen && "Courses"}
          </Link>
          <Link
            to="/dashboard/users"
            className="hover:bg-green-600 p-2 rounded"
          >
            👥 {isOpen && "Users"}
          </Link>
          <Link
            to="/dashboard/settings"
            className="hover:bg-green-600 p-2 rounded"
          >
            ⚙️ {isOpen && "Settings"}
          </Link>
        </nav>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="bg-white shadow px-4 py-3 flex items-center justify-between">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </button>

          <h1 className="font-semibold text-lg">Dashboard</h1>

          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Outlet Content */}
        <div className="p-4 overflow-y-auto flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
