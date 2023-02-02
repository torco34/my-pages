import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";

import {
  DashboarView,
  Home,
  LoginView,
  EditProfileView,
  PublicProfileView,
  ChooseUserName,
  SignOutView,
} from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginView />} />
          <Route path="deshboar" element={<DashboarView />} />
          <Route path="deshboar/profile" element={<EditProfileView />} />
          <Route path="signout" element={<SignOutView />} />
          <Route path="u/:username" element={<PublicProfileView />} />
          <Route path="choose-username" element={<ChooseUserName />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
