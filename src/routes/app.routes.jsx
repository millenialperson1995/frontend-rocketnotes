import { Routes, Route } from "react-router-dom";

import { Home } from "../components/Home";
import { Profile } from "../components/Profile";
import { Details } from "../components/Details";
import { New } from "../components/New";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}