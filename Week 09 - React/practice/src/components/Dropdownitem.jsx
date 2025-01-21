import { useState } from "react";
import {Link} from "react-router-dom";

function DropDownItem({item}){
    const [open, setOpen] = useState(false);

    return <div>
        <div>{item.subItems ? item.title : <Link to={item.path}>{item.title}</Link>}</div>
        {open && item.subItems && item.subItems.map((subItem, index)=>{
            return <li key={index}><DropDownItem item={subItem}/></li>
        })}
    </div>
}

export default DropDownItem