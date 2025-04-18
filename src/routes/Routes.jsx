import {
    createBrowserRouter,
  
  } from "react-router";
  
  import React from "react";
  import ReactDOM from "react-dom/client";
import MainLayout from "../layouts/MainLayout";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
    },
  ]);
  
//   const root = document.getElementById("root");
  
//   ReactDOM.createRoot(root).render(
//     <RouterProvider router={router} />
//   );
  
  export default router;