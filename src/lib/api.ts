import { Post } from "@/types/post";

const API_BASE = 'https://jsonplaceholder.typicode.com'

export const getPosts = async():Promise<Post[]> =>{
    const res = await fetch(`${API_BASE}/posts`);

    if(!res.ok) throw new Error('Failed to fetch posts')
        return res.json()
}


export const getPostsID = async(id:string):Promise<Post> =>{
    const res = await fetch(`${API_BASE}/posts/${id}`);

    if(!res.ok) throw new Error('Failed to fetch the post')

        return res.json()
}