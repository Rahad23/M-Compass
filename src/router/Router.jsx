import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Modules from "../components/Modules/Modules";

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
        }
      ]
    },
  ]);
  
export default router;