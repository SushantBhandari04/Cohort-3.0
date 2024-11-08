import { PostComponent } from "./Post"
import { useState } from "react";

function App(){

  const [posts, setPosts] = useState([]);

  const postComponents = posts.map( post => <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
  />)

  function addPost(){
    setPosts([...posts,{
      name:"harkirat",
      subtitle:"11000 followers",
      time:"2m ago",
      image:"https://yt3.googleusercontent.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s900-c-k-c0x00ffffff-no-rj",
      description:"Want to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }

  return (
    <div style={{background: "#dfe6e9", height:"100vh"}}>
      <button onClick={addPost}>Add post</button>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div>
          {postComponents}
        </div>
      </div>
    </div>
  )
}

export default App