import { Post } from "@/types/post";
import { NextResponse } from "next/server";

const API_BASE = 'https://jsonplaceholder.typicode.com'

export const getPosts = async (): Promise<Post[]> => {
    try {
        const res = await fetch(`${API_BASE}/posts`);

        if (!res.ok) throw new Error('Failed to fetch posts')

        return await res.json()

    } catch (err) {
    throw new Error(
        err instanceof Error ?
        err.message
        : "Unexpected erorr while fetching the paost"
    )    
    }
}


export const getPostsID = async (id: string): Promise<Post> => {
try {
    const res = await fetch(`${API_BASE}/posts/${id}`);
    
    if (!res.ok) throw new Error('Failed to fetch the post')
    
    return await res.json();
    
} catch (err) {
    throw new Error(
        err instanceof Error
        ? err.message
        : "Unexpected error while fetching the posts"
    )
}

}