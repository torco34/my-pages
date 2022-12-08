import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./containerPages/Home";
import { Header } from "./components/Header";
import { AboutMe } from "./containerPages/AboutMe";
import { Skills } from "./containerPages/Skills";
import { NotFund } from "./containerPages/NotFund";
import { Project } from "./containerPages/Project";
import { Name } from "./components/Name";

function App() {
  return (
    <Router>
      <Header />
      <Name />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/skills" element={<Skills />}></Route>s
        <Route path="/about" element={<AboutMe />}></Route>
        <Route path="*" element={<NotFund />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
