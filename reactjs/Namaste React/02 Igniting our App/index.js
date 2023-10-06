import React from "react"
import ReactDOM from "react-dom/client"


const heading_react = React.createElement(
  "h1",
  {
    class: "Heading",
  },
  "Hello, React!!"
);
const para_react = React.createElement(
  "p",
  {
    class: "Paragraph",
  },
  "This heading is written using React"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading_react, para_react]
);

const root_react = ReactDOM.createRoot(document.querySelector("#root"));

root_react.render(container);
