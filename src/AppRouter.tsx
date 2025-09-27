import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Projects } from "./components/Projects";
export function AppRouter() {
  return <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
      </BrowserRouter>;
}