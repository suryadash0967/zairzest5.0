import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

const LoginPage = () => {
  const [bgImage, setBgImage] = useState("/images/login.png");
  const [showPassword, setShowPassword] = useState(false);
  const [borderSize, setBorderSize] = useState("16px");

  // --- NEW: Form, loading, and error states ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage("/images/login.png");
        setBorderSize("8px");
      } else if (window.innerWidth < 1024) {
        setBgImage("/images/login.png");
        setBorderSize("12px");
      } else {
        setBgImage("/images/login.png");
        setBorderSize("16px");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- NEW: Handle login logic ---
  const onLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://zairzest-backend-2025-01-1.onrender.com/api/users/login/user",
        {
          email,
          password,
        }
      );

      // Assuming the token is in response.data.token
      const { token } = response.data;
      localStorage.setItem("authToken", token); // Save token

      navigate("/profile"); // Navigate to profile on success
    } catch (err) {
      // Handle login errors (e.g., invalid credentials)
      const errorMessage = err.response?.data?.message || "Login failed. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
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
        <div
          className="relative flex flex-col lg:flex-row w-10/12 max-w-[800px] gap-4 lg:gap-6 bg-[rgba(20,20,20,0.75)] shadow-[0_0_30px_#000] backdrop-blur-sm h-auto max-h-[75vh]"
          style={{
            border: `${borderSize} solid transparent`,
            borderImage: `url(/images/boarder.png) ${parseInt(borderSize) * 1.5
              } stretch`,
            borderImageSlice: `${parseInt(borderSize) * 1.5} fill`,
            borderImageWidth: borderSize,
            borderImageOutset: "0",
            borderImageRepeat: "stretch",
            boxSizing: "border-box",
            padding: `calc(${borderSize} + 12px)`,
            borderRadius: "0",
            overflow: "visible",
          }}
        >
          {/* Left side (image) */}
          <div className="relative z-10 hidden lg:flex lg:min-w-[250px] lg:max-w-[320px] flex-1 items-center justify-center">
            <img
              className="w-full h-[90%] pl-3.5 object-contain max-h-full"
              src="/images/fprint.png"
              alt="Signup Decorative"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<div class="flex items-center justify-center w-full h-full"><div class="text-6xl lg:text-8xl text-orange-500">⚡</div></div>';
              }}
            />
          </div>


          {/* Right side (form) */}
          <div className="relative z-10 flex max-w-[420px] flex-1 flex-col justify-start">
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

              {/* --- NEW: Error message display --- */}
              {error && (
                <p className="text-red-500 text-xs molde_ text-center">{error}</p>
              )}

              <div className="w-full molde_ text-left text-white/80 text-xs mt-2">
                Forget Password?{" "}
                <a
                  href="/reset-password"
                  className="font-semibold text-orange-500 hover:text-orange-400 transition-colors underline decoration-orange-500/50 hover:decoration-orange-400"
                >
                  Reset Password
                </a>
              </div>
              <div className="w-full molde_ text-left text-white/80 text-xs ">
                Don't have an account?{" "}
                <a
                  onClick={() => navigate("/register")}
                  className="cursor-pointer font-semibold text-orange-500 hover:text-orange-400 transition-colors underline decoration-orange-500/50 hover:decoration-orange-400"
                >
                  Sign Up
                </a>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  disabled={loading} // --- NEW: Disable button while loading ---
                  className="bg-[#FF4D00] text-3xl flex justify-center items-center text-white border-4 despina_ transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    width: "128px",
                    height: "60px",
                    borderWidth: "2px",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                  }}
                >
                  {/* --- NEW: Show loading text --- */}
                  {loading ? "..." : "LOGIN"}
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