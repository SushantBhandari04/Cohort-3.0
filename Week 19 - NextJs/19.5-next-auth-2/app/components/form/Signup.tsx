'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Signup(){
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [username, setUsername] = useState<string>();

    const router = useRouter();

    function signup(){
        axios.post("http://localhost:3000/api/auth/signup",{
            email,
            password,
            username
        }).then(response=>{
            if(response){
                router.push("/signin")
            }
            else{
                console.error("Error while signing up.")
            }
        })
    }

    return <div className="flex flex-col gap-4 p-8 rounded-xl bg-gray-200 w-2/5">
        <h1 className="text-2xl font-semibold">Signup</h1>
        <br />
        <div className="flex flex-col gap-2">
            <h2>Email</h2>
            <input className="p-2 rounded-lg" onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="abc@gmail.com" /> 
        </div>
        <div className="flex flex-col gap-2">
            <h2>Name</h2>
            <input className="p-2 rounded-lg" onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="abc" /> 
        </div>
        <div className="flex flex-col gap-2">
            <h2>Password</h2>
            <input className="p-2 rounded-lg" onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="1234" /> 
        </div>
        <br />
        <div className="w-full flex justify-center">
            <button className="px-4 py-2 bg-black rounded-lg text-white" onClick={signup}>Sign up</button>
        </div>
    </div>
}