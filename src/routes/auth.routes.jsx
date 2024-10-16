import { Routes, Route, Navigate } from "react-router-dom";

import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";

export function AuthRoutes() {
  const user = localStorage.getItem("@rocketnotes:user");

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      {!user && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  )
}