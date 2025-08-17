"use client";
import Navbar from "../../components/Navbar/Navbar.jsx";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher.jsx";

export default function ClientNavbar() {
  return (
    <div className="relative w-full my-8" style={{ minHeight: 40 }}>
      <div className="flex justify-center">
        <Navbar
          options={[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/uses", label: "Uses" },
          ]}
        />
      </div>
      <div className="absolute" style={{ left: "88%", top: "50%", transform: "translateY(-50%)" }}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
