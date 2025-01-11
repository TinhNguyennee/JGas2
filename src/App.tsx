import React from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import MainLayout from "./components/mainLayout";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];

const router = createBrowserRouter(appRoutes);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
