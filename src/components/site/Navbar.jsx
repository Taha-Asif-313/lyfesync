"use client";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Plus, Sparkles, LogIn, User } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showInputBox, setShowInputBox] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tasks", path: "/tasks" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <>
      {/* 🌐 Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-background/80">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* 🔹 Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight hover:scale-105 transition-transform duration-200"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="text-primary"
              height={34}
              width={34}
            />
            <span className="text-foreground">
              Life<span className="text-primary">Sync</span>
            </span>
          </Link>

          {/* 🔸 Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* 🔘 Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Auth Buttons */}
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-muted hover:bg-muted/80 text-foreground transition-all duration-200 hover:scale-105 border border-border"
            >
              <LogIn size={16} />
              Login
            </Link>
            <Link
              to="/signup"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-primary/25"
            >
              <User size={16} />
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
