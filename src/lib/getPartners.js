import { BASEURL } from "../../Constant";

export default async function getPartners() {
    // console.log(props)
    const result = await fetch(
        `${BASEURL}/partner/all`,
        {  cache: 'no-store' }
    )

    if (!result.ok) {
        throw new Error("There was an error fetching Partner Data!")
    }
    return result.json();
}