import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CartProvider from "./Store/CartProvider";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Body from "./components/Body/Body";
import Layout from "./components/Layout/Layout"
import Home from "./components/Pages/Home";
const router = createBrowserRouter([
  { path: "/", element: <Layout />, 
  children:[
    {path:"",element:<Home/>},
  { path: "about", element: <About />},
  { path: "contact", element: <Contact /> },
  { path: "store", element: <Body />  },
  ]
}]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
