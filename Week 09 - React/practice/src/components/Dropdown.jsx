import { useState } from "react";
import DropDownItem from "./Dropdownitem";
import { items } from "../items";

function DropDown({title, items}){
    const [open, setOpen] = useState(false);

    function toggle(){
        setOpen(!open)
    }

    return <div>
        <div onClick={toggle}>{title}</div>
        {open && items.map((item, index)=>{
            return (
                <li key={index}><DropDownItem item={item}/></li>
            )
        })}
    </div>
}

export default DropDown