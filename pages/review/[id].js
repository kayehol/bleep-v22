import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Layout from '../../components/Layout';

const Post = ({post}) => {
    return(
        <Layout>
            <Card sx={{ minWidth: 275, height: '100%', mx: 40, bgcolor: '#212121', color: "#fff" }}>
                <CardContent>
                    <Typography sx={{ fontSize: 26, fontWeight: 'bold' }} gutterBottom>
                        {post.Titulo}
                    </Typography>
                    <Typography sx={{ mb: 1.5, fontSize: 12, color: 'text-secondary' }}>
                        {post.publishedAt}
                    </Typography>
                    <Typography sx={{ lineHeight: 1.7 }} variant="body1">
                        <div dangerouslySetInnerHTML={{ __html: post.Conteudo }} />
                    </Typography>
                </CardContent>
            </Card>
        </Layout>
    ) 
}

export async function getStaticPaths() {
   const res = await fetch('http://localhost:1337/api/posts') 
   const posts = await res.json()
   
   const paths = posts.data.map((post) => ({
    params: { id: post.id.toString()},
   }))
   
   return { paths, fallback: false }
}

export async function getStaticProps({params}) {
    const response = await fetch(`http://localhost:1337/api/posts/${params.id}`)
    const postData = await response.json()
    const post = postData.data.attributes
    
    return { props: { post } }
}

export default Post;