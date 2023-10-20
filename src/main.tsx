import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

import { ThemeProvider } from "@/providers/theme-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
