import { BASEURL } from "../../Constant";

export default async function getCertificates() {
    const result = await fetch(
        `${BASEURL}/certificate/all`
        ,{  cache: 'no-store' }
    )

    if (!result.ok) {
        throw new Error("There was an error fetching All teams members!")
    }
    return result.json();
}