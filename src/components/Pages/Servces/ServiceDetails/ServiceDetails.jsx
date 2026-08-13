import GetStarted from "./GetStarted/GetStarted";
import OrderingProcess from "./OrderingProcess/OrderingProcess";
import RelatedServices from "./RelatedServices/RelatedServices";
import ServiceConfigaration from "./ServiceConfigaration/ServiceConfigaration";

const ServiceDetails = async ({ product }) => {
    // console.log(product);
  return (
    <div>
      <ServiceConfigaration
        product={product}
      ></ServiceConfigaration>
      {/* {product?.category?.categoryId && 
    <RelatedServices product={product}></RelatedServices>
  }  */}
      <RelatedServices product={product}></RelatedServices>
      <OrderingProcess></OrderingProcess>
      <GetStarted></GetStarted>
    </div>
  );
};

export default ServiceDetails;
