"use client"

import { useRef } from "react"
import axios from "axios";

async function signup(username: string | any, password: string | any){
    console.log(username + " " + password);
    const response = await axios.post("http://localhost:3001/api/signup",{
        username,
        password
    })
    console.log(response);
    alert(response);
}

export  default function Signup(){
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    return <div className="border-2 p-4 flex flex-col gap-4 justify-center">
        <input type="text" ref={usernameRef} placeholder="username" />
        <input type="text" ref={passwordRef} placeholder="password" />
        <button onClick={()=>signup(usernameRef.current?.value, passwordRef.current?.value)}>Signup</button>
    </div>
}