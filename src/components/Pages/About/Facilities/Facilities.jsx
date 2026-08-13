import FacilitiesContent from "./FacilitiesContent";

// Import your images
import img1 from "../../../../../public/assets/about-img/facilities/1.png";
import img2 from "../../../../../public/assets/about-img/facilities/2.png";
import img3 from "../../../../../public/assets/about-img/facilities/3.png";
import img4 from "../../../../../public/assets/about-img/facilities/4.png";

const Facilities = () => {
  const itemsData = [
    {
      image: img1,
      title: "Manufacturer"
    },
    {
      image: img2,
      title: "Quality Guaranteed"
    },
    {
      image: img3,
      title: "Short Turnaround Lead Time"
    },
    {
      image: img4,
      title: "Cost Effective"
    }
  ];

  return (
    <FacilitiesContent 
      title="Facilities"
      items={itemsData}
    />
  );
};

export default Facilities;