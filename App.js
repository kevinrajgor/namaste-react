import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Namaste Everyone!"
);
//  {} is used for defining id or classes or data types
const heading2 = React.createElement("h2", {}, "I am Kevin..");
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
