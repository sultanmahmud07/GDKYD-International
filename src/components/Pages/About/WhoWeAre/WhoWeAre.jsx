import Image from "next/image";
import img from "../../../../../public/assets/about-img/who-we-are.jpg";

const WhoWeAre = () => {
    return (
    <div className="my-6 md:my-14">
      <div className="main_container">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-3 md:gap-5">
          <div className="left_content_we">
            <h2 className="text-2xl md:text-3xl font-bold text-[#070F11] my-4">
              {"Company Overview"}
            </h2>
            <p className="my-2"> {"Since our establishment in 1999, Guangdong KYD Precision Machinery Co., Ltd. has been a leading manufacturer of nonwoven fabric product-making machines for over 20 years. As a trusted and experienced name in the industry, we specialize in the integration of machine and ultrasonic technology. Driven by a customer-first approach, we are dedicated to providing customized, integrated production solutions tailored to meet specific customer requirements."}</p>
            <h4 className="text-xl md:text-xl font-semibold text-[#070F11] my-1">
              {"Our Commitment"}
            </h4>
            <p className="my-2">
              {" "}
              {"At KYD, every stage of cooperation matters—design, production, and service. Our dedicated team of over 150 employees, including an R&D team of 40 skilled professionals, ensures continuous innovation to overcome technical challenges and optimize machine designs. Our after-sales team of 20+ members is always ready to provide prompt support, ensuring a seamless experience for our customers."} {"Innovation is at the heart of KYD. We consistently explore new technology applications, enhance product performance, and elevate service quality. This commitment has earned us widespread recognition and praise within the nonwoven products processing and equipment industry"}
            </p>
            <h4 className="text-xl md:text-xl font-semibold text-[#070F11] my-1">
              {"Innovation and Excellence"}
            </h4>
            {/* <p className="my-2">   {"Innovation is at the heart of KYD. We consistently explore new technology applications, enhance product performance, and elevate service quality. This commitment has earned us widespread recognition and praise within the nonwoven products processing and equipment industry"}</p> */}
            <p className="my-2"> {"With a strong global presence, our products are sold in over 30 countries, forming lasting partnerships with renowned clients in Japan, Vietnam, India, Venezuela, and Mexico. Trusted by over 800 companies—including industry leaders like Honeywell, WEGO, DJI, and Winner Medical—KYD is a reliable partner in the field of nonwoven machinery."}</p>
          </div>
          <div className="right_img_we">
            <Image
              width={800}
              src={img}
              alt={"Who-we-are-image"}
              className="w-full rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
