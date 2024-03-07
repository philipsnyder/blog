import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import About from "./feature/about/about";
import AddBlog from "./feature/add-blog/add-blog";
import DevBlogContainer from "./feature/dev-blog/dev-blog-container";
// import { Provider } from "react-redux";
// import { store } from "./store";
import HomeContainer from "./feature/home/home-container";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomeContainer />,
        // loader: listLoader
      },
      {
        path: "/dev-blog",
        element: <DevBlogContainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/add-blog",
        element: <AddBlog />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
