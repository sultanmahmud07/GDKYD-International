import FindProductsContent from "./FindProductsContent";
// Import a background image (e.g., a photo of your factory or machine)
import ctaBg from "../../../../public/assets/home-img/factory-bg.jpg"; // Update this path

const FindProducts = () => {
  
  return (
    <FindProductsContent 
      title={"Find a production tool that satisfies you in price and quality, and add a force to your factory."}
      description={"customers in over 110 countries—let’s find what works for you!"}
      buttonText={"Browse Product"}
      bgImage={ctaBg} // Pass the image
    />
  );
};

export default FindProducts;