import GetInTouchContent from "./GetInTouchContent";

const GetInTouch = () => {
  
  // Prepare simple object to pass to client
  const translations = {
    title: "Get in touch",
    description: "We invite you to connect with us! ",
    office: "Corporate office",
    callLabel: "call",
    wpLabel: "What's App",
    mailLabel: "Mail",
    address: "No.321 Dongshen Road, Tangxia Town, Dongguan City, Guangdong Province",
    socialText: "Let's connect. We are just a click away!",
  };

  const formLabels = {
    name: "Full name",
    phone: "Phone number",
    email: "Email",
    product: "What is your enquiry about?",
    note: "Additional information",
  };

  return (
    <GetInTouchContent 
      translations={translations} 
      formLabels={formLabels}
    />
  );
};

export default GetInTouch;