import { BASEURL } from "../../../Constant";

// Function to fetch portfolio items from your API
async function getPortfolio() {
  try {
    const result = await fetch(`${BASEURL}/portfolio/all`, {
      next: { revalidate: 3600 },
    });

    if (!result.ok) {
      console.warn("Failed to fetch portfolio items for sitemap:", result.statusText);
      return { data: [] };
    }
    return await result.json();
  } catch (error) {
    console.warn("Error fetching portfolio items for sitemap:", error?.message || error);
    return { data: [] };
  }
}

// Generate the sitemap
export default async function sitemap() {
  try {
    const portfolioData = await getPortfolio();
    const list = portfolioData?.data || [];

    return list
      .filter((portfolio) => portfolio?.slug && portfolio?.slug !== "undefined")
      .map((portfolio) => ({
        url: `https://gdkyd.com/portfolio/${portfolio.slug}`,
      }));
  } catch (error) {
    console.warn("Error generating portfolio sitemap:", error?.message || error);
    return [];
  }
}
