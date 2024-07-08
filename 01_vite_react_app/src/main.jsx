import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return <>P</>;
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "http://mukulpadwal.me",
//     target: "_blank",
//   },
//   children: "Mukul Padwal Portfolio",
// };

const reactElement = React.createElement(
  "a",
  { href: "http://mukulpadwal.me", target: "_blank" },
  "Mukul Padwal | Portfolio"
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
