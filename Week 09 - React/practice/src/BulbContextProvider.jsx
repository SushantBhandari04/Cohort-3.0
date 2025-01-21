import { createContext, useState } from "react";

export const BulbContext = createContext();

export function BulbContextProvider({children}){
    const [bulbOn, setBulbOn] = useState(false);

    return <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
    }}>
        {children}
    </BulbContext.Provider>
}