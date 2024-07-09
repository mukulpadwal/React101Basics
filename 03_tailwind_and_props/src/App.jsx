import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <h1 className="font-bold mb-8">Card With Props</h1>
      <p>
        In React JS, the main difference between props and state is that the
        props are a way to pass the data or properties from one component to
        other components while the state is the real-time data available to use
        within that only component.
      </p>
      <Card
        imgSrc={
          "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        }
        imgAlt={"Laptop"}
        tags={["#Macbook", "#Apple", "#Laptop"]}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        }
        title={"About Macbook"}
      />
      <Card
        imgSrc={
          "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        }
        imgAlt={"Laptop"}
        tags={["#Macbook", "#Apple", "#Laptop"]}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        }
        title={"About Macbook"}
      />
    </>
  );
}

export default App;
