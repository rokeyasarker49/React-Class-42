import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import AboutDetails from './components/AboutDetails/AboutDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "/users/:id",
        element: <AboutDetails></AboutDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      },
      {
        path: "/About",
        element: <About></About>
      },
      {
        path: "/Contact",
        element: <Contact></Contact>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
