type InputProps = {
    placeholder: string;
}

export function TextInput({placeholder}: InputProps){
    return <div>
        <input style={{"padding":8, "borderColor": "black"}} type="text" placeholder={placeholder}/>
    </div>
}