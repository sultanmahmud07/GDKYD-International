import img1 from "../../../../../../public/assets/services/flags/1.png";
import img2 from "../../../../../../public/assets/services/flags/2.png";
import img3 from "../../../../../../public/assets/services/flags/3.png";
import img4 from "../../../../../../public/assets/services/flags/4.png";
import img5 from "../../../../../../public/assets/services/flags/5.png";
import img6 from "../../../../../../public/assets/services/flags/6.png";
import img7 from "../../../../../../public/assets/services/flags/7.png";
import Image from "next/image";
import Link from "next/link";

const GetStarted = () => {
    const flags = [
    {
      id: 1,
      name: "Dutch",
      img: img1,
    },
    {
      id: 1,
      name: "English",
      img: img2,
    },
    {
      id: 1,
      name: "French",
      img: img3,
    },
    {
      id: 1,
      name: "German",
      img: img4,
    },
    {
      id: 1,
      name: "Italian",
      img: img5,
    },
    {
      id: 1,
      name: "Japanese",
      img: img6,
    },
    {
      id: 1,
      name: "Russian",
      img: img7,
    },
  ];

  return (
    <div className=" py-3 md:py-8">
      <div className="main_container">
        <h2 className="text-center text-2xl md:text-4xl font-bold text-[#070F11] my-4 md:my-7">
        {"Let’s Get Started"}
        </h2>
        <div className="flex items-center justify-center py-3 md:my-5">
        <Link
          href={`/product`}
         className="shadow md:shadow-md font-semibold bg-gradient-to-r from-[#4177B7] to-[#86BCFC]  hover:bg-gradient-to-r hover:from-[#86BCFC] hover:to-[#4177B7] p-2 text-base md:text-lg px-3 md:px-10 rounded-md text-[#FFFFFF]  transition"
        >
         {"Get Instant Quote"}
        </Link>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-2 pt-3">
          {flags.map((item, i) => {
            return (
              <div key={i} className="flex items-center">
                <p className="pr-1 font-semibold">{item.name}</p>
                <Image
                  width={100}
                  src={item?.img}
                  alt={"flag-img"}
                  className="w-8"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
