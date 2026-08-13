import CertificatesContent from "./CertificatesContent";

const Certificates = ({ certificatesData }) => {
  
  return (
    <CertificatesContent 
      title={"Certification & Awards"}
      items={certificatesData}
    />
  );
};

export default Certificates;