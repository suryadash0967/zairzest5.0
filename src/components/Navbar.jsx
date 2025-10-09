import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // --- NEW: State to track authentication status ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // --- NEW: Logout handler ---
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear token
    setIsAuthenticated(false);
    setIsMobileMenuOpen(false); // Close menu
    navigate('/login'); // Redirect to login
  }

  const handleNavigation = (path) => {
    setIsMobileMenuOpen(false);
    if (path.startsWith("/#")) {
      const elementId = path.substring(2);
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      if (path === "/" && location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(path);
      }
    }
  };

  useEffect(() => {
    // --- NEW: Check auth status on every route change ---
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    if (location.pathname !== "/") {
      setIsVisible(true);
    } else {
      const handleScroll = () => {
        const topSectionHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        setIsVisible(scrollPosition > topSectionHeight * 0.1);
      };
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [location.pathname]);

  const navLinkClass = "cursor-pointer relative pb-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-2 after:h-2 after:bg-white after:rounded-full after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100";
  const mobileNavLinkClass = "cursor-pointer text-left text-2xl sm:text-2xl lg:text-3xl xl:text-3xl font-light tracking-wide sm:tracking-wider lg:tracking-widest hover:text-white/80 transition-colors duration-300 leading-relaxed";

  return (
    <>
      {/* Desktop Navbar */}
      {!isMobile && (
        <nav
          id="molde"
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-fit z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <ul className="flex flex-row gap-40 py-6 text-3xl mx-auto">
            <li className={navLinkClass} onClick={() => handleNavigation("/")}>Home</li>
            <li className={navLinkClass} onClick={() => handleNavigation("/#events")}>Events</li>
            <li className={`${navLinkClass} whitespace-nowrap`} onClick={() => handleNavigation("/#about")}>Legacy</li>

            {(() => {
              if (location.pathname === "/register") {
                return (
                  <li className={navLinkClass} onClick={handleLogout}>
                    Login
                  </li>
                );
              } else if (location.pathname === "/login") {
                return (
                  <li className={navLinkClass} onClick={() => handleNavigation("/register")}>
                    Register
                  </li>
                );
              } else if (location.pathname === "/profile") {
                return (
                  <li className={navLinkClass} onClick={handleLogout}>
                    Logout
                  </li>
                );
              } else if (isAuthenticated) {
                return (
                  <>
                    <li className={navLinkClass} onClick={() => handleNavigation("/profile")}>Profile</li>
                    <li className={navLinkClass} onClick={handleLogout}>Logout</li>
                  </>
                );
              } else {
                return (
                  <>
                    <li className={navLinkClass} onClick={() => handleNavigation("/register")}>Register</li>
                  </>
                );
              }
            })()}
          </ul>
        </nav>
      )}

      {/* Mobile Sidebar Toggle */}
      {isMobile && (
        <button
          className={`fixed top-6 right-6 sm:top-8 sm:right-8 z-50 p-3 sm:p-4 transition-all duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <img
            src={isMobileMenuOpen ? "/images/close-sidebar.png" : "/images/open-sidebar.png"}
            alt={isMobileMenuOpen ? "Close sidebar" : "Open sidebar"}
            className={`object-contain transition-all duration-300 ease-in-out hover:opacity-80 ${isMobileMenuOpen ? "w-6 h-6 sm:w-7 sm:h-7" : "w-8 h-8 sm:w-10 sm:h-10"}`}
          />
        </button>
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <div
          className={`fixed top-0 right-0 h-screen w-full sm:max-w-md bg-black z-40 transform transition-all duration-500 ease-out ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
          <div className="flex flex-col justify-between h-full px-6 sm:px-12 py-12">
            <nav className="flex flex-col space-y-8 sm:space-y-12 mt-12" id="molde">
              <a className={mobileNavLinkClass} onClick={() => handleNavigation("/")}>Home</a>
              <a className={mobileNavLinkClass} onClick={() => handleNavigation("/#events")}>Events</a>
              <a className={mobileNavLinkClass} onClick={() => handleNavigation("/#about")}>Legacy</a>

              {(() => {
                if (location.pathname === "/register") {
                  return (
                    <a className={`${mobileNavLinkClass} text-orange-500`} onClick={handleLogout}>
                      Logout
                    </a>
                  );
                } else if (location.pathname === "/login") {
                  return (
                    <a className={`${mobileNavLinkClass} text-orange-500`} onClick={() => handleNavigation("/register")}>
                      Register
                    </a>
                  );
                } else if (location.pathname === "/profile") {
                  return (
                    <a className={`${mobileNavLinkClass} text-orange-500`} onClick={handleLogout}>
                      Logout
                    </a>
                  );
                } else if (isAuthenticated) {
                  return (
                    <>
                      <a className={mobileNavLinkClass} onClick={() => handleNavigation("/profile")}>Profile</a>
                      <a className={`${mobileNavLinkClass} text-orange-500`} onClick={handleLogout}>Logout</a>
                    </>
                  );
                } else {
                  return (
                    <>
                      <a className={`${mobileNavLinkClass} text-orange-500`} onClick={() => handleNavigation("/register")}>Register</a>
                    </>
                  );
                }
              })()}
            </nav>
            <div className="flex items-center justify-start mb-5">
              <img
                src="/images/zairza.png"
                alt="ZAIRZA"
                className="w-30 sm:w-28 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;