import { BASEURL } from "../../Constant";

export default async function getAddBlogs() {
    const result = await fetch(
        `${BASEURL}/blog/all`,
        {
            next: {
                revalidate: 5,
            }
        }
    )

    if (!result.ok) {
        throw new Error("There was an error fetching Blogs data!")
    }
    return result.json();
}