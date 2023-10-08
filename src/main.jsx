import React from 'react'



import * as ReactDOM from "react-dom/client";
import './index.css'
import {
 
  RouterProvider
} from "react-router-dom";
import routes from './routes/routes.jsx';
import Authprovider from './providers/Authprovider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router={routes}>
      
      </RouterProvider>
   </Authprovider>

  </React.StrictMode>,
)
