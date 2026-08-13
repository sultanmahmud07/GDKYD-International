import React from 'react';
import WhyChooseUsContent from "./WhyChooseUsContent"; 
// Images
import img1 from "../../../../../public/assets/home-img/why-chose-us/Commitment.svg";
import img2 from "../../../../../public/assets/home-img/why-chose-us/Advanced-Technology.svg";
import img3 from "../../../../../public/assets/home-img/why-chose-us/Expertise.svg";
import img4 from "../../../../../public/assets/home-img/why-chose-us/Tailored-Solutions.svg";
import img5 from "../../../../../public/assets/home-img/why-chose-us/Responsive-Transparent.svg";
import img6 from "../../../../../public/assets/home-img/why-chose-us/Cost-Effective.svg";

const WhyChooseUs = () => {
  const featuresData = [
    {
      id: 0,
      image: img1,
      title: "Tailored Solutions for Your Needs ",
      description: "We design custom machinery to meet your specific business requirements, ensuring high precision, efficiency, and reliability in every production cycle."
    },
    {
      id: 1,
      image: img2,
      title: "Advanced Technology",
      description: "Our machinery integrates over 60 advanced control devices, optimizing your production line with the latest innovations for improved accuracy and reduced waste."
    },
    {
      id: 2,
      image: img3,
      title: "Industry Expertise",
      description: "With over 200 skilled professionals, our team has decades of experience manufacturing non-woven processing equipment, delivering solutions that meet modern industry demands."
    },
    {
      id: 3,
      image: img4,
      title: "Proven Quality",
      description: "Since 1999, we've provided durable, high-quality machinery for industries like healthcare, beauty, and hospitality, ensuring reliable performance and consistent results."
    },
    {
      id: 4,
      image: img5,
      title: "Reliable After-Sales Support",
      description: "We offer 24/7 support, including installation, training, and maintenance, ensuring your equipment operates efficiently and remains in peak condition throughout its lifecycle."
    },
    {
      id: 5,
      image: img6,
      title: "Cost-Effective Manufacturing",
      description: "Our machines combine high performance and affordability, delivering superior results without compromising your budget or operational efficiency."
    }
  ];

  return (
    <div className="py-5 md:py-8 bg-[#E4E5DF]">
      {/* Pass pure data to the client component */}
      <WhyChooseUsContent 
        title="Why Choose Us: Because Your Success is Our Priority"
        buttonText="SEE OUR WORK"
        features={featuresData}
      />
    </div>
  );
};

export default WhyChooseUs;