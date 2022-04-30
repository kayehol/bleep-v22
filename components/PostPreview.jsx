import Image from 'next/image';
import Link from 'next/link';
import { Grid, Typography } from '@mui/material';
import placeholder from '../public/placeholder.png';

const PostPreview = ({titulo, data, tags, slug}) => {
    return(
        <Grid 
            container
            spacing={4}
            direction="row"
            alignItems="center"
            justifyContent="left"
        >
            <Grid item xs={2} >
                <Image 
                    src={placeholder} 
                    alt="Imagem"
                    height="128px"
                    width="128px"
                />
            </Grid>
            <Grid item xs={{ textOverflow: 'clip'}}>
                    <div id="postData">
                        <Typography variant="h5" noWrap>
                            <Link href={`/review/${slug}`} passHref>
                                {titulo}
                            </Link>
                        </Typography>
                        <Typography variant="caption">{data.replace(/T/, ' ').replace(/\..+/, '')}</Typography>
                        <Typography variant="subtitle2">{tags}</Typography>
                    </div>
            </Grid>
        </Grid>
    )
}
export default PostPreview;