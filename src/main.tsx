
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/globals.css";
import "./styles/signature.css";
import { ScrollToTop } from "./components/layout/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <ScrollToTop />
    <App />
  </BrowserRouter>
);