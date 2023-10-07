import React from 'react'

import App from './App.jsx'

import * as ReactDOM from "react-dom/client";
import './index.css'
import {
 
  RouterProvider
} from "react-router-dom";
import routes from './routes/routes.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
