import PostCard from "@/components/post/PostCard";
import { getPostsID } from "@/lib/api";
import { Post } from "@/types/post";
import { GetServerSideProps, NextPage } from "next";


interface Props{
    post:Post;
}

const SSRPostPage:NextPage<Props> = ({post})=>{
    
    return (
        <div>
            <h1 style={{padding:"8px"}}>Server Side Rendering</h1>
            <PostCard post={post}/>
        </div>
    )
}


export const getServerSideProps: GetServerSideProps<Props> = async(
    context
)=>{
    const {id} = context.params as {id:string};
    console.log("IN serverSideProps")
    try{
        const post = await getPostsID(id);
        return{
            props:{post},
        }
    }catch{
        return {notFound:true};
    }
}

export default SSRPostPage