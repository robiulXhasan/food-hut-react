import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // {
      //   //path: "/:mealId",
      //  // element: <ShowDetails />,
      //   loader: ({ params }) =>
      //     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}
      //   `),
      // },
    ],
  },
]);

export default router;
