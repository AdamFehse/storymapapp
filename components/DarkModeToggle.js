"use client";

import { useState } from "react";
import { Button } from "react-bootstrap";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false); // Manage dark mode state

  const toggleDarkMode = () => {
    const nextDarkMode = !darkMode;
    setDarkMode(nextDarkMode);

    const body = document.body;
    if (nextDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  };

  return (
    <Button
      onClick={toggleDarkMode}
      className="moon-button"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {darkMode ? (
        <span className="moon-icon">🌙</span>
      ) : (
        <span className="sun-icon">☀️</span>
      )}
    </Button>
  );
}
