import getPortfolioImage from "../../../../lib/getPortfolioImage";
import DescriptionText from "./DescriptionText";
import PortfolioGrid from "./PortfolioCard"; 

const ImagePortfolio = async () => {
  const portfolioImages = await getPortfolioImage();
  
  return (
    <div className="py-5 md:py-8 bg-white">
      <div className="main_container">
        <DescriptionText />
        
        {/* The Grid */}
        <PortfolioGrid 
            items={portfolioImages?.data} 
        />
      </div>
    </div>
  );
};

export default ImagePortfolio;