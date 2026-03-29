"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import s1 from "/public/img/sponsor/s1.png";
import s10 from "/public/img/sponsor/s10.png";
import s12 from "/public/img/sponsor/s12.png";
import s3 from "/public/img/sponsor/s3.png";
import s4 from "/public/img/sponsor/s4.png";
import s5 from "/public/img/sponsor/s5.png";
import s6 from "/public/img/sponsor/s6.png";
import s7 from "/public/img/sponsor/s7.png";
import s8 from "/public/img/sponsor/s8.png";
import s9 from "/public/img/sponsor/s9.png";

const SponorSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 2500,
    slidesToShow: 9,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1243,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1799,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

  return (
    <div className="footer__sponsor owl-theme owl-carousel">
      <Slider {...settings}>
        {[s1, s3, s4, s5, s6, s7, s8, s9, s10, s12].map((itm, i) => (
          <div key={i} className="footer__sponsor__items">
            <Link href="URL:void(0)">
              <Image src={itm} alt="simg" />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SponorSlider;
