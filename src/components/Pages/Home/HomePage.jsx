import Banner from "./Banner/Banner"
import FindProducts from "../../Shared/FindProducts/FindProducts"
import GetInTouch from "../../Shared/GetInTouch/GetInTouch"
import CounterSection from "./CounterSection/CounterSection"
import CustomPartsBanner from "./CustomPartsBanner/CustomPartsBanner"
import Partners from "./Partner/Partner"
import FAQ from "./FAQ/FAQ"
import ProductCategory from "./Category/ProductCategory"
import FeaturedVideoShow from "./FeaturedVideos/FeaturedVideoShow"
import HowWorks from "./HowWorks/HowWorks"
import ClientTestimonial from "./Testimonial/Testimonial"
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs"
import getHomePageData from '../../../lib/getHomePageData';
import getHomeBannerData from '../../../lib/getHomeBannerData';
import TopProducts from "./TopProducts/TopProducts"
import getPartners from "../../../lib/getPartners"
import getCategoriesWithSlug from "../../../lib/getCategoriesWithSlug"

const HomePage = async () => {
  const homeBanner = await getHomeBannerData()
  const categories = await getCategoriesWithSlug()
  const partnerData = await getPartners()
  const homePageData = await getHomePageData()
    return (
    <div>
      <Banner data={homeBanner?.data}></Banner>
      <ProductCategory categories={categories?.data}></ProductCategory>
      <TopProducts></TopProducts>
      <CustomPartsBanner></CustomPartsBanner>
      <WhyChooseUs></WhyChooseUs>
      <CounterSection></CounterSection>
      <HowWorks></HowWorks>
      <FeaturedVideoShow videos={homePageData?.data?.featured_video}></FeaturedVideoShow>
      <ClientTestimonial></ClientTestimonial>
      <FindProducts></FindProducts>
      <FAQ></FAQ>
      <GetInTouch></GetInTouch>
      <Partners ourPartners={partnerData?.data}></Partners>
    </div>
  )
}

export default HomePage