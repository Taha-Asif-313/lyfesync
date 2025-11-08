import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navabar";

const ProtectedLayout = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white overflow-hidden">
      {/* Optional Background Glow or Design */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_60%)] pointer-events-none" />
      <Navbar />
      {/* Auth Container */}
      <div className="relative z-10 w-full max-w-md p-6 sm:p-8 bg-zinc-900/70 rounded-2xl shadow-lg backdrop-blur-md border border-zinc-800">
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedLayout;
