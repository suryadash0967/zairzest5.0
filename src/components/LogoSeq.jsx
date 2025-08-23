import { useEffect, useState } from "react";
import grid from '../assets/images/grid.png'

const LogoSeq = () => {
    const totalFrames = 59;
    const [frame, setFrame] = useState(0);

    const images = Array.from({ length: totalFrames }, (_, i) => {
        const frameNumber = "1" + String(i).padStart(2, "0"); // 100–159
        return `/logo-seq/Comp ${frameNumber}.png`;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setFrame((prev) => (prev + 1) % totalFrames);
        }, 100);
        return () => clearInterval(interval);
    }, [totalFrames]);

    return (
        <div className="logo-seq-container">
            <img className="grid-img" src={grid} alt="" />
            <img
                src={images[frame]}
                alt={`frame ${frame + 1}`}
                className="logo-seq-image"
            />

            <div className="rendering-soon">[RENDERING SOON]</div>
            <div className="socials">
                <div className="socials-header">follow our socials to stay updated</div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="social-links"><a href="">[INSTAGRAM]</a></div>
                    <div className="social-links"><a href="">[LINKEDIN]</a></div>
                </div>
            </div>
        </div>
    );
};

export default LogoSeq;
