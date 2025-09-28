import React, { useEffect, useState } from "react";

const LazyFallback = () => {
  const [bgImage, setBgImage] = useState("/images/Zenbg.png");

  useEffect(() => {
    // function to set image based on screen size
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage("/images/zen_bg_phone.png");
      } else {
        setBgImage("/images/Zenbg.png");
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
