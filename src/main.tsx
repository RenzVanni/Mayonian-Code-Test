import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CasinoLive from "./page/CasinoLive.tsx";
import { CustomContext } from "./context/globalContext.tsx";
import Sports from "./page/Sports.tsx";
import Favorites from "./page/Favorites.tsx";
import Invite from "./page/Invite.tsx";
import Cashier from "./page/Cashier.tsx";
import {
  CASHIER,
  FAVORITES,
  INDEX,
  INVITE,
  SPORTS,
} from "./Constants/slugs.ts";

const router = createBrowserRouter([
  {
    path: INDEX,
    element: <App />,
    children: [
      {
        path: INDEX,
        element: <CasinoLive />,
      },
      {
        path: SPORTS,
        element: <Sports />,
      },
      {
        path: FAVORITES,
        element: <Favorites />,
      },
      {
        path: INVITE,
        element: <Invite />,
      },
      {
        path: CASHIER,
        element: <Cashier />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomContext>
      <RouterProvider router={router} />
    </CustomContext>
  </StrictMode>
);
