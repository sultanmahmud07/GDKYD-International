import { notFound } from "next/navigation";
import ServiceBanner from "../../../components/Pages/Servces/ServiceBanner/ServiceBanner";
import ServiceDetails from "../../../components/Pages/Servces/ServiceDetails/ServiceDetails";
import TopGap from "../../../components/Shared/TopGap/TopGap";
import getSpecificProduct from "../../../lib/getSpecificProduct";
import getBanners from "../../../lib/getBanner";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  if (!slug || slug === "undefined") {
    return { title: "Product Not Found | KYD" };
  }
  try {
    const product = await getSpecificProduct(slug);
    if (!product || !product.data) {
      return { title: "Product Not Found | KYD" };
    }
    return {
      title: product.data.metaTitle || product.data.title_en,
      description: product.data.metaDescription || product.data.subTitle_en,
    };
  } catch (error) {
    return { title: "Product Not Found | KYD" };
  }
}

export default async function Page({ params }) {
  const slug = (await params).slug;
  if (!slug || slug === "undefined") {
    notFound();
  }

  let product;
  let banner;

  try {
    const [productRes, bannerRes] = await Promise.all([
      getSpecificProduct(slug),
      getBanners("services"),
    ]);

    if (!productRes || !productRes.data) {
      notFound();
    }
    product = productRes;
    banner = bannerRes;
  } catch (error) {
    notFound();
  }

  const productData = product?.data;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productData?.title_en,
    "image": productData?.images || [],
    "description": productData?.metaDescription || productData?.subTitle_en || productData?.description_en?.slice(0, 300),
    "brand": {
      "@type": "Brand",
      "name": productData?.configurations?.Brand || "KYD"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://gdkyd.com/product/${slug}`,
      "priceCurrency": "USD",
      "price": "0.00",
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopGap></TopGap>
      <ServiceBanner
        bannerBg={`${banner?.data?.banner_image}`}
        title={banner?.data?.title_en}
        des={banner?.data?.description_en}
        link={"/product"}
      ></ServiceBanner>
      <ServiceDetails product={productData}></ServiceDetails>
    </div>
  );
}
