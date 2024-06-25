import Layout from "@/components/Layout/Layout";
import Home from "@/pages/Home/Home";
import Product from "@/pages/Product/Product";
import Products from "@/pages/Products/Products";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/products/:category",
        element: <Products />,
      },
    ],
  },
]);

export default router;
