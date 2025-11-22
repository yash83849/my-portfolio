import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { id: "hero", label: "Hero" },
  { id: "mern", label: "Mern" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="w-screen bg-black overflow-hidden">
      <div className="py-4 lg:px-8 px-4 max-w-[1280px] h-16 m-auto text-white flex items-center justify-between">
        <div>
            <div>
  <a
    href="https://drive.google.com/file/d/10bum9vC2ucAiEozU8tCIt5YdeIP7JJa6/view?usp=drivesdk"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl bg-pink-700 rounded-3xl px-4 py-2 hover:bg-blue-500 text-white inline-block"
  >
    Resume
  </a>
</div>

          
        </div>

        <div className="flex lg:gap-8 gap-6 uppercase tracking-wider text-lg items-center">
          <span className="group rounded-3xl px-4 py-2 hover:bg-blue-500">
            <Link to="/" onClick={()=>scrollToSection("hero")}>Home</Link>
            <div className="w-0 group-hover:w-full h-0.5 bg-white duration-500" />
          </span>

          <span className="group rounded-3xl px-4 py-2 hover:bg-blue-500">
            <Link to="/Mern" onClick={()=>scrollToSection("mern")}>Services</Link>
            <div className="w-0 group-hover:w-full h-0.5 bg-white duration-500" />
          </span>

          <span className="group rounded-3xl px-4 py-2 hover:bg-blue-500">
            <Link to="/About" onClick={()=>scrollToSection("about")}>About</Link>
            <div className="w-0 group-hover:w-full h-0.5 bg-white duration-500" />
          </span>

          <span className="group rounded-3xl px-4 py-2 hover:bg-blue-500">
            <Link to="/Experience" onClick={()=>scrollToSection("experience")}>My Work</Link>
            <div className="w-0 group-hover:w-full h-0.5 bg-white duration-500" />
          </span>

          <span className="group rounded-3xl px-4 py-2 hover:bg-blue-500">
            <Link to="/Contact" onClick={()=>scrollToSection("contact")}>Contact</Link>
            <div className="w-0 group-hover:w-full h-0.5 bg-white duration-500" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
