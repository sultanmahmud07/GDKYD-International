import CounterSectionContent from "./CounterSectionContent"; 
// Import your background image here
import bgImage from "../../../../../public/assets/home-img/factory-bg.jpg"; // Change path to your real image

const CounterSection = () => {
  const countersData = [
    {
      name: "Satisfied Clients",
      countNumber: "12500 +"
    },
    {
      name: "Projects Completed",
      countNumber: "10500 +"
    },
    {
      name: "Awards Earned",
      countNumber: "1000 +"
    },
    {
      name: "Content Pieces Created",
      countNumber: "1500 +"
    }
  ];

  return (
    <section id="CounterSection" className="relative w-full">
       <CounterSectionContent 
          title="Some Numbers"
          description="Our story in numbers"
          counters={countersData}
          bgImage={bgImage} // Pass the image
       />
    </section>
  );
};

export default CounterSection;