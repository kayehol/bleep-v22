import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Layout from '../../components/Layout';

const Post = () => {
    const post = {
        title: 'Post title',
        date: '12-03-2022',
        content: `O Futuro Vai Ser Pior é o disco novo do Grupo Porco e grande elenco pela Abraxa Records. A angústia do drama brasileiro é cantada no campo elástico maluco entre o metal industrial e o sludge nojento-futurista, como um tipo de Godflesh psicodélico em "Esquecer Jamais" ou o Ariel Pink do metal industrial em "Madrugada". Mas não satisfeito o Grupo Porco vai além, encara a destruição mundial atonal a la Skinny Puppy em "Ela Vem Cantando", o pop-infernal meio Cabaret Voltaire em "Ilze", toca no death metal em "Medo", no doom em "Shiltonwave" e no black em "Terrível Engano". Pra terminar, um belo cover de Spice Girls que soa como uma mistura de The Used e Ministry. O Grupo Porco claramente vive a música pesada brasileira sem limites, como tem que ser!`
    }
    return(
        <Layout>
            <Card sx={{ minWidth: 275, height: '100%', mx: 40, bgcolor: '#212121', color: "#fff" }}>
                <CardContent>
                    <Typography sx={{ fontSize: 26, fontWeight: 'bold' }} gutterBottom>
                        {post.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5, fontSize: 12, color: 'text-secondary' }}>
                        {post.date}
                    </Typography>
                    <Typography sx={{ lineHeight: 1.7 }} variant="body1">
                        {post.content}
                    </Typography>
                </CardContent>
            </Card>
        </Layout>
    ) 
}

export default Post;