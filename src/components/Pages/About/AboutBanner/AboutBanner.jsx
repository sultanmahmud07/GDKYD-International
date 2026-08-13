import ShareBanner from "../../../Shared/ShareBanner/ShareBanner";
import bannerImg from "../../../../../public/assets/banner-img.png";
import { BASEURL } from "../../../../../Constant";

const AboutBanner = ({ banner }) => {
        
  return (
    <div>
        <ShareBanner
         bannerBg={`${banner?.banner_image}`}
         title={banner?.title_en
         }
         des={banner?.description_en
         }
          link={"about"}
          ></ShareBanner>
    </div>
  )
}

export default AboutBanner