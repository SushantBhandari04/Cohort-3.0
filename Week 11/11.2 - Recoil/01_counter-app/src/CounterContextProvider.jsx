import { useState } from "react";
import { createContext } from "react";

const CounterContext = createContext();

function CounterContextProvider({children}){
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={
            {count: count,
            setCount: setCount}
        }>
            {children}
        </CounterContext.Provider>
    )
}

export {CounterContext, CounterContextProvider}