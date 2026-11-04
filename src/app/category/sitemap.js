import { BASEURL } from "../../../Constant";

// Function to fetch categories from your API
async function getCategories() {
  try {
    const result = await fetch(`${BASEURL}/category/retrieve/for-sitemap`, {
      next: { revalidate: 3600 },
    });

    if (!result.ok) {
      console.warn("Failed to fetch Category for sitemap:", result.statusText);
      return { data: [] };
    }
    return await result.json();
  } catch (error) {
    console.warn("Error fetching Category for sitemap:", error?.message || error);
    return { data: [] };
  }
}

// Generate the sitemap
export default async function sitemap() {
  try {
    const categories = await getCategories();
    const list = categories?.data || [];

    return list
      .filter((category) => category?.slug && category?.slug !== "undefined")
      .map((category) => ({
        url: `https://gdkyd.com/category/${category.slug}`,
      }));
  } catch (error) {
    console.warn("Error generating category sitemap:", error?.message || error);
    return [];
  }
}
