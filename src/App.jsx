import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import AppRouter from "./routes/AppRouter";
import ToTop from "./components/ToTop";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <AppRouter />
        <ToTop />
      </div>
    </CartProvider>
  );
}

export default App;
