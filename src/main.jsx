import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AOS from "aos";
import "aos/dist/aos.css";

// Animation
AOS.init({
  duration: 2000,
  once: true,
});


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
import Team from './components/Team.jsx';
import PrivacyPolicy from './components/PrivecyPolicy.jsx';
import Admin from './components/Dashboard/Admin.jsx'
import Terms from './components/TermsAndCondition.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/teachers",
        element: <Teachers></Teachers>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      // Button Link
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
      {
        path: "/team",
        element: <Team></Team>,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/admin",
        element: <Admin></Admin>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
