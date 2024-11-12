import { useEffect, useState } from "react";

// custom hook
export function usePostTitle(){
  const [post, setPost] = useState({});

  async function getPost(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await response.json();

    setPost(json);
  }

  useEffect(() => {
    getPost();
  }, [])

  return post.title;
} 

export function useFetch(url){
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);

    async function getFinalData(){
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();

        setFinalData(json);
        setLoading(false);
    } 

    useEffect(() => {
        getFinalData();
    }, [url])

    return {
        finalData,
        loading
    };
}