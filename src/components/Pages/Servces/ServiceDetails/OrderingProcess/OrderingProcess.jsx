const OrderingProcess = () => {
  const steps = [
    {
      title: "Get a Quote",
      description:
        "Upload your design file through our online quote system to receive a personalized quote.",
    },
    {
      title: "Order Placement",
      description: "Once specifications and pricing are confirmed, place your order and provide delivery details.",
    },
    {
      title: "Product Manufacturing",
      description:
        "We select the optimal production technique and materials to begin manufacturing promptly.",
    },
    {
      title: "Quality Inspection",
      description: "Every part undergoes a quality and functionality check to meet our standards.",
    },
    {
      title: "Shipping & Delivery",
      description: "Your order is securely packaged and shipped according to the selected delivery method.",
    },
  ];

  return (
    <div className=" py-3 md:pb-8">
      <div className="main_container p-3 md:p-6 bg-white shadow md:shadow-lg rounded-md">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:mb-7">
          Our Ordering Process
        </h2>
         {/* Horizontal line */}
         <div className="flex justify-center top-9 left-0  right-0 w-full py-3 md:py-4">
            <div className="h-0.5 bg-black w-4/5 relative">
              <div className="absolute top-[-5px] left-0 right-0 flex items-center justify-between w-full ">
                <div className="w-3 h-3 bg-gray-800 rounded-full " />
                <div className="w-3 h-3 bg-gray-800 rounded-full " />
                <div className="w-3 h-3 bg-gray-800 rounded-full " />
                <div className="w-3 h-3 bg-gray-800 rounded-full " />
                <div className="w-3 h-3 bg-gray-800 rounded-full " />
              </div>
            </div>
          </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-3  w-full">
         {steps.map((step, index) => (
            <div
              key={index}
              className="md:pt-5 flex flex-col items-center text-center"
            >
              {/* <div className="w-3 h-3 bg-gray-800 rounded-full mb-10 hidden md:block" /> */}
              <h3 className="font-semibold text-gray-800 text-md">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mt-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderingProcess;
