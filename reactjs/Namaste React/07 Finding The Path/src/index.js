import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";

/**
  Online Food Ordering Site - Food Villa

  Layout 

  - Header 
    - Logo
    - Nav Links
  
  - Body
    - Search bar
    - Restaurant list
      - Restaurant Cards
        - Image
        - Name
        - description
        - stars
        - View More
  
  - Footer 
    - Links
    - Copyright

*/

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root_component = ReactDOM.createRoot(document.querySelector("#root"));
root_component.render(<RouterProvider router={appRouter} />);
