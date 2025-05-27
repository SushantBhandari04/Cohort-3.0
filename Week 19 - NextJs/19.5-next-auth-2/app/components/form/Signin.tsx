'use client'

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Signin(){
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const router = useRouter();

    function signin(){
         signIn('credentials',{
        email,
        password,
        redirect: false
       }).then(signinData=>{
            if(signinData?.error){
            console.log(signinData.error)
           }
           else{
            router.push("/dashboard")
            router.refresh();

           }
       })
    }

    function signinWithGoogle(){
        signIn('google',{
            callbackUrl: "http://localhost:3000/dashboard"
        })
    }

    return <div className="flex flex-col gap-4 p-8 rounded-xl bg-gray-200 w-2/5">
        <h1 className="text-2xl font-semibold">Signin</h1>
        <br />
        <div className="flex flex-col gap-2">
            <h2>Email</h2>
            <input className="p-2 rounded-lg" onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="abc@gmail.com" /> 
        </div>

        <div className="flex flex-col gap-2">
            <h2>Password</h2>
            <input className="p-2 rounded-lg" onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="1234" /> 
        </div>
        <br />
        <div className="w-full flex justify-center">
            <button className="px-4 py-2 bg-black rounded-lg text-white" onClick={signin}>Sign in</button>
        </div>
        <div className="w-full flex justify-center">
            <button className="px-4 py-2 bg-black rounded-lg text-white" onClick={signinWithGoogle}>Sign in with google</button>
        </div>
    </div>
}