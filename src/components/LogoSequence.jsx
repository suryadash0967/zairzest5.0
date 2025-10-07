import { useEffect, useState } from "react";

import frame1 from "/public/images/hero-seq-1.png";
import frame2 from "/public/images/hero-seq-2.png";
import frame3 from "/public/images/hero-seq-3.png";
import frame4 from "/public/images/hero-seq-4.png";
import frame5 from "/public/images/hero-seq-5.png";

const LogoSequence = () => {
  const images = [frame1, frame2, frame3, frame4, frame5];
  const totalFrames = images.length;
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % totalFrames);
    }, 500); // adjust speed (ms)
    return () => clearInterval(interval);
  }, [totalFrames]);

  return (
    <div className="flex items-end justify-center absolute top-[30px] left-1/2 -translate-x-1/2">
      <div className="relative flex items-end w-[350px] md:w-[400px] lg:w-[500px]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`frame ${index + 1}`}
            className={`absolute inset-0 object-contain transition-opacity duration-700 ${
              frame === index ? "opacity-100" : "opacity-0"
            } ${index === 4 ? "top-[-3px]" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSequence;
