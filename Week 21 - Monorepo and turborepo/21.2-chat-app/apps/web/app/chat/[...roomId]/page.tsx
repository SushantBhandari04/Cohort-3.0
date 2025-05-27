import { TextInput } from "@repo/ui/text-input";

export default function Chat(){
    return <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "90vh", padding: 16}}>
        Chat
        <TextInput placeholder="Enter message"/>
    </div>
} 