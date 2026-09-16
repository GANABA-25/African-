"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://images.pexels.com/photos/7618394/pexels-photo-7618394.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://res.cloudinary.com/dkjlpfa1q/image/upload/v1789477383/wallpaperflare.com_wallpaper_sv9hg2.jpg",
];

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="h-dvh w-full">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image}>
            <div
              className="h-dvh w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url("${image}")`,
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
