import PostPreview from './PostPreview';

const Feed = () => {
    const posts = [
        {
            titulo: 'Wicca Surf EP',
            tags: 'EP, Electro, Maceió',
            slug: 'wicca-surf'
        },
        {
            titulo: 'Krav AKBC',
            tags: 'LP, Contagem, Trap',
            slug: 'krav'
        },
        {
            titulo: 'Super Amarelo',
            tags: 'LP, Arapiraca, Indie',
            slug: 'super-amarelo'
        },
        {
            titulo: 'Quarto Vazio',
            tags: 'EP, Maceió, Shoegaze',
            slug: 'quarto-vazio'
        }
    ];
    return(
        <>
            {posts.map((post, idx) => (
                <PostPreview
                    key={idx}
                    titulo={post.titulo}
                    data={new Date().toDateString()}
                    tags={post.tags}
                    slug={post.slug}
                />
            ))}
        </>
    )
}
export default Feed;