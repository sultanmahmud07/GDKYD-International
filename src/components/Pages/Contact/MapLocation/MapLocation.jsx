"use client"; // Mark this as a Client Component

import React, { useEffect } from "react";

const MapLocation = () => {
  useEffect(() => {
    const loadBaiduMapScripts = () => {
      // Load the first script
      const script1 = document.createElement("script");
      script1.src = "http://api.map.baidu.com/api?v=2.0&ak=9uCll8K8GpeiWeEbALlmZhZV73E1kNSe";
      script1.type = "text/javascript";
      script1.onload = () => console.log("Baidu Maps API Script 1 loaded successfully.");
      script1.onerror = () => console.error("Failed to load Baidu Maps API Script 1.");
      document.body.appendChild(script1);

      // Load the second script
      const script2 = document.createElement("script");
      script2.src = "https://api.map.baidu.com/getscript?v=2.0&ak=9uCll8K8GpeiWeEbALlmZhZV73E1kNSe";
      script2.type = "text/javascript";
      script2.onload = () => {
        console.log("Baidu Maps API Script 2 loaded successfully.");
        if (window.BMap) {
          initializeMap();
        } else {
          console.error("BMap object not available after loading scripts.");
        }
      };
      script2.onerror = () => console.error("Failed to load Baidu Maps API Script 2.");
      document.body.appendChild(script2);
    };

    const initializeMap = () => {
      try {
        const map = new window.BMap.Map("baidu-map");
        const point = new window.BMap.Point(113.908296, 22.780445); // Coordinates
        map.centerAndZoom(point, 15); // Center and zoom
        const marker = new window.BMap.Marker(point); // Marker
        map.addOverlay(marker);
        map.enableScrollWheelZoom(true); // Scroll zoom
        console.log("Map initialized successfully.");
      } catch (error) {
        console.error("Error initializing Baidu Map:", error);
      }
    };

    loadBaiduMapScripts();
  }, []);

  return (
    <div className="py-5 md:my-8">
      <div className="main_container">
        <div id="baidu-map" className="w-full h-[350px] rounded-md overflow-hidden"></div>
      </div>
    </div>
  );
};

export default MapLocation;
