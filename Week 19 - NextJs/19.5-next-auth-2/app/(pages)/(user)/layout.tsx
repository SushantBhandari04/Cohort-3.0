import Navbar from "@/app/components/Navbar";
import { ReactNode } from "react";

export default function({children}:{children: ReactNode}){
    return <div>
        <Navbar/>
        {children}
    </div>
}