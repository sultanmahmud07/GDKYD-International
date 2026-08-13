import { BASEURL } from "../../Constant";

export default async function getAllTeamMember() {
    // console.log(props)
    const result = await fetch(
        `${BASEURL}/our-team/all`
        ,{  cache: 'no-store' }
    )

    if (!result.ok) {
        throw new Error("There was an error fetching All teams members!")
    }
    return result.json();
}