"use client"

import {TextInput} from "@repo/ui/text-input"
import { useRouter } from "next/navigation"

export default function Home(){
  const router = useRouter();

  return (
  <div>
    Home
    <TextInput placeholder="Enter room id"/>
    <button onClick={()=>{
      router.push("/chat/123")
    }}>Join room</button>
  </div>
  )
}