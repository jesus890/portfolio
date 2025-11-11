import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <KeyboardArrowRight
      className="text-amarillo"
      sx={{
        position: "absolute",
        top: "50%",
        right: -25,
        transform: "translateY(-50%)",
        fontSize: 40,
        zIndex: 0,
        cursor: "pointer",
      }}
      onClick={onClick}
      style={{ ...style, display: "block" }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <KeyboardArrowLeft
      className="text-amarillo"
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: -25,
        transform: "translateY(-50%)",
        color: "#FFD700",
        fontSize: 40,
        zIndex: 0,
        cursor: "pointer",
      }}
    />
  );
}

function Clients({isMobile}) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    className: "center",
    dots: true,
    centerPadding: "20px",
    slidesToShow: isMobile ? 1 : 3,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function Corporation({ number }) {
    return (
      <div className="bg-[#f3f3f3] h-auto rounded-md shadow-md text-center items-center text-negro font-thin p-5 w-[250px]">
        <div className="bg-[#d9d9d9] w-[90%] h-auto p-4 flex items-center text-center text-negro font-bold rounded-md mb-5 justify-center">
          <p> logo empresa</p>
        </div>
        <Stack spacing={1} sx={{ marginLeft: 5 }}>
          <Rating
            name="half-rating-read"
            defaultValue={number}
            precision={0.5}
            readOnly
          />
        </Stack>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    );
  }

  return (
    <div className="relative z-0 h-[full] bg-blanco w-full items-center justify-center p-10">
      <p className="justify-center text-center mt-6">
        <span className={`text-negro font-bold ${isMobile ? "text-2xl" : "text-4xl"}`}>
          Clientes y Alianzas
        </span>
        <span className={` text-negro font-thin block ${isMobile ? "text-xl" : "text-2xl"}`}>
          La confianza de la industria nos respalda.
        </span>
      </p>

      <div className="relative z-0 mt-4" style={{ zIndex: 0 }}>
        <Slider {...settings} >
            <Corporation number={3.5}/>
            <Corporation number={3.5}/>
            <Corporation number={4}/>
            <Corporation number={4.5}/>
        </Slider>
      </div>
    </div>
  );
}

export default Clients;
