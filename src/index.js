import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import App from './App';
import AboutUsPage from './pages/about';
import ServicesPage from './pages/services';
import DoctorsPage from './pages/doctors';
import NewsPage from './pages/news';
import ContactPage from './pages/contact';

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
}, {
  path: "/about-us",
  element: <AboutUsPage/>,
}, {
  path: "/services",
  element: <ServicesPage/>,
}, {
  path: "/doctors",
  element: <DoctorsPage/>,
}, {
  path: "/news",
  element: <NewsPage/>,
} , {
  path: "/contact",
  element: <ContactPage/>,
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
