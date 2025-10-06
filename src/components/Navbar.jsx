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

      {/* Mobile Sidebar Toggle */}
      {isMobile && (
        <button
          className={`fixed top-6 right-6 sm:top-8 sm:right-8 z-50 p-3 sm:p-4 transition-all duration-300 ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <img
            src={
              isMobileMenuOpen
                ? "/images/close-sidebar.png"
                : "/images/open-sidebar.png"
            }
            alt={isMobileMenuOpen ? "Close sidebar" : "Open sidebar"}
            className={`object-contain transition-all duration-300 ease-in-out hover:opacity-80 ${
              isMobileMenuOpen
                ? "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                : "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            }`}
            onError={(e) => {
              // Fallback to text if images fail to load
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "block";
            }}
          />
          <div
            className={`text-white flex items-center justify-center ${
              isMobileMenuOpen
                ? "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-lg sm:text-xl lg:text-2xl"
                : "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-xl sm:text-2xl lg:text-3xl"
            }`}
            style={{ display: "none" }}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </div>
        </button>
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <div
          className={`fixed top-0 right-0 h-screen w-full sm:max-w-md lg:max-w-lg bg-black z-40 transform transition-all duration-500 ease-out ${
            isMobileMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex flex-col justify-between h-full px-6 sm:px-12 lg:px-16 py-12 sm:py-16">
            {/* Navigation Menu */}
            <nav
              className="flex flex-col space-y-8 sm:space-y-12 lg:space-y-16 text-white mt-12 sm:mt-16 lg:mt-20"
              id="molde"
            >
              <a
                className="cursor-pointer text-left  text-2xl sm:text-2xl lg:text-3xl xl:text-3xl font-light tracking-wide sm:tracking-wider lg:tracking-widest hover:text-white/80 transition-colors duration-300 leading-relaxed"
                onClick={() => handleMobileNavigation("/")}
              >
                Home
              </a>
              <a
                className="cursor-pointer text-left text-2xl sm:text-2xl lg:text-3xl xl:text-3xl font-light tracking-wide sm:tracking-wider lg:tracking-widest hover:text-white/80 transition-colors duration-300 leading-relaxed"
                onClick={() => handleMobileNavigation("/#events")}
              >
                Events
              </a>
              <a
                className="cursor-pointer text-left  text-2xl sm:text-2xl lg:text-3xl xl:text-3xl font-light tracking-wide sm:tracking-wider lg:tracking-widest hover:text-white/80 transition-colors duration-300 leading-relaxed"
                onClick={() => handleMobileNavigation("/#about")}
              >
                About Us
              </a>
              <a
                className="cursor-pointer text-left text-2xl sm:text-2xl lg:text-3xl xl:text-3xl font-light tracking-wide sm:tracking-wider lg:tracking-widest text-orange-500 hover:text-orange-400 transition-colors duration-300 leading-relaxed"
                onClick={() => handleMobileNavigation("/register")}
              >
                Register
              </a>
            </nav>

            {/* ZAIRZA Logo */}
            <div className="flex items-center justify-start mb-5 sm:mb-8 lg:mb-5">
              <img
                src="/images/zairza.png"
                alt="ZAIRZA"
                className="w-30 sm:w-28 lg:w-38 xl:w-36 h-auto object-contain transition-all duration-300 hover:opacity-80"
                onError={(e) => {
                  // Fallback to zairza.png if zairza-logo.png fails
                  e.target.src = "/images/zairza.png";
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 transition-opacity duration-500"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
