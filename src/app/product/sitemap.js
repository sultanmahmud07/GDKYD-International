import { BASEURL } from "../../../Constant";

// Function to fetch products from your API
async function getProducts() {
  try {
    const result = await fetch(`${BASEURL}/product/retrieve/for-sitemap`, {
      next: { revalidate: 3600 },
    });

    if (!result.ok) {
      console.warn("Failed to fetch Product for sitemap:", result.statusText);
      return { data: [] };
    }
    return await result.json();
  } catch (error) {
    console.warn("Error fetching Product for sitemap:", error?.message || error);
    return { data: [] };
  }
}

// Generate the sitemap
export default async function sitemap() {
  try {
    const products = await getProducts();
    const list = products?.data || [];

    return list
      .filter((product) => product?.slug && product?.slug !== "undefined")
      .map((product) => ({
        url: `https://gdkyd.com/product/${product.slug}`,
      }));
  } catch (error) {
    console.warn("Error generating product sitemap:", error?.message || error);
    return [];
  }
}
