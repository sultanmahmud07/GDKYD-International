import { BASEURL } from "../../../Constant";

// Function to fetch news from your API
async function getNews() {
  try {
    const result = await fetch(`${BASEURL}/blog/all`, {
      next: { revalidate: 3600 },
    });

    if (!result.ok) {
      console.warn("Failed to fetch news for sitemap:", result.statusText);
      return { data: [] };
    }
    return await result.json();
  } catch (error) {
    console.warn("Error fetching news for sitemap:", error?.message || error);
    return { data: [] };
  }
}

// Generate the sitemap
export default async function sitemap() {
  try {
    const newsData = await getNews();
    const list = newsData?.data || [];

    return list
      .filter((news) => (news?.slug || news?.id) && (news?.slug || news?.id) !== "undefined")
      .map((news) => ({
        url: `https://gdkyd.com/news/${news.slug || news.id}`,
      }));
  } catch (error) {
    console.warn("Error generating news sitemap:", error?.message || error);
    return [];
  }
}
