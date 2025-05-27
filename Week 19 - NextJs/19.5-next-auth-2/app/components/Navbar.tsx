import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth"
import Link from "next/link";
import SignoutButton from "./SignoutButton";

export default async function Navbar(){
    const session = await getServerSession(authOptions);

    return <div className="w-full px-8 py-4  flex justify-between ">
        <div>Logo</div>
        <div>
            {session?.user ? <SignoutButton/> : <Link href="/signin"><button className="px-4 py-2 bg-black text-white rounded-lg">Signin</button></Link>}
            
        </div>
    </div>
}