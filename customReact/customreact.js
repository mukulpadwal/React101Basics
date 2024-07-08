function customRender(reactElement, rootContainer) {
  /*
  // Create the html element that we can inject into the app
  const element =  document.createElement(reactElement.type);
  element.innerText = reactElement.children;
  element.setAttribute("href", reactElement.props.href);
  element.setAttribute("target", reactElement.props.target);

  // Inject
  rootContainer.appendChild(element);
  */

  // Make it more modular
  const element = document.createElement(reactElement.type);
  element.innerText = reactElement.children;
  for (const prop in reactElement.props) {
    element.setAttribute(prop, reactElement.props[prop]);
  }

  // Inject
  rootContainer.appendChild(element);
}

const rootContainer = document.getElementById("root");

// At the end it is transformed into tree like structure
const reactElement = {
  type: "a",
  props: {
    href: "http://mukulpadwal.me",
    target: "_blank",
  },
  children: "Mukul Padwal Portfolio",
};

customRender(reactElement, rootContainer);
