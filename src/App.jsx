import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import {
  DashboarView,
  Home,
  LoginView,
  EditProfileView,
  PublicProfileView,
  ChooseProfileView,
} from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/deshboar" element={<DashboarView />} />
          <Route path="/deshboar/profile" element={<EditProfileView />} />
          <Route path="/signout" element={<EditProfileView />} />
          <Route path="u/:username" element={<PublicProfileView />} />
          <Route path="choose-username" element={<ChooseProfileView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
