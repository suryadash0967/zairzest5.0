import { useEffect, useState } from "react";

const LogoSequence = () => {
  const images = [
    "https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074316/hero-seq-1_vyufku.png",
    "https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074316/hero-seq-2_n1ibrx.png",
    "https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074316/hero-seq-3_i9fipa.png",
    "https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074316/hero-seq-4_co3vl2.png",
    "https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074316/hero-seq-5_pxfd1r.png",
  ];

  const totalFrames = images.length;
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % totalFrames);
    }, 500);
    return () => clearInterval(interval);
  }, [totalFrames]);

  return (
    <div className="flex items-end justify-center absolute top-[25px] left-1/2 -translate-x-1/2">
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
