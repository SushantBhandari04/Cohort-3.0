'use client'

import { signOut } from "next-auth/react";

export default function SignoutButton(){
    return <div>
        <button onClick={()=>signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/signin`
        })} className="px-4 py-2 bg-red-500 text-white rounded-lg">Logout</button>
    </div>
}