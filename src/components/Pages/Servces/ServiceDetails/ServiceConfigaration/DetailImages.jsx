"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { BASEURL } from "../../../../../../Constant";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute right-2 top-1/3 z-10 transform-translate-y-1/2 bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-300"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-3 h-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute left-2 top-1/3 z-10 transform-translate-y-1/2 bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-300"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-3 h-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};
const DetailImages = ({ productImage }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full md:w-3/4 pt-3">
      {productImage?.length > 0 && (
        <PhotoProvider>
          <Slider {...settings}>
            {productImage?.map((img, i) => {
              return (
                <div key={i} className="px-2">
                  <PhotoView src={`${img}`}>
                    <Image
                      width={500}
                      height={400}
                      // src={img?.imgUrl}
                      src={`${img}`}
                      alt={"product-image"}
                      className="w-full  cursor-pointer"
                    />
                  </PhotoView>
                </div>
              );
            })}
          </Slider>
        </PhotoProvider>
      )}
    </div>
  );
};

export default DetailImages;
