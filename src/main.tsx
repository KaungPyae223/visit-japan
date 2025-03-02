import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router";
import router from "./routes/router";

createRoot(document.getElementById("root")!).render(
  
    <RouterProvider router={router} />
  
);
