import Image from 'next/image';
import Link from 'next/link';
import placeholder from '../public/placeholder.png';
import styled from 'styled-components';

const Style = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid #101010;
    padding: 1em;
    a:hover {
        text-decoration: underline;
    }
    #postData {
        margin-left: 2em
    }
`

const PostPreview = ({titulo, data, tags, slug}) => {
    return(
        <Style>
            <Image 
                src={placeholder} 
                alt="Imagem"
                height="128px"
                width="128px"
            />
            <Link href={`/review/${slug}`} passHref>
                <div id="postData">
                    <a>
                        <h1>{titulo}</h1>
                        <h4>{data}</h4>
                        <p>{tags}</p>
                    </a>
                </div>
            </Link>
        </Style>
    )
}
export default PostPreview;