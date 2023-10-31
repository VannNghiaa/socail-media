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
import Register from './pages/register/register';
import Profile from './pages/profile/profile';
import ChatUser from './components/chat-people/chat-people';
import Chat from './pages/chats/chat';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Newsfeed />,
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/profile",
    element: <Profile/>
  },
  {
    path: "/discovery",
    element: <Discovery />
  },
  {
    path: "/chat",
    element: <Chat />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
