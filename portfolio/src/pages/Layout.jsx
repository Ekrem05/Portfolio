import { useState } from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
export default function Layout() {
  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    console.log("reach");
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }
  return (
    <main className={`${theme} bg-base `}>
      <Navigation onThemeChange={toggleTheme} theme={theme} />
      <Outlet />
      <Footer />
    </main>
  );
}
