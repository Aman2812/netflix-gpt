import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./containers/Login";
import Browse from "./containers/Browse";
import Watch from "./containers/Watch";

const App = () => {
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/watch/:id",
      element: <Watch/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
