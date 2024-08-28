import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <div className="app">
        <Outlet />
      </div>
    </>
  );
}

export default App;
