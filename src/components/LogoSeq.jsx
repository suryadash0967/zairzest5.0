import { useEffect, useState, useRef } from "react";
import grid from "../assets/images/grid.png";

const LogoSeq = () => {
  const totalFrames = 59;
  const [frame, setFrame] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef([]);

  // Preload all images
  useEffect(() => {
    const imagePromises = [];
    
    for (let i = 0; i < totalFrames; i++) {
      const frameNumber = "1" + String(i).padStart(2, "0");
      const img = new Image();
      img.src = `/png seq comp/Comp ${frameNumber}_compressed.png`;
      
      const promise = new Promise((resolve) => {
        img.onload = () => resolve(img);
        img.onerror = () => resolve(img); // Handle errors gracefully
      });
      
      imagePromises.push(promise);
      imagesRef.current[i] = img;
    }

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, [totalFrames]);

  // Start animation only after images are loaded
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % totalFrames);
    }, 100);
    
    return () => clearInterval(interval);
  }, [totalFrames, imagesLoaded]);

  if (!imagesLoaded) {
    return <div className="loading">Loading animation...</div>;
  }

  return (
    <div className="logo-seq-container">
      <img className="grid-img" src={grid} alt="background grid" />
      <img
        src={imagesRef.current[frame]?.src}
        alt={`frame ${frame + 1}`}
        className="logo-seq-image"
      />
      <div className="rendering-soon">[RENDERING SOON]</div>
      <div className="socials">
        <div className="socials-header">follow our socials to stay updated</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="social-links"><a href="">[INSTAGRAM]</a></div>
          <div className="social-links"><a href="">[LINKEDIN]</a></div>
        </div>
      </div>
    </div>
  );
};

export default LogoSeq;