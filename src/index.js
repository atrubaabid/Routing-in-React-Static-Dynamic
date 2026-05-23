import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './common/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/blog';
import BlogDetails from './Pages/BlogDetails';
import EnquiryForm from './Pages/EnquiryFormHandlewithState';
import Error404 from './Pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter(
  [{
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  }, {
    path: 'contact',
    element: <EnquiryForm/>
  }, {
    path: 'blog',
    element: <Blog />,
  }, {
    path: 'blog/:id',
    element: <BlogDetails />
  },{
    path: '*',
    element: <Error404/>
  }

  ]
)


root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
