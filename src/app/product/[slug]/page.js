import ServiceBanner from "../../../components/Pages/Servces/ServiceBanner/ServiceBanner";
import ServiceDetails from "../../../components/Pages/Servces/ServiceDetails/ServiceDetails";
import TopGap from "../../../components/Shared/TopGap/TopGap";
import getSpecificProduct from "../../../lib/getSpecificProduct";
import getBanners from "../../../lib/getBanner";
// import { BASEURL } from "../../../../Constant";

export async function generateMetadata({ params }) {
  const slug = (await params).slug
  const product = await getSpecificProduct(slug)

  return {
    title: product?.data?.metaTitle || product?.data?.title_en,
    description: product?.data?.metaDescription || product?.data?.subTitle_en,
  }
}

export default async function Page({params}) {
  const slug = (await params).slug
  const product = await getSpecificProduct(slug)
  const banner = await getBanners("services")
  
  // const jsonLd = {
  //   '@context': 'https://schema.org',
  //   '@type': 'Product',
  //   name: product?.data?.title_en,
  //   image:  `${BASEURL}/${product?.data?.images[0]}`,
  //   description: product?.data?.subTitle_en,
  // }
  
  return (
    <div className="">
     {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
      <TopGap></TopGap>
      <ServiceBanner
        bannerBg={`${banner?.data?.banner_image}`}
        title={banner?.data?.title_en
        }
        des={banner?.data?.description_en
        }
        link={"/product"}
      ></ServiceBanner>
      <ServiceDetails  product={product?.data}></ServiceDetails>
    </div>
  );
}
