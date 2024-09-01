import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import AppRouter from "./routes/AppRouter";
import ToTop from "./components/ToTop";

function App() {
  return (
    <div className="App">
      <AppRouter />
      <ToTop />
    </div>
  );
}

export default App;
