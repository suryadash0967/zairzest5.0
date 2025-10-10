import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Reusable Image Carousel Component
const ImageCarousel = ({ images }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index} className="carousel-image-container">
          <img src={`${img}.jpg`} alt={`Carousel image ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

// https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074313/302_f2hhve.jpg

// Main Legacy Component
function Legacy() {
  const zairzest4Images = ["https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074312/401_jxub3i", "https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074312/402_m7zlm0", "https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074313/403_vinenq", "https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074312/404_m3dcjj"];
  const zairzest3Images = ["https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074311/301_kq1lup", "https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074313/302_f2hhve", "https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074311/303_ennkqd"];
  const zairzest2Images = ["https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074311/201_umzmaq", "https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074311/202_ud8uut", "https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074311/203_gjbusx"];

  return (
    <div className="legacy-wrapper" id="about">
      <div className="about-zairzest-wrapper">
        <div className="about-zairzest-head">
          About <span style={{ color: "#E9270A" }}>ZAIRZEST</span>
        </div>
        <div className="about-zaiezest-desc">
          Zairza, more than just a club, is a vibrant community of tech enthusiasts at Odisha University of Technology and Research. Rooted in our motto, "Wonder, Think, Create," we've been pushing the boundaries of innovation in Robotics, Software, and Design since 2005. Officially recognized as a central club in 2007, Zairza has consistently achieved excellence, earning numerous accolades.
        </div>
      </div>

      <div className="legacy-grid">
        <div className="legacy-top-grid">
          <div className="legacy-top-left">
            <div className="start-date legacy-card">
              <div className="card-main">2021</div>
              <div className="legacy-card-bottom legacy-zairzest-start">
                <div>Started in</div>
                <div>14 MAY, 2021</div>
              </div>
            </div>

            {/* Zairzest 4.0 Carousel Card */}
            <div className="legacy-card image-card">
              <div className="card-main">
                <ImageCarousel images={zairzest4Images} />
              </div>
              <div className="legacy-card-bottom">
                <div>Zairzest 4.0</div>
                <div>Conducted in 2024</div>
              </div>
            </div>
          </div>

          {/* Video Card */}
          <div className="legacy-top-right legacy-card video-card">
            <div className="card-main">
              <video autoPlay loop muted playsInline className="legacy-video">
                <source src="https://res.cloudinary.com/dzkuia4lg/video/upload/v1760074323/Video-500_fjfjys.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
              <div className="legacy-card-bottom">
                <div>Zairzest 4.0</div>
                <div>Conducted in 2024</div>
              </div>
          </div>
        </div>

        <div className="legacy-bottom-grid">
          <div className="legacy-bottom-left">
            <div className="legacy-card image-card">
              <div className="card-main">
                 <img src="https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074314/design-domain_mfr3tj.png" alt="Design Domains" className="single-image"/>
              </div>
              <div className="legacy-card-bottom">
                <div>Domains</div>
                <div>X domains</div>
              </div>
            </div>
            <div className="footfalls legacy-card">
              <div className="card-main">
                <img src="https://res.cloudinary.com/dzkuia4lg/image/upload/v1760074315/footfalls_ayezih.png" alt="Design Domains" className="single-image"/>
                </div>
              <div className="legacy-card-bottom">
                <div>Footfalls</div>
                <div>670+ footfalls</div>
              </div>
            </div>
          </div>

          <div className="legacy-bottom-right">
            {/* Zairzest 3.0 Carousel Card */}
            <div className="legacy-card image-card">
              <div className="card-main">
                 <ImageCarousel images={zairzest3Images} />
              </div>
              <div className="legacy-card-bottom">
                <div>Zairzest 3.0</div>
                <div>Conducted in 2023</div>
              </div>
            </div>
            <div className="legacy-card image-card">
               <div className="card-main">
                 <ImageCarousel images={zairzest2Images} />
              </div>
              <div className="legacy-card-bottom">
                <div>Events</div>
                <div>10+ events</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legacy;