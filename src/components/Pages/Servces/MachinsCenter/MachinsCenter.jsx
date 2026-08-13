import img1 from "../../../../../public/assets/services/machine/1.jpg";
import img2 from "../../../../../public/assets/services/machine/2.jpg";
import img3 from "../../../../../public/assets/services/machine/3.jpg";
import img4 from "../../../../../public/assets/services/machine/4.jpg";
import img5 from "../../../../../public/assets/services/machine/5.jpg";
import img6 from "../../../../../public/assets/services/machine/6.jpg";
import img7 from "../../../../../public/assets/services/machine/7.jpg";
import img8 from "../../../../../public/assets/services/machine/8.jpg";
import img9 from "../../../../../public/assets/services/machine/9.jpg";
import img10 from "../../../../../public/assets/services/machine/10.jpg";
import MachineCenterSlider from "./MachineCenterSlider";

const MachinesCenter = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <MachineCenterSlider
      images={images}
      title={"Explore Our Mask Machinery"}
      shortTitle={"Our Gallery"}
    ></MachineCenterSlider>
  );
};

export default MachinesCenter;
