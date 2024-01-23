# React Router DOM

- It is a third party library. Not a part of core react.
- React Router official Page : https://reactrouter.com/en/main

- React Router enables "client side routing".

## Why?

- Client side routing allows your app to update the URL from a link click without making another request for another document from the server.

### Setup

```
npm install react-router-dom
```
```
npm run dev
```

### Link and NavLink
- We can say that they both are almost the same in working.
- We use Link in place of `<a>` tag
    - to prevent page refreshing/reloading
- Structure of Link
    - `<Link to="path"></Link>`
- But NavLink comes with some extra features
    - it gives us a variable named `isActive` as a callback in className
    - we can use this variable to manipulate classes on the active page css classes.
    - isActive matches with the url to check which page is active currently.
- Structure of NavLink
    - `<NavLink to="path" className={({isActive, isPending}) => {``}}></NavLink>`


### Add routes to our react app
- We are using `RouterProvider` for this section.
- `RouterProvider` takes a prop known as route which we need to create and pass 
- 
```
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

// One way to create route
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);

<RouterProvider route={route}>
```
```
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout";

// Other way to create route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
    </Route>
  )
)

<RouterProvider route={route}>
```

### Taking dynamic values from url
- we can use `useParams()` hook provided by react-router-dom to get params from the url
-
```
import { useParams } from "react-router-dom";

function User() {
    const {userId} = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl p-4">User : {userId}</div>
  )
}

export default User;
```


### Making api calls optimized with loader() in Route
- In `<Route loader(() => {}) />` we have a prop named loader which can make the api calls optimized.

- To use it we need to create a basic api fetch function and export it so that we can use it inside the loader or we can write our entire logic in the callback.

- To get the data returned by loader we use the `useLoaderData()` hook in the component.