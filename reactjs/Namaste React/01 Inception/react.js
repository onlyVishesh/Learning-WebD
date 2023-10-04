const heading_react = React.createElement("h1", {}, "Hello, React!!");
const para_react = React.createElement(
  "p",
  {},
  "This heading is written using React"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading_react, para_react]
);

const root_react = ReactDOM.createRoot(
  document.querySelector("#root-react")
);

root_react.render(container);