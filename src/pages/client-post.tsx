import { useEffect, useState } from "react";

import { Post } from "@/types/post";
import { getPosts } from "@/lib/api";
import PostCard from "@/components/post/PostCard";


const ClientPostsPage = ()=>{
    const [posts,setPosts] = useState<Post[]>([]);
    const [loading,setLoading] = useState(true);


    useEffect(()=>{
        const loadPosts = async()=>{
            try{
                const data = await getPosts();
                setPosts(data.slice(0,5))
            }catch(err){
                console.log(err);
            }finally{
                setLoading(false);
            }
        }
        loadPosts();
    },[]);

    if(loading) return <p>Loading....</p>

    return(
        <div>
            <h1>Client-side Fetching</h1>
            {posts.map((posts)=>(
                <PostCard key={posts.id} post={posts}/>
            ))}
        </div>
    )
}


export default ClientPostsPage;