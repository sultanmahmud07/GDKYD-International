const ServiceFAQ = () => {
  const faqData = [
    {
      title: "What makes KYD’s machinery Best?",
      description: "KYD machines are customizable, durable, and equipped with advanced automation to ensure high efficiency and quality."
    },
    {
      title: "Are the machines eco-friendly?",
      description: "Yes, our machines are designed to minimize waste, reduce energy consumption, and support recyclable materials."
    },
    {
      title: "Can KYD machines handle large-scale production?",
      description: "Absolutely. Our machinery is optimized for high-speed, high-volume production without compromising quality."
    },
    {
      title: "What support do you offer for maintenance and spare parts?",
      description: "We provide comprehensive maintenance support, easy access to spare parts, and guidance to keep your machines running smoothly."
    },
    {
      title: "Can I upgrade or modify my machine later?",
      description: "Yes, our machines are scalable and can be reconfigured to adapt to new production requirements."
    },
    {
      title: "How does KYD support international clients?",
      description: "We offer global shipping, multilingual support, and remote technical assistance to serve clients worldwide."
    },
    {
      title: "Where can I see KYD machines in action?",
      description: "You can request a live demonstration or view video showcases of our machinery. Contact us to schedule a demo."
    }
  ];

  return (
    <section id="faq_section" className="">
      <div className="main_container bg-white py-5 md:py-10 rounded-md shadow-md">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
          Frequently Asked Questions
        </h2>
        {/* All faq here  */}
        <div className="faq_container m-4 md:mx-16 lg:mx-28 md:pt-5">
          {faqData.map((item, i) => {
            return (
              <div
                key={i}
                className="collapse rounded-none collapse-arrow bg-white border-b-2"
              >
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-base text-[#000000] p-0 py-4 ">
                  {item.title}
                </div>
                <div className="collapse-content text-sm md:text-base">
                  <p>  {item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
