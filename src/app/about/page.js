import Certificates from "../../components/Pages/About/Certificates/Certificates";
import Facilities from "../../components/Pages/About/Facilities/Facilities";
import OurTeam from "../../components/Pages/About/OutTeam/OurTeam";
import WeDo from "../../components/Pages/About/WeDo/WeDo";
import AboutBanner from "../../components/Pages/About/AboutBanner/AboutBanner";
import ClientTestimonial from "../../components/Pages/Home/Testimonial/Testimonial";
import AboutMenuTab from "../../components/Pages/About/AboutMenuTab";
import FindProducts from "../../components/Shared/FindProducts/FindProducts";
import GetInTouch from "../../components/Shared/GetInTouch/GetInTouch";
import TopGap from "../../components/Shared/TopGap/TopGap";
import getAllTeamMember from "../../lib/getAllTeamMember";
import getCertificates from "../../lib/getCertificates";
import getPartners from "../../lib/getPartners";
import getBanners from "../../lib/getBanner";
export const metadata = {
  title: "Control Non-Woven Medical Equipment & Mask Machinery Manufacturer",
  description: "KYD is a leading manufacturer in automation, machinery, and innovative technology solutions. Discover our global expertise, advanced manufacturing, quality assurance, and industry leadership. Learn more at"
};

export default async function Page() {
  const banner = await getBanners("about_us")
  const teamMembers = await getAllTeamMember()
  const certificatesData = await getCertificates()
  const partnerData = await getPartners()
  // console.log("certificatesData:", partnerData.data);
  return (
    <div className="">
      <TopGap></TopGap>
      <AboutBanner banner={banner?.data}></AboutBanner>
      <AboutMenuTab ourPartners={partnerData?.data}></AboutMenuTab>
      <WeDo></WeDo>
      <Facilities></Facilities>
      <OurTeam ourTeamMembers={teamMembers?.data}></OurTeam>
      <Certificates certificatesData={certificatesData?.data}></Certificates>
      <ClientTestimonial></ClientTestimonial>
      <FindProducts></FindProducts>
      <GetInTouch></GetInTouch>
    </div>
  );
}
