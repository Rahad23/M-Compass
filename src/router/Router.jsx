import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Modules from "../components/Modules/Modules";
import Pricing from "../components/Pricing/Pricing";
import Contact from "../components/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
          path:"/",
          element: <Home />
        },
        {
          path: "/modules",
          element:<Modules />
        },
        {
          path: "/pricing",
          element: <Pricing />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    },
  ]);
  
export default router;