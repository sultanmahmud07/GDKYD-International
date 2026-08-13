import img1 from "../../../../public/assets/services/processed/1.jpg";
import img2 from "../../../../public/assets/services/processed/2.jpg";
import img3 from "../../../../public/assets/services/processed/3.jpg";
import img4 from "../../../../public/assets/services/processed/4.jpg";
import Image from "next/image";

const ProductProcesses = () => {
  const processData = {
    section1: {
      title: "Face Mask Machinery",
      description: "KYD’s Face Mask Machinery is designed to streamline the production of medical and non-medical face masks with precision and efficiency. Our high-speed machines, such as the Fully Automatic Mask Making Machine, are capable of producing a wide range of face masks, including surgical masks, N95 respirators, and disposable face masks. These machines are equipped with advanced technology for seamless integration of fabric layers, ear loops, and nose bridges, ensuring quality masks with optimal filtration performance. With automated processes for cutting, folding, welding, and packaging, our machines increase production capacity while maintaining the highest quality standards."
    },
    section2: {
      title: "Cosmetic & Life Products Making Machinery",
      description: "Our Cosmetic & Life Products Making Machinery is tailored for the production of a variety of personal care items, cotton pads, and more. KYD’s Cosmetic Cotton Pad Machines are designed for high-speed production, ensuring consistency in product quality while optimizing efficiency. These machines offer customizable options to handle different materials, such as non-woven fabrics and spunlace fabrics, and are ideal for the fast-paced needs of the cosmetic and healthcare industries. Our machinery integrates cutting-edge technology to provide accurate dosing, folding, and packaging, improving both quality control and production time."
    },
    section3: {
      title: "Medical Products Making Machinery",
      description: "KYD’s Medical Products Making Machinery offers a comprehensive solution for producing high-quality medical supplies, including surgical masks, gowns, and other non-woven medical products. Our Medical Mask Making Machines are designed for the automatic production of medical-grade masks that meet global health standards. We also offer specialized machines like Medical Gown and Surgical Product Machines, ensuring sterile, precise manufacturing for the healthcare industry. Our machines are built with advanced features such as automatic fabric tension control, high-speed assembly, and strict quality control checks to ensure that every product meets the required medical standards."
    },
    section4: {
      title: "Packaging Machinery",
      description: "Our Packaging Machinery is engineered to streamline the packaging process for various industries, including medical, cosmetic, and industrial products. KYD’s Automatic Packaging Machines can efficiently package masks, wipes, and other products, ensuring minimal human intervention and reducing errors. These machines are designed to handle different types of packaging, such as blister packs, boxes, and plastic bags, with high speed and precision. Features like automated bagging, sealing, and labeling make them an ideal solution for businesses seeking to improve their packaging efficiency while maintaining a high standard of hygiene and presentation."
    }
  };

  const keys = ['section1', 'section2', 'section3', 'section4'];
  const images = [img1, img2, img3, img4];
  return (
    <div className="main_container py-5 md:py-16">
      <div className="flex flex-col gap-3 md:gap-5">
        {keys?.map((section, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col gap-3 md:gap-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  width={600}
                  src={images[index]}
                  alt={"Process images"}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Text */}
              <div className="w-full text-[#000000] p-0 md:px-7 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl md:text-4xl font-bold my-2 md:my-3 text-secondary">
                  {processData[section].title}
                </h2>
                <p className="my-2 md:my-4 md:text-xl"> {processData[section].description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductProcesses;
