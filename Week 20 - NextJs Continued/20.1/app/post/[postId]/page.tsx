import axios from "axios";

export default async function Post({params}:{
    params:{
        postId:string
    }
}){
    const postId = params.postId;

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    return <div>
        {response.data.title}
        <br />
        {response.data.body}
    </div>
}