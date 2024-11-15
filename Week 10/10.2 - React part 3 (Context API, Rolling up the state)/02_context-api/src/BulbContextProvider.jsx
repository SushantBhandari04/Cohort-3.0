import { createContext, useContext, useState } from "react";

const BulbContext = createContext();


function BulbContextProvider({children}){
    const [bulbOn, setBulbOn] = useState(true);

    return (
        <BulbContext.Provider value={{
            bulbOn: bulbOn,
            setBulbOn: setBulbOn
        }}>
            {children}
        </BulbContext.Provider>
    ) 
}

export { BulbContext, BulbContextProvider }