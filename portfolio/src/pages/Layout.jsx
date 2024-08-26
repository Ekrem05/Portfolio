import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
export default function Layout() {
  const [theme, setTheme] = useState(null);
  function toggleTheme() {
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === null) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem("theme", "dark");
        setTheme("dark");
      } else {
        localStorage.setItem("theme", "light");
        setTheme("light");
      }
    } else {
      localStorage.setItem("theme", savedTheme);
      setTheme(savedTheme);
    }
  }, []);
  return (
    <main className={`${theme} bg-base `}>
      <Navigation onThemeChange={toggleTheme} theme={theme} />
      <Outlet />
      <Footer />
    </main>
  );
}
