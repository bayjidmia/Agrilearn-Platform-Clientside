import {
  BookOpen,
  CircleUserRound,
  Cog,
  Menu,
  PanelLeftOpen,
  PanelRightOpen,
  Settings,
  X,
} from "lucide-react";
import { useContext, useState } from "react";
import { GiSprout } from "react-icons/gi";
import { Link } from "react-router";
import { Outlet } from "react-router";
import { AuthContext } from "../context/Authcontext";
import image from "../assets/image.png";

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (Desktop only) */}
      <div
        className={`hidden md:flex bg-green-900 flex-col text-white transition-all duration-300 ${
          isOpen ? "w-80" : "w-20"
        }`}
      >
        <Link to="/">
          <div className="flex gap-3  p-4 font-bold text-lg border-b border-green-800">
            <div className="w-8 h-8 rounded-xl bg-[#4CAF50] flex items-center justify-center text-white">
              <GiSprout className="w-6 h-6" />
            </div>
            {isOpen && (
              <span className="font-bold text-2xl text-white tracking-tight">
                Agri<span className="text-primary">Learn</span>
              </span>
            )}
          </div>
        </Link>

        <nav className="flex flex-col gap-2 p-3 flex-1">
          {/* <Link
            to="/dashboard"
            className="hover:bg-green-600 text-white p-2 rounded"
          >
            📊 {isOpen && "Dashboard"}
          </Link> */}
          <Link
            to="/dashboard/courses"
            className="hover:bg-green-600 p-2 rounded"
          >
            <div className="flex">
              <BookOpen className="inline-block mr-2" />

              {isOpen && (
                <span className="font-medium text-white ">Courses</span>
              )}
            </div>
          </Link>
          <Link
            to="/dashboard/users"
            className="hover:bg-green-600 p-2 rounded"
          >
            <div className="flex">
              <CircleUserRound className="inline-block mr-2" />

              {isOpen && <span className="font-medium text-white ">Users</span>}
            </div>
          </Link>
          <Link
            to="/dashboard/settings"
            className="hover:bg-green-600 p-2 rounded"
          >
            <div className="flex">
              <Settings className="inline-block mr-2" />
              {isOpen && "Settings"}
            </div>
          </Link>
        </nav>
        <div className="p-3">
          <button className="w-full flex items-center gap-2 hover:bg-red-600 p-2 rounded">
            🚪 {isOpen && "Logout"}
          </button>
        </div>
      </div>

      {/* 🔥 Mobile Modal Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 "
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative bg-green-900 text-white w-64 h-full flex flex-col">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3"
              onClick={() => setIsOpen(false)}
            >
              <X className="text-red-700 font-bold" />
            </button>

            <Link to="/">
              <div className="flex gap-3  p-4 font-bold text-lg border-b border-green-800">
                <div className="w-8 h-8 rounded-xl bg-[#4CAF50] flex items-center justify-center text-white">
                  <GiSprout className="w-6 h-6" />
                </div>
                <span className="font-bold text-2xl text-white tracking-tight">
                  Agri<span className="text-primary">Learn</span>
                </span>
              </div>
            </Link>

            <nav className="flex flex-col gap-2 p-3 flex-1">
              {/* <Link
                to="/dashboard"
                className="hover:bg-green-600 text-white p-2 rounded"
              >
                Dashboard
              </Link> */}
              <Link
                to="/dashboard/courses"
                className="hover:bg-green-600 p-2 rounded"
              >
                <div className="flex">
                  <BookOpen className="inline-block mr-2" />

                  <span className="font-medium text-white ">Courses</span>
                </div>
              </Link>
              <Link
                to="/dashboard/users"
                className="hover:bg-green-600 p-2 rounded"
              >
                <div className="flex">
                  <CircleUserRound className="inline-block mr-2" />

                  <span className="font-medium text-white ">Users</span>
                </div>
              </Link>
              <Link
                to="/dashboard/settings"
                className="hover:bg-green-600 p-2 rounded"
              >
                <div className="flex">
                  <Settings className="inline-block mr-2" />
                  settings
                </div>
              </Link>
            </nav>

            <div className="p-3">
              <button className="w-full flex items-center gap-2 hover:bg-red-600 p-2 rounded">
                🚪 Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="bg-white shadow px-4 py-3 flex items-center justify-between">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <PanelRightOpen className="text-primary hidden md:block" />
            ) : (
              <PanelLeftOpen className="text-primary hidden md:block" />
            )}

            {/* Mobile button always Plus */}
            <Menu className="text-primary md:hidden" />
          </button>

          <h1 className="font-semibold text-lg">Dashboard</h1>

          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full"
              src={user?.photoURL || image}
              alt="user"
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
