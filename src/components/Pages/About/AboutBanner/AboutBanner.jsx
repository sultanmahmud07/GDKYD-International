import ShareBanner from "../../../Shared/ShareBanner/ShareBanner";

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