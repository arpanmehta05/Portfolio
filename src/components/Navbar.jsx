import React, { useState, useEffect } from "react";
import DownloadIcon from "./icons/DownloadIcon";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine current section based on scroll position for text color only
      const sections = [
        "hero",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100; // Add offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Arpan_Resume.pdf";
    link.download = "Arpan_Mehta_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Determine if current section has white background
  const isWhiteSection = ["about", "projects", "contact"].includes(
    currentSection
  );

  // Text colors based on background
  const textColor = isWhiteSection ? "text-black" : "text-white";
  const hoverColor = isWhiteSection
    ? "hover:text-gray-700"
    : "hover:text-gray-300";

  // Button colors - always visible regardless of background
  const buttonBg = isWhiteSection
    ? "bg-black text-white hover:bg-gray-800"
    : "bg-white text-black hover:bg-gray-200";

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          <div className="flex items-center space-x-4">
            <div
              className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-8 py-3 shadow-lg transition-all duration-300 ${
                isScrolled ? "bg-white/20 backdrop-blur-xl" : ""
              }`}
            >
              <div className="flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection("hero")}
                  className={`${textColor} font-bold text-lg ${hoverColor} transition-colors duration-200`}
                >
                  Arpan
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`${textColor} ${hoverColor} px-3 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className={`${textColor} ${hoverColor} px-3 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className={`${textColor} ${hoverColor} px-3 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className={`${textColor} ${hoverColor} px-3 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`${textColor} ${hoverColor} px-3 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  Contact
                </button>
              </div>
            </div>

            <button
              onClick={downloadResume}
              className={`${buttonBg} px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg`}
            >
              <DownloadIcon className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
