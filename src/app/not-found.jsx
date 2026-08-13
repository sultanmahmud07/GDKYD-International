import notFoundImage from "../../public/assets/logo/main-logo.webp";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mt-10 pt-20 text-center">
      <Image
        src={notFoundImage}
        alt="not-found"
        width={600}
        className="w-1/2 md:max-w-[300px] h-auto mx-auto p-2 rounded-md"
      />
      <Link href="/" className="mt-5 mb-2 inline-block">
        <button className="btn btn-xs md:btn-md btn-primary bg-blue-500">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
