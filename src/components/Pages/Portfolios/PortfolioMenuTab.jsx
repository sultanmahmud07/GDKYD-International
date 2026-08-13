"use client"
import { useState } from "react";
import ImagePortfolio from "./ImagePortfolio/ImagePortfolio";
import VideoPortfolio from "./VideoPortfolio/VideoPortfolio";

const PortfolioMenuTab = () => {
  const menus = [
    {
      id: 1,
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      id: 1,
      name: "Video",
      link: "/portfolio/video",
    }
  ];
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(menus[0]?.name);

  return (
    <div>
      {/* Tab Menu */}
      <div id="page_menu" className="main_container bg-white p-1 shadow-lg flex">
        {menus?.map((menu, i) => (
          <p
            key={i}
            onClick={() => setActiveTab(menu?.name)}
            className={`py-3 px-6 md:py-5 md:px-10 inline-block cursor-pointer border-l-2 transition-colors font-semibold ${activeTab === menu.name
                ? "text-secondary border-secondary"
                : "text-[#064a9b]  hover:text-secondary"
              }`}
          >
            {menu.name}
          </p>
        ))}
      </div>

      {/* Tab Content */}
      <div className="">
        {activeTab === menus[0].name &&
          <ImagePortfolio></ImagePortfolio>}
        {activeTab === menus[1].name && <VideoPortfolio></VideoPortfolio>}
      </div>
    </div>
  );
};

export default PortfolioMenuTab;
