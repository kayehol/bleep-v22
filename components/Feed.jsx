import { useState, useEffect } from "react";
import PostPreview from './PostPreview';

const Feed = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        async function fetchPosts() {
            let response = await fetch('http://localhost:1337/api/posts')
            response = await response.json()
            setPosts(response.data)
        }
        fetchPosts()
    }, [posts])
    return(
        <>
            {posts !== [] && posts.map((post, idx) => (
                <PostPreview
                    key={idx}
                    titulo={post.attributes.Titulo}
                    data={post.attributes.publishedAt}
                    tags={post.attributes.tags}
                    slug={post.id}
                />
            ))}
        </>
    )
}
export default Feed;