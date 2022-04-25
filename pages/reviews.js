import Feed from '../components/Feed';
import Layout from '../components/Layout';

const Reviews = ({posts}) => {
    return (
        <Layout>
            <Feed content={posts.data} />
        </Layout>
    )
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:1337/api/posts')
    const posts = await response.json()
    return {
        props: {
            posts,
        },
    }
}


export default Reviews;