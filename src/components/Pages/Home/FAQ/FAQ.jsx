const FAQ = () => {
  const faqData = [
    {
      title: "What industries do you serve?",
      dis: "We serve a wide range of industries, including healthcare (medical masks), beauty (life products), hospitality (hotel and aviation products), labor protection, and more. Our machines are versatile and customizable to meet specific needs across various sectors."
    },
    {
      title: "How do I get a quote for a custom machine?",
      dis: "Simply contact us with your machine specifications, and our team will assess your needs and provide a personalized quote based on your requirements, including production capacity, customization, and features."
    },
    {
      title: "What is the lead time for manufacturing and delivery?",
      dis: "Lead time typically ranges from 4 to 6 weeks, depending on the complexity and level of customization required for the machinery. We work to ensure timely production and delivery to meet your operational needs."
    },
    {
      title: "Do you offer installation and training?",
      dis: "Yes, we provide full installation services at your site, ensuring that your machinery is set up correctly. We also offer hands-on training for your team, ensuring they are proficient in operating and maintaining the equipment."
    },
    {
      title: "What kind of after-sales support do you provide?",
      dis: "Our after-sales services include ongoing technical support, regular maintenance, and access to spare parts to ensure your machinery operates smoothly. Typically, our machines come with a 1-year warranty for peace of mind."
    },
    {
      title: "Can I get a machine tailored to my specific production requirements?",
      dis: "Absolutely! We specialize in custom-designed machinery. Our experienced engineers will work closely with you to develop a machine that meets your precise production requirements, ensuring maximum efficiency and performance."
    },
    {
      title: "What materials are compatible with your machines?",
      dis: "Our machines are designed to handle a variety of non-woven fabrics, including those used in medical, industrial, and consumer applications. We can provide more details based on your specific material needs."
    },
    {
      title: "Do you offer financing or payment plans?",
      dis: "We understand that investing in machinery can be a significant decision. While we don’t directly offer financing, we are happy to assist you in exploring financing options through third-party providers."
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
                className="collapse rounded-none collapse-arrow bg-white border-gray-200 border-b-2"
              >
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-base text-[#000000] p-0 py-4 ">
                  {item.title}
                </div>
                <div className="collapse-content text-gray-500 text-sm md:text-base">
                  <p>  {item.dis}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
