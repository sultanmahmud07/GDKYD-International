import { BASEURL } from "../../Constant";

export default async function getHomeBannerData() {
    const result = await fetch(
        `${BASEURL}/hero/retrive/all`,
        {
            next: {
                revalidate: 5,
            }
        }
    )

    if (!result.ok) {
        throw new Error("There was an error fetching Home Banner data!")
    }
    return result.json();
}