import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardWrapper } from "./components/DashboardWrapper";

import {
  DashboarView,
  Home,
  LoginView,
  EditProfileView,
  PublicProfileView,
  ChooseUserName,
  SignOutView,
  DashView,
} from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <DashboardWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/dashboard" element={<DashView />} />
            <Route path="/dashboard/profile" element={<EditProfileView />} />
            <Route path="/signout" element={<SignOutView />} />
            <Route path="u/:username" element={<PublicProfileView />} />
            <Route path="/choose-username" element={<ChooseUserName />} />
          </Routes>
        </DashboardWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
