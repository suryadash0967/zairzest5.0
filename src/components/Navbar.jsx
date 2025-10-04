import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Show navbar immediately on pages other than home
    if (location.pathname !== "/") {
      setIsVisible(true);
      return;
    }

    // On home page, show navbar based on scroll position
    const handleScroll = () => {
      const topSectionHeight = window.innerHeight; // TopSection height
      const scrollPosition = window.scrollY;

      // Show navbar only when scrolled past TopSection
      if (scrollPosition > topSectionHeight * 1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initial check for home page
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      id="molde"
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-fit z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <li className="flex flex-row gap-40 py-6 text-3xl mx-auto">
        <a className="cursor-pointer relative pb-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-2 after:h-2 after:bg-white after:rounded-full after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100" onClick={() => navigate("/")}> 
          Home
        </a>
        <a className="cursor-pointer relative pb-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-2 after:h-2 after:bg-white after:rounded-full after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100" onClick={() => navigate("/#events")}>
          Events
        </a>
        <a
          className="cursor-pointer whitespace-nowrap relative pb-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-2 after:h-2 after:bg-white after:rounded-full after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100"
          onClick={() => navigate("/#about")}
        >
          About Us
        </a>
        <a className="cursor-pointer relative pb-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-2 after:h-2 after:bg-white after:rounded-full after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100" onClick={() => navigate("/register")}>
          Register
        </a>
      </li>
    </nav>
  );
};

export default Navbar;
