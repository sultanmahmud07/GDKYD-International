import ImagePortfolioDetails from "../../../components/Pages/Portfolios/ImagePortfolio/ImagePortfolioDetails/ImagePortfolioDetails";
import TopGap from "../../../components/Shared/TopGap/TopGap";
import getSpecificPortfolioImage from "../../../lib/getSpecificPortfolioImage";

export default async function Page({ params }) {
  const slug = (await params).slug
  const portfolio = await getSpecificPortfolioImage(slug);

  return (
    <div className="">
      <TopGap></TopGap>
      <ImagePortfolioDetails slug={slug} data={portfolio?.data}></ImagePortfolioDetails>
    </div>
  );
}
