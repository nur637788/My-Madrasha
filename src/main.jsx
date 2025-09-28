import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Teachers from './Pages/Teachers';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Logo from './components/Logo';
import GetStart from './components/GetStart.jsx';
import HeadMassege from './components/HeadMassege.jsx';
import SSCResult from './components/SSCResult.jsx';
import NurDev from './components/NurDev.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },

      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/teachers",
        element:<Teachers></Teachers>,
      },
      {
        path: "/Contact",
        element:<Contact></Contact>
      },

      { 
        path: "/login",
        element: <Login></Login>,
      },
        { 
        path: "/getstart",
        element: <GetStart></GetStart>,
      },
      { 
        path: "/logo",
        element: <Logo></Logo>,
      },
      { 
        path: "/headmassage",
        element: <HeadMassege></HeadMassege>,
      },
      { 
        path: "/sscresult",
        element: <SSCResult></SSCResult>,
      },
      { 
        path: "/nurdev",
        element: <NurDev></NurDev>,
      },
       
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
