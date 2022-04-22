import { useState, useEffect } from "react";
import PostPreview from './PostPreview';

const Feed = ({ posts }) => {
    return(
        <>
            {posts.map((post, idx) => (
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

export async function getStaticProps() {
    let response = await fetch('http://localhost:1337/api/posts')
    const posts = await response.json()
    return {
        props: {
            posts,
        },
    }
}

export default Feed;