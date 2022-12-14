import React from "react";

import { Header } from "../components/Header";

export const AppRouter = () => {
  return;
  <Router>
    <Header />
    <Routes>
      <Route index path="/home" element={<Home />}></Route>
      <Route path="/project" element={<DeshborPges />}></Route>
      <Route path="/skills" element={<HomePges />}></Route>s
      <Route path="/about" element={<LoginPges />}></Route>
      <Route path="*" element={<RegistrePges />}></Route>
    </Routes>
  </Router>;
};
