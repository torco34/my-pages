import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DeshborPges, HomePges, LoginPges, RegistrePges } from "./pages";

import { Header } from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePges />}></Route>
        <Route path="/project" element={<LoginPges />}></Route>
        <Route path="/skills" element={<RegistrePges />}></Route>s
        <Route path="*" element={<DeshborPges />}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
