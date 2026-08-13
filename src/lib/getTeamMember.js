import { BASEURL } from "../../Constant";

export default async function getTeamMember(props) {
    // console.log(props)
    const result = await fetch(
        `${BASEURL}/our-team/${props}`
        ,{  cache: 'no-store' }
        )

    if (!result.ok) {
        throw new Error("There was an error fetching get team member!")
    }
    return result.json();
}