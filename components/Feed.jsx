import { Grid, Divider } from '@mui/material';
import PostPreview from './PostPreview';

const Feed = ( {content} ) => {
    if (!content) <>Erro ao buscar posts</>
    console.log(content)
    return(
        <Grid 
            container 
            spacing={8}
            alignItems="center"
            justifyContent="center"
        >
            {content.map((post, idx) => (
                <Grid 
                    item 
                    xs={8} 
                    md={8} 
                    key={idx}
                >
                    <PostPreview
                        titulo={post.attributes.Titulo}
                        data={post.attributes.publishedAt}
                        tags={post.attributes.tags}
                        slug={post.id}
                    />
                    <Divider light />
                </Grid>
            ))}
        </Grid>
    )
}

export default Feed;