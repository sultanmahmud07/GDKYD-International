import { BASEURL } from "../../Constant";

export default async function getHomePageData() {
    // console.log(props)
    const result = await fetch(
        `${BASEURL}/web-home`,
        {
            // cache: "no-store"
            next: {
                revalidate: 5,
            }
        }
    )

    if (!result.ok) {
        throw new Error("There was an error fetching Home page data!")
    }
    return result.json();
}