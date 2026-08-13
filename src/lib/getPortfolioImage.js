import { BASEURL } from "../../Constant";

export default async function getPortfolioImage() {
    const result = await fetch(
        `${BASEURL}/portfolio/all`,
    )

    if (!result.ok) {
        throw new Error("There was an error fetching POrtfolio Image!")
    }
    return result.json();
}