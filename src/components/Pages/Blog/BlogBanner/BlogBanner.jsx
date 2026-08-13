import { BASEURL } from '../../../../../Constant';
import ShareBanner from '../../../Shared/ShareBanner/ShareBanner';
const BlogBanner = ({ banner }) => {
  return (
    <ShareBanner
     bannerBg={`${banner?.banner_image}`}
    title={banner?.title_en
    }
    des={banner?.description_en
    } link={"blog"}
    ></ShareBanner>
  )
}

export default BlogBanner