import React from "react";
import ReactDOM from "react-dom/client";

// using react (react element)

const heading_react = React.createElement(
  "h1",
  {
    className: "Heading",
    key: "heading",
  },
  "Hello, React!!"
);
const para_react = React.createElement(
  "p",
  {
    className: "Paragraph",
    key: "paragraph",
  },
  "This heading is written using React"
);

const list = React.createElement("ul", { key: "list" }, [
  React.createElement("li", { key: "item1" }, "Item 1"),
  React.createElement("li", { key: "item2" }, "Item 2"),
  React.createElement("li", { key: "item3" }, "Item 3"),
  React.createElement("li", { key: "item4" }, "Item 4"),
]);

const container_react = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading_react, para_react, list]
);

const root_react = ReactDOM.createRoot(document.querySelector("#root_react"));

root_react.render(container_react);

// Using JSX

const Container_jsx = (
  <div>
    <h1>Hello, JSX!!</h1>
    <p>This heading is written using JSX</p>
  </div>
);

const root_jsx = ReactDOM.createRoot(document.querySelector("#root_jsx"));
root_jsx.render(Container_jsx);

// React Components - name start with capital letter
// Functional - New
// Class Based Components - Old

const para_component = <p>This heading is written using React Component</p>;

const HeaderComponent = () => {
  return (
    <div>
      <h1>Hello, React Component!!</h1>
      {para_component}
    </div>
  );
};

// Functional Components used as tag
// react element use as variable in {}

const root_component = ReactDOM.createRoot(
  document.querySelector("#root_component")
);
root_component.render(<HeaderComponent />);
