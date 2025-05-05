import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: async () =>
      fetch("https://coffee-store-server-omega-lilac.vercel.app/coffee"),
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: async ({ params }) =>
      fetch(
        `https://coffee-store-server-omega-lilac.vercel.app/coffee/${params.id}`
      ),
  },

  {
    path: "signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "users",
    element: <Users></Users>,
    loader: async () =>
      fetch("https://coffee-store-server-omega-lilac.vercel.app/users"),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
