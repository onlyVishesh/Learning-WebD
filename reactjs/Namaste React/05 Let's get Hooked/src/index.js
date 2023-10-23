import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
import Footer from "./components/Footer";

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
      <Body />
      <Footer />
    </>
  );
};

const root_component = ReactDOM.createRoot(document.querySelector("#root"));
root_component.render(<AppLayout />);
