import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

// Pages
import Contact from './pages/Contact/Contact.jsx';
import Home from './pages/Home/Home.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Resume from './pages/Resume/Resume.jsx';

// Routers
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// CSS
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
