import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

export default async function Dashboard(){
    const session = await getServerSession(authOptions);
    console.log(session);
    return <div>
        {session?.user ? <div>Welcome {session.user.username || session.user.name}</div> : <div>Please login</div> }
        
    </div>
}