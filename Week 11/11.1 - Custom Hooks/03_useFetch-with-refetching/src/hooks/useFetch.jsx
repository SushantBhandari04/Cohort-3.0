import { useEffect, useState } from "react";

// custom hook

export function useFetch(url, interval){
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);

    async function getFinalData(){

        try{
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            setFinalData(json);
        }
        catch(e){
            console.log(e);
        }
        finally{
            setLoading(false);
        }
        
    } 

    useEffect(() => {
        getFinalData();

        if(interval){
            const fetchInterval = setInterval(()=>{
                getFinalData();
            }, interval);

            // Return a cleanup function to clear the interval when the component is unmounted
            return () => clearInterval(fetchInterval);
        }
    }, [url, interval])

    return {
        finalData,
        loading
    };
}