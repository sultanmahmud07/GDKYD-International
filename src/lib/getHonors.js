import { BASEURL } from "../../Constant";

export default async function getHonors() {
    const result = await fetch(
        `${BASEURL}/honor/all`,
        {
                next: {
                    revalidate: 5,
                }
            }
    )

    if (!result.ok) {
        throw new Error("There was an error fetching Honor data!")
    }
    return result.json();
}