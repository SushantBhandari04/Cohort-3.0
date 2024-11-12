import { useEffect, useRef } from "react";

export function usePrev(value){
    console.log("re-render happened with new value " + value);
    const ref = useRef();

    useEffect(() => {
        console.log("updated the ref to be " + value);
        ref.current = value;
    },[value])

    console.log("returned " + ref.current);
    return ref.current;
}
// It returns first, effect gets called later