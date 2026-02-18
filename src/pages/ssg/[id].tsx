import PostCard from "@/components/post/PostCard";
import { getPosts, getPostsID } from "@/lib/api";
import { Post } from "@/types/post";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useParams } from "next/navigation";


interface Props{
    post:Post;
}

const SSGPostPage:NextPage<Props
> =({post})=>{
    return (
        <div>
            <h1 style={{padding:"8px"}}>Static Site Generation</h1>
            <PostCard post={post}/>
        </div>
    )
}


export const getStaticPaths: GetStaticPaths = async()=>{

    console.log("getStaticPath")
    const posts = await getPosts();

    const paths = posts.slice(0,5).map((post) =>({
        params:{id:post.id.toString()}
    }))

    return {
        paths,
        fallback:'blocking'
    }
}


export const getStaticProps : GetStaticProps<Props> = async(context)=>{
    const {id} = context.params as {id :string};
console.log("in getStaticPorps")
    try {

        const post = await getPostsID(id);

        return{
             props:{post},
        revalidate:60,
        }
       
    } catch {
        return {notFound:true};
    }
}


export default SSGPostPage;