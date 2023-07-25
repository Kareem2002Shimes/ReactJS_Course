import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
// import About from "./pages/About";
const LazyLoading = React.lazy(() => import("./pages/About"));
import Header from "./components/Header";
import Products from "./components/Products";
import NewProducts from "./components/NewProducts";
import FeaturedProducts from "./components/FeaturedProducts";
import Layout from "./components/Layout";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import AdminDetails from "./components/AdminDetails";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyLoading />
            </React.Suspense>
          }
        />
        <Route path="/products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<AdminDetails />} />
        </Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
