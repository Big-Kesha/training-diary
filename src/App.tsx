import React from "react";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { createBrowserRouter, Routes } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

function App() {
  return (
    <>
      <Header />
      <div>
        <h1>Getting started</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
