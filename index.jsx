import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import DesignOne from "/Designs/DesignOne"
import DesignTwo from "/Designs/DesignTwo"
import DesignThree from "/Designs/DesignThree"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DesignOne/>}/>
        <Route path="/designTwo" element={<DesignTwo />} />
        <Route path="/designThree" element={<DesignThree />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)