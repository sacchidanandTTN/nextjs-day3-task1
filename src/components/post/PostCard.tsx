import { Post } from "@/types/post";

interface Props{
    post:Post;
}

const PostCard =({post}:Props)=>(
<div style={{border:"2px solid red",
    padding:"1rem",
    borderRadius:"8px",
    marginBottom:"1rem"
    }}>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
</div>
)


export default PostCard;

