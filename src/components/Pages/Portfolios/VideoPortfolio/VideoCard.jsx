import Image from "next/image";
import Link from "next/link";

const VideoCard = ({ portfolio }) => {
  return (
    <div className="relative">
      <div className="portfolio_img w-full">
        <Image
          width={400}
          src={portfolio?.img}
          alt={portfolio?.title}
          className="w-full rounded-md"
        />
      </div>
      {/* <div className="absolute bottom-[-20px] left-0 w-full flex items-center justify-center">
        <Link
          href={`/portfolio/${portfolio?.title}`}
          className="text-[#064a9b] shadow-md bg-white w-2/3 text-center hover:text-white hover:bg-primary transition text-sm p-2 md:p-3 px-5 md:px-7 cursor-pointer rounded-md font-semibold "
        >
        {portfolio?.title}
        </Link>
      </div> */}
    </div>
  );
};

export default VideoCard;
