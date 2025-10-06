import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  useEffect(() => {
    // Check screen size for mobile detection (1250px breakpoint)
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    // Initial check
    checkScreenSize();

    // Listen for resize events
    window.addEventListener("resize", checkScreenSize);

    // Show navbar immediately on pages other than home
    if (location.pathname !== "/") {
      setIsVisible(true);
      return () => window.removeEventListener("resize", checkScreenSize);
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [location.pathname]);

  return (
    <>
      {/* Desktop Navbar */}
      {!isMobile && (
        <nav
          id="molde"
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-fit z-50 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <li className="flex flex-row gap-40 py-6 text-3xl mx-auto">
            <a
              className="cursor-pointer relative pb-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-2 after:h-2 after:bg-white after:rounded-full after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100"
              onClick={() => navigate("/")}
            >
              Home
            </a>
            <a
              className="cursor-pointer relative pb-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-2 after:h-2 after:bg-white after:rounded-full after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100"
              onClick={() => navigate("/#events")}
            >
              Events
            </a>
            <a
              className="cursor-pointer whitespace-nowrap relative pb-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-2 after:h-2 after:bg-white after:rounded-full after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100"
              onClick={() => navigate("/#about")}
            >
              About Us
            </a>
            <a
              className="cursor-pointer relative pb-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-2 after:h-2 after:bg-white after:rounded-full after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100"
              onClick={() => navigate("/register")}
            >
              Register
            </a>
          </li>
        </nav>
      )}

      {/* Mobile Hamburger Menu */}
      {isMobile && (
        <button
          className={`fixed top-6 right-6 z-50 p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white mt-1 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white mt-1 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-black/90 backdrop-blur-lg border-l border-white/20 z-40 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-white">
            <nav className="flex flex-col space-y-8 text-2xl" id="molde">
              <a
                className="cursor-pointer text-center hover:text-white/80 transition-colors duration-200 py-3 px-6 rounded-lg hover:bg-white/10"
                onClick={() => handleMobileNavigation("/")}
              >
                Home
              </a>
              <a
                className="cursor-pointer text-center hover:text-white/80 transition-colors duration-200 py-3 px-6 rounded-lg hover:bg-white/10"
                onClick={() => handleMobileNavigation("/#events")}
              >
                Events
              </a>
              <a
                className="cursor-pointer text-center hover:text-white/80 transition-colors duration-200 py-3 px-6 rounded-lg hover:bg-white/10"
                onClick={() => handleMobileNavigation("/#about")}
              >
                About Us
              </a>
              <a
                className="cursor-pointer text-center hover:text-white/80 transition-colors duration-200 py-3 px-6 rounded-lg hover:bg-white/10"
                onClick={() => handleMobileNavigation("/register")}
              >
                Register
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
