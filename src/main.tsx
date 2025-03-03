import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router";
import router from "./routes/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


createRoot(document.getElementById("root")!).render(
  
    <RouterProvider router={router} />
  
);
