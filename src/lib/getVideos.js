import { BASEURL } from "../../Constant";

export default async function getVideos() {
    const result = await fetch(
        `${BASEURL}/video/all`,
        {
                next: {
                    revalidate: 5,
                }
            }
    )

    if (!result.ok) {
        throw new Error("There was an error fetching Videos!")
    }
    return result.json();
}