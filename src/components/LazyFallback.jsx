import React, { useEffect, useState } from "react";

const LazyFallback = () => {
  const [bgImage, setBgImage] = useState("https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074323/Zenbg_ssd1kq.png");

  useEffect(() => {
    // function to set image based on screen size
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage("https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074323/zen_bg_phone_ohmed0.png");
      } else {
        setBgImage("https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074323/Zenbg_ssd1kq.png");
      }
    };

    // run once at mount
    handleResize();
    // run whenever screen resizes
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="w-full h-[100vh] text-white relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-screen flex flex-col items-center justify-center text-white text-7xl despina_">
        v.fiv5 Loading...
      </div>
    </div>
  );
};

export default LazyFallback;
