import WintechStandardContent from "./WintechStandardContent";

// Import your images
import img1 from "../../../../../public/assets/services/standard/1.png";
import img2 from "../../../../../public/assets/services/standard/2.png";
import img3 from "../../../../../public/assets/services/standard/3.png";

const WintechStandard = () => {
  const itemsData = [
    {
      image: img1,
      title: "Quality",
      description: "KYD ensures top-tier quality in every machine we produce. From mask-making machines to cosmetic product lines, we apply strict quality controls throughout the manufacturing process. Each machine is designed for precision, durability, and long-lasting performance, meeting the needs of your business with consistent, reliable results."
    },
    {
      image: img2,
      title: "Certification",
      description: "Our machines are fully certified, meeting industry standards like ISO 9001 for quality management and CE marking for safety compliance. These certifications confirm that our equipment is built to international standards, offering our customers peace of mind that they are receiving reliable and safe machinery."
    },
    {
      image: img3,
      title: "Quality Documents",
      description: "We provide comprehensive quality documents with every machine, including test reports, inspection certificates, and user manuals. These documents ensure you have all the necessary information to operate, maintain, and troubleshoot your machinery, allowing for smooth integration and efficient performance in your operations."
    }
  ];

  return (
    <WintechStandardContent 
      title="KYD Quality Assurance"
      items={itemsData}
    />
  );
};

export default WintechStandard;