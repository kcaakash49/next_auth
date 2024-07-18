import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth";

export default async function User(){
    const session = await getServerSession(NEXT_AUTH);
    console.log(session)
    return <div>
        User PAge
        {
            JSON.stringify(session)
        }
    </div>
}