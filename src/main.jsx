import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App'
import Bio from './pages/Bio';
import CitrusSeason from './pages/Citrus-Season';
import RoomWithView from './pages/Room-With-View';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/#contact",
        element: <App />
      },
    ],
  },
  {
    path: "/bio",
    element: <Bio />
  },
  {
    path: "/projects/citrus-season",
    element: <CitrusSeason />
  },
  {
    path: "/projects/room-with-view",
    element: <RoomWithView />
  }
  ,
  {
    path: "/projects/true-romance",
    element: <CitrusSeason />
  },
  {
    path: "/projects/power-suit",
    element: <CitrusSeason />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
