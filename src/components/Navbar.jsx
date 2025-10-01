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
      if (scrollPosition > topSectionHeight * 0.8) {
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
      <li className="flex flex-row gap-60 pt-6 text-3xl">
        <a className="cursor-pointer" onClick={() => navigate("/")}>
          Home
        </a>
        <a className="cursor-pointer" onClick={() => navigate("/#events")}>
          Events
        </a>
        <a
          className="cursor-pointer whitespace-nowrap"
          onClick={() => navigate("/#about")}
        >
          About Us
        </a>
        <a className="cursor-pointer" onClick={() => navigate("/register")}>
          Register
        </a>
      </li>
    </nav>
  );
};

export default Navbar;
