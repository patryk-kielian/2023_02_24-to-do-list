import { ReactDOM, createRoot } from "react-dom";
import { StrictMode } from "react";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
