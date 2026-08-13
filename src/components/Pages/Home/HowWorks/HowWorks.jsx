import HowWorksContent from "./HowWorksContent"; // Import Client Component
import worksImg from "../../../../../public/assets/home-img/work-img/location.webp";

const HowWorks = () => {
  const stepsData = [
    {
      title: "Initial Consultation",
      description: "Share your needs and challenges with us, and we will propose the best machinery solution tailored to your business."
    },
    {
      title: "Custom Design",
      description: "We have our own R&D team, and can make the machine base on customer requirements. Our engineers create detailed specifications, focusing on efficiency, precision, and ease of use."
    },
    {
      title: "Manufacturing",
      description: "Using state-of-the-art equipment, we manufacture your machines to the highest quality standards."
    },
    {
      title: "Testing & Quality Control",
      description: "Every machine undergoes rigorous testing to ensure it performs flawlessly under real-world conditions."
    },
    {
      title: "Installation & Training",
      description: "Our team installs the machinery at your facility and provides hands-on training to ensure your team can operate it effectively."
    },
    {
      title: "Ongoing Support",
      description: "With our after-sales services, including maintenance and troubleshooting, we ensure your machines continue to perform at peak levels."
    }
  ];

  return (
    <div className="py-8 md:py-16 bg-[#F8F9FA]"> {/* Updated background to a cleaner light gray */}
      <HowWorksContent 
        title="How Our Custom Machinery Solutions Work"
        steps={stepsData}
        imageSrc={worksImg}
      />
    </div>
  );
};

export default HowWorks;