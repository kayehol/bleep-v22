import PostPreview from './PostPreview';

const Feed = ( {content} ) => {
    if (!content) <>Erro ao buscar posts</>
    return(
        <>
            {content.map((post, idx) => (
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