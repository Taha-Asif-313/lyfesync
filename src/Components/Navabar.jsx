"use client";
import React, { useState } from "react";
import InputFields from "./InputFields";
import { Plus } from "lucide-react";

const Navbar = () => {
  const [showInputBox, setshowInputBox] = useState(false);

  return (
    <>
      {/* Input Dialog Box */}
      <InputFields Show={showInputBox} setShow={setshowInputBox} />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-20 backdrop-blur-xl bg-black/40 border-b border-primary/20 shadow-sm">
        <div className="relative flex justify-between items-center px-5 lg:px-24 py-3">
          {/* Grid Overlay for theme continuity */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none rounded-b-xl" />

          {/* Logo Section */}
          <div className="relative flex items-center gap-2">
            <img className="w-10 h-10" src="/logo.png" alt="logo" />
            <span className="text-lg font-bold text-white tracking-tight">
              Life<span className="text-primary font-bold">Sync</span>
            </span>
          </div>

          {/* Add Task Button */}
          <button
            onClick={() => setshowInputBox(true)}
            className="group relative flex items-center gap-2 text-sm font-medium text-white transition-all"
          >
            <Plus className="text-3xl p-1 bg-primary rounded-full text-white shadow-[0_0_10px_#00ba0f] group-hover:scale-110 transition-transform duration-300" />
            <span className="max-lg:hidden transition-all">Add New Task</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
