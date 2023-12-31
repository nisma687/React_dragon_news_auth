



import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/login";
import Registration from "../pages/Registration/Registration";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";
  const routes = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
      children:[
        {
          path: "/",
          element:<Home/>,
          loader:()=>fetch('/news.json')
        },
        {
          path:"/news/:id",
          element:<PrivateRoute>
            <News/>
            </PrivateRoute>,
          loader:()=>fetch('/news.json')
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Registration/>
        }

      ]
    },
  ]);
  export default routes;