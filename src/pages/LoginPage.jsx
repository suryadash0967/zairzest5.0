import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [bgImage, setBgImage] = useState("/images/login.png");
  const [showPassword, setShowPassword] = useState(false);
  // Form field states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // function to set image based on screen size
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage("/images/login.png");
      } else {
        setBgImage("/images/login.png");
      }
    };

    // run once at mount
    handleResize();
    // run whenever screen resizes
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };
  return (
    <>
      <Navbar />
      <div
        className="w-full h-[100vh] text-white relative flex justify-center items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative flex flex-col lg:flex-row w-10/12 max-w-[800px] gap-4 lg:gap-6 rounded-2xl bg-[rgba(20,20,20,0.75)] p-4 lg:p-6 shadow-[0_0_30px_#000] backdrop-blur-sm border border-white/20 h-auto max-h-[75vh]">
          {/* Decorative corner elements */}
          <div className="absolute top-3 left-3 w-5 h-5 lg:w-6 lg:h-6 border-l-2 border-t-2 border-[#FF4D00] rounded-tl-lg"></div>
          <div className="absolute top-3 right-3 w-5 h-5 lg:w-6 lg:h-6 border-r-2 border-t-2 border-[#FF4D00] rounded-tr-lg"></div>
          <div className="absolute bottom-3 left-3 w-5 h-5 lg:w-6 lg:h-6 border-l-2 border-b-2 border-[#FF4D00] rounded-bl-lg"></div>
          <div className="absolute bottom-3 right-3 w-5 h-5 lg:w-6 lg:h-6 border-r-2 border-b-2 border-[#FF4D00] rounded-br-lg"></div>

          {/* Left side (image) */}
          <div className="relative z-10 flex lg:min-w-[250px] lg:max-w-[320px] flex-1 items-center justify-center py-3 lg:py-0">
            <img
              className="w-full h-full object-contain max-h-full"
              src="/images/fprint.png"
              alt="Signup Decorative"
              onError={(e) => {
                // Fallback to icon if image fails to load
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<div class="flex items-center justify-center w-full h-full"><div class="text-6xl lg:text-8xl text-orange-500">⚡</div></div>';
              }}
            />
          </div>

          {/* Right side (form) */}
          <div className="relative z-10 flex max-w-[420px] flex-1 flex-col justify-start px-3 lg:px-4 py-4">
            <div className="w-full">
              <h2 className="text-2xl despina_ lg:text-5xl  leading-tight mb-2 text-white">
                Join the Echo
              </h2>
              <p className="mb-6 molde_ text-white/90 text-sm lg:text-sm">
                Sign in to be a part of{" "}
                <span className="font-bold text-[#FF4D00]">Zairzest 5.0</span>
              </p>
            </div>

            <form className="w-full flex flex-col gap-3" onSubmit={onLogin}>
              <div className="relative w-full molde_">
                <input
                  type="email"
                  placeholder="Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border-2 border-white/30  px-3 py-2.5 text-sm text-white placeholder-white/60 outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white/10 focus:shadow-lg hover:border-white/50"
                />
              </div>

              <div className="relative w-full molde_">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border-2 border-white/30  px-3 py-2.5 pr-10 text-sm text-white placeholder-white/60 outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white/10 focus:shadow-lg hover:border-white/50"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors text-sm"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              <div className="w-full molde_ text-left text-white/80 text-xs mt-2">
                Forget Password?{" "}
                <a
                  onClick={() => navigate("/reset-password")}
                  className="font-semibold text-orange-500 hover:text-orange-400 transition-colors underline decoration-orange-500/50 hover:decoration-orange-400"
                >
                  Reset Password
                </a>
              </div>
              <div className="w-full molde_ text-left text-white/80 text-xs ">
                Don't have an account?{" "}
                <a
                  onClick={() => navigate("/register")}
                  className="font-semibold text-orange-500 hover:text-orange-400 transition-colors underline decoration-orange-500/50 hover:decoration-orange-400"
                >
                  Sign Up
                </a>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-[#FF4D00] text-3xl flex justify-center items-center text-white border-4 despina_ transition-all duration-300 active:scale-[0.98]"
                  style={{
                    width: "128px",
                    height: "60px",
                    transform: "rotate(0deg)",
                    opacity: 1,
                    borderWidth: "2px",
                    paddingTop: "8px",
                    paddingRight: "24px",
                    paddingBottom: "8px",
                    paddingLeft: "24px",
                    gap: "10px",
                  }}
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
