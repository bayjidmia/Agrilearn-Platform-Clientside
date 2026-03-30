import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import { Login } from "../features/auth/Login";
import { Register } from "../features/auth/Register";

import DashboardLayout from "../layouts/DashboardLayout";
import ContactPage from "../pages/Contact/ContactPage";
import AboutSection from "../pages/About/AboutSection";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "about",
        Component: AboutSection,
      },
    ],
  },
  {
    path: "dashboard",
    Component: DashboardLayout,
  },
]);
