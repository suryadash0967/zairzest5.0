import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [bgImage, setBgImage] = useState("/images/register.png");
  const [showPassword, setShowPassword] = useState(false);
  const [borderSize, setBorderSize] = useState("20px");
  // Form field states
  const [name, setName] = useState("");
  const [regdNo, setRegdNo] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // function to set image and border size based on screen size
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage("/images/register.png");
        setBorderSize("8px");
      } else if (window.innerWidth < 1024) {
        setBgImage("/images/register.png");
        setBorderSize("12px");
      } else {
        setBgImage("/images/register.png");
        setBorderSize("16px");
      }
    };

    // run once at mount
    handleResize();
    // run whenever screen resizes
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
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
            borderImage: `url(/images/boarder.png) ${
              parseInt(borderSize) * 1.5
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
          <div className="relative z-10 flex lg:min-w-[250px] lg:max-w-[320px] flex-1 items-center justify-center">
            <img
              className="w-full h-[90%] pl-3.5 object-contain max-h-full"
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
          <div className="relative z-10 flex max-w-[420px] flex-1 flex-col justify-start">
            <div className="w-full">
              <h2 className="text-2xl despina_ lg:text-5xl  leading-tight mb-2 text-white">
                Join the Echo
              </h2>
              <p className="mb-6 molde_ text-white/90 text-sm lg:text-sm">
                Sign up to be a part of{" "}
                <span className="font-bold text-[#FF4D00]">Zairzest 5.0</span>
              </p>
            </div>

            <form className="w-full flex flex-col gap-3" onSubmit={onRegister}>
              <div className="relative w-full molde_">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border-2 border-white/30  px-3 py-2.5 text-sm text-white placeholder-white/60 outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white/10 focus:shadow-lg hover:border-white/50"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <div className="relative flex-1 molde_">
                  <input
                    type="text"
                    placeholder="Regd No."
                    value={regdNo}
                    onChange={(e) => setRegdNo(e.target.value)}
                    className="w-full rounded-md border-2 border-white/30  px-3 py-2.5 text-sm text-white placeholder-white/60 outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white/10 focus:shadow-lg hover:border-white/50"
                  />
                </div>
                <div className="relative flex-1 molde_ px-0.5">
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full rounded-md border-2 border-white/30  px-3 py-2.5 text-sm text-white/50 outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white/10 focus:shadow-lg hover:border-white/50"
                  >
                    <option value="" className="bg-gray-800">
                      Gender
                    </option>
                    <option value="male" className="bg-gray-800">
                      Male
                    </option>
                    <option value="female" className="bg-gray-800">
                      Female
                    </option>
                    <option value="other" className="bg-gray-800">
                      Other
                    </option>
                  </select>
                </div>
              </div>

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
                  placeholder="Create your own Password"
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
                Already have an account?{" "}
                <a
                  onClick={() => navigate("/login")}
                  className="font-semibold text-orange-500 hover:text-orange-400 transition-colors underline decoration-orange-500/50 hover:decoration-orange-400"
                >
                  Login
                </a>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-[#FF4D00] text-3xl flex justify-center items-center text-white border-4 despina_ transition-all duration-300 active:scale-[0.98]"
                  style={{
                    width: "250px",
                    height: "53px",
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
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
