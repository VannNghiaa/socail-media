import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import './index.css'
import Newsfeed from './pages/newsfeed/newsfeed';
import Discovery from './pages/discovery/discovery';
import Navbar from './components/navbar/navbar';
import Login from './pages/login/login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Newsfeed />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/discovery",
    element: <Discovery />
  },
  {
    path: "/chat"
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
